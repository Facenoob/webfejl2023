import {Component, OnDestroy, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {Observable, Subscription} from "rxjs";
import {Student} from "../../shared/models/student.model";
import {FbBaseService} from "../../services/fb-base.service";
import {UjDiakComponent} from "../../widgets/uj-diak/uj-diak.component";
import {KeresServiceService} from "../../services/keres-service.service";

@Component({
  selector: 'app-felvetel-component',
  templateUrl: './felvetel-component.component.html',
  styleUrls: ['./felvetel-component.component.css']
})
export class FelvetelComponentComponent implements OnInit, OnDestroy {

  subscription: Subscription | null = null;
  subscription2: Subscription | null = null;
  students: Observable<Student[]> | null = null;
  student: Student | null =null;
  title2 = "";

  constructor(private dialog: MatDialog,private service: FbBaseService,private keres: KeresServiceService) { }

  ngOnInit(): void {
    this.getFirstStudent();
  }

  ngOnDestroy(): void{
    this.subscription?.unsubscribe();
    this.subscription2?.unsubscribe();
  }

  getFirstStudent():void{
    this.subscription = this.keres.getOneStudent('students').subscribe((values:Student[]) => {
      this.student = values[0];
    });
  }

  openModal(): void{
    const dialogRef = this.dialog.open(UjDiakComponent,{});
    this.subscription2 = dialogRef.afterClosed().subscribe((result:Student) => {
      if(result){
        this.service.add('students',result);
      }
    });
  }
}
