import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from '../pages/login';
import {CreateAccountComponent} from '../pages/CreateAccount/create-account';
import {BossListComponent} from '../pages/BossList/boss-list';


const routes: Routes = [
  { path: '', redirectTo: '/createAccount', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'createAccount',  component: CreateAccountComponent },
  { path: 'bossList',  component: BossListComponent },
  //{ path: 'userList',  component: UserListComponent },
  //{ path: 'projectList', component: ProjectListComponent },
  //{ path: 'projectDetail/:id', component: ProjectDetailComponent },
  //{ path: 'progress/:id/:gid/:type', component: ProgressPageComponent,pathMatch:'full' },
  //{ path: 'progress/workduty/:id/:gid/:type', component: ProgressPageComponent,pathMatch:'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
