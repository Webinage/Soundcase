## Classes

<dl>
<dt><a href="#AudioEngine">AudioEngine</a> ⇐ <code>ParentClass</code></dt>
<dd><p>Classname</p></dd>
<dt><a href="#SoundPlayer">SoundPlayer</a> ⇐ <code>ParentClass</code></dt>
<dd><p>Classname</p></dd>
</dl>

## Functions

<dl>
<dt><a href="#buildImpulse">buildImpulse(options)</a> ⇒ <code>AudioBuffer</code></dt>
<dd><p>Utility function for building an impulse response from the options parameters.</p>
<p>Based on https://github.com/web-audio-components/simple-reverb _buildImpulse for reverb method</p></dd>
<dt><a href="#clamp">clamp(value, min, max)</a> ⇒</dt>
<dd><p>Returns a number whose value is limited to the given range.</p>
<p>Example: limit the output of this computation to between 0 and 255
(x * 255).clamp(0, 255)</p></dd>
<dt><a href="#exchange">exchange(array, iIndex, jIndex)</a> ⇒ <code>Array.&lt;T&gt;</code></dt>
<dd><p>Switch two items in an array.</p></dd>
<dt><a href="#cloneArray">cloneArray(array)</a> ⇒ <code>Array.&lt;T&gt;</code></dt>
<dd><p>Clone an array.</p></dd>
<dt><a href="#makeDistortionCurve">makeDistortionCurve(amount)</a> ⇒ <code>Float32Array</code></dt>
<dd><p>I am not sure what I am doing.</p></dd>
<dt><a href="#secondsToMilliseconds">secondsToMilliseconds(seconds)</a> ⇒ <code>number</code></dt>
<dd><p>Convert seconds to milliseconds.</p></dd>
<dt><a href="#millisecondsToSeconds">millisecondsToSeconds(milliseconds)</a> ⇒ <code>number</code></dt>
<dd><p>Convert milliseconds to seconds.</p></dd>
<dt><a href="#dbToVolume">dbToVolume(db)</a> ⇒ <code>number</code></dt>
<dd><p>Convert decibels to percentage.
Volume is expressed in percentage</p></dd>
<dt><a href="#volumeToDb">volumeToDb(volume)</a> ⇒ <code>number</code></dt>
<dd><p>Convert percentage to decibels.
Volume is expressed in percentage</p></dd>
</dl>

<a name="AudioEngine"></a>

## AudioEngine ⇐ <code>ParentClass</code>
<p>Classname</p>

**Kind**: global class  
**Extends**: <code>ParentClass</code>, <code>parent</code>  
<a name="new_AudioEngine_new"></a>

### new AudioEngine()
<p>Summary. (A channel to handle single/multiple effects)</p>
<p>Description. (A channel to handle single/multiple effects)</p>

**Returns**: <code>ChannelStrip</code> - <p>Return value description.</p>  
<a name="SoundPlayer"></a>

## SoundPlayer ⇐ <code>ParentClass</code>
<p>Classname</p>

**Kind**: global class  
**Extends**: <code>ParentClass</code>, <code>parent</code>  
<a name="new_SoundPlayer_new"></a>

### new SoundPlayer()
<p>Summary. (A channel to handle single/multiple effects)</p>
<p>Description. (A channel to handle single/multiple effects)</p>

**Returns**: <code>ChannelStrip</code> - <p>Return value description.</p>  
<a name="buildImpulse"></a>

## buildImpulse(options) ⇒ <code>AudioBuffer</code>
<p>Utility function for building an impulse response from the options parameters.</p>
<p>Based on https://github.com/web-audio-components/simple-reverb _buildImpulse for reverb method</p>

**Kind**: global function  
**Returns**: <code>AudioBuffer</code> - <p>Rutrn an audio buffer.</p>  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>ReverbOptions</code> | <p>The reverb options that will be used to generate the impulse.</p> |

<a name="clamp"></a>

## clamp(value, min, max) ⇒
<p>Returns a number whose value is limited to the given range.</p>
<p>Example: limit the output of this computation to between 0 and 255
(x * 255).clamp(0, 255)</p>

**Kind**: global function  
**Returns**: <p>A number in the range [min, max]</p>  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Number</code> | <p>The number to clamp</p> |
| min | <code>Number</code> | <p>The lower boundary of the output range</p> |
| max | <code>Number</code> | <p>The upper boundary of the output range</p> |

<a name="exchange"></a>

## exchange(array, iIndex, jIndex) ⇒ <code>Array.&lt;T&gt;</code>
<p>Switch two items in an array.</p>

**Kind**: global function  
**Returns**: <code>Array.&lt;T&gt;</code> - <p>Return a new array</p>  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array.&lt;T&gt;</code> | <p>Array to switch items from.</p> |
| iIndex | <code>number</code> | <p>First item to switch position.</p> |
| jIndex | <code>number</code> | <p>Second item to switch position.</p> |

<a name="cloneArray"></a>

## cloneArray(array) ⇒ <code>Array.&lt;T&gt;</code>
<p>Clone an array.</p>

**Kind**: global function  
**Returns**: <code>Array.&lt;T&gt;</code> - <p>Return a new array</p>  
**See**: Function/class relied on  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array.&lt;T&gt;</code> | <p>Array to clone.</p> |

<a name="makeDistortionCurve"></a>

## makeDistortionCurve(amount) ⇒ <code>Float32Array</code>
<p>I am not sure what I am doing.</p>

**Kind**: global function  
**Returns**: <code>Float32Array</code> - <p>Return a float32 array containing curve data.</p>  

| Param | Type | Description |
| --- | --- | --- |
| amount | <code>number</code> | <p>Distortion curve sharpening coef.</p> |

<a name="secondsToMilliseconds"></a>

## secondsToMilliseconds(seconds) ⇒ <code>number</code>
<p>Convert seconds to milliseconds.</p>

**Kind**: global function  
**Returns**: <code>number</code> - <p>Return the number of milliseconds</p>  

| Param | Type | Description |
| --- | --- | --- |
| seconds | <code>number</code> | <p>Number of seconds.</p> |

<a name="millisecondsToSeconds"></a>

## millisecondsToSeconds(milliseconds) ⇒ <code>number</code>
<p>Convert milliseconds to seconds.</p>

**Kind**: global function  
**Returns**: <code>number</code> - <p>Return the number of seconds</p>  
**See**: Function/class relied on  

| Param | Type | Description |
| --- | --- | --- |
| milliseconds | <code>number</code> | <p>Number of milliseconds.</p> |

<a name="dbToVolume"></a>

## dbToVolume(db) ⇒ <code>number</code>
<p>Convert decibels to percentage.
Volume is expressed in percentage</p>

**Kind**: global function  
**Returns**: <code>number</code> - <p>Return the volume in percentage.</p>  

| Param | Type | Description |
| --- | --- | --- |
| db | <code>number</code> | <p>Volume in decibels.</p> |

<a name="volumeToDb"></a>

## volumeToDb(volume) ⇒ <code>number</code>
<p>Convert percentage to decibels.
Volume is expressed in percentage</p>

**Kind**: global function  
**Returns**: <code>number</code> - <p>Return the volume in decibels.</p>  

| Param | Type | Description |
| --- | --- | --- |
| volume | <code>number</code> | <p>Volume in percentage.</p> |

