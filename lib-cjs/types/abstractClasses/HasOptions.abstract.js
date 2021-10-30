"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HasOptions = void 0;
var rxjs_1 = require("rxjs");
var HasOptions = /** @class */ (function () {
    // constructor(options: OT) {}
    function HasOptions() {
        this._optionsSubject$ = new rxjs_1.BehaviorSubject(null);
    }
    Object.defineProperty(HasOptions.prototype, "options$", {
        /**
         *
         * @param param
         */
        get: function () {
            return this._optionsSubject$.asObservable();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HasOptions.prototype, "options", {
        /**
         *
         * @param param
         */
        get: function () {
            return this._optionsSubject$.value;
        },
        enumerable: false,
        configurable: true
    });
    /**
     *
     * @param param
     */
    //   protected _updateOptions(options: OT | EffectOptions) {
    //   protected _updateOptions<T>(options: OT | T) {
    HasOptions.prototype._updateOptions = function (options) {
        this._optionsSubject$.next(__assign(__assign({}, this.options), options));
    };
    return HasOptions;
}());
exports.HasOptions = HasOptions;
//# sourceMappingURL=HasOptions.abstract.js.map