import { Component, OnInit } from '@angular/core';
import { RoutingManager } from '../app-routing.manager';
import { HtmlLink } from '../app-routing.module';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {
  constructor(private routingManager: RoutingManager) { }
  get links(): Array<HtmlLink> { return this.routingManager.htmlLinks; }
  ngOnInit(): void { }
}