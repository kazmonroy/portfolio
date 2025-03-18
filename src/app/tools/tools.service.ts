import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToolsService {
  tools = [
    { name: '.NET', toolsvg: 'dotnet.svg' },
    { name: 'React', toolsvg: 'react.svg' },
    { name: 'TypeScript', toolsvg: 'typescript.svg' },
    { name: 'Vue', toolsvg: 'vue.svg' },

    { name: 'Figma', toolsvg: 'figma.svg' },
    { name: 'Angular', toolsvg: 'angular.svg' },
    { name: 'Docker', toolsvg: 'docker.svg' },
    { name: 'CSS', toolsvg: 'css3.svg' },
  ];
}
