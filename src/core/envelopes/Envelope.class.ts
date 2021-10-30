import { HasOptions } from '../../types/abstractClasses';
import { EnvelopeType } from '../../types/enums';
import { EnvelopeOptions, EnvelopeParam } from '../../types/interfaces';
import { clamp, millisecondsToSeconds } from '../../utils';

export class Envelope extends HasOptions<EnvelopeOptions> {
  params: EnvelopeParam[] = [];

  constructor(private _context: AudioContext, options: EnvelopeOptions = {}) {
    // super(options);
    super();

    this._updateOptions<EnvelopeOptions>({
      ...{
        muted: false,
        envelopeType: 'exponential',
        attackTime: 10,
        decayTime: 200,
        sustainValue: 0.25,
        releaseTime: 1000
      },
      ...options
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
  bind(param: AudioParam, minValue: number = 0, maxValue: number = 1) {
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
  disconnect(param: AudioParam) {
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
        param.param.exponentialRampToValueAtTime(
          param.maxValue,
          now + millisecondsToSeconds(clamp(this.options.attackTime, 0))
        );
        param.param.exponentialRampToValueAtTime(
          this.options.sustainValue,
          now + millisecondsToSeconds(clamp(this.options.attackTime + this.options.decayTime, 0))
        );
      } else {
        param.param.linearRampToValueAtTime(
          param.maxValue,
          now + millisecondsToSeconds(clamp(this.options.attackTime, 0))
        );
        param.param.linearRampToValueAtTime(
          this.options.sustainValue,
          now + millisecondsToSeconds(clamp(this.options.attackTime + this.options.decayTime, 0))
        );
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
        param.param.exponentialRampToValueAtTime(
          clamp(param.minValue, 0.01),
          now + millisecondsToSeconds(this.options.releaseTime)
        );
      } else {
        param.param.linearRampToValueAtTime(
          clamp(param.minValue, 0),
          now + millisecondsToSeconds(this.options.releaseTime)
        );
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
  setMuted(value: boolean) {
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
  setEnvelopeType(value: EnvelopeType) {
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
  setAttackTime(value: number) {
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
  setDecayTime(value: number) {
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
  setSustainValue(value: number) {
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
  setReleaseTime(value: number) {
    this._updateOptions({ releaseTime: clamp(value, 0) });
  }
}
