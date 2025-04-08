import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-review',
  imports: [CommonModule],
  templateUrl: './review.component.html',
  styleUrl: './review.component.css'
})
export class ReviewComponent {

  reviews = [
    {
      name: 'John Deo',
      role: 'Happy Customer',
      text: 'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Asperiores Sint Corporis Voluptate Non Error Obcaecati...',
      image: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    {
      name: 'John Deo',
      role: 'Happy Customer',
      text: 'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Asperiores Sint Corporis Voluptate Non Error Obcaecati...',
      image: 'https://randomuser.me/api/portraits/women/1.jpg'
    },
    {
      name: 'John Deo',
      role: 'Happy Customer',
      text: 'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Asperiores Sint Corporis Voluptate Non Error Obcaecati...',
      image: 'https://randomuser.me/api/portraits/men/2.jpg'
    }
  ];

}
