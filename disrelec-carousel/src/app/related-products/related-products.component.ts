import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HttpClient } from '@angular/common/http';
// import { CarouselData } from '../app.component';
import * as data from './../../assets/json/data.json';

@Component({
  selector: 'app-related-products',
  templateUrl: './related-products.component.html',
  styleUrls: ['./related-products.component.scss']
})
export class RelatedProductsComponent implements OnInit {
  isDragging: boolean;
  carouselData;
  customOptions: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    dots: false,
    autoHeight: false,
    nav: true,
    navText: [ '<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>' ],
    responsiveClass: 'owl-responsive',
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      900: {
        items: 3
      }
    },
  }
  constructor(private http: HttpClient) { 
    this.http.get('assets/json/data.json').subscribe((res) => {
      this.carouselData = res['carouselData'];
    });
  }

  ngOnInit(): void {
    
  }

}
