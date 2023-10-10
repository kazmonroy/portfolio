import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolsService } from './tools.service';

@Component({
  selector: 'app-tools',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss'],
})
export class ToolsComponent {
  private toolsService = inject(ToolsService);

  @Input() tools: { name: string; toolsvg: string }[] = this.toolsService.tools;
}
