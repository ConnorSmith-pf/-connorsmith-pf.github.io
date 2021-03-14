import { Component, OnInit } from '@angular/core';
import { HeaderButton } from 'src/app/models/HeaderButton';

@Component({
	selector: 'pf-left-side-panel',
	templateUrl: './left-side-panel.component.html',
	styleUrls: ['./left-side-panel.component.scss'],
})
export class LeftSidePanelComponent implements OnInit {
  public buttons: Array<HeaderButton> = [];

  public ngOnInit(): void {
  	this.buttons = [
  		{
  			id: 'test',
  			displayName: 'test',
  			name: 'test'
  		},
  		{
  			id: 'test',
  			displayName: 'test',
  			name: 'test'
  		}
  	];
  }
}
