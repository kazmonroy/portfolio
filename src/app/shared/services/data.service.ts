import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  projects = [
    {
      id: 1,
      name: 'Noter',
      type: 'dev',
      bg: '#BDDFF9',
      path: 'noter',
      thumb: 'noter-thumb',
    },
    {
      id: 2,
      name: 'Opal',
      type: 'design',
      bg: '#9ADED5',
      path: 'opal',
      thumb: 'opal-thumb',
    },
    {
      id: 3,
      name: 'ngUI',
      type: 'dev',
      bg: '#D095E5',
      path: 'ng-ui',
      thumb: 'ngui-thumb',
    },
  ];

  noter = {
    colorMapping: [
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
    ],
    colorRoles: [
      {
        title: 'Surface Container',
        roles: ['Body'],
        bg: '#EDE7DE',
        text: '#233831',
      },
      {
        title: 'Surface',
        roles: ['New todo', 'Footer', 'Input'],
        bg: '#FAF8F6',
        text: '#233831',
      },
      {
        title: 'Surface Bright',
        roles: ['Hover', 'Done state'],
        bg: '#FAF8F6',
        text: '#233831',
      },
      {
        title: 'Primary',
        roles: ['Primary text', 'Icons'],
        bg: '#4E6964',
        text: '#FAF8F6',
      },
      {
        title: 'Secondary',
        roles: ['Input active', 'Hover icon'],
        bg: '#2D483F',
        text: '#FAF8F6',
      },
    ],
  };
}
