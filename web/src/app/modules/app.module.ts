import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RootComponent } from '../components/root/root.component';
import { AppRouterModule } from './router.module';
import { SubscriptionsDirective } from '../directives/subscriptions.directive';
import { HeaderModule } from '../components/header/header.module';
import { LeftSidePanelModule } from '../components/left-side-panel/left-side-panel.module';
import { MainModule } from '../components/main/main.module';

const rootModules: Array<any> = [HeaderModule, LeftSidePanelModule, MainModule];

@NgModule({
  declarations: [SubscriptionsDirective, RootComponent],
  imports: [AppRouterModule, BrowserModule, BrowserAnimationsModule, ...rootModules],
  providers: [],
  bootstrap: [RootComponent],
})
export class AppModule {
}
