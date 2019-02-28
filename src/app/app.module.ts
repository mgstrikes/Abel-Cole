import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import {CreateSubscriptionCanDeactivateGuardService} from './newsletter/create-subscription-can-deactivate-Guard.service';  
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { ListSubscriptionsComponent } from './newsletter/list-subscriptions.component';
import { CreateSubscriptionComponent } from './newsletter/create-subscription.component';
import {SubscriptionService} from './newsletter/subscription.service';

const appRoutes: Routes = [
  {path: 'list', component: ListSubscriptionsComponent},
  {path: 'create', component: CreateSubscriptionComponent},
  {path: '', redirectTo: '/list', pathMatch: 'full'}
// ,canDeactivate:[CreateSubscriptionCanDeactivateGuardService]
];

@NgModule({
  declarations: [
    AppComponent,
    ListSubscriptionsComponent,
    CreateSubscriptionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    HttpClientModule
  ],
  providers: [SubscriptionService, CreateSubscriptionCanDeactivateGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
