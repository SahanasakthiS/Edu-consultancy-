import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [ FormsModule, CommonModule],
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogComponent {
  blogs = [
    {
      title: 'The Importance of Education in Modern Society',
      content: 'Education shapes the future by providing knowledge, fostering innovation, and empowering individuals to contribute meaningfully to society.',
      author: 'John Doe',
      date: 'December 1, 2024'
    },
    {
      title: 'Online Learning: Opportunities and Challenges',
      content: 'With advancements in technology, online education has become a significant part of learning, offering flexibility but requiring self-discipline.',
      author: 'Jane Smith',
      date: 'November 20, 2024'
    },
    {
      title: 'How to Stay Motivated While Studying',
      content: 'Maintaining a study routine, setting clear goals, and rewarding progress are key to staying motivated during your educational journey.',
      author: 'Michael Brown',
      date: 'November 10, 2024'
    },
    {
      title: 'STEM Education and Its Role in the Future',
      content: 'Focusing on Science, Technology, Engineering, and Mathematics can drive innovation and open career opportunities in an evolving world.',
      author: 'Emily White',
      date: 'October 15, 2024'
    },
    {
      title:  'The Power of Positive Thinking',
      content: 'A positive mindset can transform our lives, helping us overcome challenges and achieve our goals with confidence.',
      author: 'Jane Smith',
      date: 'October 15, 2024'
    }
  ];
}