import { Component } from '@angular/core';
import {catchError, Observable, Subscription, throwError} from "rxjs";
import {Student} from "../../shared/models/student.model";
import {FbBaseService} from "../../services/fb-base.service";
import {KeresServiceService} from "../../services/keres-service.service";

@Component({
  selector: 'app-diakok-componenet',
  templateUrl: './diakok-componenet.component.html',
  styleUrls: ['./diakok-componenet.component.css']
})
export class DiakokComponenetComponent {

  subscription1: Subscription | null = null;
  subscription2: Subscription | null = null;
  subscription3: Subscription | null = null;
  students: Observable<Student[]> | null = null;

  constructor(private service: FbBaseService,private keres: KeresServiceService) { }

  ngOnInit(): void {
    this.getStudents();
  }

  ngOnDestroy(): void {
    this.subscription1?.unsubscribe();
    this.subscription2?.unsubscribe();
    this.subscription3?.unsubscribe();
  }

  getStudents(): void{
    this.students = this.service.get("students").pipe(
      catchError( err => {
        console.log("Hiba! "+err);
        return throwError(err);
      })
    );
  }

  searching(searchContent: string[]): void{
    let indexes : string[] = [''];
    const searchText = searchContent[0];
    const searchType = searchContent[1];
    if(searchText.trim().length == 0){
      this.getStudents();
    } else {
      switch(searchType){
        case 'name':{
          this.subscription1 = this.service.get("students").subscribe((values:Student[]) => {
            for(let index = 0;index < values.length;index++){;
              if(values[index].name.toLowerCase().includes(searchText.toLowerCase())){
                indexes.push(values[index].id);
              }
            }
            if(indexes.length >  0){
              this.students = this.keres.getSerach("students",indexes);
            } else {
              //alert cucc
            }
          });
          break;
        }
        case 'email':{
          this.subscription2 = this.service.get("students").subscribe((values:Student[]) => {
            for(let index = 0;index < values.length;index++){;
              if(values[index].email.toLowerCase().includes(searchText.toLowerCase())){
                indexes.push(values[index].id);
              }
            }
            this.students = this.keres.getSerach("students",indexes);
          });
          break;
        }
        default:{
          this.subscription3 = this.service.get("students").subscribe((values:Student[]) => {
            for(let index = 0;index < values.length;index++){;
              if(values[index].grade.toLowerCase().includes(searchText.toLowerCase())){
                indexes.push(values[index].id);
              }
            }
            this.students = this.keres.getSerach("students",indexes);
          });
        }
      }
    }
  }
}
