import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ApiDetailsComponent } from './api-details/api-details.component';


const routes: Routes = [
  {path: 'form', component: FormComponent},
  {path: 'api-details', component: ApiDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
