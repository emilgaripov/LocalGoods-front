import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { WhoAuth } from "../../../shared/types/types";

@Component({
  selector: 'app-auth-farmer',
  templateUrl: './auth-farmer.component.html',
  styleUrls: ['./auth-farmer.component.scss']
})
export class AuthFarmerComponent implements OnInit {
  @Output() switchTo = new EventEmitter<WhoAuth>();

  constructor() { }

  ngOnInit(): void {
  }

  goToUser() {
    this.switchTo.emit('user');
  }
}
