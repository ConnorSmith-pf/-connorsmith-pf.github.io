import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from '../components/main/about-me/about-me.component';

const routes: Routes = [
	{ path: 'AboutMe', component: AboutMeComponent },
  { path: '**', component: AboutMeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouterModule {
}
