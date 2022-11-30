import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { WhoAuth } from "../../../shared/types/types";

@Component({
  selector: 'app-auth-user',
  templateUrl: './auth-user.component.html',
  styleUrls: ['./auth-user.component.scss']
})
export class AuthUserComponent implements OnInit {
  @Output() switchTo = new EventEmitter<WhoAuth>();

  constructor() { }

  ngOnInit(): void {
  }

  goToFarmer() {
    this.switchTo.emit('farmer');
  }
}
