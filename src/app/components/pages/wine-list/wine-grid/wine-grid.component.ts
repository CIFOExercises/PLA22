import { Component, Input, OnInit } from '@angular/core';
import { Wine } from 'src/app/models/wine';
import { WineService } from 'src/app/services/wine.service';

@Component({
  selector: 'app-wine-grid',
  templateUrl: './wine-grid.component.html',
  styleUrls: ['./wine-grid.component.scss'],
})
export class WineGridComponent implements OnInit {
  @Input() wines: Wine[] = [];

  constructor() {}

  ngOnInit(): void {}
}
