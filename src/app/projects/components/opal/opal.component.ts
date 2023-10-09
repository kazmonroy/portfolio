import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectHeaderComponent } from 'src/app/shared/components/project-header/project-header.component';
import { IconsModule } from 'src/app/icons/icons.module';
import { OpalService } from './services/opal.service';
import { MacControlsComponent } from 'src/app/shared/components/mac-controls/mac-controls.component';
import { ColorCardComponent } from 'src/app/shared/components/color-card/color-card.component';

enum Layers {
  LAYER_04 = 'l-04',
  LAYER_03 = 'l-03',
  LAYER_02 = 'l-02',
  LAYER_01 = 'l-01',
}

@Component({
  selector: 'app-opal',
  standalone: true,
  imports: [
    CommonModule,
    ProjectHeaderComponent,
    IconsModule,
    MacControlsComponent,
    ColorCardComponent,
  ],
  templateUrl: './opal.component.html',
  styleUrls: ['./opal.component.scss'],
})
export class OpalComponent {
  private opalService = inject(OpalService);
  tools = this.opalService.tools;

  layer4 = false;
  layer3 = false;
  layer2 = false;
  layer1 = false;

  colorRoles = this.opalService.colorRoles;

  onHover(event: any) {
    if (event.target.classList.contains(`${Layers.LAYER_04}`)) {
      this.layer4 = !this.layer4;
    }

    if (event.target.classList.contains(`${Layers.LAYER_03}`)) {
      this.layer3 = !this.layer3;
    }

    if (event.target.classList.contains(`${Layers.LAYER_02}`)) {
      this.layer2 = !this.layer2;
    }
    if (event.target.classList.contains(`${Layers.LAYER_01}`)) {
      this.layer1 = !this.layer1;
    }
  }

  hide(event: any) {
    if (event.target.classList.contains(`${Layers.LAYER_04}`)) {
      this.layer4 = !this.layer4;
    }

    if (event.target.classList.contains(`${Layers.LAYER_03}`)) {
      this.layer3 = !this.layer3;
    }

    if (event.target.classList.contains(`${Layers.LAYER_02}`)) {
      this.layer2 = !this.layer2;
    }
    if (event.target.classList.contains(`${Layers.LAYER_01}`)) {
      this.layer1 = !this.layer1;
    }
  }

  // this.showLayerIndicator = !this.showLayerIndicator;
}
