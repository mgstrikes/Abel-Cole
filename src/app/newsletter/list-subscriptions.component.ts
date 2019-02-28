import { Component, OnInit } from '@angular/core';
import { NewsletterSubscription } from '../models/newsletter-subscription.model';
import { SubscriptionService } from './subscription.service';

@Component({
  templateUrl: './list-subscriptions.component.html',
  styleUrls: ['./list-subscriptions.component.css']
})
export class ListSubscriptionsComponent implements OnInit {
  subscriptions: NewsletterSubscription[];
  constructor(private _subscriptionService: SubscriptionService) { }

  async ngOnInit() {
    this.subscriptions = await this._subscriptionService.getSubscriptions();
        this.subscriptions.forEach(element => {
            let interests = '';
            element.areasOfInterest.forEach(x => {
                interests += x.item_text + '\t\t';
            });
            element.interests = interests;
        });
  }

}
