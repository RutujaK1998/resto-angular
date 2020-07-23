import { Component, OnInit } from '@angular/core';
import {RatingService} from '../shared/rating.service'




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items;
  votes: any;
  rating: any = [];
  feature_rating: any;
  feature_keys: any;
  totalstar = 5;
  totalRating=5;

  constructor(private ratingService : RatingService) { }
  
  ngOnInit(): void {
        this.items = this.ratingService.items;
        this.votes = this.items.review_rating.votes;
      }
      showCategory(){
        const categories = this.items.category;
      }
  }