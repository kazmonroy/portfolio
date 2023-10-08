import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsModule } from 'src/app/icons/icons.module';

@Component({
  selector: 'app-mac-controls',
  standalone: true,
  imports: [CommonModule, IconsModule],
  templateUrl: './mac-controls.component.html',
  styleUrls: ['./mac-controls.component.scss'],
})
export class MacControlsComponent {
  @Input() figma!: boolean;
}
