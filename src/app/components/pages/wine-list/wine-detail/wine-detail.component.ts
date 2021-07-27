import { Component, Input, OnInit } from '@angular/core';
import { Wine } from 'src/app/models/wine';

@Component({
  selector: 'app-wine-detail',
  templateUrl: './wine-detail.component.html',
  styleUrls: ['./wine-detail.component.scss'],
})
export class WineDetailComponent implements OnInit {
  @Input() selectedWine?: Wine;

  constructor() {}

  ngOnInit(): void {}
}
