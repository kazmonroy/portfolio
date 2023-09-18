import { NgModule } from '@angular/core';

import { FeatherModule } from 'angular-feather';
import { Github, Moon, Sun, Linkedin, FileText } from 'angular-feather/icons';

const icons = {
  Github,
  Linkedin,
  Moon,
  Sun,
  FileText,
};

@NgModule({
  imports: [FeatherModule.pick(icons)],
  exports: [FeatherModule],
})
export class IconsModule {}
