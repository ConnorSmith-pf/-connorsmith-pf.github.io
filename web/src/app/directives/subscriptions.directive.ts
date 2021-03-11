import { Directive, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[pfSubscriptions]',
})
export class SubscriptionsDirective implements OnDestroy {
  public subscriptions: Array<Subscription> = [];
  constructor() {}

  public ngOnDestroy(): void {
    this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
  }
}
