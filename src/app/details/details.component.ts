import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html'
})
export class DetailsComponent implements OnInit {
  constructor(private dataService: DataService) {}
  selectedId: number;
  goTo: string;
  show: boolean = false;

  ngOnInit() {
    this.dataService.selection.subscribe(data => {
      this.goTo = data;
    });
  }
}
