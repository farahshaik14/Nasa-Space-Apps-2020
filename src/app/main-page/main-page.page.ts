import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.page.html',
  styleUrls: ['./main-page.page.scss'],
})
export class MainPagePage implements OnInit {

  constructor(private router: Router) {

  }

  goToSchedule(){
    this.router.navigate(['/schedule']);
  }

  goToSleep(){
    this.router.navigate(['/sleep']);
  }

  goToRelaxation(){
    this.router.navigate(['/relaxation']);
  }

  goToNutrition(){
    this.router.navigate(['/nutrition']);
  }

  goToExercise(){
    this.router.navigate(['/exercise']);
  }

  goToAppreciation(){
    this.router.navigate(['/appreciation']);
  }

  ngOnInit() {
  }

}
