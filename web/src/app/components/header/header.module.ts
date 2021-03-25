import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
	declarations: [HeaderComponent],
	imports: [CommonModule, FormsModule, MatButtonToggleModule, MatToolbarModule, MatIconModule],
	exports: [HeaderComponent],
})
export class HeaderModule {}
