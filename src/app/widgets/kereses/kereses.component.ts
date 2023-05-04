import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-kereses',
  templateUrl: './kereses.component.html',
  styleUrls: ['./kereses.component.css']
})
export class KeresesComponent implements OnInit {
  @Output() search = new EventEmitter<string[]>();

  constructor() { }

  ngOnInit(): void {
  }

  searching(searchContent: string,searchType:string) {
    this.search.emit([searchContent,searchType]);
  }
}
