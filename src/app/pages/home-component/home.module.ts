import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FelvetelModule } from '../felvetel-component/felvetel.module';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {DiakokModule} from "../diakok-componenet/diakok.module";
import {HomeComponentComponent} from "./home-component.component";

@NgModule({
  declarations: [HomeComponentComponent],
  imports: [
    CommonModule,
    FelvetelModule,
    DiakokModule,
    MatIconModule,
    MatToolbarModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  exports:[HomeComponentComponent]
})
export class HomeModule { }
