import { Component, OnInit } from '@angular/core';
import { Wine } from 'src/app/models/wine';
import { WineService } from 'src/app/services/wine.service';

@Component({
  selector: 'app-wine-list',
  templateUrl: './wine-list.component.html',
  styleUrls: ['./wine-list.component.scss'],
})
export class WineListComponent implements OnInit {
  wines: Wine[] = [];

  constructor(private wineService: WineService) {
    this.wineService.getWines().subscribe(
      (wines) => {
        wines.forEach((wine) => {
          wine.imagen = wine.imagen.replace('.jpg', '.png');
        });

        this.wines = wines;
        console.log(wines);
      },
      (error) => console.log(`Error al recuperar la lista ${error}`),
      () => console.log('Vinos recuperados correctamente')
    );
  }

  ngOnInit(): void {}
}
