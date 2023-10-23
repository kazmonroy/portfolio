import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectHeaderComponent } from 'src/app/shared/components/project-header/project-header.component';
import { SpireService } from './services/spire.service';
import { OverviewComponent } from 'src/app/shared/components/overview/overview.component';
import { TypographyComponent } from 'src/app/shared/components/typography/typography.component';

@Component({
  selector: 'app-spire',
  standalone: true,
  imports: [
    CommonModule,
    ProjectHeaderComponent,
    OverviewComponent,
    TypographyComponent,
  ],
  templateUrl: './spire.component.html',
  styleUrls: ['./spire.component.scss'],
})
export class SpireComponent {
  private spireService = inject(SpireService);

  tools = this.spireService.tools;

  links = {
    demo: 'https://shop-spire.vercel.app',
    projectIcon: 'spire/spire-logo.svg',
    repo: 'https://github.com/kazmonroy/spire',
    icon: 'github',
  };
}
