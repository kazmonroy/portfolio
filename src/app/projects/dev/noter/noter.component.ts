import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsModule } from 'src/app/icons/icons.module';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-noter',
  standalone: true,
  imports: [CommonModule, IconsModule],
  templateUrl: './noter.component.html',
  styleUrls: ['./noter.component.scss'],
})
export class NoterComponent {
  private dataService = inject(DataService);

  mode = true;

  colorMapping = this.dataService.noter.colorMapping;
  colorRoles = this.dataService.noter.colorRoles;

  toggleMode() {
    this.mode = !this.mode;
  }
}