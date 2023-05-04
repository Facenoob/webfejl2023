import {KeresesComponent} from "./kereses.component";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {MatCardModule} from "@angular/material/card";

@NgModule({
  declarations: [KeresesComponent],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports:[KeresesComponent]
})
export class KeresesModule { }
