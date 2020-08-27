import { ServerResolver } from './servers/server/server-resolver.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ServerComponent } from './servers/server/server.component';
import { AuthGuard } from './auth-guard.service';
import { CanDeactivateGuard } from './servers/edit-server/can-deactivate-guard.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'users',
    canActivate: [AuthGuard],
    component: UsersComponent,
    children: [{ path: ':id/:name', component: UserComponent }],
  },
  {
    path: 'servers',
    canActivateChild: [AuthGuard],
    component: ServersComponent,
    children: [
      { path: ':id', component: ServerComponent, resolve: { server: ServerResolver } },
      { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard] },
    ],
  },
  {
    path: 'not-found',
    component: PageNotFoundComponent,
  },
  { path: 'error', component: ErrorPageComponent, data: { message: 'Some error occurred!' } },
  {
    path: '**',
    redirectTo: 'not-found',
  },
];

@NgModule({
  //imports: [RouterModule.forRoot(appRoutes, { useHash: true })],

  imports: [RouterModule.forRoot(appRoutes, { useHash: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
