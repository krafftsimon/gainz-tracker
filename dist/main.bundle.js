webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/animations/day-list.animation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dayListAnimation; });

var dayListAnimation = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* trigger */])('dayListAnimation', [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* transition */])(':enter', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ opacity: '0' }),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* animate */])('.5s ease-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ opacity: '1' })),
    ]),
]);
//# sourceMappingURL=day-list.animation.js.map

/***/ }),

/***/ "../../../../../src/app/animations/fade-in-modal.animation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fadeInModalAnimation; });

var fadeInModalAnimation = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* trigger */])('fadeInModalAnimation', [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* state */])('in', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ opacity: 1 })),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* state */])('out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ opacity: 0 })),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* transition */])('in => out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* animate */])(300)),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* transition */])('out => in', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* animate */])(300)),
]);
//# sourceMappingURL=fade-in-modal.animation.js.map

/***/ }),

/***/ "../../../../../src/app/animations/fade-in-router.animation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fadeInRouterAnimation; });

var fadeInRouterAnimation = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* trigger */])('fadeInRouterAnimation', [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* state */])('*', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ opacity: 1 })),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* transition */])('void => *', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ opacity: 0 }),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* animate */])(400)
    ])
]);
//# sourceMappingURL=fade-in-router.animation.js.map

/***/ }),

/***/ "../../../../../src/app/animations/slide-in-modal-content.animation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return slideInModalContentAnimation; });

var slideInModalContentAnimation = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* trigger */])('slideInModalContentAnimation', [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* state */])('in', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ transform: 'translate3d(0, 0, 0)' })),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* state */])('out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ transform: 'translate3d(0, -100%, 0)' })),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* transition */])('out => in', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* animate */])(300)),
]);
//# sourceMappingURL=slide-in-modal-content.animation.js.map

/***/ }),

/***/ "../../../../../src/app/animations/slide-modal-form.animation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return slideModalFormAnimation; });

var slideModalFormAnimation = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* trigger */])('slideModalFormAnimation', [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* state */])('in', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ opacity: 1 })),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* state */])('out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ opacity: 0 })),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* transition */])('out => in', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* animate */])(600)),
]);
//# sourceMappingURL=slide-modal-form.animation.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_component__ = __webpack_require__("../../../../../src/app/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__program_generator_component__ = __webpack_require__("../../../../../src/app/program-generator.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__track_progress_component__ = __webpack_require__("../../../../../src/app/track-progress.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__graph_component__ = __webpack_require__("../../../../../src/app/graph.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'program-generator', component: __WEBPACK_IMPORTED_MODULE_3__program_generator_component__["a" /* ProgramGeneratorComponent */] },
    { path: 'track-progress', component: __WEBPACK_IMPORTED_MODULE_4__track_progress_component__["a" /* TrackProgressComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__home_component__["a" /* HomeComponent */] },
    { path: 'graph', component: __WEBPACK_IMPORTED_MODULE_5__graph_component__["a" /* GraphComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header {\r\n  background-color: #121416;\r\n  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.7);\r\n  font-family: 'nunito';\r\n  border-bottom: 1px solid black;\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  top: 0;\r\n  z-index: 11;\r\n  border-bottom: 1px solid rgb(45, 45, 45);\r\n}\r\n\r\n.container {\r\n  max-width: 1000px;\r\n  margin: 0 auto;\r\n  padding: 0 10px;\r\n  clear: both;\r\n}\r\n\r\n\r\nh1 {\r\n  cursor: pointer;\r\n  color: white;\r\n}\r\n\r\nh1:hover {\r\n  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);\r\n}\r\n #login {\r\n   width: 90px;\r\n   height: 80px;\r\n   padding: 10px;\r\n   background-color: #121416;\r\n   padding: 3px 10px;\r\n   border-right: 1px solid grey;\r\n   border-left: 1px solid grey;\r\n   color: white;\r\n   text-align: center;\r\n   font-size: 20px;\r\n   line-height: 75px;\r\n   font-family: 'nunito';\r\n }\r\n\r\n #login:hover {\r\n    background-color: #606366;\r\n }\r\n\r\n #login:active {\r\n    background-color: #4b4d4f;\r\n    box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.3) inset;\r\n}\r\n\r\n.pull-left {\r\n  float: left;\r\n}\r\n\r\n.pull-right {\r\n  float: right;\r\n}\r\n\r\n.router {\r\n   max-width: 1200px;\r\n   min-height: 92%;\r\n   margin: 0 auto;\r\n   background-color: rgba(10, 10, 10, 0.8);\r\n   border-left: 2px solid black;\r\n   border-right: 2px solid black;\r\n   text-align: center;\r\n }\r\n\r\n .modal {\r\n    display: none; /* Hidden by default */\r\n    position: fixed; /* Stay in place */\r\n    z-index: 12; /* Sit on top */\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%; /* Full width */\r\n    height: 100%; /* Full height */\r\n    overflow: auto; /* Enable scroll if needed */\r\n    background-color: rgb(0,0,0); /* Fallback color */\r\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n    opacity: 0;\r\n}\r\n\r\n\r\n.modal-content {\r\n    background-color: #e5e5e5;\r\n    margin: 15% auto; /* 15% from the top and centered */\r\n    padding: 20px 20px 10px 20px;\r\n    border: 2px solid #888;\r\n    border-radius: 4px;\r\n    width: 180px; /* Could be more or less, depending on screen size */\r\n    font-family: 'nunito';\r\n}\r\n\r\n.form-group {\r\n  margin: 0 0 5px 0;\r\n}\r\n\r\n.modal-links {\r\n  text-align: center;\r\n  margin: 5px;\r\n  text-decoration: underline;\r\n}\r\n\r\n.auth-input {\r\n    box-shadow: 0 0 2px grey inset;\r\n    height: 20px;\r\n    border: 1px solid #a8a8a8;\r\n    border-radius: 2px\r\n}\r\n\r\nbutton {\r\n  padding: 7px;\r\n  margin: 20px auto;\r\n  width: 130px;\r\n  display: block;\r\n  font-family: 'nunito';\r\n  font-size: 17px;\r\n  border: 1px solid grey;\r\n  border-radius: 1px;\r\n}\r\n\r\nbutton:hover {\r\n  background-color: #bcbcbc;\r\n}\r\n\r\ninput.ng-invalid.ng-touched {\r\n  border: 1px solid red;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <div class=\"container\">\n    <h1 class=\"pull-left\" [routerLink]=\"['/home']\">Gainz Tracker</h1>\n    <div class=\"pull-right\" id=\"login\" (click)=\"modalActive = true; modalState = 'in'\" *ngIf=\"!isLoggedIn()\"><fa name=\"sign-in\"></fa> Login</div>\n    <div class=\"pull-right\" id=\"login\" (click)=\"onLogout()\" *ngIf=\"isLoggedIn()\"><fa name=\"sign-out\"></fa>Logout</div>\n    <div style=\"clear: both;\"></div>\n  </div>\n</div>\n\n  <div class=\"router\">\n    <router-outlet></router-outlet>\n  </div>\n\n\n<div class=\"modal\" id=\"login-modal\" [style.display]=\"isModalActive()\" [@fadeInModalAnimation]=\"modalState\">\n  <div class=\"modal-content\"  [@slideInModalContentAnimation]=\"modalState\">\n\n    <form [formGroup]=\"myLoginForm\" (ngSubmit)=\"onSubmitLogin()\" class=\"login-form\" [style.display]=\"isLoginFormActive()\" [@slideModalFormAnimation]=\"loginFormState\">\n      <div class=\"form-group\">\n        <label for=\"username\"><fa name=\"user\"></fa>Username: </label>\n        <input class=\"auth-input\" type=\"text\" id=\"username\" formControlName=\"username\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"password\"><fa name=\"lock\"></fa>Password: </label>\n        <input class=\"auth-input\" type=\"password\" id=\"password\" formControlName=\"password\">\n      </div>\n      <button type=\"submit\" [disabled]=\"!myLoginForm.valid\">Log in</button>\n      <div class=\"modal-links\" (click)=\"registerFormActive = true; loginFormActive = false; myLoginForm.reset(); loginFormState = 'out'; registerFormState = 'in'\"><fa name=\"user-plus\"></fa>Register</div>\n      <div class=\"modal-links\">Forgot password</div>\n    </form>\n\n    <form [formGroup]=\"myRegisterForm\" (ngSubmit)=\"onSubmitRegister()\" class=\"register-form\" [style.display]=\"isRegisterFormActive()\" [@slideModalFormAnimation]=\"registerFormState\">\n      <div class=\"form-group\">\n        <label for=\"username\"><fa name=\"user\"></fa>Username: </label>\n        <input class=\"auth-input\" type=\"text\" id=\"username\" formControlName=\"username\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"password\"><fa name=\"lock\"></fa>Password: </label>\n        <input class=\"auth-input\" type=\"password\" id=\"password\" formControlName=\"password\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"email\"><fa name=\"envelope\"></fa>Email: </label>\n        <input class=\"auth-input\" type=\"email\" id=\"email\" formControlName=\"email\">\n      </div>\n      <button type=\"submit\" [disabled]=\"!myRegisterForm.valid\">Register</button>\n      <div class=\"modal-links\" (click)=\"registerFormActive = false; loginFormActive = true; myRegisterForm.reset(); loginFormState = 'in'; registerFormState = 'out'\">Already have an account?</div>\n    </form>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animations_fade_in_modal_animation__ = __webpack_require__("../../../../../src/app/animations/fade-in-modal.animation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__animations_slide_in_modal_content_animation__ = __webpack_require__("../../../../../src/app/animations/slide-in-modal-content.animation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__animations_slide_modal_form_animation__ = __webpack_require__("../../../../../src/app/animations/slide-modal-form.animation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user__ = __webpack_require__("../../../../../src/app/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AppComponent = (function () {
    function AppComponent(authService) {
        this.authService = authService;
        this.title = 'app';
        this.modalActive = false;
        this.loginFormActive = true;
        this.registerFormActive = false;
        this.modalState = 'out';
        this.loginFormState = 'in';
        this.registerFormState = 'out';
    }
    AppComponent.prototype.onClick = function (event) {
        var clickTarget = event.target.attributes.id;
        if (clickTarget !== undefined) {
            if (clickTarget.nodeValue === "login-modal") {
                this.modalActive = false;
                this.modalState = 'out';
            }
        }
    };
    AppComponent.prototype.ngOnInit = function () {
        var emailVal = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.myRegisterForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            username: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required),
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required),
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].pattern(emailVal)])
        });
        this.myLoginForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            username: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required),
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required)
        });
    };
    AppComponent.prototype.onSubmitLogin = function () {
        var user = new __WEBPACK_IMPORTED_MODULE_5__user__["a" /* User */](this.myLoginForm.value.username, this.myLoginForm.value.password);
        this.authService.login(user).subscribe(function (data) {
            localStorage.setItem('token', data.token);
            localStorage.setItem('userId', data.userId);
            console.log(data);
            window.location.reload();
        }, function (error) { return console.error(error); });
        this.myLoginForm.reset();
        this.modalActive = false;
        this.modalState = 'out';
    };
    AppComponent.prototype.onSubmitRegister = function () {
        var user = new __WEBPACK_IMPORTED_MODULE_5__user__["a" /* User */](this.myRegisterForm.value.username, this.myRegisterForm.value.password, this.myRegisterForm.value.email);
        this.authService.register(user).subscribe(function (data) { return console.log(data); }, function (error) { return console.error(error); });
        this.myRegisterForm.reset();
        this.modalActive = false;
        this.modalState = 'out';
    };
    AppComponent.prototype.isLoggedIn = function () {
        return this.authService.isLoggedIn();
    };
    AppComponent.prototype.onLogout = function () {
        this.authService.logout();
        window.location.reload();
    };
    AppComponent.prototype.isModalActive = function () {
        if (this.modalActive) {
            return "block";
        }
        else {
            return "none";
        }
    };
    AppComponent.prototype.isLoginFormActive = function () {
        if (this.loginFormActive) {
            return "block";
        }
        else {
            return "none";
        }
    };
    AppComponent.prototype.isRegisterFormActive = function () {
        if (this.registerFormActive) {
            return "block";
        }
        else {
            return "none";
        }
    };
    return AppComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('document:click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppComponent.prototype, "onClick", null);
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        animations: [__WEBPACK_IMPORTED_MODULE_2__animations_fade_in_modal_animation__["a" /* fadeInModalAnimation */], __WEBPACK_IMPORTED_MODULE_3__animations_slide_in_modal_content_animation__["a" /* slideInModalContentAnimation */], __WEBPACK_IMPORTED_MODULE_4__animations_slide_modal_form_animation__["a" /* slideModalFormAnimation */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_dropdown__ = __webpack_require__("../../../../ngx-dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_dropdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ngx_dropdown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_charts__ = __webpack_require__("../../../../ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular_font_awesome_angular_font_awesome__ = __webpack_require__("../../../../angular-font-awesome/angular-font-awesome.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_component__ = __webpack_require__("../../../../../src/app/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__program_generator_component__ = __webpack_require__("../../../../../src/app/program-generator.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__track_progress_component__ = __webpack_require__("../../../../../src/app/track-progress.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__graph_component__ = __webpack_require__("../../../../../src/app/graph.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__day_service__ = __webpack_require__("../../../../../src/app/day.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_10__program_generator_component__["a" /* ProgramGeneratorComponent */],
            __WEBPACK_IMPORTED_MODULE_11__track_progress_component__["a" /* TrackProgressComponent */],
            __WEBPACK_IMPORTED_MODULE_13__graph_component__["a" /* GraphComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_12__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_dropdown__["DropdownModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5_ng2_charts__["ChartsModule"],
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_7_angular_font_awesome_angular_font_awesome__["a" /* AngularFontAwesomeModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_14__day_service__["a" /* DayService */], __WEBPACK_IMPORTED_MODULE_15__auth_service__["a" /* AuthService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.register = function (user) {
        var body = JSON.stringify(user);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        return this.http.post('http://localhost:3000/api/users', body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].throw(error.json()); });
    };
    AuthService.prototype.login = function (user) {
        var body = JSON.stringify(user);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        return this.http.post('http://localhost:3000/api/users/login', body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].throw(error.json()); });
    };
    AuthService.prototype.logout = function () {
        localStorage.clear();
    };
    AuthService.prototype.isLoggedIn = function () {
        return localStorage.getItem('token') !== null;
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/day.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__day__ = __webpack_require__("../../../../../src/app/day.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__exercise__ = __webpack_require__("../../../../../src/app/exercise.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DayService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DayService = (function () {
    function DayService(http) {
        this.http = http;
        this.days = [];
    }
    DayService.prototype.addNewDay = function () {
        var exercise = new __WEBPACK_IMPORTED_MODULE_5__exercise__["a" /* Exercise */]('exampleExercise', 2, 10, 185);
        this.days.unshift(new __WEBPACK_IMPORTED_MODULE_4__day__["a" /* Day */](new Date(), exercise));
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        return this.http.post('http://localhost:3000/api/users/days' + token, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].throw(error.json()); });
    };
    DayService.prototype.deleteDay = function (index) {
        this.days.splice(index, 1);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        return this.http.patch('http://localhost:3000/api/users/days' + token, { "index": index }, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].throw(error.json()); });
    };
    DayService.prototype.getDays = function () {
        var _this = this;
        var token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        return this.http.get('http://localhost:3000/api/users/days' + token)
            .map(function (response) {
            var days = response.json().obj;
            _this.days = days;
            return days;
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].throw(error.json()); });
    };
    DayService.prototype.addExercise = function (index, exerciseName, sets, reps, weight) {
        this.days[index].exercises.push(new __WEBPACK_IMPORTED_MODULE_5__exercise__["a" /* Exercise */](exerciseName, sets, reps, weight));
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        return this.http.post('http://localhost:3000/api/users/days/exercises' + token, { "index": index, "exerciseName": exerciseName, "sets": sets, "reps": reps, "weight": weight }, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].throw(error.json()); });
    };
    DayService.prototype.deleteExercise = function (dayIndex, exerciseIndex) {
        this.days[dayIndex].exercises.splice(exerciseIndex, 1);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        return this.http.patch('http://localhost:3000/api/users/days/exercises' + token, { "dayIndex": dayIndex, "exerciseIndex": exerciseIndex }, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].throw(error.json()); });
    };
    return DayService;
}());
DayService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], DayService);

