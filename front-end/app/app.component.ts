
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd,RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { NavbarComponent} from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CourseListComponent } from './course-list/course-list.component';
import { SubsComponent } from './subs/subs.component';
import { PaymentComponent } from './payment/payment.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { ConfirmationComponent } from './confrimation/confrimation.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { BlogComponent } from './blogs/blogs.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink, RouterLinkActive, NavbarComponent, AdminDashboardComponent,BlogComponent,HomeComponent,LoginComponent, DashboardComponent, CourseListComponent, SubsComponent, PaymentComponent,SubscriptionComponent,ConfirmationComponent, FeedbackComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  onLoginClick(email: string, password: string){
    if(!email || !password){
      alert ('Email and password are required!');
    }
    else{
      window.location.href = 'dashboard';
    }
  }
  title = 'myapp';
  constructor(private router: Router){}
  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd){
        console.log('Navigation Ends',event);
      }
    });
  }
}
