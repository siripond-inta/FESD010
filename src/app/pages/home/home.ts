import { Component, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";
import { CourseClass } from '../../classes/course-class';
import { CourseService } from '../../services/course-service';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit{
  course: CourseClass = new CourseClass();
  courses: CourseClass[] = []

  constructor(private courseService: CourseService) { 
  
}

  ngOnInit(): void {
    this.courseService.getAll().subscribe(res => {
      console.log(res);
      this.courses = res; 
    });
  }
}
