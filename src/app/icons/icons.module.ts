import { NgModule } from '@angular/core';

import { FeatherModule } from 'angular-feather';
import {
  Github,
  Gitlab,
  Moon,
  Sun,
  Linkedin,
  FileText,
  Figma,
} from 'angular-feather/icons';

const icons = {
  Github,
  Gitlab,
  Moon,
  Sun,
  FileText,
  Figma,
};

@NgModule({
  imports: [FeatherModule.pick(icons)],
  exports: [FeatherModule],
})
export class IconsModule {}
