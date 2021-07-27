import { Component, Input, OnInit, Output } from '@angular/core';
import { Wine } from 'src/app/models/wine';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-wine-grid',
  templateUrl: './wine-grid.component.html',
  styleUrls: ['./wine-grid.component.scss'],
})
export class WineGridComponent implements OnInit {
  @Input() wines: Wine[] = [];
  @Output() selectWine: EventEmitter<Wine>;
  @Output() unSelectWine: EventEmitter<null>;

  constructor() {
    this.selectWine = new EventEmitter();
    this.unSelectWine = new EventEmitter();
  }

  ngOnInit(): void {}

  onMouseEnter(wine: Wine) {
    this.selectWine.emit(wine);
  }

  onMouseLeave() {
    this.unSelectWine.emit();
  }
}
