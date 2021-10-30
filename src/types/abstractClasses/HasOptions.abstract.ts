import { BehaviorSubject, Observable } from 'rxjs';

export abstract class HasOptions<OT> {
  private readonly _optionsSubject$: BehaviorSubject<OT> = new BehaviorSubject(null);

  // constructor(options: OT) {}
  constructor() {}

  /**
   *
   * @param param
   */
  get options$(): Observable<OT> {
    return this._optionsSubject$.asObservable();
  }

  /**
   *
   * @param param
   */
  get options(): OT {
    return this._optionsSubject$.value;
  }

  /**
   *
   * @param param
   */
  //   protected _updateOptions(options: OT | EffectOptions) {
  //   protected _updateOptions<T>(options: OT | T) {
  protected _updateOptions<T>(options: T) {
    this._optionsSubject$.next({ ...this.options, ...options });
  }
}
