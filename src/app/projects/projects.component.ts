import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../shared/components/card/card.component';
import { DataService } from '../shared/services/data.service';
import { ShowcaseComponent } from '../showcase/showcase.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, CardComponent, ShowcaseComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  private dataService = inject(DataService);

  projects = this.dataService.projects;
}
