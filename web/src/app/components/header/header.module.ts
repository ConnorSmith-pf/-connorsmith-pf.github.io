import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, FormsModule, MatButtonToggleModule, MatToolbarModule, MatIconModule, MatButtonModule, MatSlideToggleModule],
  exports: [HeaderComponent],
})
export class HeaderModule {
}
