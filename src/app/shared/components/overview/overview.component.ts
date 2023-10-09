import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MacControlsComponent } from '../mac-controls/mac-controls.component';
import { IconsModule } from 'src/app/icons/icons.module';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [CommonModule, MacControlsComponent, IconsModule],
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent {
  @Input() imgPath!: string;
  @Input() altText!: string;

  @Input() links!: {
    demo: string;
    projectIcon: string;
    repo: string;
    icon: string;
  };
}
