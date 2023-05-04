import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Student} from "../../shared/models/student.model";

@Component({
  selector: 'app-pelda-diak-card',
  templateUrl: './pelda-diak-card.component.html',
  styleUrls: ['./pelda-diak-card.component.css']
})
export class PeldaDiakCardComponent implements OnInit, OnChanges {
  @Input() student?:Student;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("Pelda diak megkapta az erteket!");
  }

  ngOnInit(): void {
  }


}
