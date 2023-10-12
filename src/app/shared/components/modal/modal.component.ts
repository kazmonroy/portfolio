import {
  Component,
  HostListener,
  Input,
  ElementRef,
  inject,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  FormControl,
} from '@angular/forms';
import { BehaviorSubject, Observable, combineLatest, map } from 'rxjs';
import { DataService } from '../../services/data.service';
import { RouterModule } from '@angular/router';
import { Project } from 'src/app/projects/model/projects.interface';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit, OnDestroy {
  @HostListener('document:keydown.escape', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    this.projectsModal = false;
  }
  private el = inject(ElementRef);
  private dataService = inject(DataService);
  data$ = new Observable<Project[]>();
  searchQuery$ = new BehaviorSubject<string>('');

  @Input() projectsModal!: boolean;
  @Output() close = new EventEmitter();

  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement);

    this.data$ = combineLatest([this.searchQuery$, this.dataService.data]).pipe(
      map(([searchQuery, data]) =>
        data.filter((x) => x.name.toLowerCase().includes(searchQuery))
      )
    );
  }

  ngOnDestroy(): void {
    this.el.nativeElement.remove();
    this.projectsSearch.reset();
  }

  projectsSearch = new FormGroup({
    projectName: new FormControl(''),
  });

  onSearch(searchQuery: string) {
    this.searchQuery$.next(searchQuery.toLowerCase());
  }

  closeModal() {
    this.close.emit();
  }
}
