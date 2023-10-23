import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeaderComponent } from '../section-header/section-header.component';

@Component({
  selector: 'app-typography',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent],
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.scss'],
})
export class TypographyComponent {
  @Input() font!: string;
}
