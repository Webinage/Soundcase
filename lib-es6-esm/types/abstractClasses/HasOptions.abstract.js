import { BehaviorSubject } from 'rxjs';
export class HasOptions {
    // constructor(options: OT) {}
    constructor() {
        this._optionsSubject$ = new BehaviorSubject(null);
    }
    /**
     *
     * @param param
     */
    get options$() {
        return this._optionsSubject$.asObservable();
    }
    /**
     *
     * @param param
     */
    get options() {
        return this._optionsSubject$.value;
    }
    /**
     *
     * @param param
     */
    //   protected _updateOptions(options: OT | EffectOptions) {
    //   protected _updateOptions<T>(options: OT | T) {
    _updateOptions(options) {
        this._optionsSubject$.next(Object.assign(Object.assign({}, this.options), options));
    }
}
//# sourceMappingURL=HasOptions.abstract.js.map