import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectHeaderComponent } from 'src/app/shared/components/project-header/project-header.component';
import { IconsModule } from 'src/app/icons/icons.module';
import { OpalService } from './services/opal.service';

@Component({
  selector: 'app-opal',
  standalone: true,
  imports: [CommonModule, ProjectHeaderComponent, IconsModule],
  templateUrl: './opal.component.html',
  styleUrls: ['./opal.component.scss'],
})
export class OpalComponent {
  private opalService = inject(OpalService);
  tools = this.opalService.tools;

  colorRoles = this.opalService.colorRoles;
}
