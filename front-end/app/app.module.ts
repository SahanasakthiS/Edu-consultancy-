import { NgModule } from '@angular/core';
import { NgModel } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule} from '@angular/material/card';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app.routes';
import { RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { Home1Component } from './home1/home1.component';
import { Home2Component } from './home2/home2.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CourseListComponent } from './course-list/course-list.component';
import { SubsComponent } from './subs/subs.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { PaymentComponent } from './payment/payment.component';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ConfirmationComponent } from './confrimation/confrimation.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HttpInterceptorService } from './http.interceptor';
import { NgForm } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BlogComponent } from './blogs/blogs.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    DashboardComponent,
    LoginComponent,
    LandingComponent,
    Home1Component,
    Home2Component,
    AboutComponent,
    ContactComponent,
    CourseListComponent,
    SubsComponent,
    SubscriptionComponent,
    PaymentComponent,
    ConfirmationComponent,
    FeedbackComponent,
    AdminDashboardComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    NgModel,
    RouterModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    HttpClient,
    NgForm,
    ReactiveFormsModule
    
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true,
    },
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }