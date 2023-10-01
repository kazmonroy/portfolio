import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-header.component.html',
  styleUrls: ['./project-header.component.scss'],
})
export class ProjectHeaderComponent {
  @Input() projectName!: string;

  @Input() tools!: { name: string; toolsvg: string }[];
}
