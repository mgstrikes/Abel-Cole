import { Component, OnInit, ViewChild } from '@angular/core';
import { NewsletterSubscription } from '../models/newsletter-subscription.model';
import { SubscriptionService } from './subscription.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-subscription',
  templateUrl: './create-subscription.component.html',
  styleUrls: ['./create-subscription.component.css']
})
export class CreateSubscriptionComponent implements OnInit {
  @ViewChild('subscriptionForm') public createSubscriptionForm: NgForm;
  constructor(private _subscriptionService: SubscriptionService, private _router: Router) { }
  areasOfInterestList = [];
  dropdownSettings = {};
  areasOfInterest = 1;
  subscription: NewsletterSubscription = {
    id: null,
    name: null,
    email: '',
    phoneNumber: null,
    contactPreference: null,
    foodPreference: null,
    areasOfInterest: null
  };

  ngOnInit() {
    this.areasOfInterestList = [
      { item_id: 1, item_text: 'Seasonal Food' },
      { item_id: 2, item_text: 'Recipes' },
      { item_id: 3, item_text: 'Fruit' },
      { item_id: 4, item_text: 'Veg' },
      { item_id: 5, item_text: 'Drinks' },
      { item_id: 6, item_text: 'Household' }
    ];

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 6,
      allowSearchFilter: true
    };
  }
  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

  subscribe(): void {
    this._subscriptionService.saveSubscription(this.subscription);
    this._router.navigate(['list']);
  }
}
