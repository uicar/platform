import { Component } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
import { ServiceService } from '../services/service.service';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  numbers: any;

  users = [];
  constructor( private http: HttpClient , private route: Router, private service: ServiceService) {
    this.usersload();
    this.numbers = Array(15).fill(0).map((x, i ) => i);
  }



  gorides() {
    console.log('rides');
    this.route.navigate(['/rides']);
  }

    // Http


    async usersload() {

      await this.service.functiongetRides().subscribe((data: any) => {
        this.users = data;
        console.log(data);
      });
    }
}
