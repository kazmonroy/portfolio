import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModeToggleModule } from '../mode-toggle/mode-toggle.module';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, ModeToggleModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {}
