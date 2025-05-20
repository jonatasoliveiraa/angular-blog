import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-big-card',
  imports: [RouterLink],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css',
})
export class BigCardComponent {
  @Input()
  id: string = '0';
  @Input()
  imageCover: string = '';
  @Input()
  dateContent: string = '';
  @Input()
  titleContent: string = '';
  @Input()
  descriptionContent: string = '';
}
