import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { DaterangepickerComponent } from 'ngx-daterangepicker-material';
import { DaterangepickerDirective } from 'ngx-daterangepicker-material';
import { Moment } from 'moment';
import * as MomentD from "node_modules/moment/moment.d";
import * as moment from 'moment';
import { NgForm } from '@angular/forms';
import { observable } from 'rxjs';
import { Observable } from 'rxjs';
// import * as moment from 'node_modules/moment/moment.d';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'datepickerr';
  // orderStatus='';
  // data  : Observable<any>;
   //selected:any;
   selected:any= {startDate: "Moment", endDate: "Moment"};
   public variable=true;
   displayName = true;
//  ngOnInit(){
//   this.selected;
//   console.log("shi"+this.selected.startDate,this.selected.endDate);
//  }
// 'Today': Moment[]
// model:any;
// ranges: any = {
//   'Today': [moment(), moment()],
//   'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
//   'Last 7 Days': [moment().subtract(6, 'days'), moment()],
//   'Last 30 Days': [moment().subtract(29, 'days'), moment()]
 
// }

// Directives:NgFor,ngIf,ngStyle,
// fun(){
//   alert("button is working");
// }
// oye(){
//   this.variable=false;
//   console.log('shivani'+this.variable)
// }
// value1:any;
// value2:any;
// myFun(){
//   console.log(this.value1);
//   console.log(this.value2);
// }

// loginForm= new FormGroup({
//   user : new FormControl(''),
//   password: new FormControl('')
// })
// fun(){
//  console.log(this.loginForm.value);
// }
// array =[
//   {firstName:'shivani',
//   lastName:'rai',
//   email:'shivanirai118@gmail.com'

//   },
//   {firstName:'shreya',
//   lastName:'rai',
//   email:'shreyarai118@gmail.com'

//   },
//   {firstName:'sabc',
//   lastName:'rai',
//   email:'shreavcai118@gmail.com'

//   }
// ]
// myFun(){
//   alert("this is responsive application");
// }
// size:any=1;
// value1:any="shivani";
// value2:any=123;
// myFun(){
//   console.log(this.value1,this.value2);
// }
public name="";

}
