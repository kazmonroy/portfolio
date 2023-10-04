import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModeToggleComponent } from '../mode-toggle/components/mode-toggle/mode-toggle.component';
import { ModeToggleModule } from '../mode-toggle/mode-toggle.module';
import { ShowcaseComponent } from '../showcase/showcase.component';
import { ToolsComponent } from '../tools/tools.component';
import { ProjectsComponent } from '../projects/projects.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ModeToggleModule, ShowcaseComponent, ToolsComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {}
