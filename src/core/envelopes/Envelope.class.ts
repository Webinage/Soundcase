import { EnvelopeOptions, EnvelopeParam } from '../../types/interfaces';
import { clamp, millisecondsToSeconds } from '../../utils';

export class Envelope {
  params: EnvelopeParam[] = [];

  constructor(
    private _context: AudioContext,
    private _options: EnvelopeOptions = {}
  ) {
    this._options = {
      ...{
        envelopeType: 'exponential',
        attackTime: 10,
        decayTime: 200,
        sustainValue: 0.25,
        releaseTime: 1000
      },
      ..._options
    };
  }

  /**
   *
   * @param param
   */
  get options() {
    return this._options;
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
      if (this._options.envelopeType === 'exponential') {
        param.param.exponentialRampToValueAtTime(
          param.maxValue,
          now + millisecondsToSeconds(clamp(this._options.attackTime, 0))
        );
        param.param.exponentialRampToValueAtTime(
          this._options.sustainValue,
          now +
            millisecondsToSeconds(
              clamp(this._options.attackTime + this._options.decayTime, 0)
            )
        );
      } else {
        param.param.linearRampToValueAtTime(
          param.maxValue,
          now + millisecondsToSeconds(clamp(this._options.attackTime, 0))
        );
        param.param.linearRampToValueAtTime(
          this._options.sustainValue,
          now +
            millisecondsToSeconds(
              clamp(this._options.attackTime + this._options.decayTime, 0)
            )
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
      param.param.setValueAtTime(this._options.sustainValue, now);
      if (this._options.envelopeType === 'exponential') {
        param.param.exponentialRampToValueAtTime(
          clamp(param.minValue, 0.01),
          now + millisecondsToSeconds(this._options.releaseTime)
        );
      } else {
        param.param.linearRampToValueAtTime(
          clamp(param.minValue, 0),
          now + millisecondsToSeconds(this._options.releaseTime)
        );
      }
    });
  }
}
