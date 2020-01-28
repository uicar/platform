import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(public afs: AngularFirestore, public rout: Router, private http: HttpClient) { }
  private itemsCollection: AngularFirestoreCollection<any>;

  users1 = [];
  users2 = [];
  users3 = [];
  private itemsCollection2: AngularFirestoreCollection<any>;
// OMG I AM SOME PROUD OF THIS NEXT 100 LINES OF CODE

functiongetRides() {
  this.itemsCollection2 = this.afs.collection<any>(`users`);

  // Get the uids
  return this.itemsCollection2.snapshotChanges().pipe(map((info2: any[]) => {
    this.users1 = [];

    for (const infos of info2) {
      this.users1.unshift(infos);
    }
    // Put them in a array
    for (let i = 0; i < this.users1.length; i++ )  {

      this.users2.push(this.users1[i].payload.doc.data().uid);
    }
    // Get the info from those uniques uid
    for (let i = 0; i < this.users2.length; i++ )  {
      // console.log(this.users2[i]);
      this.secondgetRides(this.users2[i]);
    }
    //  console.log(this.users3);
    return this.users3;
  }));
}

secondgetRides(id) {
  this.getRides(id).subscribe((data: any) => {
    this.users3.push(data);
    // console.log(this.users3);
});
}


getRides(id) {
  this.itemsCollection2 = this.afs.collection<any>(`users/${id}/profile/`);

  return this.itemsCollection2.snapshotChanges().pipe(map((info: any[]) => {
    this.users2 = [];
    for (const infos of info) {
      this.users2.unshift(infos);

    }
    // console.log(this.users2);
    return this.users2;
  }));
}

}
