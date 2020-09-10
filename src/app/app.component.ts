// Import all neccessary files
import { Component, OnInit } from '@angular/core';
import { SpacexService } from './spacex.service';
import { Observable, BehaviorSubject } from 'rxjs';

// Initialize component
@Component({
  selector: 'app-root', // component selector
  templateUrl: './app.component.html', // template file used for the component
  styleUrls: ['./app.component.css'], // css file used for the component
})

// define class and export it for future use
export class AppComponent implements OnInit {
  // Project title
  title = 'SpaceX Launch Programs';

  // Variables
  launchYr : any[] = new Array();
  spaceXData$ : Observable <any[]>;
  isLoading : boolean = true;
  isLaunched:any = "";
  isLanded:any = "";
  launchYear:any = "";

  // Constructor, initializing service variable
  constructor(private _spacexservice : SpacexService){
  }
  
  // Method to get data from service according to filter value, initially loading all data
  getSpaceData(){
    this.spaceXData$ = this._spacexservice.getData(this.isLaunched,this.isLanded, this.launchYear);
  }

  // Method calling on initialization of the component to get filter years and call getSpacexData for API
  ngOnInit(){
    this.getSpaceData();
    for (let year = 2006; year <= new Date().getFullYear(); year++) {
      this.launchYr.push(year);
    }

    // Wait for 4 sec to load data
    setTimeout(() => {
      this.isLoading = false;
    }, 4000);
  }
  
  // Method calling for getting launch years for creating filter buttons
  getLaunchYear() : any{
    return this.launchYr;
    this.getSpaceData();
  }

  // Method calling on click of launch year buttons
  filterByLaunchYr(year){
    this.launchYear = year;
    this.isLoading = true;
    this.getSpaceData();
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }

  // Method calling on click of successful launch buttons
  filterBySuccLaunch(launch){
    this.isLaunched = launch;
    this.isLoading = true;
    this.getSpaceData();
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }

  // Method calling on click of successful land buttons
  filterBySuccLand(land){
    this.isLanded = land;
    this.isLoading = true;
    this.getSpaceData();
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }

}
