import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { WineService } from './services/wine.service';
import { HomeComponent } from './components/pages/home/home.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { WineListComponent } from './components/pages/wine-list/wine-list.component';
import { WineDetailComponent } from './components/pages/wine-list/wine-detail/wine-detail.component';
import { WineGridComponent } from './components/pages/wine-list/wine-grid/wine-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    NotFoundComponent,
    WineListComponent,
    WineGridComponent,
    WineDetailComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [WineService],
  bootstrap: [AppComponent],
})
export class AppModule {}
