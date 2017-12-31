import { Component, EventEmitter, Input, Output,OnInit } from '@angular/core';


@Component({
  selector: 'counter-app',
  template: `
    <div >
    <p>Data from app.counter component</p>
      <button (click)="decreaseCounter()">-</button>
      <label>{{counterValue}}</label><button  (click)="increaseCounter()" >+</button>
    </div>
  `
})
export class Counter implements OnInit {
  @Input() counter:number;
  @Output() counterChange=new EventEmitter<number>();
  
  constructor(){}
  counterValue:number;
   ngOnInit(): void {
    this.counterValue=this.counter;
    this.counterChange.emit(this.counterValue);
    
  }

  increaseCounter():void{
   this.counterValue+=1;
   this.counterChange.emit(this.counterValue);
  }
  decreaseCounter():void{
   this.counterValue-=1;
   this.counterChange.emit(this.counterValue);
  }

}


