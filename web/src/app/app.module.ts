import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RootComponent } from './components/root/root.component';
import { RootModule } from './components/root/root.module';
import { AppRouterModule } from './modules/router.module';
import { SubscriptionsDirective } from './directives/subscriptions.directive';

@NgModule({
	declarations: [SubscriptionsDirective],
	imports: [AppRouterModule, BrowserModule, BrowserAnimationsModule, RootModule],
	providers: [],
	bootstrap: [RootComponent],
})
export class AppModule {}
