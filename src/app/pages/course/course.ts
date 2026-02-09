import { Component, OnInit } from '@angular/core';
import { CourseClass } from '../../classes/course-class';
import { CourseService } from '../../services/course-service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-course',
  imports: [],
  templateUrl: './course.html',
  styleUrl: './course.css',
})
export class Course implements OnInit {
  course: CourseClass = new CourseClass();
  courses: CourseClass[] = []

  courseForm! : FormGroup;

constructor(private courseService: CourseService) { 
  
}

  ngOnInit(): void {
    this.courseService.getAll().subscribe(res => {
      console.log(res);
      this.courses = res; 
    });
  }

  public edit (selectCourse : CourseClass) : void {
    this.course = selectCourse
    //ก็อปปี้ข้อมูลจาก teacher ลงไปใน Form
    this.courseForm.patchValue({
      courseIdFormControl: selectCourse.courseId,
      descriptionFormControl: selectCourse.description,
      lecturerFormControl: selectCourse.lecturer,
      durationFormControl: selectCourse.duration,
      categoryFormControl: selectCourse.category,
      promoteFormControl: selectCourse.promote
  });
  }

}
