import { Injectable } from '@angular/core';
import { Observable, Subject, Subscription, filter, from, interval, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RxjsDemoService {

  firstObservable$ = of(1,5,8,4,3,'hello',true,[1,2,3]);
  secondObservable$ = from([8,5,3,1,68,9])

  myObservable$ = new Observable (sub => {
    sub.next(9);
    sub.next(14);
    // sub.complete();
    sub.next('home');
    throw new Error('Some Error');
    sub.next(true);
  });


  //1000 milli seconds
  intervalObservable = interval(1000);

  subA$ : Subscription = new Subscription();
  subB$ : Subscription = new Subscription();

  colors$ = new Observable<string[]>(col =>
    {
      col.next(["red","green","blue","yellow","pink","orange"])
  });

  mySubject$ = new Subject<number>();

  constructor() {
    // this.firstObservable$.subscribe(val => console.log(val));
    // this.firstObservable$.subscribe(x => console.log("A : "+x));
    // this.firstObservable$.subscribe(val => console.log("B : "+val));
    // this.secondObservable$.subscribe(val => console.log(val));
    // this.myObservable$.subscribe(val => console.log(val));
    // this.myObservable$.subscribe({
    //   next: x => console.log("Next value : " +x),
    //   complete:() => console.log("Observable Completed."),
    //   error: err => console.log("Error Message : "+err)
    // })

    this.subA$ = this.intervalObservable.pipe(filter( x => x % 2 == 0)).subscribe(x => console.log("A : "+x));
    this.subB$ = this.intervalObservable.pipe(map( val => val*val)).subscribe(val => console.log("B : "+val));

    this.mySubject$.subscribe(val => console.log("x = "+val));
    this.mySubject$.next(1);
    this.mySubject$.subscribe(val => console.log("y = "+val));
    this.mySubject$.next(2);
    this.mySubject$.next(3);

   }

   unsubscribeA(){
    this.subA$.unsubscribe();
   }

   unsubscribeB(){
    this.subB$.unsubscribe();
   }
}
