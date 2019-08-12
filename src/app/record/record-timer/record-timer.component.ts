import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-record-timer',
  templateUrl: './record-timer.component.html',
  styleUrls: ['./record-timer.component.scss']
})
export class RecordTimerComponent implements OnInit {

  // whether counting
  started: Boolean = false;
  paused: Boolean = false;

  itemName: String;
  time: String;
  count;
  pauseCount;
  count$: Observable<Number>;
  countSub;

  constructor() { }

  ngOnInit() {
    this.count$ = interval(1000);
  }

  start() {
    this.countSub = this.count$.subscribe(
      x => this.count = x
    );
    this.started = true;
  }

  pause() {
    this.countSub.unsubscribe();
    this.paused = true;
    this.pauseCount = this.count;
  }

  continue() {
    this.countSub = this.count$.pipe(
      map(x => this.pauseCount + x)
    ).subscribe(
      x => this.count = x
    );
    this.paused = false;
  }

  end() {
    this.countSub.unsubscribe();
    this.count = 0;
    this.pauseCount = 0;
    this.started = false;
  }

  complete() {}
}
