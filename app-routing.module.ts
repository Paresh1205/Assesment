import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListComponent } from './user-list/user-list.component';
import { ConfirmComponent } from './confirm/confirm.component';

const routes: Routes = [
  { path :'' ,component: UserListComponent},
  { path: 'user-list', component: UserListComponent },
  { path: 'user-details', component: UserDetailsComponent },
  {path: 'confirm', component: ConfirmComponent,data: { title: 'third' }}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
