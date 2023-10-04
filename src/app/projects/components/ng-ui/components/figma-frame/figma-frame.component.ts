import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-figma-frame',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './figma-frame.component.html',
  styleUrls: ['./figma-frame.component.scss'],
})
export class FigmaFrameComponent {
  @Input() component!: string;
}
