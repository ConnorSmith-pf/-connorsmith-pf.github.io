import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../components/main/main.component';

@NgModule({
	imports: [RouterModule.forRoot(getRoutes())],
	exports: [RouterModule]
})
export class AppRouterModule {

}

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function getRoutes(): Routes {
	return [
		{path: '', component: MainComponent},
		{path: '**', component: MainComponent}
	];
}