var _a;
//# sourceMappingURL=day.service.js.map

/***/ }),

/***/ "../../../../../src/app/day.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Day; });
var Day = (function () {
    function Day(date, exercise) {
        this.exercises = [];
        this.date = date;
        this.exercises.unshift(exercise);
    }
    return Day;
}());

//# sourceMappingURL=day.js.map

/***/ }),

/***/ "../../../../../src/app/exercise.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Exercise; });
var Exercise = (function () {
    function Exercise(str, sets, reps, weight) {
        this.name = str;
        this.sets = sets;
        this.reps = reps;
        this.weight = weight;
    }
    return Exercise;
}());

//# sourceMappingURL=exercise.js.map

/***/ }),

/***/ "../../../../../src/app/graph.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\r\n  width: 100%;\r\n  min-height: 600px;\r\n  margin: 0 auto;\r\n  text-align: center;\r\n}\r\n\r\n.graph {\r\n  width: 65%;\r\n  margin: 0 auto;\r\n}\r\n\r\n.graph-buttons {\r\n  color: white;\r\n  background-color: rgba(19, 73, 81, 1);\r\n  width: 15%;\r\n  height: 40px;\r\n  display: inline-block;\r\n  text-align: center;\r\n  border-radius: 2px;\r\n  font-family: 'nunito';\r\n  margin: 20px;\r\n  line-height: 37px;\r\n  box-shadow: 4px 4px 7px rgba(0, 0, 0, 0.5);\r\n  border: 1px solid black;\r\n  padding: 4px;\r\n}\r\n\r\n.graph-buttons:hover {\r\n    border: 1px solid white;\r\n}\r\n\r\n.graph-buttons:active {\r\n  background-color: rgba(09, 53, 61, 1);\r\n  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.5) inset;\r\n}\r\n\r\n.graph-buttons:focus {\r\n  background-color: #496b19;\r\n  border: 1px solid #000000;\r\n  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.5) inset;\r\n}\r\n\r\n.buttons-container {\r\n  margin: 0 auto;\r\n  width: 100%;\r\n  min-height: 100px;\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/graph.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"buttons-container\">\r\n    <div class=\"graph-buttons\" (click)=\"benchGraph()\"> Bench Press </div>\r\n    <div class=\"graph-buttons\" (click)=\"squatGraph()\"> Squat </div>\r\n    <div class=\"graph-buttons\" (click)=\"deadliftGraph()\"> Deadlift </div>\r\n    <div class=\"graph-buttons\" (click)=\"ohpGraph()\"> Overhead Press </div>\r\n  </div>\r\n  <div class=\"graph\">\r\n    <canvas baseChart width=\"400\" height=\"400\"\r\n                    [datasets]=\"lineChartData\"\r\n                    [labels]=\"lineChartLabels\"\r\n                    [options]=\"lineChartOptions\"\r\n                    [colors]=\"lineChartColors\"\r\n                    [legend]=\"lineChartLegend\"\r\n                    [chartType]=\"lineChartType\"></canvas>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/graph.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animations_fade_in_router_animation__ = __webpack_require__("../../../../../src/app/animations/fade-in-router.animation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__day_service__ = __webpack_require__("../../../../../src/app/day.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GraphComponent = (function () {
    function GraphComponent(dayService) {
        this.dayService = dayService;
        this.days = [];
        this.benchArray = [];
        this.squatArray = [];
        this.deadliftArray = [];
        this.ohpArray = [];
        this.month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
        // lineChart
        this.lineChartData = [
            { data: [40, 41, 42, 43, 44, 45, 46], label: 'Bench' }
        ];
        this.lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.lineChartOptions = { responsive: true,
            scales: {
                xAxes: [{
                        gridLines: {
                            lineWidth: 1,
                            color: 'rgba(200, 200, 200, 0.5)',
                            zeroLineWidth: 2,
                            zeroLineColor: 'rgba(255, 255, 255, 1)'
                        },
                        ticks: {
                            fontColor: '#ededed'
                        }
                    }],
                yAxes: [{
                        gridLines: {
                            lineWidth: 1,
                            color: 'rgba(200, 200, 200, 0.5)',
                            zeroLineWidth: 2,
                            zeroLineColor: 'rgba(255, 255, 255, 1)'
                        },
                        ticks: {
                            fontColor: '#ededed'
                        }
                    }]
            }
        };
        this.lineChartColors = [
            {
                backgroundColor: 'rgba(19, 73, 81, 0.2)',
                borderColor: 'rgba(59, 168, 204, 1)',
                pointBackgroundColor: 'rgba(255,255,255,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }
        ];
        this.lineChartLegend = false;
        this.lineChartType = 'line';
    }
    GraphComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dayService.getDays().subscribe(function (data) { return _this.days = data; }, function (error) { return console.error(error); }, function () { return _this.generateGraphData(); });
    };
    GraphComponent.prototype.generateGraphData = function () {
        for (var _i = 0, _a = this.days; _i < _a.length; _i++) {
            var day = _a[_i];
            for (var _b = 0, _c = day.exercises; _b < _c.length; _b++) {
                var exercise = _c[_b];
                switch (exercise.name) {
                    case "Bench Press": {
                        var bench1rm = exercise.weight * (1 + exercise.reps / 30);
                        this.benchArray.unshift({ "rm": bench1rm, "date": day.date });
                        break;
                    }
                    case "Squats": {
                        var squat1rm = exercise.weight * (1 + exercise.reps / 30);
                        this.squatArray.unshift({ "rm": squat1rm, "date": day.date });
                        break;
                    }
                    case "Deadlifts": {
                        var deadlift1rm = exercise.weight * (1 + exercise.reps / 30);
                        this.deadliftArray.unshift({ "rm": deadlift1rm, "date": day.date });
                        break;
                    }
                    case "OHP": {
                        var ohp1rm = exercise.weight * (1 + exercise.reps / 30);
                        this.ohpArray.unshift({ "rm": ohp1rm, "date": day.date });
                        break;
                    }
                }
            }
        }
        console.log(this.squatArray);
    };
    GraphComponent.prototype.benchGraph = function () {
        this.lineChartData[0].data = [];
        this.lineChartData[0].label = 'Bench Press';
        this.lineChartLabels = [];
        for (var _i = 0, _a = this.benchArray; _i < _a.length; _i++) {
            var point = _a[_i];
            var d = new Date(point.date);
            var newDate = this.month[d.getMonth()] + ' ' + d.getDay() + ', ' + d.getFullYear();
            this.lineChartData[0].data.push(point.rm);
            this.lineChartLabels.push(newDate);
        }
    };
    GraphComponent.prototype.squatGraph = function () {
        this.lineChartData[0].data = [];
        this.lineChartData[0].label = 'Squat';
        this.lineChartLabels = [];
        for (var _i = 0, _a = this.squatArray; _i < _a.length; _i++) {
            var point = _a[_i];
            var d = new Date(point.date);
            var newDate = this.month[d.getMonth()] + ' ' + d.getDay() + ', ' + d.getFullYear();
            this.lineChartData[0].data.push(point.rm);
            this.lineChartLabels.push(newDate);
        }
    };
    GraphComponent.prototype.deadliftGraph = function () {
        this.lineChartData[0].data = [];
        this.lineChartData[0].label = 'Deadlift';
        this.lineChartLabels = [];
        for (var _i = 0, _a = this.deadliftArray; _i < _a.length; _i++) {
            var point = _a[_i];
            var d = new Date(point.date);
            var newDate = this.month[d.getMonth()] + ' ' + d.getDay() + ', ' + d.getFullYear();
            this.lineChartData[0].data.push(point.rm);
            this.lineChartLabels.push(newDate);
        }
    };
    GraphComponent.prototype.ohpGraph = function () {
        this.lineChartData[0].data = [];
        this.lineChartData[0].label = 'Overhead Press';
        this.lineChartLabels = [];
        for (var _i = 0, _a = this.ohpArray; _i < _a.length; _i++) {
            var point = _a[_i];
            var d = new Date(point.date);
            var newDate = this.month[d.getMonth()] + ' ' + d.getDay() + ', ' + d.getFullYear();
            this.lineChartData[0].data.push(point.rm);
            this.lineChartLabels.push(newDate);
        }
    };
    return GraphComponent;
}());
GraphComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'graph-page',
        template: __webpack_require__("../../../../../src/app/graph.component.html"),
        styles: [__webpack_require__("../../../../../src/app/graph.component.css")],
        animations: [__WEBPACK_IMPORTED_MODULE_1__animations_fade_in_router_animation__["a" /* fadeInRouterAnimation */]],
        host: { '[@fadeInRouterAnimation]': 'true',
            '[style.display]': "'block'" }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__day_service__["a" /* DayService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__day_service__["a" /* DayService */]) === "function" && _a || Object])
], GraphComponent);

