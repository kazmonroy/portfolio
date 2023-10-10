import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { ToolsComponent } from 'src/app/tools/tools.component';

@Component({
  selector: 'app-project-header',
  standalone: true,
  imports: [CommonModule, ToolsComponent],
  templateUrl: './project-header.component.html',
  styleUrls: ['./project-header.component.scss'],
})
export class ProjectHeaderComponent {
  @Input() projectName!: string;

  @Input() tools!: { name: string; toolsvg: string }[];
}
