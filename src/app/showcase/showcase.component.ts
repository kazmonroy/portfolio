import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardComponent } from '../shared/components/card/card.component';
import { DataService } from '../shared/services/data.service';
import { ProjectsComponent } from '../projects/projects.component';

@Component({
  selector: 'app-showcase',
  standalone: true,
  imports: [CommonModule, RouterModule, CardComponent, ProjectsComponent],
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss'],
})
export class ShowcaseComponent {
  private dataService = inject(DataService);

  projects = this.dataService.projects;
}
