import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-farmer',
  templateUrl: './farmer.component.html',
  styleUrls: ['./farmer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FarmerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
