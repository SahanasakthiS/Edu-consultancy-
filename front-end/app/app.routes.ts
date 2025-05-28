import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingComponent } from './landing/landing.component';
import { Home1Component } from './home1/home1.component';
import { Home2Component } from './home2/home2.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CourseListComponent } from './course-list/course-list.component';
import { SubsComponent } from './subs/subs.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { PaymentComponent } from './payment/payment.component';
import { ConfirmationComponent } from './confrimation/confrimation.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { BlogComponent } from './blogs/blogs.component';
export const routes: Routes = [
    {path: '', component: LandingComponent},
    {path: 'login' , component: LoginComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'home',component:HomeComponent},
    {path: 'home1', component:Home1Component},
    {path: 'home2', component:Home2Component},
    {path: 'about', component:AboutComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'courses', component: CourseListComponent},
    {path: 'subs', component: SubsComponent},
    {path: 'subscription', component: SubscriptionComponent},
    {path: 'payment', component: PaymentComponent},
    {path: 'confrimation', component: ConfirmationComponent},
    {path: 'feedback', component: FeedbackComponent},
    {path: 'admin', component : AdminDashboardComponent},
    {path: 'blogs', component : BlogComponent}
];

@NgModule({
    imports:
    [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}