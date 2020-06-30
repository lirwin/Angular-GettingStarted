import { Component, EventEmitter, OnChanges, Input, Output } from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges {
  @Input() rating = 0
  starWidth = 0
  @Output() ratingClicked: EventEmitter<string> =
    new EventEmitter<string>();

  constructor() { }

  onClick():void {
    this.ratingClicked.emit(`The rating ${this.rating} was clicked!`)
  }
  ngOnChanges(): void {
    this.starWidth = this.rating * 75 / 5
   }
}
