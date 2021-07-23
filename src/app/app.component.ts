import { Component, VERSION, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  constructor() {}

  ngOnInit() {}
}
