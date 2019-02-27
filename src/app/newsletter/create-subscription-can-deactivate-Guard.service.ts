import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { CreateSubscriptionComponent } from './create-subscription.component';

@Injectable()
export class CreateSubscriptionCanDeactivateGuardService implements CanDeactivate<CreateSubscriptionComponent> {
    canDeactivate(component: CreateSubscriptionComponent): boolean {
        if (component.createSubscriptionForm.dirty) {
            return confirm('Are you sure you want to discard your changes?');
        }

        return true;
    }
}
