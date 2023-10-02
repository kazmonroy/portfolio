import { Component, HostListener, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  projectsModal = true;

  @Output() close = new EventEmitter();

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    let x = event.code;
    if (x === 'Slash') {
      this.projectsModal = !this.projectsModal;
    }
  }

  closeModal() {
    this.projectsModal = false;
  }
}
