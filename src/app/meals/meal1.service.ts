import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Meal1Service {

  constructor(private meal:HttpClient) { }
  getMeal(){
     return  this.meal.get('https://www.themealdb.com/api/json/v1/1/search.php?f=a');
  }
  getMealDb(){
    return this.meal.get('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata');
  }
}
