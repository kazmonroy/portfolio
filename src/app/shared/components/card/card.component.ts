import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsModule } from 'src/app/icons/icons.module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, IconsModule, RouterModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() id!: number;
  @Input() name!: string;
  @Input() tools!: string[];
  @Input() bg!: string;
  @Input() path!: string;
  @Input() thumb!: string;
}
