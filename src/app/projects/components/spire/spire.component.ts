import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectHeaderComponent } from 'src/app/shared/components/project-header/project-header.component';
import { SpireService } from './services/spire.service';
import { OverviewComponent } from 'src/app/shared/components/overview/overview.component';
import { TypographyComponent } from 'src/app/shared/components/typography/typography.component';
import { ColorCardComponent } from 'src/app/shared/components/color-card/color-card.component';
import { SectionHeaderComponent } from 'src/app/shared/components/section-header/section-header.component';

@Component({
  selector: 'app-spire',
  standalone: true,
  imports: [
    CommonModule,
    ProjectHeaderComponent,
    OverviewComponent,
    TypographyComponent,
    ColorCardComponent,
    SectionHeaderComponent,
  ],
  templateUrl: './spire.component.html',
  styleUrls: ['./spire.component.scss'],
})
export class SpireComponent {
  private spireService = inject(SpireService);

  tools = this.spireService.tools;
  colorRoles = this.spireService.colorRoles;

  links = {
    demo: 'https://shop-spire.vercel.app',
    projectIcon: 'spire/spire-logo.svg',
    repo: 'https://github.com/kazmonroy/spire',
    icon: 'github',
  };
}
