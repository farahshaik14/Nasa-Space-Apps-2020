import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

interface user{
  name:string,
  pass:string,
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  users:Observable<user[]>;
  Users: user[]; 
  username:string;
  password:string; 
  message:string;
  check:boolean;
  forgot: any;
  disable: any;
  showPwd: boolean; 
  constructor(private router: Router , private fireStore: AngularFirestore) {
    this.username = "";
    this.password = ""; 
    this.message = "";
    this.check = false;
    this.disable = false;
    this.forgot = false;
    this.showPwd = false;

    this.users = fireStore.collection<user>("/ChallengeApp/users/user").snapshotChanges()
    .pipe(map(actions=>actions.map(this.rebuildRecord)));

    this.users.subscribe( data=> {this.Users = data;});
  }
  showP() {
    this.showPwd = !(this.showPwd);
  }
  rebuildRecord(obj){
    const value = obj.payload.doc.data() as user;
    const key   = obj.payload.doc.id;
    return {key, ...value};
  }

  accountVerify(){    
   /* const acc = this.Users.find( user => (this.password == user.pass) && (this.username == user.name));
    
    if(acc != null)
    {
       // this.check = true;
       // this.message = "Welcome Back " + this.username + "!";
        this.goToNextPage();
    }

    else
    {*/
    //this.message = "Username or password are incorrect";
    //this.check = false;
    this.goToNextPage();

  //}
  }

  goToNextPage(){
    this.router.navigate(['/main-page'//,{RecordKey:this.username}
  ]);
  }


  ngOnInit() {
  }
}
