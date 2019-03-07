import { Injectable } from '@angular/core';
import {Init} from './init-student'
import {Student} from './student';
import { Http, Response, Headers, ResponseOptions, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { URLSearchParams } from '@angular/http';

// Observable class extensions
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class StudentService  {
  headers: Headers;
    options: RequestOptions;
    
    constructor(private http: Http) {
        this.headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'});
        this.options = new RequestOptions({ headers: this.headers });
         console.log('TodoService Initialized...'); 

    }

 sendParamData(student:Student) : Observable<Object> {
// working successfully
      const params = new URLSearchParams();
      params.set('studentId', student.studentId);
      params.set('name', student.name);
      params.set('marks', student.marks);

    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    let options = new RequestOptions({headers: headers});
      return this.http
        .post('http://localhost:8080/student/create', params, this.options)

        .map(this.extractData)
        .catch(this.handleError);

   }
 
//  updateParamData(oldStudent, newStudent){
//         console.log('marks new'+newStudent.marks);
//         oldStudent=newStudent;
//         console.log('marks old'+oldStudent.marks);
//  }

updateParamData(student:Student) : Observable<Object> {
      const params = new URLSearchParams();
      params.set('studentId', student.studentId);
      params.set('name', student.name);
      params.set('marks', student.marks);

    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    let options = new RequestOptions({headers: headers});
      return this.http
        .put('http://localhost:8080/edit/id/{studentId}', params, this.options)

        .map(this.extractData)
        .catch(this.handleError);

   }


       /*  var todos = JSON.parse(localStorage.getItem('todos'));

        for(var i = 0;i < todos.length;i++){

        if(todos[i].text == oldStudent){
          todos[i].text = newStudent;
        }
      }
      
      //set New Todo
        localStorage.setItem('todos', JSON.stringify(todos)) 
   */


    /* updateParamData(student:Student) : Observable<Object> {
      const params = new URLSearchParams();
      params.set('studentId', student.studentId);
      params.set('name', student.name);
      params.set('marks', student.marks);

    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    let options = new RequestOptions({headers: headers});
      return this.http
        .put('http://localhost:8080/edit/id/{studentId}', params, this.options)

        .map(this.extractData)
        .catch(this.handleError);

   }
 */
  //  deleteParamData(student:Student) : Observable<Object> {
  //     const params = new URLSearchParams();
  //     params.set('studentId', student.studentId);
  //     params.set('name', student.name);
  //     params.set('marks', student.marks);

  //   let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
  //   let options = new RequestOptions({headers: headers});
  //     return this.http
  //       .delete('http://localhost:8080/delete/id/{studentId}', params, this.options)

  //       .map(this.extractData)
  //       .catch(this.handleError);

  //  }

    getStudents():Observable<Student[]> {
    let headers = new Headers({ 'Access-Control-Allow-Origin': '*' });
var students = JSON.parse(localStorage.getItem('students'));
        return this.http.get('http://localhost:8080/student/list')
            .map(this.extractData)
            .catch(this.handleError);
    }

           

private extractData(res:Response) {
  let body = res.json();
  return body || {};
}

    
private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
       console.error("if: ")
      const body = error.json() || '';
      console.error("error: "+body)
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      console.error("else: ")
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
 

}