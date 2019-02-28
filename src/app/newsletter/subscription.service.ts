import { NewsletterSubscription } from '../models/newsletter-subscription.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class SubscriptionService {
    baseUrl = 'http://localhost:3000/subscriptions';
    constructor(private httpClient: HttpClient) {}
    private subscriptionList: NewsletterSubscription[];

    public getSubscriptions(): Promise<NewsletterSubscription[]> {
        return this.httpClient.get<NewsletterSubscription[]>(this.baseUrl).toPromise();
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
}
}
