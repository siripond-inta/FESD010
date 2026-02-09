import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Course } from './pages/course/course';
import { Allcourses } from './pages/allcourses/allcourses';

export const routes: Routes = [
    { path: '', redirectTo: 'homepage', pathMatch: 'full' }, 
    
    { path: 'homepage', component: Home},
    { path: 'coursepage', component: Course },
    { path: 'allcoursespage', component: Allcourses}
];
