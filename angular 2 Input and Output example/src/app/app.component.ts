import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
 template: `
    
    <h3> Event listening data from app.counter component by app.component: {{value}}</h3>
    <counter-app [counter]="counter" (counterChange)="getValue($event)"></counter-app>
  `
})
export class AppComponent {
counter:number=8;
value:number=0;
getValue(value){
	this.value=value;
};

  
}
