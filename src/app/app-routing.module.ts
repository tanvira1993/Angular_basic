import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyOneComponent } from './body-one/body-one.component'
import { BodyTwoComponent } from './body-two/body-two.component'
import { HomeComponent } from './home/home.component'

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'body1', component: BodyOneComponent },
  { path: 'body2', component: BodyTwoComponent },
  { path: '**', component: HomeComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
