import { Injectable } from '@angular/core';
import { courseMockup } from '../classes/course-class';
import { Observable ,of} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  public getAll():Observable<any> {
    return of(courseMockup)
  }
}
