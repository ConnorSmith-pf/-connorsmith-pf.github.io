import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, FormsModule, MatSlideToggleModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
