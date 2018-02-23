import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})

export class DetailsComponent implements OnInit {
  a = []
  firstName: string;
  lastName: string;
  dob: Date;
  Dob: Date;
  email: string;
  number: number;
  f: string; 
  data: any;
  id = null;

  constructor(private http:HttpClient) {
    this.http.get('assets/faculty.json').subscribe(res => this.data = res);
   }

  add() {
    this.a.push({'firstname':this.firstName,'lastname':this.lastName,'dob': this.dob,'email':this.email,'number': this.number, 'faculty':this.f})
    this.firstName = '';
    this.lastName = '';
    this.dob = null;
    this.email = '';
    this.number = null;
    this.f = null;
  }

  removeItem(j) {
    this.a.splice(j, 1);
  }

  editid(j) {
    this.id = j;
    this.firstName = this.a[j].firstname;
    this.lastName = this.a[j].lastname;
    this.dob = this.a[j].dob;
    this.email = this.a[j].email;
    this.number = this.a[j].number;
    this.f = this.a[j].faculty;
  }




  updateAll(j) {
    this.a[j].firstname = this.firstName;
    this.a[j].lastname = this.lastName;
    this.a[j].dob = this.dob;
    this.a[j].email = this.email;
    this.a[j].number = this.number;
    this.a[j].faculty = this.f;
    this.id = null;
    this.firstName = '';
    this.lastName = '';
    this.dob = null;
    this.email = '';
    this.number = null;
    this.f = null;
  }
  ngOnInit() {
  }

}
