import { BehaviorSubject, Observable, Subscription } from 'rxjs';
export declare abstract class EventInput<T> {
    protected readonly _subject$: BehaviorSubject<Observable<T>>;
    protected _subscription: Subscription;
    constructor();
    private get observable$();
    subscribe(cb: (res: T) => void): void;
    unsubscribe(): void;
}
