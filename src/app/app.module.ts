import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { FirebaseComponent } from './firebase/firebase.component';

import { AngularFireModule } from 'angularfire2';

// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyDhrZcCkcnWzkIcELvRAIKxOTV1lgrkNTg",
  authDomain: "ebidrive17.firebaseapp.com",
  databaseURL: "https://ebidrive17.firebaseio.com",
  storageBucket: "",
  messagingSenderId: "688349979104"
};

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    FirebaseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
