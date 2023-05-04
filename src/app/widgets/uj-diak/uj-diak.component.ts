import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {status} from "../../shared/models/status.model";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-uj-diak',
  templateUrl: './uj-diak.component.html',
  styleUrls: ['./uj-diak.component.css']
})
export class UjDiakComponent implements OnInit {
  form:FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    status: new FormControl(status.active),
    email: new FormControl(''),
    grade: new FormControl(''),
  });

  constructor(public dialogRef: MatDialogRef<UjDiakComponent>) { }

  ngOnInit(): void {
  }

}
