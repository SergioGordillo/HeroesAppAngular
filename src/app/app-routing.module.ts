import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';


const routes:Routes=[

  {
      path:'error',
      component: ErrorPageComponent,
  },
  {
      path:'**',
      // component: ErrorPageComponent
      redirectTo:'error'
  },

];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ], 
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
