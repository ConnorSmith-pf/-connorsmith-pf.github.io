import { Directive, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Directive({
  selector: 'subscriptions',
})
export class SubscriptionsDirective implements OnDestroy {
  public subscriptions: Array<Subscription> = [];

  public ngOnDestroy(): void {
    this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
  }
}
