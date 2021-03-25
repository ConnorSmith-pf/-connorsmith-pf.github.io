import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { MainComponent } from './main.component';
import { AppRouterModule } from '../../modules/router.module';

@NgModule({
  declarations: [MainComponent],
  imports: [FormsModule, AppRouterModule],
  exports: [MainComponent],
})
export class MainModule {
}
