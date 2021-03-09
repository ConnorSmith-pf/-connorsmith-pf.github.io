import { NgModule } from '@angular/core';

import { RootComponent } from './root.component';
import { FormsModule } from '@angular/forms';
import { HeaderModule } from '../header/header.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [RootComponent],
  imports: [MatButtonModule, MatCardModule, FormsModule, HeaderModule],
})
export class RootModule {}
