import { Component } from '@angular/core';
import { CounterComponent } from "../../components/counter/counter.component";
import { ImageDisplayComponent } from "../../components/image-display/image-display.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CounterComponent, ImageDisplayComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
