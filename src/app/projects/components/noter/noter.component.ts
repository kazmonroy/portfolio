import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsModule } from 'src/app/icons/icons.module';
import { DataService } from 'src/app/shared/services/data.service';
import { ModeToggleService } from 'src/app/mode-toggle/services/mode-toggle.service';

@Component({
  selector: 'app-noter',
  standalone: true,
  imports: [CommonModule, IconsModule],
  templateUrl: './noter.component.html',
  styleUrls: ['./noter.component.scss'],
})
export class NoterComponent {
  private dataService = inject(DataService);
  private modeService = inject(ModeToggleService);

  currentMode = this.modeService.modeChanged$;

  mode = true;

  colorMapping = this.dataService.noter.colorMapping;
  colorRoles = this.dataService.noter.colorRoles;

  toggleMode() {
    this.mode = !this.mode;
  }
}
