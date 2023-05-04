import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

import { MatDialogModule } from '@angular/material/dialog';

import {FelvetelComponentComponent} from "./felvetel-component.component";
import {UjDiakModule} from "../../widgets/uj-diak/uj-diak.module";
import {PeldaDiakCardModule} from "../../widgets/pelda-diak-card/pelda-diak-card.module";

@NgModule({
  declarations: [FelvetelComponentComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatDialogModule,
    UjDiakModule,
    PeldaDiakCardModule
  ],
  exports:[FelvetelComponentComponent]
})
export class FelvetelModule { }
