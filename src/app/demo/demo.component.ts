import { Component, OnDestroy, OnInit } from '@angular/core';
import { RxjsDemoService } from '../rxjs-demo.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit,OnDestroy {
  constructor(private rs:RxjsDemoService){}

  name='itvedant'
  private _age =1

  set age(input:number){
    if(input<1 || input> 100)
        this._age=1
    else
      this._age=input

    // console.log('setter :' +this._age)
  }

  get age():number{
    // console.log('getter :' +this._age)
    return this._age
  }

  unsubscribeA(){
    this.rs.unsubscribeA();
  }

  unsubscribeB(){
    this.rs.unsubscribeB();
  }

  colors!: string[];

  sub$ !:Subscription;

  myColors$ !: Observable<string[]>


  ngOnInit(){
    // this.sub$ = this.rs.colors$.subscribe(cols => this.colors =cols);
    this.myColors$ = this.rs.colors$;
  }


  ngOnDestroy(){
    // this.sub$.unsubscribe();
  }
}
