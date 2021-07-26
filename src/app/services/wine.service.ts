import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Wine } from '../models/wine';

@Injectable({
  providedIn: 'root',
})
export class WineService {
  readonly URL: string = environment.API_WINES;
  readonly wines: Wine[] = [];

  constructor(private http: HttpClient) {}

  getWines(): Observable<Wine[]> {
    return this.http.get<Wine[]>(this.URL);
  }
}
