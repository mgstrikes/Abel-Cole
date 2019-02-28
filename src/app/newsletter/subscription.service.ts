import { NewsletterSubscription } from '../models/newsletter-subscription.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class SubscriptionService {
    baseUrl = 'http://localhost:3000/subscriptions';
    constructor(private httpClient: HttpClient) {}
    private subscriptionList: NewsletterSubscription[];
    //  = [
    //     {
    //     id: 1,
    //     name: 'Mark',
    //     contactPreference: 'Email',
    //     email: 'mark@ac.com',
    //     foodPreference: 'Vegetarian',
    // tslint:disable-next-line:max-line-length
    //     areasOfInterest: [ { item_id: 1, item_text: 'Seasonal Food' }, { item_id: 2, item_text: 'Recipes' }, { item_id: 3, item_text: 'Fruit'} ]
    //   },
    //   {
    //     id: 2,
    //     name: 'John',
    //     contactPreference: 'Phone',
    //     phoneNumber: 9900990099,
    //     foodPreference: 'vegan',
    // tslint:disable-next-line:max-line-length
    //     areasOfInterest: [ { item_id: 1, item_text: 'Seasonal Food' }, { item_id: 2, item_text: 'Recipes' }, { item_id: 3, item_text: 'Fruit'} ]
    //   },
    //   {
    //     id: 3,
    //     name: 'Mary',
    //     contactPreference: 'Phone',
    //     phoneNumber: 1200120012,
    //     foodPreference: 'vegan',
    // tslint:disable-next-line:max-line-length
    //     areasOfInterest: [ { item_id: 1, item_text: 'Seasonal Food' }, { item_id: 2, item_text: 'Recipes' }, { item_id: 3, item_text: 'Fruit'} ]
    //   }
    // ];
    public getSubscriptions(): Promise<NewsletterSubscription[]> {
        return this.httpClient.get<NewsletterSubscription[]>(this.baseUrl).toPromise();
//         this.subscriptionList.forEach(element => {
//             let interests = '';
//             element.areasOfInterest.forEach(x => {
//                 interests += x.item_text + '-';
//             });
//             element.interests = interests;
//         });
//    return this.subscriptionList;
}

public saveSubscription(subscription: NewsletterSubscription) {
    return this.httpClient.post<NewsletterSubscription>(this.baseUrl, subscription, {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }).subscribe(
        data  => {
        console.log('POST Request is successful ', data);
        },
        error  => {
        console.log('Error', error);
        });
    // this.subscriptionList.push(subscription);
}
}
