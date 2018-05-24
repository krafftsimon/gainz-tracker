import { Component, HostListener, ViewChild, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, Event , NavigationEnd } from '@angular/router';

import { slideInModalContentAnimation } from './animations/slide-in-modal-content.animation';
import { slideModalFormAnimation } from './animations/slide-modal-form.animation';
import { User } from './models/user';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideInModalContentAnimation, slideModalFormAnimation]
})

export class AppComponent implements OnInit {
  title = 'app';
  modalActive: boolean = false;
  loginFormActive: boolean = true;
  registerFormActive: boolean = false;
  modalContentState: string = 'out';
  loginFormState: string = 'in';
  registerFormState: string = 'out-right';
  myLoginForm: FormGroup;
  myRegisterForm: FormGroup;
  errorMsg: string = '';
  loginHintActive: boolean = false;

  constructor(private authService: AuthService, private router: Router) {
    router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.updateLoginHintVisibility();
      }
    });
  }

  @HostListener('document:click', ['$event'])
  onClick(event) {
    let clickTarget = event.target.attributes.id;
    if (clickTarget !== undefined) {
      if (clickTarget.nodeValue === "login-modal") {
        this.modalActive = false;
        this.modalContentState = 'out';
        this.myRegisterForm.reset();
        this.myLoginForm.reset();
      }
    }
  }

  ngOnInit() {
    let emailVal = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.myRegisterForm = new FormGroup({
      username: new FormControl(
        null,
        [Validators.required, Validators.minLength(4)],
        this.isUsernameUnique.bind(this)
      ),
      password: new FormControl(
        null,
        [Validators.required, Validators.minLength(8)]
      ),
      email: new FormControl(
        null,
        [Validators.required, Validators.pattern(emailVal)],
        this.isEmailUnique.bind(this)
      )
    })
    this.myLoginForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    })
  }

  updateLoginHintVisibility(): void {
    if (!this.authService.isLoggedIn() && this.router.url === '/track-progress') {
      setTimeout(() => {
        this.loginHintActive = true;
      }, 3000);
    } else {
      this.loginHintActive = false;
    }
  }

  closeHint(): void {
    this.loginHintActive = false;
  }
  
  onSubmitLogin(): void {
    const user = new User(
      this.myLoginForm.value.username,
      this.myLoginForm.value.password
    );
    this.authService.login(user)
    .subscribe(data => {
      localStorage.setItem('token', data.token);
      localStorage.setItem('userId', data.userId);
      window.location.reload();
      this.myLoginForm.reset();
      this.modalActive = false;
    }, error => {
      console.error(error);
      this.errorMsg = error.error.message;
    });
  }

  onSubmitRegister(): void {
    const user = new User(
      this.myRegisterForm.value.username,
      this.myRegisterForm.value.password,
      this.myRegisterForm.value.email
    );
    this.authService.register(user)
    .subscribe(
      data => console.log(data),
      error => console.error(error)
    );
    this.myRegisterForm.reset();
    this.modalActive = false;
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  onLogout() {
    this.authService.logout();
    window.location.reload();
  }

  onLogin() {
    this.modalActive = true; 
    setTimeout(() => {
      this.modalContentState = 'in';
    }, 10);
    this.loginFormActive = true;
    this.registerFormActive = false;
    this.registerFormState = 'out-right';
    this.loginFormState = 'in';
  }

  onRegister() {
    this.modalActive = true; 
    setTimeout(() => {
      this.modalContentState = 'in';
    }, 10);
    this.loginFormActive = false;
    this.registerFormActive = true;
    this.registerFormState = 'in';
    this.loginFormState = 'out-left';
  }

  isUsernameUnique(control: FormControl) {
    const q = new Promise((resolve, reject) => {
      setTimeout(() => {
        this.authService.isUsernameUnique(control.value)
        .subscribe(() => { 
          resolve(null);
        }, () => { 
          resolve({ 'isUsernameUnique': true });
        });
      }, 100);
    });
    return q;
  }

  isEmailUnique(control: FormControl) {
    const q = new Promise((resolve, reject) => {
      setTimeout(() => {
        this.authService.isEmailUnique(control.value)
        .subscribe(() => { 
          resolve(null);
        }, () => { 
          resolve({ 'isEmailUnique': true });
        });
      }, 100);
    });
    return q;
  }

  isErrorMsgActive(): string {
    if(this.errorMsg) {
      return "inline";
    } else {
      return "none";
    }
  }

  toRegisterFromLogin(): void {
    this.loginFormState = 'out-left'; 
    setTimeout(() => {
      this.registerFormActive = true; 
      this.loginFormActive = false; 
      this.myLoginForm.reset(); 
    }, 100);
    setTimeout(() => {
      this.registerFormState = 'in';
    }, 200);
  }

  toLoginFromRegister(): void {
    this.registerFormState = 'out-right'; 
    setTimeout(() => {
      this.loginFormActive = true; 
      this.registerFormActive = false; 
      this.myRegisterForm.reset(); 
    }, 100);
    setTimeout(() => {
      this.loginFormState = 'in';
    }, 200);
  }
}
