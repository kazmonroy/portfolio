import { Injectable } from '@angular/core';
import { ColorRole } from 'src/app/shared/components/color-card/color-card.component';

@Injectable({
  providedIn: 'root',
})
export class NoterService {
  colorMapping = [
    {
      light: {
        title: 'Surface Container',
        hexcode: '#EDE7DE',
        text: '#233831',
      },
      dark: {
        title: 'DM Surface Container',
        hexcode: '#233831',
        text: '#EDE7DE',
      },
    },
    {
      light: { title: 'Surface', hexcode: '#FAF8F6', text: '#233831' },
      dark: { title: 'DM Surface', hexcode: '#2D483F', text: '#EDE7DE' },
    },
    {
      light: { title: 'Surface Bright', hexcode: '#F6F3EF', text: '#233831' },
      dark: {
        title: 'DM Surface Bright',
        hexcode: '#526961',
        text: '#FAF8F6',
      },
    },
    {
      light: { title: 'Primary', hexcode: '#4E6964', text: '#FAF8F6' },
      dark: {
        title: 'DM Primary',
        hexcode: '#D0E9E0',
        text: '#233831',
      },
    },
    {
      light: { title: 'Secondary', hexcode: '#2D483F', text: '#FAF8F6' },
      dark: {
        title: 'DM Secondary',
        hexcode: '#8FDCC2',
        text: '#233831',
      },
    },
  ];

  colorRoles: ColorRole[] = [
    {
      title: 'Surface Container',
      roles: ['Body'],
      bg: '#EDE7DE',

      class: 'reverse border',
    },
    {
      title: 'Surface',
      roles: ['New todo', 'Footer', 'Input'],
      bg: '#FAF8F6',

      class: 'reverse border-none',
    },
    {
      title: 'Surface Bright',
      roles: ['Hover', 'Done state'],
      bg: '#FAF8F6',

      class: 'reverse border-none',
    },
    {
      title: 'Primary',
      roles: ['Primary text', 'Icons'],
      bg: '#4E6964',

      class: 'secondary border-none',
    },
    {
      title: 'Secondary',
      roles: ['Input active', 'Hover icon'],
      bg: '#2D483F',

      class: 'secondary border-none',
    },
  ];
}
