import { HasOptions } from '../../types/abstractClasses';
import { clamp, millisecondsToSeconds } from '../../utils';
export class Envelope extends HasOptions {
    constructor(_context, options = {}) {
        // super(options);
        super();
        this._context = _context;
        this.params = [];
        this._updateOptions(Object.assign({
            muted: false,
            envelopeType: 'exponential',
            attackTime: 10,
            decayTime: 200,
            sustainValue: 0.25,
            releaseTime: 1000
        }, options));
    }
    /**
     * Summary. (use period)
     *
     * Description. (use period)
     *
     * @see  Function/class relied on
     *
     * @param {type}   var           Description.
     * @param {type}   [var]         Description of optional variable.
     * @param {type}   [var=default] Description of optional variable with default variable.
     * @param {Object} objectVar     Description.
     * @param {type}   objectVar.key Description of a key in the objectVar parameter.
     *
     * @return {type} Return value description.
     */
    bind(param, minValue = 0, maxValue = 1) {
        this.params.push({ param, minValue, maxValue });
        // return () => this.disconnect(param);
    }
    /**
     * Summary. (use period)
     *
     * Description. (use period)
     *
     * @see  Function/class relied on
     *
     * @param {type}   var           Description.
     * @param {type}   [var]         Description of optional variable.
     * @param {type}   [var=default] Description of optional variable with default variable.
     * @param {Object} objectVar     Description.
     * @param {type}   objectVar.key Description of a key in the objectVar parameter.
     *
     * @return {type} Return value description.
     */
    disconnect(param) {
        this.params = this.params.filter(p => p.param !== param);
    }
    /**
     * Summary. (use period)
     *
     * Description. (use period)
     *
     * @see  Function/class relied on
     *
     * @param {type}   var           Description.
     * @param {type}   [var]         Description of optional variable.
     * @param {type}   [var=default] Description of optional variable with default variable.
     * @param {Object} objectVar     Description.
     * @param {type}   objectVar.key Description of a key in the objectVar parameter.
     *
     * @return {type} Return value description.
     */
    trigger() {
        this.params.forEach(param => {
            const now = this._context.currentTime;
            param.param.cancelScheduledValues(now);
            param.param.setValueAtTime(param.minValue, now);
            if (this.options.envelopeType === 'exponential') {
                param.param.exponentialRampToValueAtTime(param.maxValue, now + millisecondsToSeconds(clamp(this.options.attackTime, 0)));
                param.param.exponentialRampToValueAtTime(this.options.sustainValue, now + millisecondsToSeconds(clamp(this.options.attackTime + this.options.decayTime, 0)));
            }
            else {
                param.param.linearRampToValueAtTime(param.maxValue, now + millisecondsToSeconds(clamp(this.options.attackTime, 0)));
                param.param.linearRampToValueAtTime(this.options.sustainValue, now + millisecondsToSeconds(clamp(this.options.attackTime + this.options.decayTime, 0)));
            }
        });
    }
    /**
     * Summary. (use period)
     *
     * Description. (use period)
     *
     * @see  Function/class relied on
     *
     * @param {type}   var           Description.
     * @param {type}   [var]         Description of optional variable.
     * @param {type}   [var=default] Description of optional variable with default variable.
     * @param {Object} objectVar     Description.
     * @param {type}   objectVar.key Description of a key in the objectVar parameter.
     *
     * @return {type} Return value description.
     */
    release() {
        this.params.forEach(param => {
            const now = this._context.currentTime;
            param.param.cancelScheduledValues(now);
            param.param.setValueAtTime(this.options.sustainValue, now);
            if (this.options.envelopeType === 'exponential') {
                param.param.exponentialRampToValueAtTime(clamp(param.minValue, 0.01), now + millisecondsToSeconds(this.options.releaseTime));
            }
            else {
                param.param.linearRampToValueAtTime(clamp(param.minValue, 0), now + millisecondsToSeconds(this.options.releaseTime));
            }
        });
    }
    /**
     * Summary. (use period)
     *
     * Description. (use period)
     *
     * @see  Function/class relied on
     *
     * @param {type}   var           Description.
     */
    setMuted(value) {
        this._updateOptions({ muted: value });
    }
    /**
     * Summary. (use period)
     *
     * Description. (use period)
     *
     * @see  Function/class relied on
     *
     * @param {type}   var           Description.
     */
    setEnvelopeType(value) {
        this._updateOptions({ envelopeType: value });
    }
    /**
     * Summary. (use period)
     *
     * Description. (use period)
     *
     * @see  Function/class relied on
     *
     * @param {type}   var           Description.
     */
    setAttackTime(value) {
        this._updateOptions({ attackTime: clamp(value, 0) });
    }
    /**
     * Summary. (use period)
     *
     * Description. (use period)
     *
     * @see  Function/class relied on
     *
     * @param {type}   var           Description.
     */
    setDecayTime(value) {
        this._updateOptions({ decayTime: clamp(value, 0) });
    }
    /**
     * Summary. (use period)
     *
     * Description. (use period)
     *
     * @see  Function/class relied on
     *
     * @param {type}   var           Description.
     */
    setSustainValue(value) {
        this._updateOptions({ sustainValue: clamp(value, 0) });
    }
    /**
     * Summary. (use period)
     *
     * Description. (use period)
     *
     * @see  Function/class relied on
     *
     * @param {type}   var           Description.
     */
    setReleaseTime(value) {
        this._updateOptions({ releaseTime: clamp(value, 0) });
    }
}
//# sourceMappingURL=Envelope.class.js.map