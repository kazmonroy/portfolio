import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-copy-clipboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './copy-clipboard.component.html',
  styleUrls: ['./copy-clipboard.component.scss'],
})
export class CopyClipboardComponent implements OnInit {
  private dataService = inject(DataService);
  hexcode: Observable<string | null> = this.dataService.latestHexcode$;

  ngOnInit(): void {}
}
