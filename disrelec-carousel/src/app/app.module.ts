import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RelatedProductsComponent } from './related-products/related-products.component';
import { HttpClientModule }  from '@angular/common/http';
// import { AngularFontAwesomeModule } from 'font-awesome';

@NgModule({
  declarations: [
    AppComponent,
    RelatedProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    HttpClientModule,
    // AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

