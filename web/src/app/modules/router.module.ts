import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from '../components/main/about-me/about-me.component';
import { MainComponent } from '../components/main/main.component';
import { RepositoriesComponent } from '../components/main/repositories/repositories.component';

const mainRoutes: Routes = [
  { path: '', redirectTo: 'AboutMe', pathMatch: 'full' },
  { path: 'AboutMe', component: AboutMeComponent },
  { path: 'Repositories', component: RepositoriesComponent },
  { path: '**', redirectTo: 'AboutMe', pathMatch: 'full' },
];
const routes: Routes = [
  {
    path: '', component: MainComponent, children: [
      ...mainRoutes,
    ],
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouterModule {
}
