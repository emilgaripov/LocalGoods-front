import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-farmer-farm',
  templateUrl: './farmer-farm.component.html',
  styleUrls: ['./farmer-farm.component.scss']
})
export class FarmerFarmComponent implements OnInit {
  @Input() farm!: any;

  constructor() {}

  ngOnInit(): void {
  }

}
