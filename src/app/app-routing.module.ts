import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListComponent} from "./main/list/list.component";
import {DetailedComponent} from "./main/detailed/detailed.component";

const routes: Routes = [
  {
    path: '',
    component: ListComponent
  },
  {
    path: 'detailed/:id',
    component: DetailedComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
