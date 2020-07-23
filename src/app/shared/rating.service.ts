import { Injectable } from "@angular/core";

@Injectable({
  providedIn:'root'
})
export class RatingService{

items = {
    "name":"Cafe Goodluck",
    "area":"Deccan Gymkhana",
    "city":"Pune",
    "category":["Restaurant","Cafe","Breakfast"],
    "cover_image":"https://content3.jdmagicbox.com/comp/pune/p6/020pxx20.xx20.180309120117.g6p6/catalogue/cafe-good-luck-pune-solapur-road-pune-home-delivery-restaurants-j7ane.jpg",
    "review_rating":
    {"votes":[
      {"rating":5,"votes":201},
      {"rating":4,"votes":159},
      {"rating":3,"votes":69}, 
      {"rating":2,"votes":49},
      {"rating":1,"votes":125}],
    "total":603},
    "feature_rating":
    { "rate":[{ 
        "name":"place", "rating" : 3.6},
        {"name":"food", "rating" : 3.5},
        {"name":"service","rating" : 3.8},
        {"name":"staff", "rating" : 4.1},
        {"name":"breakfast", "rating" : 3.4}]
      }
    }
}


