import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OpalService {
  colorRoles = [
    {
      title: 'DM Black 00',
      roles: ['Primary Surface'],
      hexcode: '0B0B15',
      bg: '#0B0B15',
      class: 'main',
    },
    {
      title: 'DM Black 00 Blur',
      roles: ['Modal Container'],
      hexcode: '0B0B15: 10%, Blur: 14px',
      bg: '#0B0B15',
      class: '',
    },
    {
      title: 'DM Black 01',
      roles: ['Surface Container', 'Sidebar', 'Search bar'],
      hexcode: '0F0F1B',
      bg: '#0F0F1B',
      class: '',
    },
    {
      title: 'DM Black 02',
      roles: ['Surface Container Higher', 'Card background', 'Inputs'],
      hexcode: '141623',
      bg: '#141623',
      class: '',
    },
    {
      title: 'DM 500',
      roles: ['Inputs', 'Secondary button', 'Border default', 'Icons hover'],
      hexcode: '1C1F31',
      bg: '#1C1F31',
      class: '',
    },
    {
      title: 'DM 400',
      roles: ['Inputs border', 'Secondary button hover'],
      hexcode: '252941',
      bg: '#252941',
      class: '',
    },
    {
      title: 'DM 200',
      roles: ['Border hover', 'Placeholder text'],
      hexcode: '4E5366',
      bg: '#4E5366',
      class: 'secondary',
    },
    {
      title: 'DM 100',
      roles: ['Secondary text', 'Icons'],
      hexcode: '939DB8',
      bg: '#939DB8',
      class: 'secondary',
    },

    {
      title: 'Opal purple',
      roles: ['Primary color'],
      hexcode: '5B63D3',
      bg: '#5B63D3',
      class: 'secondary',
    },
    {
      title: 'White',
      roles: ['Primary text'],
      hexcode: 'FFFFFF',
      bg: '#FFFFFF',
      class: 'reverse',
    },

    {
      title: 'Red',
      roles: ['Error'],
      hexcode: 'FC5E7D',
      bg: '#FC5E7D',
      class: 'secondary',
    },
    {
      title: 'Green',
      roles: ['Success'],
      hexcode: '56C288',
      bg: '#56C288',
      class: 'secondary',
    },
  ];

  tools = [
    { name: 'MongoDB', toolsvg: 'mongodb.svg' },
    { name: 'Express', toolsvg: 'express.svg' },
    { name: 'Angular', toolsvg: 'angular.svg' },
    { name: 'Node.js', toolsvg: 'nodedotjs.svg' },
  ];
}
