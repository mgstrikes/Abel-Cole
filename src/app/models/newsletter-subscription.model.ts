import { Interest } from './interest.model';

export class NewsletterSubscription {
    id: Number;
    name: string;
    email?: string;
    phoneNumber?: Number;
    foodPreference: string;
    contactPreference: string;
    areasOfInterest: Interest[];
    interests?: string;
}
