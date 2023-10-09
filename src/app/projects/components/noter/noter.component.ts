import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsModule } from 'src/app/icons/icons.module';
import { DataService } from 'src/app/shared/services/data.service';
import { ModeToggleService } from 'src/app/mode-toggle/services/mode-toggle.service';
import { ProjectHeaderComponent } from 'src/app/shared/components/project-header/project-header.component';
import { NoterService } from './services/noter.service';
import { ColorCardComponent } from 'src/app/shared/components/color-card/color-card.component';

@Component({
  selector: 'app-noter',
  standalone: true,
  imports: [
    CommonModule,
    IconsModule,
    ProjectHeaderComponent,
    ColorCardComponent,
  ],
  templateUrl: './noter.component.html',
  styleUrls: ['./noter.component.scss'],
})
export class NoterComponent {
  private modeService = inject(ModeToggleService);
  private noterService = inject(NoterService);
  currentMode = this.modeService.modeChanged$;

  mode = true;

  colorMapping = this.noterService.colorMapping;
  colorRoles = this.noterService.colorRoles;

  tools = [
    { name: 'Figma', toolsvg: 'figma.svg' },
    { name: 'Angular', toolsvg: 'angular.svg' },
    { name: 'Sass', toolsvg: 'sass.svg' },
    { name: 'Vercel', toolsvg: 'vercel.svg' },
  ];

  toggleMode() {
    this.mode = !this.mode;
  }
}
