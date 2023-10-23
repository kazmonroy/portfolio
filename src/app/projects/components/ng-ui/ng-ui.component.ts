import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectHeaderComponent } from 'src/app/shared/components/project-header/project-header.component';
import { IconsModule } from 'src/app/icons/icons.module';
import { FigmaFrameComponent } from './components/figma-frame/figma-frame.component';
import { MacControlsComponent } from 'src/app/shared/components/mac-controls/mac-controls.component';
import { OverviewComponent } from 'src/app/shared/components/overview/overview.component';
import { TypographyComponent } from 'src/app/shared/components/typography/typography.component';
import { SectionHeaderComponent } from 'src/app/shared/components/section-header/section-header.component';

@Component({
  selector: 'app-ng-ui',
  standalone: true,
  imports: [
    CommonModule,
    IconsModule,
    ProjectHeaderComponent,
    FigmaFrameComponent,
    MacControlsComponent,
    OverviewComponent,
    TypographyComponent,
    SectionHeaderComponent,
  ],
  templateUrl: './ng-ui.component.html',
  styleUrls: ['./ng-ui.component.scss'],
})
export class NgUiComponent {
  tools = [
    { name: 'Figma', toolsvg: 'figma.svg' },
    { name: 'Angular', toolsvg: 'angular.svg' },
    { name: 'Sass', toolsvg: 'sass.svg' },
    { name: 'Vercel', toolsvg: 'vercel.svg' },
  ];

  thumbs = ['segments', 'list', 'table'];

  links = {
    demo: 'https://ng-ui.vercel.app/',
    projectIcon: 'ng-ui/ng-ui-logo.svg',
    repo: 'https://gitlab.com/kazmonroy/ng-components-ui',
    icon: 'gitlab',
  };
}
