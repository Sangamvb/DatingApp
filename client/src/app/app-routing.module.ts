import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListsComponent } from './lists/lists.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MessgesComponent } from './messges/messges.component';
import { AuthGuard } from './_gurds/auth.guard';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {
    path:'',
    runGuardsAndResolvers:'always',
    canActivate: [AuthGuard],
    children:[
      {path:'members',component:MemberListComponent,canActivate:[AuthGuard]},
      {path:'members/:id',component:MemberDetailComponent},
      {path:'lists',component:ListsComponent},
      {path:'message',component:MessgesComponent}
    ]
  },
  {path:'**',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
