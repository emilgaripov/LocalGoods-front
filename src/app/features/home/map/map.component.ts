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
      name: 'Farm 1',
      lat: 53.551086,
      lng: 9.993682
    },
    {
      name: 'Farm 2',
      lat: 52.520008,
      lng: 13.404954
    },
    {
      name: 'Farm 3',
      lat: 51.050407,
      lng: 13.737262
    }
  ]


  clickedMarker(name: string, index: number){
    console.log('marker name', name, 'index', index);
    

  }
}
