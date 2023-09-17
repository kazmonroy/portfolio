import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModeToggleComponent } from '../mode-toggle/components/mode-toggle/mode-toggle.component';
import { ModeToggleModule } from '../mode-toggle/mode-toggle.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ModeToggleModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {}
