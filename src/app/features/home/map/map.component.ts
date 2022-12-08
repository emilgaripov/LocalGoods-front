import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapComponent {
  zoom: number = 8;
  lat: number = 51.678418;
  lng: number = 7.809007;

  markers = [
    {
      id: 1,
      name: 'Farm 1',
      image: 'https://live.staticflickr.com/65535/50881797506_176f3d534f_z.jpg',
      lat: 53.551086,
      lng: 9.993682
    },
    {
      id: 2,
      name: 'Farm 2',
      image: 'https://live.staticflickr.com/65535/50881797506_176f3d534f_z.jpg',
      lat: 52.520008,
      lng: 13.404954
    },
    {
      id: 3,
      name: 'Farm 3',
      image: 'https://live.staticflickr.com/65535/50881797506_176f3d534f_z.jpg',
      lat: 51.050407,
      lng: 13.737262
    }
  ]


  clickedMarker(name: string, index: number){
    console.log('marker name', name, 'index', index);
  }
}
