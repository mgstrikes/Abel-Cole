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

  ngOnInit() {
    this.subscriptions = this._subscriptionService.getSubscriptions();
  }

}