var _a;
//# sourceMappingURL=graph.component.js.map

/***/ }),

/***/ "../../../../../src/app/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".box {\r\n  background-color: rgba(19, 73, 81, 1);\r\n  display: inline-block;\r\n  width: 22%;\r\n  height: 170px;\r\n  margin: 250px 20px 20px 20px;\r\n  padding: 60px 20px 10px 20px;\r\n  border-radius: 4px;\r\n  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.3);\r\n  text-align: center;\r\n  vertical-align: middle;\r\n  line-height: 50px;\r\n  font-size: 30px;\r\n  border: 1px solid black;\r\n  font-family: 'nunito';\r\n  color: white;\r\n}\r\n\r\n.box:hover {\r\n  border: 1px solid white;\r\n}\r\n\r\n.box:active {\r\n  background-color: rgba(9, 63, 71, 1);\r\n  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.3) inset;\r\n}\r\n\r\n.box:focus {\r\n  outline: 0;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n  <div class=\"box\" routerLink=\"/program-generator\"><fa name=\"table\" size=\"2x\"></fa><br>Generate program</div>\r\n  <div class=\"box\" routerLink=\"/track-progress\"><fa name=\"calendar\" size=\"2x\"></fa><br>Start Tracking</div>\r\n  <div class=\"box\" routerLink=\"/graph\"><fa name=\"line-chart\" size=\"2x\"></fa><br>Visualize Progress</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(router) {
        this.router = router;
    }
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'home-page',
        template: __webpack_require__("../../../../../src/app/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/program-generator.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\r\n  width: 100%;\r\n  margin: 0 auto;\r\n  font-family: 'nunito';\r\n}\r\n.programs {\r\n  margin: 0 auto;\r\n  list-style-type: none;\r\n  padding: 0;\r\n  width: 100%;\r\n  margin-top: 45px;\r\n}\r\n\r\n.programs li {\r\n  width: 40%;\r\n  color: black;\r\n  cursor: pointer;\r\n  position: relative;\r\n  left: 0;\r\n  background-color: #C0C0C0;\r\n  margin: 20px 20px;\r\n  padding: .3em 0;\r\n  height: 1.6em;\r\n  border-radius: 4px;\r\n  box-shadow: 8px 8px 10px rgba(0, 0, 0, 0.5);\r\n  display: inline-block;\r\n  text-align: left;\r\n}\r\n\r\n\r\n.programs .badge {\r\n  display: inline-block;\r\n  font-size: small;\r\n  color: white;\r\n  padding: 0.8em 0.7em 0 0.7em;\r\n  background-color: #607D8B;\r\n  line-height: 10px;\r\n  position: relative;\r\n  top: -5px;\r\n  height: 1.9em;\r\n  margin-right: 1.1em;\r\n  border-radius: 3px 0 0 3px;\n}\r\n\r\n.programs li:active {\r\n  background-color: #DDD;\r\n  border: 1px solid #000000;\r\n  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5) inset;\r\n}\r\n\r\n.programs li:hover {\r\n  color: black;\r\n  background-color: #DDD;\r\n  left: .3em;\r\n}\r\n.programs .text {\r\n  position: relative;\r\n  top: -3px;\r\n}\r\n\r\n.statsDiv {\r\n  color: white;\r\n  width: 40%;\r\n  margin: 20px 20px;\r\n  background-color: rgba(19, 73, 81, 0.7);\r\n  border-radius: 2px;\n  display: inline-block;\r\n  vertical-align: middle;\r\n  min-height: 490px;\r\n  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.7);\r\n  border: 1px solid grey;\r\n}\r\n\r\n.programsDiv {\n  background-color: rgba(19, 73, 81, 0.7);\n  border-radius: 2px;\n  margin: 20px 20px;\n  display: inline-block;\r\n  width: 40%;\r\n  color: white;\r\n  min-height: 490px;\r\n  vertical-align: middle;\r\n  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.7);\n  border: 1px solid grey;\n}\r\n\r\n\r\nlabel {\r\n}\r\n\r\ninput {\r\n  width: 40px;\r\n  margin-right: 40px;\r\n  margin-left: 8px;\r\n  border-radius: 2px;\r\n}\r\n\r\nh3 {\r\n  margin-top: 0px;\r\n  margin-bottom: -20px;\r\n}\r\n\r\nh2 {\r\n}\r\n\r\n\r\n.liftstats {\r\n  width: 90%;\r\n  margin: 10px 20px 20px 20px;\r\n  border-bottom: 1px solid grey;\r\n  padding: 5px;\r\n  text-align: left;\r\n}\r\n\r\n.scheduleDiv {\r\n  background-color: rgba(19, 73, 81, 0.7);\r\n  border-radius: 2px;\r\n  margin: 20px 20px;\r\n  display: inline-block;\r\n  width: 95%;\r\n  color: white;\r\n  vertical-align: middle;\r\n  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.7);\r\n  border: 1px solid grey;\r\n}\r\n\r\ntable {\r\n  margin: 10px;\r\n  display: inline-block;\r\n  border-collapse: collapse;\r\n}\r\n\r\n#table1{\r\n}\r\n\r\nth {\r\n  border: 1px solid grey;\r\n  padding: 10px;\r\n}\r\n\r\ntd {\r\n  border: 1px solid grey;\r\n  padding: 10px;\r\n  width: 150px;\r\n}\r\n\r\ntr:hover {\r\n  background-color: rgba(100, 100, 100, 0.5);\r\n}\r\n\r\ntr:first-child, tr:nth-child(4), tr:nth-child(7) {\r\n  border-bottom: 3px solid #c4c4c4;\r\n}\r\n\r\nhr {\r\n  margin: 50px;\r\n  border: 1px solid grey;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/program-generator.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n  <div class=\"statsDiv\">\r\n    <h2> Enter your stats... </h2>\r\n    <div class=\"liftstats\">\r\n      <h3> Stats </h3> <br>\r\n      <label> Bodyweight: </label> <input #bodyweight>\r\n      <label> Gender: </label> <input #gender> <br>\r\n    </div>\r\n    <div class=\"liftstats\">\r\n      <h3> Bench press: </h3> <br>\r\n      <label> Repetitions: </label> <input [(ngModel)]=\"benchReps\" (keydown)=\"update1rmBench()\">\r\n      <label> Weight: </label> <input [(ngModel)]=\"benchWeight\" (keydown)=\"update1rmBench()\">\r\n      <label> 1RM: {{bench1rm | number: '1.0-0'}} </label><br>\r\n    </div>\r\n    <div class=\"liftstats\">\r\n      <h3> Squat: </h3> <br>\r\n      <label> Repetitions: </label> <input [(ngModel)]=\"squatReps\" (keydown)=\"update1rmSquat()\">\r\n      <label> Weight: </label> <input [(ngModel)]=\"squatWeight\" (keydown)=\"update1rmSquat()\">\r\n      <label> 1RM: {{squat1rm | number: '1.0-0'}} </label><br>\r\n    </div>\r\n    <div class=\"liftstats\">\r\n      <h3> Deadlift: </h3> <br>\r\n      <label> Repetitions: </label> <input [(ngModel)]=\"deadliftReps\" (keydown)=\"update1rmDeadlift()\">\r\n      <label> Weight: </label> <input [(ngModel)]=\"deadliftWeight\" (keydown)=\"update1rmDeadlift()\">\r\n      <label> 1RM: {{deadlift1rm | number: '1.0-0'}} </label>\r\n    </div>\r\n    <div class=\"liftstats\">\r\n      <h3> Overhead Press </h3> <br>\r\n      <label> Repetitions: </label> <input [(ngModel)]=\"ohpReps\" (keydown)=\"update1rmOHP()\">\r\n      <label> Weight: </label> <input [(ngModel)]=\"ohpWeight\" (keydown)=\"update1rmOHP()\">\r\n      <label> 1RM: {{ohp1rm | number: '1.0-0'}} </label>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"programsDiv\">\r\n    <h2>... then select a program. </h2>\r\n    <ul class=\"programs\">\r\n      <li *ngFor=\"let program of programs\" (click)=\"onSelect(program)\" [class.selected]=\"program === selectedProgram\">\r\n        <span class=\"badge\">{{program.id}}</span> {{program.name}}\r\n      </li>\r\n    </ul>\r\n  </div>\r\n\r\n  <div class=\"scheduleDiv\" [style.display]=\"is531Active()\" [@fadeInModalAnimation]=\"program531State\">\r\n    <h1> Here is your program. </h1>\r\n\r\n    <h2> Week 1 </h2>\r\n    <table id=\"table1\">\r\n\r\n      <tr>\r\n        <th></th>\r\n        <th>Day 1 <br> Overhead Press</th>\r\n        <th>Day 2 <br> Deadlift</th>\r\n        <th>Day 3 <br> Bench</th>\r\n        <th>Day 4 <br> Squat</th>\r\n      </tr>\r\n      <tr>\r\n        <th rowspan=\"3\">warm-up</th>\r\n        <td>{{ohp40 | number: '1.0-0'}} x 5</td>\r\n        <td>{{deadlift40 | number: '1.0-0'}} x 5</td>\r\n        <td>{{bench40 | number: '1.0-0'}} x 5</td>\r\n        <td>{{squat40 | number: '1.0-0'}} x 5</td>\r\n      </tr>\r\n      <tr>\r\n        <td>{{ohp50 | number: '1.0-0'}} x 5</td>\r\n        <td>{{deadlift50 | number: '1.0-0'}} x 5</td>\r\n        <td>{{bench50 | number: '1.0-0'}} x 5</td>\r\n        <td>{{squat50 | number: '1.0-0'}} x 5</td>\r\n      </tr>\r\n      <tr>\r\n        <td>{{ohp60 | number: '1.0-0'}} x 3</td>\r\n        <td>{{deadlift60 | number: '1.0-0'}} x 3</td>\r\n        <td>{{bench60 | number: '1.0-0'}} x 3</td>\r\n        <td>{{squat60 | number: '1.0-0'}} x 3</td>\r\n      </tr>\r\n      <tr>\r\n        <th rowspan=\"3\">5/3/1</th>\r\n        <td>{{ohp65 | number: '1.0-0'}} x 5</td>\r\n        <td>{{deadlift65 | number: '1.0-0'}} x 5</td>\r\n        <td>{{bench65 | number: '1.0-0'}} x 5</td>\r\n        <td>{{squat65 | number: '1.0-0'}} x 5</td>\r\n      </tr>\r\n      <tr>\r\n        <td>{{ohp75 | number: '1.0-0'}} x 5</td>\r\n        <td>{{deadlift75 | number: '1.0-0'}} x 5</td>\r\n        <td>{{bench75 | number: '1.0-0'}} x 5</td>\r\n        <td>{{squat75 | number: '1.0-0'}} x 5</td>\r\n      </tr>\r\n      <tr>\r\n        <td>{{ohp85 | number: '1.0-0'}} x 5</td>\r\n        <td>{{deadlift85 | number: '1.0-0'}} x 5</td>\r\n        <td>{{bench85 | number: '1.0-0'}} x 5</td>\r\n        <td>{{squat85 | number: '1.0-0'}} x 5</td>\r\n      </tr>\r\n      <tr>\r\n        <th rowspan=\"2\">Assistance Exercises <br> \"Boring But Big\"</th>\r\n        <td>{{ohp50 | number: '1.0-0'}} x 10</td>\r\n        <td>{{deadlift50 | number: '1.0-0'}} x 10</td>\r\n        <td>{{bench50 | number: '1.0-0'}} x 10</td>\r\n        <td>{{squat50 | number: '1.0-0'}} x 10</td>\r\n      </tr>\r\n      <tr>\r\n        <td>Exercise of your choice.</td>\r\n        <td>Exercise of your choice.</td>\r\n        <td>Exercise of your choice.</td>\r\n        <td>Exercise of your choice.</td>\r\n      </tr>\r\n    </table>\r\n\r\n    <hr>\r\n\r\n    <h2> Week 2 </h2>\r\n    <table id=\"table2\">\r\n      <tr>\r\n        <th></th>\r\n        <th>Day 1 <br> Overhead Press</th>\r\n        <th>Day 2 <br> Deadlift</th>\r\n        <th>Day 3 <br> Bench</th>\r\n        <th>Day 4 <br> Squat</th>\r\n      </tr>\r\n      <tr>\r\n        <th rowspan=\"3\">warm-up</th>\r\n        <td>{{ohp40 | number: '1.0-0'}} x 5</td>\r\n        <td>{{deadlift40 | number: '1.0-0'}} x 5</td>\r\n        <td>{{bench40 | number: '1.0-0'}} x 5</td>\r\n        <td>{{squat40 | number: '1.0-0'}} x 5</td>\r\n      </tr>\r\n      <tr>\r\n        <td>{{ohp50 | number: '1.0-0'}} x 5</td>\r\n        <td>{{deadlift50 | number: '1.0-0'}} x 5</td>\r\n        <td>{{bench50 | number: '1.0-0'}} x 5</td>\r\n        <td>{{squat50 | number: '1.0-0'}} x 5</td>\r\n      </tr>\r\n      <tr>\r\n        <td>{{ohp60 | number: '1.0-0'}} x 3</td>\r\n        <td>{{deadlift60 | number: '1.0-0'}} x 3</td>\r\n        <td>{{bench60 | number: '1.0-0'}} x 3</td>\r\n        <td>{{squat60 | number: '1.0-0'}} x 3</td>\r\n      </tr>\r\n      <tr>\r\n        <th rowspan=\"3\">5/3/1</th>\r\n        <td>{{ohp80 | number: '1.0-0'}} x 3</td>\r\n        <td>{{deadlift80 | number: '1.0-0'}} x 3</td>\r\n        <td>{{bench80 | number: '1.0-0'}} x 3</td>\r\n        <td>{{squat80 | number: '1.0-0'}} x 3</td>\r\n      </tr>\r\n      <tr>\r\n        <td>{{ohp85 | number: '1.0-0'}} x 3</td>\r\n        <td>{{deadlift85 | number: '1.0-0'}} x 3</td>\r\n        <td>{{bench85 | number: '1.0-0'}} x 3</td>\r\n        <td>{{squat85 | number: '1.0-0'}} x 3</td>\r\n      </tr>\r\n      <tr>\r\n        <td>{{ohp90 | number: '1.0-0'}} x 3</td>\r\n        <td>{{deadlift90 | number: '1.0-0'}} x 3</td>\r\n        <td>{{bench90 | number: '1.0-0'}} x 3</td>\r\n        <td>{{squat90 | number: '1.0-0'}} x 3</td>\r\n      </tr>\r\n      <tr>\r\n        <th rowspan=\"2\">Assistance Exercises <br> \"Boring But Big\"</th>\r\n        <td>{{ohp50 | number: '1.0-0'}} x 10</td>\r\n        <td>{{deadlift50 | number: '1.0-0'}} x 10</td>\r\n        <td>{{bench50 | number: '1.0-0'}} x 10</td>\r\n        <td>{{squat50 | number: '1.0-0'}} x 10</td>\r\n      </tr>\r\n      <tr>\r\n        <td>Exercise of your choice.</td>\r\n        <td>Exercise of your choice.</td>\r\n        <td>Exercise of your choice.</td>\r\n        <td>Exercise of your choice.</td>\r\n      </tr>\r\n    </table>\r\n\r\n    <hr>\r\n\r\n    <h2> Week 3 </h2>\r\n    <table id=\"table3\">\r\n      <tr>\r\n        <th></th>\r\n        <th>Day 1 <br> Overhead Press</th>\r\n        <th>Day 2 <br> Deadlift</th>\r\n        <th>Day 3 <br> Bench</th>\r\n        <th>Day 4 <br> Squat</th>\r\n      </tr>\r\n      <tr>\r\n        <th rowspan=\"3\">warm-up</th>\r\n        <td>{{ohp40 | number: '1.0-0'}} x 5</td>\r\n        <td>{{deadlift40 | number: '1.0-0'}} x 5</td>\r\n        <td>{{bench40 | number: '1.0-0'}} x 5</td>\r\n        <td>{{squat40 | number: '1.0-0'}} x 5</td>\r\n      </tr>\r\n      <tr>\r\n        <td>{{ohp50 | number: '1.0-0'}} x 5</td>\r\n        <td>{{deadlift50 | number: '1.0-0'}} x 5</td>\r\n        <td>{{bench50 | number: '1.0-0'}} x 5</td>\r\n        <td>{{squat50 | number: '1.0-0'}} x 5</td>\r\n      </tr>\r\n      <tr>\r\n        <td>{{ohp60 | number: '1.0-0'}} x 3</td>\r\n        <td>{{deadlift60 | number: '1.0-0'}} x 3</td>\r\n        <td>{{bench60 | number: '1.0-0'}} x 3</td>\r\n        <td>{{squat60 | number: '1.0-0'}} x 3</td>\r\n      </tr>\r\n      <tr>\r\n        <th rowspan=\"3\">5/3/1</th>\r\n        <td>{{ohp75 | number: '1.0-0'}} x 5</td>\r\n        <td>{{deadlift75 | number: '1.0-0'}} x 5</td>\r\n        <td>{{bench75 | number: '1.0-0'}} x 5</td>\r\n        <td>{{squat75 | number: '1.0-0'}} x 5</td>\r\n      </tr>\r\n      <tr>\r\n        <td>{{ohp85 | number: '1.0-0'}} x 3</td>\r\n        <td>{{deadlift85 | number: '1.0-0'}} x 3</td>\r\n        <td>{{bench85 | number: '1.0-0'}} x 3</td>\r\n        <td>{{squat85 | number: '1.0-0'}} x 3</td>\r\n      </tr>\r\n      <tr>\r\n        <td>{{ohp95 | number: '1.0-0'}} x 1</td>\r\n        <td>{{deadlift95 | number: '1.0-0'}} x 1</td>\r\n        <td>{{bench95 | number: '1.0-0'}} x 1</td>\r\n        <td>{{squat95 | number: '1.0-0'}} x 1</td>\r\n      </tr>\r\n      <tr>\r\n        <th rowspan=\"2\">Assistance Exercises <br> \"Boring But Big\"</th>\r\n        <td>{{ohp50 | number: '1.0-0'}} x 10</td>\r\n        <td>{{deadlift50 | number: '1.0-0'}} x 10</td>\r\n        <td>{{bench50 | number: '1.0-0'}} x 10</td>\r\n        <td>{{squat50 | number: '1.0-0'}} x 10</td>\r\n      </tr>\r\n      <tr>\r\n        <td>Exercise of your choice.</td>\r\n        <td>Exercise of your choice.</td>\r\n        <td>Exercise of your choice.</td>\r\n        <td>Exercise of your choice.</td>\r\n      </tr>\r\n    </table>\r\n\r\n    <hr>\r\n\r\n    <h2> Week 4 </h2>\r\n    <table id=\"table4\">\r\n      <tr>\r\n        <th></th>\r\n        <th>Day 1 <br> Overhead Press</th>\r\n        <th>Day 2 <br> Deadlift</th>\r\n        <th>Day 3 <br> Bench</th>\r\n        <th>Day 4 <br> Squat</th>\r\n      </tr>\r\n      <tr>\r\n        <th rowspan=\"3\">warm-up</th>\r\n        <td>{{ohp40 | number: '1.0-0'}} x 5</td>\r\n        <td>{{deadlift40 | number: '1.0-0'}} x 5</td>\r\n        <td>{{bench40 | number: '1.0-0'}} x 5</td>\r\n        <td>{{squat40 | number: '1.0-0'}} x 5</td>\r\n      </tr>\r\n      <tr>\r\n        <td>{{ohp50 | number: '1.0-0'}} x 5</td>\r\n        <td>{{deadlift50 | number: '1.0-0'}} x 5</td>\r\n        <td>{{bench50 | number: '1.0-0'}} x 5</td>\r\n        <td>{{squat50 | number: '1.0-0'}} x 5</td>\r\n      </tr>\r\n      <tr>\r\n        <td>{{ohp60 | number: '1.0-0'}} x 3</td>\r\n        <td>{{deadlift60 | number: '1.0-0'}} x 3</td>\r\n        <td>{{bench60 | number: '1.0-0'}} x 3</td>\r\n        <td>{{squat60 | number: '1.0-0'}} x 3</td>\r\n      </tr>\r\n      <tr>\r\n        <th rowspan=\"3\">5/3/1</th>\r\n        <td>{{ohp40 | number: '1.0-0'}} x 5</td>\r\n        <td>{{deadlift40 | number: '1.0-0'}} x 5</td>\r\n        <td>{{bench40 | number: '1.0-0'}} x 5</td>\r\n        <td>{{squat40 | number: '1.0-0'}} x 5</td>\r\n      </tr>\r\n      <tr>\r\n        <td>{{ohp50 | number: '1.0-0'}} x 5</td>\r\n        <td>{{deadlift50 | number: '1.0-0'}} x 5</td>\r\n        <td>{{bench50 | number: '1.0-0'}} x 5</td>\r\n        <td>{{squat50 | number: '1.0-0'}} x 5</td>\r\n      </tr>\r\n      <tr>\r\n        <td>{{ohp60 | number: '1.0-0'}} x 5</td>\r\n        <td>{{deadlift60 | number: '1.0-0'}} x 5</td>\r\n        <td>{{bench60 | number: '1.0-0'}} x 5</td>\r\n        <td>{{squat60 | number: '1.0-0'}} x 5</td>\r\n      </tr>\r\n      <tr>\r\n        <th rowspan=\"2\">Assistance Exercises <br> \"Boring But Big\"</th>\r\n        <td>{{ohp50 | number: '1.0-0'}} x 10</td>\r\n        <td>{{deadlift50 | number: '1.0-0'}} x 10</td>\r\n        <td>{{bench50 | number: '1.0-0'}} x 10</td>\r\n        <td>{{squat50 | number: '1.0-0'}} x 10</td>\r\n      </tr>\r\n      <tr>\r\n        <td>Exercise of your choice.</td>\r\n        <td>Exercise of your choice.</td>\r\n        <td>Exercise of your choice.</td>\r\n        <td>Exercise of your choice.</td>\r\n      </tr>\r\n    </table>\r\n\r\n  </div>\r\n\r\n<div>\r\n"

/***/ }),

