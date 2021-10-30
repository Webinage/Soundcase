var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { clamp } from '../utils';
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
// export class SoundPlayer extends AudioInstrument {
export class SoundPlayer {
    /**
     * Create a point.
     * @param {number} x  The x value.
     */
    // constructor(
    //   _context: AudioContext,
    //   _soundsLibrary: SoundsLibrary,
    //   effect?: Effect<EffectOptions>
    // );
    // constructor(
    //   _context: AudioContext,
    //   _soundsLibrary: SoundsLibrary,
    //   channel?: Channel
    // );
    // constructor(
    //   _context: AudioContext,
    //   _soundsLibrary: SoundsLibrary,
    //   node?: AudioNode
    // );
    constructor(_context, _soundsLibrary, item) {
        this._context = _context;
        this._soundsLibrary = _soundsLibrary;
        this._audioElements = {};
        this._output = new GainNode(this._context);
        if (item) {
            this.connect(item);
        }
        else {
            this.connect(this._context.destination);
        }
    }
    /**
     * Summary. (use period)
     *
     * Can connect to one node/channel only
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
    connect(item) {
        this._output.disconnect();
        if ('input' in item && 'output' in item && 'options' in item) {
            this._output.connect(item.input);
            return item.output;
        }
        else if ('input' in item && 'output' in item) {
            this._output.connect(item.input);
            return item.output;
        }
        else {
            return this._output.connect(item);
        }
    }
    // /**
    //  * Summary. (use period)
    //  *
    //  * Description. (use period)
    //  *
    //  * @see  Function/class relied on
    //  *
    //  * @param {type}   var           Description.
    //  * @param {type}   [var]         Description of optional variable.
    //  * @param {type}   [var=default] Description of optional variable with default variable.
    //  * @param {Object} objectVar     Description.
    //  * @param {type}   objectVar.key Description of a key in the objectVar parameter.
    //  *
    //  * @return {type} Return value description.
    //  */
    setSoundVolume(name, volume) {
        this._audioElements[name].htmlAudioElement.volume = clamp(volume, 0, 1);
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
    playSound(name) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this._audioElements[name]) {
                yield this._loadSound(name);
            }
            if (this._soundsLibrary[name].type !== 'oneShotParallel') {
                this.stopSound(name);
            }
            this._audioElements[name].htmlAudioElement.play();
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
    pauseSound(name) {
        this._audioElements[name].htmlAudioElement.pause();
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
    stopSound(name) {
        this._audioElements[name].htmlAudioElement.pause();
        this._audioElements[name].htmlAudioElement.currentTime = 0;
    }
    _loadSound(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const sound = this._soundsLibrary[name];
            const htmlAudioElement = yield this._handleSoundLoading(sound.path);
            this._audioElements[name] = {
                htmlAudioElement,
                mediaElementAudioSourceNode: this._context.createMediaElementSource(htmlAudioElement)
            };
            this._audioElements[name].htmlAudioElement.loop = sound.type === 'loop' ? true : false;
            this._audioElements[name].htmlAudioElement.volume = clamp(sound.volume, 0, 1);
            this._audioElements[name].mediaElementAudioSourceNode.connect(this._output);
            // .mediaElementAudioSourceNode.connect(this._channel.input);
            // .mediaElementAudioSourceNode.connect(this._context.destination);
        });
    }
    _handleSoundLoading(path) {
        return __awaiter(this, void 0, void 0, function* () {
            yield new Promise((resolve, reject) => {
                const sound = new Audio(path);
                sound.oncanplaythrough = () => {
                    resolve(sound);
                };
                sound.onerror = () => {
                    console.log('onerror');
                    reject();
                };
            });
            return new Promise(resolve => {
                const sound = new Audio(path);
                sound.oncanplaythrough = () => {
                    resolve(sound);
                };
            });
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
    setGain(value) {
        this._output.gain.value = value;
    }
}
//# sourceMappingURL=SoundPlayer.class.js.map