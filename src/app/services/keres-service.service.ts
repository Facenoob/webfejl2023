import { Injectable } from '@angular/core';
import {AngularFirestore , CollectionReference, Query } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Student } from 'src/app/shared/models/student.model' ;

@Injectable({
  providedIn: 'root'
})
export class KeresServiceService {

  constructor(private afs:AngularFirestore) { }

  getSerach(CollectionName: string,indexes: string[]): Observable<Student[]>{
    return this.afs.collection(CollectionName, ref => {
      let query: CollectionReference | Query = ref;
      query = query.where('id','in',indexes).where('status','==','Active').orderBy('name','asc').limit(1000);
      return query;
    }).valueChanges() as Observable<Student[]>;
  }

  getOneStudent(CollectionName: string): Observable<Student[]>{
    return this.afs.collection(CollectionName, ref => {
      let query: CollectionReference | Query = ref;
      query = query.where('email','!=','').where('status','==','Active').limit(1);
      return query;
    }).valueChanges() as Observable<Student[]>;
  }
}
