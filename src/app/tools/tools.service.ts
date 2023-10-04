import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToolsService {
  tools = [
    { name: 'Node.js', toolsvg: 'nodedotjs.svg' },
    { name: 'Angular', toolsvg: 'angular.svg' },
    { name: 'React', toolsvg: 'react.svg' },
    { name: 'TypeScript', toolsvg: 'typescript.svg' },

    { name: 'Sass', toolsvg: 'sass.svg' },
    { name: 'Figma', toolsvg: 'figma.svg' },
    { name: 'TailwindCSS', toolsvg: 'tailwindcss.svg' },
    { name: 'CSS', toolsvg: 'css3.svg' },

    // { name: 'MongoDB', toolsvg: 'mongodb.svg' },
    // { name: 'Github', toolsvg: 'github.svg' },
    // { name: 'Next.js', toolsvg: 'nextdotjs.svg' },
    // { name: 'Vercel', toolsvg: 'vercel.svg' },
  ];
}
