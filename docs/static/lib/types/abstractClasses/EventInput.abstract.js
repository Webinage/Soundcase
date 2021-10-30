import { BehaviorSubject, EMPTY } from 'rxjs';
// import { switchAll } from 'rxjs/operators';
import { switchMap } from 'rxjs/operators';
export class EventInput {
    constructor() {
        this._subject$ = new BehaviorSubject(EMPTY);
    }
    get observable$() {
        return this._subject$.pipe(switchMap(obs => obs));
    }
    subscribe(cb) {
        this._subscription = this.observable$.subscribe(cb);
    }
    unsubscribe() {
        this._subscription.unsubscribe();
    }
}
//# sourceMappingURL=EventInput.abstract.js.map