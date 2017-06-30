import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DropdownModule } from 'ngx-dropdown';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { ProgramGeneratorComponent } from './program-generator.component';
import { TrackProgressComponent } from './track-progress.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProgramGeneratorComponent,
    TrackProgressComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
