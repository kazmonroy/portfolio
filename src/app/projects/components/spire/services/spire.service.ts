import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SpireService {
  tools = [
    { name: 'Stripe', toolsvg: 'stripe.svg' },
    { name: 'Next.js', toolsvg: 'nextdotjs.svg' },
    { name: 'Tailwind', toolsvg: 'tailwindcss.svg' },
    { name: 'Sanity', toolsvg: 'sanity.svg' },
  ];
}
