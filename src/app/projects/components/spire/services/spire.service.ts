import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SpireService {
  tools = [
    { name: 'Vercel', toolsvg: 'vercel.svg' },
    { name: 'Next.js', toolsvg: 'nextdotjs.svg' },
    { name: 'Tailwind', toolsvg: 'tailwindcss.svg' },
    { name: 'Sanity', toolsvg: 'sanity.svg' },
  ];

  colorRoles = [
    {
      title: 'Primary',
      roles: ['Logo', 'Primary Button'],
      hexcode: 'F97316',
      bg: '#F97316',
      class: 'border-none secondary',
    },
    {
      title: 'Secondary',
      roles: ['Hover', 'Links', 'Border'],
      hexcode: 'F5F5F4',
      bg: '#F5F5F4',
      class: 'border-none reverse',
    },

    {
      title: 'Foreground',
      roles: ['Body text'],
      hexcode: '0C0A09',
      bg: '#0C0A09',
      class: 'border-none main',
    },
    {
      title: 'Background',
      roles: ['Body Background'],
      hexcode: 'FFFFFF',
      bg: '#FFFFFF',
      class: 'border-none reverse',
    },

    {
      title: 'Destructive',
      roles: ['Delete notification', 'Error'],
      hexcode: 'FC5E7D',
      bg: '#FC5E7D',
      class: 'border-none secondary',
    },
    {
      title: 'Success',
      roles: ['Success notification'],
      hexcode: '56C288',
      bg: '#56C288',
      class: 'border-none secondary',
    },
  ];
}
