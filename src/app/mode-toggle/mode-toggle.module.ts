import { NgModule } from '@angular/core';
import {
  ModeLocalStorageService,
  MODE_STORAGE_SERVICE,
} from './services/mode-storage.service';

import { ModeToggleComponent } from './components/mode-toggle/mode-toggle.component';
import { ModeToggleService } from './services/mode-toggle.service';
import { IconsModule } from '../icons/icons.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ModeToggleComponent],
  imports: [CommonModule, IconsModule],
  providers: [
    ModeToggleService,
    {
      provide: MODE_STORAGE_SERVICE,
      useClass: ModeLocalStorageService,
    },
  ],
  exports: [ModeToggleComponent],
})
export class ModeToggleModule {}
