import {SzerkesztDiakComponent} from "./szerkeszt-diak.component";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgModule} from "@angular/core";
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
  declarations: [SzerkesztDiakComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  exports:[SzerkesztDiakComponent]
})
export class SzerkesztDiakModule { }