/***/ "../../../../../src/app/program-generator.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animations_fade_in_router_animation__ = __webpack_require__("../../../../../src/app/animations/fade-in-router.animation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animations_fade_in_modal_animation__ = __webpack_require__("../../../../../src/app/animations/fade-in-modal.animation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__program_list__ = __webpack_require__("../../../../../src/app/program-list.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramGeneratorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ProgramGeneratorComponent = (function () {
    function ProgramGeneratorComponent() {
        this.programs = __WEBPACK_IMPORTED_MODULE_3__program_list__["a" /* PROGRAMS */];
        this.program531State = 'out';
        this.program531Active = false;
    }
    ProgramGeneratorComponent.prototype.update1rmBench = function () {
        var _this = this;
        setTimeout(function () { _this.bench1rm = _this.benchWeight * (1 + _this.benchReps / 30); }, 200);
    };
    ProgramGeneratorComponent.prototype.update1rmSquat = function () {
        var _this = this;
        setTimeout(function () { _this.squat1rm = _this.squatWeight * (1 + _this.squatReps / 30); }, 200);
    };
    ProgramGeneratorComponent.prototype.update1rmDeadlift = function () {
        var _this = this;
        setTimeout(function () { _this.deadlift1rm = _this.deadliftWeight * (1 + _this.deadliftReps / 30); }, 200);
    };
    ProgramGeneratorComponent.prototype.update1rmOHP = function () {
        var _this = this;
        setTimeout(function () { _this.ohp1rm = _this.ohpWeight * (1 + _this.ohpReps / 30); }, 200);
    };
    ProgramGeneratorComponent.prototype.is531Active = function () {
        if (this.program531Active) {
            return "block";
        }
        else {
            return "none";
        }
    };
    ProgramGeneratorComponent.prototype.onSelect = function (program) {
        switch (program.name) {
            case "5/3/1": {
                this.program531State = 'in';
                this.program531Active = true;
                break;
            }
        }
        this.calcWeights();
        this.selectedProgram = program;
    };
    ProgramGeneratorComponent.prototype.calcWeights = function () {
        this.bench90of1rm = this.bench1rm * 0.90;
        this.squat90of1rm = this.squat1rm * 0.90;
        this.deadlift90of1rm = this.deadlift1rm * 0.90;
        this.ohp90of1rm = this.ohp1rm * 0.90;
        this.bench40 = this.bench90of1rm * 0.40;
        this.bench50 = this.bench90of1rm * 0.50;
        this.bench60 = this.bench90of1rm * 0.60;
        this.bench65 = this.bench90of1rm * 0.65;
        this.bench70 = this.bench90of1rm * 0.70;
        this.bench75 = this.bench90of1rm * 0.75;
        this.bench80 = this.bench90of1rm * 0.80;
        this.bench85 = this.bench90of1rm * 0.85;
        this.bench90 = this.bench90of1rm * 0.90;
        this.bench95 = this.bench90of1rm * 0.95;
        this.squat40 = this.squat90of1rm * 0.40;
        this.squat50 = this.squat90of1rm * 0.50;
        this.squat60 = this.squat90of1rm * 0.60;
        this.squat65 = this.squat90of1rm * 0.65;
        this.squat70 = this.squat90of1rm * 0.70;
        this.squat75 = this.squat90of1rm * 0.75;
        this.squat80 = this.squat90of1rm * 0.80;
        this.squat85 = this.squat90of1rm * 0.85;
        this.squat90 = this.squat90of1rm * 0.90;
        this.squat95 = this.squat90of1rm * 0.95;
        this.deadlift40 = this.deadlift90of1rm * 0.40;
        this.deadlift50 = this.deadlift90of1rm * 0.50;
        this.deadlift60 = this.deadlift90of1rm * 0.60;
        this.deadlift65 = this.deadlift90of1rm * 0.65;
        this.deadlift70 = this.deadlift90of1rm * 0.70;
        this.deadlift75 = this.deadlift90of1rm * 0.75;
        this.deadlift80 = this.deadlift90of1rm * 0.80;
        this.deadlift85 = this.deadlift90of1rm * 0.85;
        this.deadlift90 = this.deadlift90of1rm * 0.90;
        this.deadlift95 = this.deadlift90of1rm * 0.95;
        this.ohp40 = this.ohp90of1rm * 0.40;
        this.ohp50 = this.ohp90of1rm * 0.50;
        this.ohp60 = this.ohp90of1rm * 0.60;
        this.ohp65 = this.ohp90of1rm * 0.65;
        this.ohp70 = this.ohp90of1rm * 0.70;
        this.ohp75 = this.ohp90of1rm * 0.75;
        this.ohp80 = this.ohp90of1rm * 0.80;
        this.ohp85 = this.ohp90of1rm * 0.85;
        this.ohp90 = this.ohp90of1rm * 0.90;
        this.ohp95 = this.ohp90of1rm * 0.95;
    };
    return ProgramGeneratorComponent;
}());
ProgramGeneratorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'program-gen-page',
        template: __webpack_require__("../../../../../src/app/program-generator.component.html"),
        styles: [__webpack_require__("../../../../../src/app/program-generator.component.css")],
        animations: [__WEBPACK_IMPORTED_MODULE_1__animations_fade_in_router_animation__["a" /* fadeInRouterAnimation */], __WEBPACK_IMPORTED_MODULE_2__animations_fade_in_modal_animation__["a" /* fadeInModalAnimation */]],
        host: { '[@fadeInRouterAnimation]': 'true',
            '[style.display]': "'block'" }
    })
], ProgramGeneratorComponent);

