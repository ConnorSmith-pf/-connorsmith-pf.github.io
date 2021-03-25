import { Component, OnInit } from '@angular/core';
import { HeaderButton } from '../../models/HeaderButton';
import { HeaderService } from 'src/app/services/header.service';
import { ThemingService } from 'src/app/services/theming.service';
import { SubscriptionsDirective } from 'src/app/directives/subscriptions.directive';
import { Theme } from 'src/app/enums/themes.enum';

@Component({
	selector: 'pf-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent extends SubscriptionsDirective implements OnInit {
  public headerButtons: Array<HeaderButton> = [];
  public systemThemeSelected: boolean;

  constructor(public readonly themingService: ThemingService, private readonly headerService: HeaderService) {
  	super();
  }

  public ngOnInit(): void {
  	this.headerButtons = this.headerService.HeaderButtons;

  	this.subscriptions.push(
  		this.themingService.useSystemTheme$.subscribe((useSystemTheme: boolean) => {
  			this.systemThemeSelected = useSystemTheme
  		})
  	);
  }
}
