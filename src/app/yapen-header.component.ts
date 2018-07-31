import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yapen-header',
  template: `
    <a routerLink="/main">main   </a><a> | </a>
    <a routerLink="/login"> login  </a><a> | </a>
    <a routerLink="/signup">  signup</a><a> | </a>
  `,
  styles: [
  ]
})
export class YapenHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
