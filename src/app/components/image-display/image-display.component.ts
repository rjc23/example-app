import { AsyncPipe, NgIf, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { Dogs } from '../../interfaces/Dogs';

@Component({
  selector: 'app-image-display',
  standalone: true,
  imports: [NgIf, NgStyle, AsyncPipe],
  templateUrl: './image-display.component.html',
  styleUrl: './image-display.component.scss'
})
export class ImageDisplayComponent {

  dogs$: Observable<Dogs>

  constructor(private data: DataService) {
    this.dogs$ = this.data.dogs$;
  }

  getImage() {
    this.data.getDogs();
  }

}
