import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { Dogs } from '../../interfaces/Dogs';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [NgIf, AsyncPipe],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {

  dogs$: Observable<Dogs>;

  constructor(private data: DataService) {
    this.dogs$ = this.data.dogs$;
  }

}
