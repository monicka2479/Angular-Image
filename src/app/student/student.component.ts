import { Component, OnInit } from '@angular/core';
import { FormsModule }        from '@angular/forms';
import {StudentService} from './student.service'
import {Student} from './student';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})


export class StudentComponent implements OnInit {
  constructor(private _studentService: StudentService) { }

  private students:Student[] = [];
  private newStudent = new Student();
    private oldStudent = new Student();
private student=new Student();
  appState = 'default';

  private errorMessage:any = '';
     ngOnInit() {

        console.log("inside Student component");
       this._studentService.getStudents()
            .subscribe(
                students =>
                 this.students = students,

                error => this.errorMessage = <any>error);

				

  }

  addStudent(){
    console.log("inside Student add");
    this._studentService.sendParamData(this.newStudent)
	     .subscribe( newStudent => {
			            this.students.push(this.newStudent);					   
			 },
                         error => this.errorMessage = <any>error);

  }


   editStudent(student){
       this.appState = 'edit';
    
       this.newStudent=student;
       this.student=student;
        this._studentService.getStudent()
            .subscribe(student => {
			            this.newStudent=student;
                  this.student=student;;					   
			 },
                error => this.errorMessage = <any>error);
}


  updateStudent(student){
	  console.log("inside update");
   this._studentService.updateParamData(student);
    }
}
