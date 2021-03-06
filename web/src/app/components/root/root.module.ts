import { NgModule } from '@angular/core';

import { RootComponent } from './root.component';
import { FormsModule } from '@angular/forms';
import { HeaderModule } from '../header/header.module';

@NgModule({
  declarations: [RootComponent],
  imports: [FormsModule, HeaderModule],
})
export class RootModule {}
