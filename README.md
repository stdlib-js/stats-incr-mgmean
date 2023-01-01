<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# incrmgmean

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute a moving [geometric mean][geometric-mean] incrementally.

<section class="intro">

The [geometric mean][geometric-mean] is defined as the nth root of a product of _n_ numbers.

<!-- <equation class="equation" label="eq:geometric_mean" align="center" raw="\biggl( \prod_{i=0}^{n-1} \biggr)^{\frac{1}{n}} = \sqrt[n]{x_0 x_1 \cdots x_{n-1}}" alt="Equation for the geometric mean."> -->

<div class="equation" align="center" data-raw-text="\biggl( \prod_{i=0}^{n-1} \biggr)^{\frac{1}{n}} = \sqrt[n]{x_0 x_1 \cdots x_{n-1}}" data-equation="eq:geometric_mean">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@49d8cabda84033d55d7b8069f19ee3dd8b8d1496/lib/node_modules/@stdlib/stats/incr/mgmean/docs/img/equation_geometric_mean.svg" alt="Equation for the geometric mean.">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-incr-mgmean
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var incrmgmean = require( '@stdlib/stats-incr-mgmean' );
```

#### incrmgmean( window )

Returns an accumulator `function` which incrementally computes a moving [geometric mean][geometric-mean]. The `window` parameter defines the number of values over which to compute the moving [geometric mean][geometric-mean].

```javascript
var accumulator = incrmgmean( 3 );
```

#### accumulator( \[x] )

If provided an input value `x`, the accumulator function returns an updated [geometric mean][geometric-mean]. If not provided an input value `x`, the accumulator function returns the current [geometric-mean][geometric-mean].

```javascript
var accumulator = incrmgmean( 3 );

var v = accumulator();
// returns null

// Fill the window...
v = accumulator( 2.0 ); // [2.0]
// returns 2.0

v = accumulator( 1.0 ); // [2.0, 1.0]
// returns ~1.41

v = accumulator( 3.0 ); // [2.0, 1.0, 3.0]
// returns ~1.82

// Window begins sliding...
v = accumulator( 7.0 ); // [1.0, 3.0, 7.0]
// returns ~2.76

v = accumulator( 5.0 ); // [3.0, 7.0, 5.0]
// returns ~4.72

v = accumulator();
// returns ~4.72
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Input values are **not** type checked. If provided `NaN` or a value which, when used in computations, results in `NaN`, the accumulated value is `NaN` for **at least** `W-1` future invocations. If non-numeric inputs are possible, you are advised to type check and handle accordingly **before** passing the value to the accumulator function.
-   As `W` values are needed to fill the window buffer, the first `W-1` returned values are calculated from smaller sample sizes. Until the window is full, each returned value is calculated from all provided values.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var incrmgmean = require( '@stdlib/stats-incr-mgmean' );

var accumulator;
var v;
var i;

// Initialize an accumulator:
accumulator = incrmgmean( 5 );

// For each simulated datum, update the moving geometric mean...
for ( i = 0; i < 100; i++ ) {
    v = randu() * 100.0;
    accumulator( v );
}
console.log( accumulator() );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/stats/incr/gmean`][@stdlib/stats/incr/gmean]</span><span class="delimiter">: </span><span class="description">compute a geometric mean incrementally.</span>
-   <span class="package-name">[`@stdlib/stats/incr/mhmean`][@stdlib/stats/incr/mhmean]</span><span class="delimiter">: </span><span class="description">compute a moving harmonic mean incrementally.</span>
-   <span class="package-name">[`@stdlib/stats/incr/mmean`][@stdlib/stats/incr/mmean]</span><span class="delimiter">: </span><span class="description">compute a moving arithmetic mean incrementally.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-incr-mgmean.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-incr-mgmean

[test-image]: https://github.com/stdlib-js/stats-incr-mgmean/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-incr-mgmean/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-incr-mgmean/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-incr-mgmean?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-incr-mgmean.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-incr-mgmean/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-incr-mgmean/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-incr-mgmean/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-incr-mgmean/tree/esm
[branches-url]: https://github.com/stdlib-js/stats-incr-mgmean/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-incr-mgmean/main/LICENSE

[geometric-mean]: https://en.wikipedia.org/wiki/Geometric_mean

<!-- <related-links> -->

[@stdlib/stats/incr/gmean]: https://github.com/stdlib-js/stats-incr-gmean

[@stdlib/stats/incr/mhmean]: https://github.com/stdlib-js/stats-incr-mhmean

[@stdlib/stats/incr/mmean]: https://github.com/stdlib-js/stats-incr-mmean

<!-- </related-links> -->

</section>

<!-- /.links -->
