import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-farm',
  templateUrl: './farm.component.html',
  styleUrls: ['./farm.component.scss'],
  host: {
    class: 'grow-container'
  }
})
export class FarmComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

}
