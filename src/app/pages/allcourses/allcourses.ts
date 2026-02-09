import { Component, OnInit } from '@angular/core';
import { CourseClass } from '../../classes/course-class';
import { CourseService } from '../../services/course-service';

@Component({
  selector: 'app-allcourses',
  imports: [],
  templateUrl: './allcourses.html',
  styleUrl: './allcourses.css',
})
export class Allcourses implements OnInit{
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
