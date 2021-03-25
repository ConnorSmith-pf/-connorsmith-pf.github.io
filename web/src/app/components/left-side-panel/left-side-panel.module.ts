import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { LeftSidePanelComponent } from './left-side-panel.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [LeftSidePanelComponent],
	imports: [FormsModule, MatSidenavModule, MatIconModule, MatListModule, RouterModule],
	exports: [LeftSidePanelComponent],
})
export class LeftSidePanelModule {}
