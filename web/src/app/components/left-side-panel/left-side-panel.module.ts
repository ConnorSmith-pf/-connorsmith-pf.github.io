import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { LeftSidePanelComponent } from './left-side-panel.component';

@NgModule({
	declarations: [LeftSidePanelComponent],
	imports: [CommonModule, FormsModule],
	exports: [LeftSidePanelComponent],
})
export class LeftSidePanelModule {}
