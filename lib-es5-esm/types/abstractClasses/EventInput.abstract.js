import { BehaviorSubject, EMPTY } from 'rxjs';
// import { switchAll } from 'rxjs/operators';
import { switchMap } from 'rxjs/operators';
var EventInput = /** @class */ (function () {
    function EventInput() {
        this._subject$ = new BehaviorSubject(EMPTY);
    }
    Object.defineProperty(EventInput.prototype, "observable$", {
        get: function () {
            return this._subject$.pipe(switchMap(function (obs) { return obs; }));
        },
        enumerable: false,
        configurable: true
    });
    EventInput.prototype.subscribe = function (cb) {
        this._subscription = this.observable$.subscribe(cb);
    };
    EventInput.prototype.unsubscribe = function () {
        this._subscription.unsubscribe();
    };
    return EventInput;
}());
export { EventInput };
//# sourceMappingURL=EventInput.abstract.js.map