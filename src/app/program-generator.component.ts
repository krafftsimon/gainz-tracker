import { Component } from '@angular/core';

import { Program } from './program';
import { PROGRAMS } from './program-list'

@Component({
  selector: 'program-gen-page',
  templateUrl: './program-generator.component.html',
  styleUrls: ['./program-generator.component.css']
})
export class ProgramGeneratorComponent {
  selectedProgram: Program;
  programs = PROGRAMS;
  onSelect(program: Program): void {
    this.selectedProgram = program;
  }
}
