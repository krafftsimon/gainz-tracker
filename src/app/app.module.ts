import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DropdownModule } from 'ngx-dropdown';
import { HttpModule } from '@angular/http';
import { ChartsModule } from 'ng2-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome'

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { ProgramGeneratorComponent } from './program-generator.component';
import { TrackProgressComponent } from './track-progress.component';
import { AppRoutingModule } from './app-routing.module';
import { GraphComponent } from './graph.component';

import { DayService } from './day.service';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProgramGeneratorComponent,
    TrackProgressComponent,
    GraphComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    DropdownModule,
    ReactiveFormsModule,
    HttpModule,
    ChartsModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule
  ],
  providers: [DayService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