//# sourceMappingURL=program-generator.component.js.map

/***/ }),

/***/ "../../../../../src/app/program-list.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PROGRAMS; });
var PROGRAMS = [
    { id: 1, name: 'Starting Strength', description: 'asdf asdf f fsdaf' },
    { id: 2, name: 'Stronglifts 5x5', description: 'asdfasdf asdf f fsdaf' },
    { id: 3, name: 'Madcow 5x5', description: 'asdf asdf f fsasddaf' },
    { id: 4, name: 'The Texas Method', description: 'asdf fdsfasdf f fsdaf' },
    { id: 5, name: 'Korte\'s 3x3', description: 'asdfasdf asdf f fsdaf' },
    { id: 6, name: '5/3/1', description: 'asdf asdf asdff fsdaf' },
    { id: 7, name: 'Beyond 5/3/1', description: 'asdasdff asadfsdf f fsdaf' },
    { id: 8, name: 'Sheiko', description: 'asdf asdf f fsdaf' },
    { id: 9, name: 'Cube', description: 'asdf asdfasdf f fasdfasdfsasddaf' },
    { id: 10, name: 'Smolov Jr', description: 'asdasdff asdf fasdf fsdaf' }
];
//# sourceMappingURL=program-list.js.map

/***/ }),

/***/ "../../../../../src/app/track-progress.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\r\n  max-width: 1800px;\r\n  margin: 0 auto;\r\n  padding: 10px 10px;\r\n  clear: both;\r\n    font-family: 'nunito';\r\n}\r\n\r\n.newday {\r\n  margin: 20px auto 100px;\r\n  padding: 10px;\r\n  width: 600px;\r\n  height: 40px;\r\n  background-color: rgba(19, 73, 81, 1);\r\n  border-radius: 4px;\r\n  text-align: center;\r\n  vertical-align: middle;\r\n  line-height: 35px;\r\n  font-size: 30px;\r\n  border: 1px solid black;\r\n  color: white\r\n}\r\n\r\n.newday:hover {\r\n\r\n  border: 1px solid white;\r\n}\r\n\r\n.newday:active {\r\n  background-color: rgba(9, 63, 71, 1);\r\n  padding: 10px;\r\n  box-shadow: 4px 4px 3px rgba(0, 0, 0, 0.5) inset;\r\n}\r\n\r\n\r\n.day {\r\n  margin: 20px auto 20px;\r\n  padding: 25px 10px 10px 10px;\r\n  width: 600px;\r\n  min-height: 50px;\r\n  background-color: rgba(19, 73, 81, 0.8);\r\n  border-radius: 4px;\r\n  line-height: 10px;\r\n  font-size: 20px;\r\n  border: 1px solid black;\r\n}\r\n\r\n\r\nh5 {\r\n  padding: 0;\r\n  font-weight: normal;\r\n  margin-top: -6px;\r\n  position: absolute;\r\n}\r\n\r\nh3 {\r\n  margin: -9px 2px 2px 6px;\r\n  position: absolute;\r\n  color: white;\r\n}\r\n\r\nh4 {\r\n  padding: 0;\r\n  font-weight: normal;\r\n  margin: 0;\r\n  position: absolute;\r\n}\r\n.newExercise {\r\n  margin: 15px 5px 5px 5px;\r\n  padding: 8px 5px 8px 20px;\r\n  width: 200px;\r\n  height: 18px;\r\n  background-color: #C0C0C0;\r\n  border-radius: 2px;\r\n  box-shadow: 4px 4px 3px rgba(0, 0, 0, 0.6);\r\n  color: black;\r\n  border: 1px solid grey;\r\n}\r\n\r\n.trans-layer {\r\n  width: 225px;\r\n  height: 34px;\r\n  background-color: #C0C0C0;\r\n  border-radius: 2px;\r\n  box-shadow: 4px 4px 3px rgba(0, 0, 0, 0.6);\r\n  color: black;\r\n  border: 1px solid red;\r\n  position: absolute;\r\n  opacity: 0;\r\n  margin-left: -21px;\r\n  margin-top: -9px;\r\n}\r\n\r\n.newExercise:hover {\r\n  border: 1px solid white;\r\n}\r\n\r\n.newExercise:active {\r\n  background-color: #9b9b9b;\r\n  border: 1px solid white;\r\n  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.5) inset;\r\n}\r\n\r\n.dropdown-menu {\r\n  display: none;\r\n  background-color: #C0C0C0;\r\n  border-radius: 3px;\r\n  box-shadow: 10px 10px 6px rgba(0, 0, 0, 0.7);\r\n  z-index: 10;\r\n  float: left;\r\n  position: relative;\r\n  margin: 0 0 10px 8px;\r\n  width: 215px;\r\n  text-align: center;\r\n  border: 1px solid black;\r\n}\r\n\r\n.submenu-arms, .submenu-shoulders, .submenu-chest, .submenu-back, .submenu-core, .submenu-lowerbody {\r\n  display: none;\r\n  background-color: #C0C0C0;\r\n  border-radius: 3px;\r\n  box-shadow: 10px 10px 6px rgba(0, 0, 0, 0.7);\r\n  z-index: 10;\r\n  position: relative;\r\n  float: left;\r\n  margin-top: 10px;\r\n  width: 205px;\r\n  margin: 0 0 10px 8px;\r\n  text-align: center;\r\n  border: 1px solid black;\r\n}\r\n\r\n.openMenu, .openSubMenu {\r\n  display: block;\r\n}\r\n\r\n\r\n.bodypart{\r\n  padding: 10px;\r\n  border-bottom: 1px solid #e0e0e0;\r\n}\r\n\r\n.bodypart:hover {\r\n  background-color: #9b9b9b;\r\n  border-radius: 1px;\r\n  padding: 10px;\r\n}\r\n\r\n\r\n.exercise{\r\n  padding: 15px;\r\n  border-bottom: 1px solid #e0e0e0;\r\n}\r\n\r\n.exercise:hover {\r\n  border-radius: 1px;\r\n  padding: 15px;\r\n  background-color: #9b9b9b;\r\n}\r\n\r\n.dropdown-icon {\r\n    margin-right: 7px;\r\n}\r\n\r\nhr {\r\n  margin: 1px 0;\r\n}\r\n\r\n.exercise:active {\r\n  background-color: #828282;\r\n  padding: 15px;\r\n  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.5) inset;\r\n}\r\n\r\n.menuContainer {\r\n}\n\r\n.menuActive {\r\n  background-color: #9b9b9b;\r\n  border: 1px solid #000000;\r\n  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.5) inset;\r\n}\r\n\r\n.subMenuActive {\r\n  background-color: #9b9b9b;\r\n  padding: 10px;\r\n  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.5) inset;\r\n  border-radius: 2px;\r\n}\r\n\r\n.addedExercises {\r\n  background-color: #C0C0C0;\r\n  border-radius: 2px;\r\n  box-shadow: 4px 4px 3px rgba(0, 0, 0, 0.6);\r\n  margin: 15px 5px 5px 5px;\r\n  padding: 20px;\r\n  position: relative;\r\n  color: black;\r\n  border: 1px solid grey;\r\n}\r\n\r\n.deleteDay {\r\n  color: black;\r\n  float: right;\r\n  margin-top: -28px;\r\n  margin-right: -11px;\r\n}\r\n\r\n.deleteDay:hover {\r\n  color: red;\r\n}\r\n\r\n\r\n.deleteExercise {\r\n  max-height: 15px;\r\n  float: right;\r\n  margin-top: -10px;\r\n  margin-right: -13px;\r\n  border-radius: 4px;\r\n\r\n}\r\n\r\n.deleteExercise:hover {\r\n  color: red;\r\n}\r\n\r\n\r\n\r\n.details {\r\n  width: 250px;\r\n  height: 250px;\r\n  background-color: #C0C0C0;\r\n  float: left;\r\n  z-index: 10;\r\n  position: relative;\r\n  border-radius: 3px;\r\n  margin-left: 180px;\r\n  display: none;\r\n  border: 1px solid black;\r\n  box-shadow: 10px 10px 6px rgba(0, 0, 0, 0.7);\r\n}\r\n\r\n.detailsActive {\r\n  display: inline;\r\n}\r\n\r\ninput {\r\n  width: 40px;\r\n  border-radius: 3px;\r\n}\r\n\r\nspan {\r\n  text-align: center;\r\n  line-height: 20px;\r\n  margin-bottom: 40px;\r\n}\r\n\r\nlabel {\r\n line-height: 40px;\r\n}\r\nform {\r\n  padding: 15px 10px;\r\n  text-align: center;\r\n}\r\n\r\n.submit {\r\n  width: 100px;\r\n  background-color: #222629;\r\n  border-radius: 3px;\r\n  border: 1px solid black;\r\n  color: white;\r\n  padding: 15px;\r\n  margin: 10px auto;\r\n}\r\n\r\n.submit:hover {\r\n  box-shadow: 2px 2px 10px 1px grey inset;\r\n}\r\n\r\n.closeDetails {\r\n  float: right;\r\n  margin-top: -18px;\r\n  margin-right: -11px;\r\n}\r\n\r\n.closeDetails:hover {\r\n  color: red;\r\n}\r\n\r\n.speech {\r\n  top: 113px;\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n  color: black;\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  width: 100px;\r\n  float: right;\r\n  padding: 10px;\r\n  margin-right: 15px;\r\n  background: #edad00; /* default background for browsers without gradient support */\r\n  /* css3 */\r\n  background: linear-gradient(#edad00, #ffca3a);\r\n  border-radius: 5px;\r\n}\r\n\r\n.speech:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: -20px; /* value = - border-top-width - border-bottom-width */\r\n  right: 80px; /* controls horizontal position */\r\n  bottom: auto;\r\n  left: auto;\r\n  border-width: 20px 0 0 20px; /* vary these values to change the angle of the vertex */\r\n  border-color: transparent #edad00;\r\n  border-style: solid;\r\n  /* reduce the damage in FF3.0 */\r\n  display:block;\r\n  width:0;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/track-progress.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <p *ngIf=\"!loggedIn\" class=\"speech\"> Login to save progress </p>\r\n  <div class=\"newday\" (click)=\"addNewDay()\"> <fa name=\"plus\"></fa>Add a new day</div>\r\n\r\n  <div *ngFor=\"let day of days; let i = index\" class=\"day\" [@dayListAnimation]=\"''\">\r\n    <h3> {{day.date | date}} </h3>\r\n    <div class=\"deleteDay\" (click)=\"deleteDay(i)\"><fa name=\"window-close\" size=\"2x\"></fa></div>\r\n\r\n    <div *ngFor=\"let exercise of days[i].exercises; let j = index\" class=\"addedExercises\">\r\n      <div class=\"deleteExercise\" (click)=\"deleteExercise(i, j)\"><fa name=\"window-close\"></fa></div>\r\n      <h5> {{exercise.name}}: <strong>{{exercise.sets}}</strong> set(s) of <strong>{{exercise.reps}}</strong> rep(s) at <strong>{{exercise.weight}}</strong> lbs </h5>\r\n    </div>\r\n\r\n    <div class=\"newExercise\"><h4><fa name=\"bars\" class=\"dropdown-icon\"></fa>Add new exercise</h4>\r\n      <div class=\"trans-layer\"  (click)=\"toggleMenu(i)\"></div>\r\n    </div>\r\n\r\n      <div class=\"dropdown-menu\">\r\n        <div class=\"bodypart\" (click)=\"toggleSubMenu(i, 'submenu-arms')\"> Arms <fa name=\"angle-right\" class=\"arrow-icon\"></fa> </div>\r\n        <div class=\"bodypart\" (click)=\"toggleSubMenu(i, 'submenu-shoulders')\"> Shoulders <fa name=\"angle-right\" class=\"arrow-icon\"></fa> </div>\r\n        <div class=\"bodypart\" (click)=\"toggleSubMenu(i, 'submenu-chest')\"> Chest <fa name=\"angle-right\" class=\"arrow-icon\"></fa> </div>\r\n        <div class=\"bodypart\" (click)=\"toggleSubMenu(i, 'submenu-back')\"> Back <fa name=\"angle-right\" class=\"arrow-icon\"></fa> </div>\r\n        <div class=\"bodypart\" (click)=\"toggleSubMenu(i, 'submenu-core')\"> Core <fa name=\"angle-right\" class=\"arrow-icon\"></fa> </div>\r\n        <div class=\"bodypart\" (click)=\"toggleSubMenu(i, 'submenu-lowerbody')\"> Lower Body <fa name=\"angle-right\" class=\"arrow-icon\"></fa> </div>\r\n      </div>\r\n\r\n      <div class=\"submenu-arms\">\r\n        <div class=\"exercise\" (click)=\"openDetails(i, 'Standing Curls')\"> Standing Curls </div>\r\n        <div class=\"exercise\" (click)=\"openDetails(i, 'Hammer Curls')\"> Hammer Curls </div>\r\n        <div class=\"exercise\" (click)=\"openDetails(i, 'Spider Curls')\"> Spider Curls </div>\r\n        <div class=\"exercise\" (click)=\"openDetails(i, 'Seated Curls')\"> Seated Curls </div>\r\n      </div>\r\n\r\n      <div class=\"submenu-shoulders\">\r\n        <div class=\"exercise\" (click)=\"openDetails(i, 'OHP')\"> OHP </div>\r\n        <div class=\"exercise\" (click)=\"openDetails(i, 'Dumbbell Curls')\"> Dumbbell Curls </div>\r\n        <div class=\"exercise\" (click)=\"openDetails(i, 'Push Press')\"> Push Press</div>\r\n        <div class=\"exercise\" (click)=\"openDetails(i, 'Lateral Raises')\"> Lateral Raises </div>\r\n        <div class=\"exercise\" (click)=\"openDetails(i, 'Face Pulls')\"> Face Pulls </div>\r\n      </div>\r\n\r\n      <div class=\"submenu-chest\">\r\n        <div class=\"exercise\" (click)=\"openDetails(i, 'Bench Press')\"> Bench Press </div>\r\n        <div class=\"exercise\" (click)=\"openDetails(i, 'Incline Bench Press')\"> Incline Bench Press </div>\r\n        <div class=\"exercise\" (click)=\"openDetails(i, 'Decline Bench Press')\"> Decline Bench Press </div>\r\n      </div>\r\n\r\n      <div class=\"submenu-back\">\r\n        <div class=\"exercise\" (click)=\"openDetails(i, 'Pull Up')\"> Pull Ups </div>\r\n        <div class=\"exercise\" (click)=\"openDetails(i, 'Chin Ups')\"> Chin Ups </div>\r\n        <div class=\"exercise\" (click)=\"openDetails(i, 'Lateral Pulldown')\"> Lateral Pulldown </div>\r\n        <div class=\"exercise\" (click)=\"openDetails(i, 'Barbell Rows')\"> Barbell Rows </div>\r\n        <div class=\"exercise\" (click)=\"openDetails(i, 'Dumbbel Rows')\"> Dumbbel Rows </div>\r\n      </div>\r\n\r\n      <div class=\"submenu-core\">\r\n        <div class=\"exercise\" (click)=\"openDetails(i, 'Ab Wheel')\"> Ab Wheel </div>\r\n        <div class=\"exercise\" (click)=\"openDetails(i, 'Crunches')\"> Crunches </div>\r\n        <div class=\"exercise\" (click)=\"openDetails(i, 'Planks')\"> Planks </div>\r\n        <div class=\"exercise\" (click)=\"openDetails(i, 'Side Planks')\"> Side Planks </div>\r\n      </div>\r\n\r\n      <div class=\"submenu-lowerbody\">\r\n        <div class=\"exercise\" (click)=\"openDetails(i, 'Squats')\"> Squats </div>\r\n        <div class=\"exercise\" (click)=\"openDetails(i, 'Deadlifts')\"> Deadlifts </div>\r\n        <div class=\"exercise\" (click)=\"openDetails(i, 'Leg press')\"> Leg press </div>\r\n        <div class=\"exercise\" (click)=\"openDetails(i, 'Hamstring Curls')\"> Hamstring Curls </div>\r\n        <div class=\"exercise\" (click)=\"openDetails(i, 'Leg curls')\"> Leg curls </div>\r\n      </div>\r\n\r\n    <div class=\"details\">\r\n      <form>\r\n        <div class=\"closeDetails\" (click)=\"closeDetailsMenu()\"> <fa name=\"window-close\" size=\"2x\"></fa> </div>\r\n        <span>Enter sets, reps, and weight.<br></span>\r\n        <label>Nbr. of sets: </label><input #sets><br>\r\n        <label>Nbr. of reps: </label><input #reps><br>\r\n        <label>Weight: </label><input #weight>\r\n        <div class=\"submit\" (click)=\"submitDetails(i, sets, reps, weight)\"> Submit </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/track-progress.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animations_fade_in_router_animation__ = __webpack_require__("../../../../../src/app/animations/fade-in-router.animation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animations_day_list_animation__ = __webpack_require__("../../../../../src/app/animations/day-list.animation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__day__ = __webpack_require__("../../../../../src/app/day.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__exercise__ = __webpack_require__("../../../../../src/app/exercise.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__day_service__ = __webpack_require__("../../../../../src/app/day.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackProgressComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TrackProgressComponent = (function () {
    function TrackProgressComponent(eref, dayService, authService) {
        this.eref = eref;
        this.dayService = dayService;
        this.authService = authService;
        this.totalNumDays = 1;
        this.days = [];
        this.detailsMenuInputValue = null;
        this.loggedIn = false;
    }
    TrackProgressComponent.prototype.onClick = function (event) {
        var test = document.getElementsByClassName('bodypart');
        var targ = event.target.attributes.class.nodeValue;
        var openedMenus = document.getElementsByClassName("openMenu");
        var openedSubMenus = document.getElementsByClassName("openSubMenu");
        if (openedMenus.length > 0
            && targ !== "bodypart"
            && targ !== "newExercise menuActive"
            && targ !== "bodypart subMenuActive"
            && targ !== "newExercise"
            && targ !== "trans-layer") {
            document.getElementsByClassName('openMenu')[0].classList.remove('openMenu');
            document.getElementsByClassName('menuActive')[0].classList.remove('menuActive');
            if (openedSubMenus.length > 0) {
                document.getElementsByClassName('openSubMenu')[0].classList.remove('openSubMenu');
                document.getElementsByClassName('subMenuActive')[0].classList.remove('subMenuActive');
            }
        }
    };
    TrackProgressComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.authService.isLoggedIn()) {
            this.loggedIn = true;
            this.dayService.getDays().subscribe(function (days) { return _this.days = days; }, function (error) { return console.error(error); });
        }
    };
    TrackProgressComponent.prototype.addNewDay = function () {
        if (this.authService.isLoggedIn()) {
            this.dayService.addNewDay().subscribe(function (data) { return console.log(data.message); }, function (error) { return console.error(error); });
        }
        else {
            var exercise = new __WEBPACK_IMPORTED_MODULE_4__exercise__["a" /* Exercise */]('exampleExercise', 2, 10, 185);
            this.days.unshift(new __WEBPACK_IMPORTED_MODULE_3__day__["a" /* Day */](new Date(), exercise));
        }
    };
    TrackProgressComponent.prototype.deleteDay = function (index) {
        if (this.authService.isLoggedIn()) {
            this.dayService.deleteDay(index).subscribe(function (data) { return console.log(data.message); }, function (error) { return console.error(error); });
        }
        else {
            this.days.splice(index, 1);
        }
    };
    TrackProgressComponent.prototype.deleteExercise = function (dayIndex, exerciseIndex) {
        if (this.authService.isLoggedIn()) {
            this.dayService.deleteExercise(dayIndex, exerciseIndex).subscribe(function (data) { return console.log(data.message); }, function (error) { return console.error(error); });
        }
        else {
            this.days[dayIndex].exercises.splice(exerciseIndex, 1);
        }
    };
    TrackProgressComponent.prototype.submitDetails = function (index, sets, reps, weight) {
        if (sets.value !== '' && reps.value !== '' && weight.value !== '') {
            if (this.authService.isLoggedIn()) {
                this.dayService.addExercise(index, this.exerciseToBeAdded, Number(sets.value), Number(reps.value), Number(weight.value))
                    .subscribe(function (data) { return console.log(data.message); }, function (error) { return console.error(error); });
            }
            else {
                this.days[index].exercises.push(new __WEBPACK_IMPORTED_MODULE_4__exercise__["a" /* Exercise */](this.exerciseToBeAdded, Number(sets.value), Number(reps.value), Number(weight.value)));
            }
            document.getElementsByClassName('details')[index].classList.remove('detailsActive');
            sets.value = null;
            reps.value = null;
            weight.value = null;
        }
    };
    TrackProgressComponent.prototype.closeDetailsMenu = function () {
        document.getElementsByClassName('detailsActive')[0].classList.remove('detailsActive');
    };
    TrackProgressComponent.prototype.openDetails = function (index, exerciseName) {
        this.exerciseToBeAdded = exerciseName;
        document.getElementsByClassName('subMenuActive')[0].classList.remove('subMenuActive');
        document.getElementsByClassName('openSubMenu')[0].classList.remove('openSubMenu');
        document.getElementsByClassName('details')[index].classList.toggle('detailsActive');
    };
    TrackProgressComponent.prototype.toggleMenu = function (index) {
        var openedMenus = document.getElementsByClassName('openMenu');
        var openedSubMenus = document.getElementsByClassName('openSubMenu');
        var openedDetailsMenu = document.getElementsByClassName('detailsActive');
        if (openedMenus.length > 0) {
            document.getElementsByClassName('menuActive')[0].classList.remove('menuActive');
            document.getElementsByClassName('openMenu')[0].classList.remove('openMenu');
        }
        if (openedSubMenus.length > 0) {
            document.getElementsByClassName('subMenuActive')[0].classList.remove('subMenuActive');
            document.getElementsByClassName('openSubMenu')[0].classList.remove('openSubMenu');
        }
        if (openedDetailsMenu.length > 0) {
            document.getElementsByClassName('detailsActive')[0].classList.remove('detailsActive');
        }
        document.getElementsByClassName('dropdown-menu')[index].classList.toggle('openMenu');
        document.getElementsByClassName('newExercise')[index].classList.toggle('menuActive');
    };
    TrackProgressComponent.prototype.toggleSubMenu = function (index, subMenu) {
        var openedSubMenus = document.getElementsByClassName('openSubMenu');
        if (openedSubMenus.length > 0) {
            document.getElementsByClassName('subMenuActive')[0].classList.remove('subMenuActive');
            document.getElementsByClassName('openSubMenu')[0].classList.remove('openSubMenu');
        }
        document.getElementsByClassName(subMenu)[index].classList.toggle('openSubMenu');
        switch (subMenu) {
            case "submenu-arms": {
                document.getElementsByClassName('bodypart')[index * 6 + 0].classList.toggle('subMenuActive');
                break;
            }
            case "submenu-shoulders": {
                document.getElementsByClassName('bodypart')[index * 6 + 1].classList.toggle('subMenuActive');
                break;
            }
            case "submenu-chest": {
                document.getElementsByClassName('bodypart')[index * 6 + 2].classList.toggle('subMenuActive');
                break;
            }
            case "submenu-back": {
                document.getElementsByClassName('bodypart')[index * 6 + 3].classList.toggle('subMenuActive');
                break;
            }
            case "submenu-core": {
                document.getElementsByClassName('bodypart')[index * 6 + 4].classList.toggle('subMenuActive');
                break;
            }
            case "submenu-lowerbody": {
                document.getElementsByClassName('bodypart')[index * 6 + 5].classList.toggle('subMenuActive');
                break;
            }
        }
    };
    return TrackProgressComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], TrackProgressComponent.prototype, "index", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('document:click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TrackProgressComponent.prototype, "onClick", null);
TrackProgressComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'track-progress-page',
        template: __webpack_require__("../../../../../src/app/track-progress.component.html"),
        styles: [__webpack_require__("../../../../../src/app/track-progress.component.css")],
        animations: [__WEBPACK_IMPORTED_MODULE_1__animations_fade_in_router_animation__["a" /* fadeInRouterAnimation */], __WEBPACK_IMPORTED_MODULE_2__animations_day_list_animation__["a" /* dayListAnimation */]],
        host: { '[@fadeInRouterAnimation]': 'true',
            '[style.display]': "'block'" }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__day_service__["a" /* DayService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__day_service__["a" /* DayService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__auth_service__["a" /* AuthService */]) === "function" && _c || Object])
], TrackProgressComponent);

var _a, _b, _c;
//# sourceMappingURL=track-progress.component.js.map

/***/ }),

/***/ "../../../../../src/app/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(username, password, email) {
        this.username = username;
        this.password = password;
        this.email = email;
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map