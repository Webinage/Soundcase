"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventInput = void 0;
var rxjs_1 = require("rxjs");
// import { switchAll } from 'rxjs/operators';
var operators_1 = require("rxjs/operators");
var EventInput = /** @class */ (function () {
    function EventInput() {
        this._subject$ = new rxjs_1.BehaviorSubject(rxjs_1.EMPTY);
    }
    Object.defineProperty(EventInput.prototype, "observable$", {
        get: function () {
            return this._subject$.pipe(operators_1.switchMap(function (obs) { return obs; }));
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
exports.EventInput = EventInput;
//# sourceMappingURL=EventInput.abstract.js.map