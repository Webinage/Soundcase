import { DistortionOptions, Effect } from '../../types';
import { keepNumberBetwwen, makeDistortionCurve } from '../../utils';

/**
 * Summary. (A channel to handle single/multiple effects)
 *
 * Description. (A channel to handle single/multiple effects)
 *
 *  @class Classname
 *  @extends ParentClass
 *  @constructor
 * @augments parent
 *
 * @return {ChannelStrip} Return value description.
 */
export class Distortion extends Effect<DistortionOptions> {
  private _waveShaperNode: WaveShaperNode;

  /**
   * Create a point.
   * @param {number} x  The x value.
   */
  constructor(_context: AudioContext, options: DistortionOptions = {}) {
    super('Distortion', _context, options);

    this._waveShaperNode = new WaveShaperNode(this._context, this.options);

    this._input.connect(this._waveShaperNode).connect(this._output);
  }

  /**
   * Set the low/mid frequency breakpoint
   *
   * @see  Function
   *
   * @param {number}   value    Value of the frequency breakpoitn.
   */
  _rootEffect() {
    this._input.disconnect();
    this._input.connect(this._waveShaperNode);
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
  setCurve(amount: number): void;
  // setCurve(curve: number[]): void;
  setCurve(curve: Float32Array): void;
  setCurve(input: number | Float32Array): void {
    if (typeof input === 'number') {
      console.log(
        `makeDistortionCurve(
        keepNumberBetwwen(input, 0, 1000)
      )`,
        makeDistortionCurve(keepNumberBetwwen(input, 0, 1000))
      );
      this._waveShaperNode.curve = makeDistortionCurve(
        keepNumberBetwwen(input, 0, 1000)
      );
    } else {
      this._waveShaperNode.curve = input;
    }
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
  setOversample(oversample: OverSampleType): void {
    this._waveShaperNode.oversample = oversample;
  }
}
