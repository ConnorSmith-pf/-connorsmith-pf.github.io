import { NgModule } from '@angular/core';

import { RootComponent } from './root.component';
import { FormsModule } from '@angular/forms';
import { HeaderModule } from '../header/header.module';
import { LeftSidePanelModule } from '../left-side-panel/left-side-panel.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MainComponent } from '../main/main.component';

@NgModule({
	declarations: [RootComponent, MainComponent],
	imports: [FormsModule, RouterModule, CommonModule, HeaderModule, LeftSidePanelModule],
})
export class RootModule {}
