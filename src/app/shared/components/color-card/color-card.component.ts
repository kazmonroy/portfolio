import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';

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
  private dataService = inject(DataService);

  textMessage: any;

  constructor() {}

  ngOnInit(): void {}

  notification(msg: string) {
    this.textMessage = `${msg} copied!`;

    setTimeout(() => {
      this.textMessage = '';
    }, 1000);
  }

  copyString(hexcode: string) {
    navigator.clipboard.writeText(hexcode);
    this.dataService.updateHexcode(hexcode);
    this.notification('Text');

    setTimeout(() => {
      this.dataService.updateHexcode(null);
    }, 2000);
  }
}
