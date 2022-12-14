import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListsComponent } from './lists/lists.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MessgesComponent } from './messges/messges.component';
import { AuthGuard } from './_gurds/auth.guard';
import { TestErrorsComponent } from './errors/test-errors/test-errors.component';
import { NotFoundComponent } from './ERRORS/not-found/not-found.component';
import { ServerErrorComponent } from './ERRORS/server-error/server-error.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {
    path:'',
    runGuardsAndResolvers:'always',
    canActivate: [AuthGuard],
    children:[
      {path:'members',component:MemberListComponent,canActivate:[AuthGuard]},
      {path:'members/:username',component:MemberDetailComponent},
      {path:'lists',component:ListsComponent},
      {path:'message',component:MessgesComponent}
    ]
  },
  {path:'erorrs',component:TestErrorsComponent},
  {path: 'not-found', component: NotFoundComponent},
  {path: 'server-error', component: ServerErrorComponent},
  {path:'**',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
