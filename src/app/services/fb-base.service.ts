import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../shared/models/student.model';
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class FbBaseService {

  constructor(private afs:AngularFirestore) { }

  async add(CollectionName: string,data: Student,id?: string): Promise<String>{
    const uid = id ? id : this.afs.createId();
    data.id = uid;
    await this.afs.collection(CollectionName).doc(uid).set(data);
    return uid;
  }

  get(CollectionName: string): Observable<Student[]>{
    return this.afs.collection(CollectionName).valueChanges() as Observable<Student[]>;
  }

  delete(CollectionName: string,id: string): Promise<void>{
    return this.afs.collection(CollectionName).doc(id).delete().then(result => {console.log("Siekres delete!")}, err => {"Sikertelen delete:"+err}).finally(() => {console.log("Delete lefutott!")});
  }

  update(CollectionName: string,id: string,data: Student): Promise<void>{
    return this.afs.collection(CollectionName).doc(id).update(data).then(result => {console.log("Siekres update!")}, err => {"Sikertelen update:"+err}).finally(() => {console.log("Update lefutott!")});
  }
}

