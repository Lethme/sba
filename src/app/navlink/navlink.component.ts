import { Component, Input, OnInit } from '@angular/core';
import { HtmlLink } from '../app-routing.module';

@Component({
  selector: 'app-navlink',
  templateUrl: './navlink.component.html',
  styleUrls: ['./navlink.component.less']
})
export class NavlinkComponent implements OnInit {
  @Input() link: HtmlLink | undefined;
  constructor() { }
  ngOnInit(): void { }
}
