import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MatCardModule} from "@angular/material/card";
import {DiakCardModule} from "../../widgets/diak-card/diak-card.module";
import {DiakokComponenetComponent} from "./diakok-componenet.component";
import {KeresesModule} from "../../widgets/kereses/kereses.module";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [DiakokComponenetComponent],
  imports: [
    CommonModule,
    MatCardModule,
    DiakCardModule,
    FormsModule,
    KeresesModule
  ],
  exports: [DiakokComponenetComponent]
})
export class DiakokModule { }
