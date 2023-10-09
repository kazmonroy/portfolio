import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface ColorRole {
  class: string;
  bg: string;
  title: string;
  roles: string[];
  hexcode?: string;
}
@Component({
  selector: 'app-color-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './color-card.component.html',
  styleUrls: ['./color-card.component.scss'],
})
export class ColorCardComponent {
  @Input() colorRole!: ColorRole;
}
