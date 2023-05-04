import {Component, Inject, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Student} from "../../shared/models/student.model";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-szerkeszt-diak',
  templateUrl: './szerkeszt-diak.component.html',
  styleUrls: ['./szerkeszt-diak.component.css']
})
export class SzerkesztDiakComponent implements OnInit {
  @Input() student?:Student;

  form2:FormGroup = new FormGroup({
    id: new FormControl(this.data.student.id),
    name: new FormControl(''),
    status: new FormControl(this.data.student.status),
    email: new FormControl(''),
    grade: new FormControl(''),

  });


  constructor(public dialogRef: MatDialogRef<SzerkesztDiakComponent>,@Inject(MAT_DIALOG_DATA) public data: {student: Student}) { }

  ngOnInit(): void {
  }

}
