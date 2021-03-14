import { Injectable } from '@angular/core';
import { HeaderButton } from '../models/HeaderButton';

@Injectable({
	providedIn: 'root',
})
export class HeaderService {
	constructor() {}

	public get HeaderButtons(): Array<HeaderButton> {
		const homeButton: HeaderButton = {
			id: 'home',
			name: 'home',
			displayName: 'Home',
		};
		const aboutMeButton: HeaderButton = {
			id: 'aboutMe',
			name: 'aboutMe',
			displayName: 'About Me',
		};
		const repositoryChildButtons: Array<HeaderButton> = [
			{
				id: 'contacts-ngrx',
				name: 'contacts-ngrx',
				displayName: 'Contacts - NGRX',
			},
			{
				id: 'restaurant-menu-observable-store',
				name: 'restaurant-menu-observable-store',
				displayName: 'Restaurant Menu - Observable Store',
			},
			{
				id: 'shopping-cart-ngxs',
				name: 'shopping-cart-ngxs',
				displayName: 'Shopping Cart - NGXS',
			},
		];
		const repositoriesButton: HeaderButton = {
			id: 'repositories',
			name: 'repositories',
			displayName: 'Repositories',
			childButtons: repositoryChildButtons,
		};

		return [homeButton, aboutMeButton, repositoriesButton];
	}
}
