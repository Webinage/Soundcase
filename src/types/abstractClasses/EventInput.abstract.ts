import { BehaviorSubject, EMPTY, Observable, Subscription } from 'rxjs';
// import { switchAll } from 'rxjs/operators';
import { switchMap } from 'rxjs/operators';

export abstract class EventInput<T> {
  protected readonly _subject$: BehaviorSubject<Observable<T>> = new BehaviorSubject<Observable<T>>(EMPTY);
  protected _subscription: Subscription;

  constructor() {}

  private get observable$(): Observable<T> {
    return this._subject$.pipe(switchMap(obs => obs));
  }

  subscribe(cb: (res: T) => void) {
    this._subscription = this.observable$.subscribe(cb);
  }

  unsubscribe() {
    this._subscription.unsubscribe();
  }
}
