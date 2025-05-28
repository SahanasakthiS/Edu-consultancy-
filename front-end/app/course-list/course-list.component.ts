import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent {
  category: string = '';
  courses = [
    { name: 'Angular Development', category: 'Computer Science', cost: '$50' },
    { name: 'Network Security', category: 'Cybersecurity', cost: '$80' },
    { name: 'Calculus Basics', category: 'Mathematics', cost: '$40' },
    { name: 'Quantum Physics', category: 'Physics', cost: '$70' },
    { name: 'Genetics 101', category: 'Biology', cost: '$60' },
    { name: 'Organic Chemistry', category: 'Chemistry', cost: '$55' },
  ];
  filteredCourses:{name:string, category:string, cost:string }[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.category = params['category'];
      this.filteredCourses = this.courses.filter(course => course.category === this.category);
    });
  }
}
