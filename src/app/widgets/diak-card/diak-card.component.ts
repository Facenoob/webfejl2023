import {Component, Input, OnInit} from '@angular/core';
import {Student} from "../../shared/models/student.model";
import {FbBaseService} from "../../services/fb-base.service";
import {MatDialog} from "@angular/material/dialog";
import {SzerkesztDiakComponent} from "../szerkeszt-diak/szerkeszt-diak.component";

@Component({
  selector: 'app-diak-card',
  templateUrl: './diak-card.component.html',
  styleUrls: ['./diak-card.component.css']
})
export class DiakCardComponent implements OnInit {
  @Input() student?:Student;

  constructor(private dialog: MatDialog,private service: FbBaseService) { }

  ngOnInit(): void{
  }

  deleteStudent(id:string){
    this.service.delete('students',id);
  }

  openModalEdit(student:Student): void{
    const dialogRef = this.dialog.open(SzerkesztDiakComponent,{ data :{student: student}});
    dialogRef.afterClosed().subscribe((result:Student) => {
      if(result){
        this.service.update('students',result.id,result);
      }
    });
  }

}
