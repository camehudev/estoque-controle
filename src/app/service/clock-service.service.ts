import { Injectable } from '@angular/core';
import { interval, map, startWith } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClockServiceService {

  constructor() { }

   time$ = interval(1000).pipe(
    startWith(0),
    map(() => new Date())
  );
}
