import { Component } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  numbers: any;

  users = [];
  constructor( private http: HttpClient , private route: Router) {
    this.usersload();
    this.numbers = Array(15).fill(0).map((x, i ) => i);
  }



  gorides() {
    console.log('rides');
    this.route.navigate(['/rides']);
  }

    // Http


    async usersload() {

      await this.http.get(`http://uicar.openode.io/platform/users`).subscribe((data: any) => {
        this.users = data;
        console.log(data);
      });
    }
}
