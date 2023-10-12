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

  todaysDate: Date = new Date();
  textMessage: any;
  msgHideAndShow: boolean = false;
  constructor() {
    setInterval(() => {
      this.todaysDate = new Date();
    }, 1);
  }

  ngOnInit(): void {
    console.log(this.todaysDate);
  }

  notification(msg: string) {
    this.textMessage = `${msg} copied!`;
    this.msgHideAndShow = true;

    setTimeout(() => {
      this.textMessage = '';

      this.msgHideAndShow = false;
    }, 1000);
  }

  copyString(hexcode: string) {
    navigator.clipboard.writeText(hexcode);
    this.dataService.updateHexcode(hexcode);
    this.notification('Text');
    console.log(hexcode + 'copied!');

    setTimeout(() => {
      this.dataService.updateHexcode(null);
    }, 2000);
  }
}
