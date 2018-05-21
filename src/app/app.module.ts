import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome'


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProgramGeneratorComponent } from './program-generator/program-generator.component';
import { TrackProgressComponent } from './track-progress/track-progress.component';
import { AppRoutingModule } from './app-routing.module';
import { GraphComponent } from './graph/graph.component';

import { DayService } from './services/day.service';
import { AuthService } from './services/auth.service';

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
    ReactiveFormsModule,
    HttpClientModule,
    ChartsModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
  ],
  providers: [DayService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
