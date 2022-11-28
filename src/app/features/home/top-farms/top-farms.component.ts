import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-farms',
  templateUrl: './top-farms.component.html',
  styleUrls: ['./top-farms.component.scss'],
})

export class TopFarmsComponent {

  topFarms = [
    {
      id:1,
      name: 'Farm One',
      image: 'https://foodsciencescommunity.com/wp-content/uploads/2019/01/shutterstock_27342172.jpg',
      location: 'Berlin'
    },
    {
      id:1,
      name: 'Farm Two',
      image: 'https://www.foodandwine.com/thmb/zG2tLe411fyVEy_gIR3JTfCQEuc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/best-farms-in-america-soul-fire-farm-FT-BLOG0720-2-4835d975143c44f1bff76d1218a730cc.jpg',
      location: 'London'
    },
    {
      id:1,
      name: 'Farm Three',
      image: 'https://d3i6fh83elv35t.cloudfront.net/static/2018/11/GettyImages-566447287-1024x683.jpg',
      location: 'Paris'
    }
  ].slice(0, 3)
}
