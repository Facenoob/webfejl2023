import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import {DiakCardComponent} from "./diak-card.component";
import {SzerkesztDiakModule} from "../szerkeszt-diak/szerkeszt-diak.module";

@NgModule({
  declarations: [DiakCardComponent],
  imports: [
    CommonModule,
    MatCardModule,
    SzerkesztDiakModule
  ],
  exports:[DiakCardComponent]
})
export class DiakCardModule { }
