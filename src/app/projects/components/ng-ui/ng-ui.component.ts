import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectHeaderComponent } from 'src/app/shared/components/project-header/project-header.component';
import { IconsModule } from 'src/app/icons/icons.module';

@Component({
  selector: 'app-ng-ui',
  standalone: true,
  imports: [CommonModule, IconsModule, ProjectHeaderComponent],
  templateUrl: './ng-ui.component.html',
  styleUrls: ['./ng-ui.component.scss'],
})
export class NgUiComponent {
  tools = [
    { name: 'Figma', toolsvg: 'figma.svg' },
    { name: 'Angular', toolsvg: 'angular.svg' },
    { name: 'Sass', toolsvg: 'sass.svg' },
    { name: 'Vercel', toolsvg: 'vercel.svg' },
  ];
}
