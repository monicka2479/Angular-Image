import { Component } from '@angular/core';

import {StudentComponent} from './student/student.component';
import {StudentService} from './student/student.service';
import './rxjs-operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [StudentService]
})
export class AppComponent {
  title = 'app works!';
}
