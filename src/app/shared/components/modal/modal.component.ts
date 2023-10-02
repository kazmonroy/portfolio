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

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit, OnDestroy {
  private el = inject(ElementRef);
  private dataService = inject(DataService);
  data$ = new Observable<
    {
      id: number;
      name: string;
      type: string;
      bg: string;
      path: string;
      thumb: string;
    }[]
  >();
  searchQuery$ = new BehaviorSubject<string>('');

  @Input() projectsModal!: boolean;
  @Output() close = new EventEmitter();

  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement);

    this.data$ = combineLatest([this.searchQuery$, this.dataService.data]).pipe(
      map(([searchQuery, data]) =>
        data.filter((x) => x.name.includes(searchQuery))
      )
    );
  }

  ngOnDestroy(): void {
    this.el.nativeElement.remove();
  }

  projectsSearch = new FormGroup({
    projectName: new FormControl(''),
  });

  onSearch(searchQuery: string) {
    this.searchQuery$.next(searchQuery);
  }

  closeModal() {
    this.close.emit();
  }
}
