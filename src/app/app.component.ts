import { Component, OnInit } from '@angular/core';

export interface Link {
  id: number;
  name: string;
  url: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  links: Link[];
  tab: number;
  activeLink(tab): void {
    if (tab === 1) {
      this.tab = 1;
    } else if (tab === 2) {
      this.tab = 2;
    } else if (tab === 3) {
      this.tab = 3;
    }
  }
  ngOnInit(): void {
    this.tab = 1;
  }
}

