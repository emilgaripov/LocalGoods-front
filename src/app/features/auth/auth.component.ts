import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { WhoAuth } from "../../shared/types/types";
import { animate, state, style, transition, trigger } from "@angular/animations";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('switcher', [
      state('user', style({
        left: window.innerWidth < 400 ? 0 : '50%',
        top: window.innerWidth < 400 ? '50%' : 0,
        backgroundColor: '#D0DB15'
      })),
      state('farmer', style({
        left: 0,
        top: 0,
        backgroundColor: '#527F0B'
      })),
      transition('user <=> farmer', animate(500)),
    ])
  ]
})
export class AuthComponent implements OnInit {
  whoAuth: WhoAuth = 'user';
  smallScreen = false;

  constructor() {}

  ngOnInit(): void {
    this.smallScreen = window.innerWidth < 400;
  }

  onSwitchAuth($event: WhoAuth) {
    this.whoAuth = $event;
  }
}
