/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var isnan = require( '@stdlib/math-base-assert-is-nan' );
var incrmean = require( '@stdlib/stats-incr-mean' );

/**
* Returns an accumulator function which incrementally computes an arithmetic mean, ignoring `NaN` values.
*
* @returns {Function} accumulator function
*
* @example
* var accumulator = incrnanmean();
*
* var mu = accumulator();
* // returns null
*
* mu = accumulator( 2.0 );
* // returns 2.0
*
* mu = accumulator( NaN );
* // returns 2.0
*
* mu = accumulator( -5.0 );
* // returns -1.5
*
* mu = accumulator();
* // returns -1.5
*/
function incrnanmean() {
	var mean = incrmean();
	return accumulator;

	/**
	* If provided a value, the accumulator function returns an updated mean. If not provided a value, the accumulator function returns the current mean.
	*
	* @private
	* @param {number} [x] - new value
	* @returns {(number|null)} mean value or null
	*/
	function accumulator( x ) {
		if ( arguments.length === 0 || isnan( x ) ) {
			return mean();
		}
		return mean( x );
	}
}


// EXPORTS //

module.exports = incrnanmean;
