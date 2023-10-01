import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsModule } from 'src/app/icons/icons.module';
import { DataService } from 'src/app/shared/services/data.service';
import { ModeToggleService } from 'src/app/mode-toggle/services/mode-toggle.service';
import { ProjectHeaderComponent } from 'src/app/shared/components/project-header/project-header.component';

@Component({
  selector: 'app-noter',
  standalone: true,
  imports: [CommonModule, IconsModule, ProjectHeaderComponent],
  templateUrl: './noter.component.html',
  styleUrls: ['./noter.component.scss'],
})
export class NoterComponent {
  private dataService = inject(DataService);
  private modeService = inject(ModeToggleService);
  currentMode = this.modeService.modeChanged$;

  mode = true;

  colorMapping = this.dataService.noter.colorMapping;
  colorRoles = this.dataService.noter.colorRoles;

  tools = [
    { name: 'Figma', toolsvg: 'figma.svg' },
    { name: 'Angular', toolsvg: 'angular.svg' },
    { name: 'Vercel', toolsvg: 'vercel.svg' },
  ];

  toggleMode() {
    this.mode = !this.mode;
  }
}
