import { Component, OnInit } from '@angular/core';
import { Meal1Service } from './meal1.service';
import { HttpClientJsonpModule } from '@angular/common/http';
@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css']
})
export class MealsComponent implements OnInit {

  constructor(private m:Meal1Service) { }
  getAllMeals:any;
  getMeal1:any;
  ngOnInit(): void {
  }
  getMeal(){
    return this.m.getMeal().subscribe((result:any)=>{
      console.log(result.meals);
      this.getAllMeals = result.meals;
    })
  }
  getMealNew(){
    return this.m.getMealDb().subscribe((result1:any)=>{
     
      console.log(result1.meals[0].idMeal)
      console.log('shivi'+result1.meals.meals);
      this.getMeal1= result1.meals;
    })
  }
}
