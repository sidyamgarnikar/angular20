import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = ['angular20'];
 fruits: Array<string> = ["apple", "banana", "mango"];
 skills: Array<string> = ["HTML","css", "Angular", "bootstrap"];
 names:Array<string> = ["Ram", "Shyam", "Sita"];
 flags: boolean[] = [true, false, true];
 colors: Array<string> = ["red", "green", "blue"];
 cities: Array<string> = ["Mumbai", "Delhi", "Pune"];
 data: Array<any> = ["apple", 10, true];
 isLoggedIn: Array<boolean> = [true, false, false, true];
 countries: Array<string> = ["India", "USA", "UK"];
 languages: Array<string> = ["JavaScript", "TypeScript", "Python"];
 subjects: Array<string> = ["Math", "Science", "English"];
 days: Array<string>= ["Monday", "Tuesday", "Wednesday"];
 days1: Array<string>= ["Monday", "Tuesday", "Wednesday"];
}
