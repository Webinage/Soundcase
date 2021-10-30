import { Observable } from 'rxjs';
export declare abstract class HasOptions<OT> {
    private readonly _optionsSubject$;
    constructor();
    /**
     *
     * @param param
     */
    get options$(): Observable<OT>;
    /**
     *
     * @param param
     */
    get options(): OT;
    /**
     *
     * @param param
     */
    protected _updateOptions<T>(options: T): void;
}
