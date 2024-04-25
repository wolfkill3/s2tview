import {Routes} from '@angular/router';
import {DdsComponent} from "./dds/dds.component";
import {OdsComponent} from "./ods/ods.component";
import {EditComponent} from "./edit/edit.component";

export const routes: Routes = [
  // {path: 'dds', component: DdsComponent},
  {path: 'ods', component: OdsComponent},
  {path: 'dds', component: EditComponent}
];
