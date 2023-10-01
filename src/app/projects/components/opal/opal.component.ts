import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectHeaderComponent } from 'src/app/shared/components/project-header/project-header.component';

@Component({
  selector: 'app-opal',
  standalone: true,
  imports: [CommonModule, ProjectHeaderComponent],
  templateUrl: './opal.component.html',
  styleUrls: ['./opal.component.scss'],
})
export class OpalComponent {
  tools = [
    { name: 'MongoDB', toolsvg: 'mongodb.svg' },
    { name: 'Express', toolsvg: 'express.svg' },
    { name: 'Angular', toolsvg: 'angular.svg' },
    { name: 'NodeJs', toolsvg: 'nodedotjs.svg' },
  ];
}
