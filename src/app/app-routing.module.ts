import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { ProgramGeneratorComponent } from './program-generator.component';
import { TrackProgressComponent } from './track-progress.component';
import { GraphComponent } from './graph.component'

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'program-generator',  component: ProgramGeneratorComponent },
  { path: 'track-progress', component: TrackProgressComponent },
  { path: 'home',     component: HomeComponent },
  { path: 'graph', component: GraphComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
