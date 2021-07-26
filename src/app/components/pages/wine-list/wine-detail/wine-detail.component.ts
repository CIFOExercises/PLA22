import { Component, Input, OnInit } from '@angular/core';
import { Wine } from 'src/app/models/wine';

@Component({
  selector: 'app-wine-detail',
  templateUrl: './wine-detail.component.html',
  styleUrls: ['./wine-detail.component.scss'],
})
export class WineDetailComponent implements OnInit {
  @Input() selectedWine?: Wine = {
    id: 1,
    anyo: '2009',
    descripcion:
      'With hints of ginger and spice, this wine makes an excellent complement to light appetizer and dessert fare for a holiday gathering.',
    imagen: 'block_nine.png',
    nombre: 'BLOCK NINE',
    pais: 'USA',
    region: 'California',
    uvas: 'Pinot Noir',
  };

  constructor() {}

  ngOnInit(): void {}
}
