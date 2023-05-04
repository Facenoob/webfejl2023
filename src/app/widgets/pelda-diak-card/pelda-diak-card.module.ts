import {NgModule} from "@angular/core";
import {PeldaDiakCardComponent} from "./pelda-diak-card.component";
import {CommonModule} from "@angular/common";
import {MatCardModule} from "@angular/material/card";

@NgModule({
  declarations: [PeldaDiakCardComponent],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports:[PeldaDiakCardComponent]
})
export class PeldaDiakCardModule { }
