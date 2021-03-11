import { NgModule } from '@angular/core';

import { RootComponent } from './root.component';
import { FormsModule } from '@angular/forms';
import { HeaderModule } from '../header/header.module';
import { LeftSidePanelModule } from '../left-side-panel/left-side-panel.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [RootComponent],
  imports: [FormsModule, RouterModule, CommonModule, HeaderModule, LeftSidePanelModule],
})
export class RootModule {}
