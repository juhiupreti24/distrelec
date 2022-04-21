import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HttpClient } from '@angular/common/http';
// import { CarouselData } from '../app.component';
import * as data from './../../assets/json/data.json';
// import * as data from './../../assets/png/next.png';

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
    autoHeight: true,
    nav: true,
    navText: [ '<i class="fa fa-angle-left">', '<i class="fa fa-angle-right">' ],
    // navText:["<div class='nav-btn prev-slide'><img src='./../../assets/png/next.png' /></div>","<div class='nav-btn next-slide'></div>"],
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
