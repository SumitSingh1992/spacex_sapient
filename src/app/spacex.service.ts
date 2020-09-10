// Import neccessary files used for service handling API
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ISpaceX } from './spacexInterface';
import { AppComponent } from './app.component';

@Injectable({
    providedIn: 'root'
})

// Define the service for fetching data from API and to be used by AppComponent
export  class SpacexService{
    // Constructor
    constructor(private http: HttpClient){

    }

    // Url to fetch data from
    private url : string = 'https://api.spacexdata.com/v3/launches?limit=100';

    // Method to fetch API data
    getData(launched: any, landed: any, year: any) : Observable <any[]>{
        console.log("parameters");
        return this.http.get<any[]>(this.url+'&launch_success='+launched+'&land_success='+landed+'&launch_year='+year).pipe(
            catchError(this.showError)
        );
    }

    // Method to show Error if unable to fetch data from API
    showError(errorResponse:HttpErrorResponse){
        if(errorResponse.error instanceof ErrorEvent){
            alert("Client side error: "+ errorResponse.error.message);
        }
        else{
            alert("Server side error"+ errorResponse.error.message);
        }
        return throwError("Please try again later");
    }
}