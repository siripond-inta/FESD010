import { Component, OnInit } from '@angular/core';
import { CourseClass } from '../../classes/course-class';
import { CourseService } from '../../services/course-service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './course.html',
  styleUrl: './course.css',
})
export class Course implements OnInit {
  course: CourseClass = new CourseClass();
  courses: CourseClass[] = []

  courseForm!: FormGroup;

  constructor(private courseService: CourseService, private formBuilder: FormBuilder) {
    this.createFormControl();
  }



  public create(): void {
    this.courses.push(this.course)
    this.course = new CourseClass();
  }

  public edit(selectCourse: CourseClass): void {
    this.course = selectCourse
    this.courseForm.patchValue({
      courseIdFormControl: selectCourse.courseId,
      titleFormControl: selectCourse.title,
      descriptionFormControl: selectCourse.description,
      lecturerFormControl: selectCourse.lecturer,
      durationFormControl: selectCourse.duration,
      categoryFormControl: selectCourse.category,
      promoteFormControl: String(selectCourse.promote),
      courseImageFormControl: selectCourse.courseImage
    });
  }

  public delete(selectCourse: CourseClass): void {
    if (!selectCourse || !selectCourse.courseId) {
      alert("กรุณาเลือกข้อมูลที่ต้องการลบก่อน");
      return;
    }

    const isConfirmed = confirm("คุณยืนยันที่จะลบข้อมูลนี้ใช่หรือไม่?");

    if (isConfirmed) {
      const deleteIndex = this.courses.findIndex(c => c.courseId === selectCourse.courseId);

      if (deleteIndex > -1) {
        this.courses.splice(deleteIndex, 1);
        
        this.course = new CourseClass();
        this.courseForm.reset();
      } 
    }
  }

  private createFormControl(): void {
    //set rule for validation
    this.courseForm = this.formBuilder.group({
      courseIdFormControl: ['', Validators.required], //[array จับคู่] {array ธรรมดา}
      titleFormControl: ['', Validators.required],
      descriptionFormControl: ['', Validators.required],
      lecturerFormControl: ['', Validators.required],
      durationFormControl: ['', Validators.required],
      categoryFormControl: ['', Validators.required],
      promoteFormControl: ['', Validators.required],
      courseImageFormControl: ['', Validators.required]
    });
  }

  public onSubmit(): void {
    // ดึงค่าจากฟอร์ม
    const formValues = this.courseForm.value;

    this.course.courseId = formValues.courseIdFormControl;
    this.course.title = formValues.titleFormControl;
    this.course.description = formValues.descriptionFormControl;
    this.course.lecturer = formValues.lecturerFormControl;
    this.course.duration = formValues.durationFormControl;
    this.course.category = formValues.categoryFormControl;
    this.course.promote = formValues.promoteFormControl;
    this.course.courseImage = formValues.courseImageFormControl;

    if (!this.courses.includes(this.course)) {
      this.courses.push(this.course);
    }

    // ล้างค่าเตรียมรับ couse ต่อไป
    this.course = new CourseClass();
    this.courseForm.reset();
  }

  public isInvalid(controlName: string): boolean {
    const control = this.courseForm.get(controlName);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }

  ngOnInit(): void {
    this.courseService.getAll().subscribe(res => {
      console.log(res);
      this.courses = res;
    });
  }

}
