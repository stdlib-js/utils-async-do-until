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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# doUntilAsync

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Invoke a function until a test condition is true.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/utils-async-do-until
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var doUntilAsync = require( '@stdlib/utils-async-do-until' );
```

#### doUntilAsync( fcn, predicate, done\[, thisArg ] )

Invokes a `function` until a `predicate` function returns `true`. Note that the `predicate` function is evaluated **after** executing `fcn`; thus, `fcn` **always** executes at least once.

```javascript
function fcn( i, next ) {
    setTimeout( onTimeout, 0 );
    function onTimeout() {
        console.log( 'beep: %d', i );
        next();
    }
}

function predicate( i, clbk ) {
    clbk( null, i >= 5 );
}

function done( error ) {
    if ( error ) {
        throw error;
    }
}

doUntilAsync( fcn, predicate, done );
/* =>
    beep: 0
    beep: 1
    beep: 2
    beep: 3
    beep: 4
*/
```

The function to invoke is provided two arguments:

-   `i`: iteration number (starting from zero).
-   `next`: a callback which must be invoked before proceeding to the next iteration.

The `predicate` function is provided two arguments:

-   `i`: iteration number (starting from one).
-   `clbk`: a callback indicating whether to invoke `fcn`.

The `clbk` function accepts two arguments:

-   `error`: error object.
-   `bool`: test result.

If the test result is falsy, the function continues invoking `fcn`; otherwise, the function invokes the `done` callback.

The first argument of both `clbk` and `next` is an `error` argument. If either function is called with a truthy `error` argument, the function suspends execution and immediately calls the `done` callback for subsequent `error` handling.

```javascript
function fcn( i, next ) {
    setTimeout( onTimeout, 0 );
    function onTimeout() {
        next( new Error( 'beep' ) );
    }
}

function predicate( i, clbk ) {
    clbk( null, i >= 5 );
}

function done( error ) {
    console.error( error.message );
    // => beep
}

doUntilAsync( fcn, predicate, done );
```

The `done` callback is invoked with an `error` argument and any arguments passed to the final `next` callback.

```javascript
function fcn( i, next ) {
    setTimeout( onTimeout, 0 );
    function onTimeout() {
        next( null, i );
    }
}

function predicate( i, clbk ) {
    clbk( null, i >= 5 );
}

function done( error, result ) {
    if ( error ) {
        throw error;
    }
    console.log( result );
    // => 4
}

doUntilAsync( fcn, predicate, done );
```

To set the function execution context for the invoked function, provide a `thisArg`.

<!-- eslint-disable no-invalid-this -->

```javascript
function fcn( i, next ) {
    this.count += 1;
    setTimeout( onTimeout, 0 );
    function onTimeout() {
        next();
    }
}

function predicate( i, clbk ) {
    clbk( null, i >= 5 );
}

var context = {
    'count': 0
};

doUntilAsync( fcn, predicate, done, context );

function done( error ) {
    if ( error ) {
        throw error;
    }
    console.log( context.count );
    // => 5
}
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   Execution is **not** guaranteed to be asynchronous. To guarantee asynchrony, wrap the `done` callback in a function which either executes at the end of the current stack (e.g., `nextTick`) or during a subsequent turn of the event loop (e.g., `setImmediate`, `setTimeout`).

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var repeatString = require( '@stdlib/string-repeat' );
var doUntilAsync = require( '@stdlib/utils-async-do-until' );

function fcn( i, next ) {
    setTimeout( onTimeout, 0 );
    function onTimeout() {
        next( null, repeatString( 'beep', i+1 ) );
    }
}

function predicate( i, clbk ) {
    setTimeout( onTimeout, 0 );
    function onTimeout() {
        clbk( null, i >= 5 );
    }
}

function done( error, result ) {
    if ( error ) {
        throw error;
    }
    console.log( result );
}

doUntilAsync( fcn, predicate, done );
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils-do-until`][@stdlib/utils/do-until]</span><span class="delimiter">: </span><span class="description">invoke a function until a test condition is true.</span>
-   <span class="package-name">[`@stdlib/utils-async/do-while`][@stdlib/utils/async/do-while]</span><span class="delimiter">: </span><span class="description">invoke a function while a test condition is true.</span>
-   <span class="package-name">[`@stdlib/utils-async/until`][@stdlib/utils/async/until]</span><span class="delimiter">: </span><span class="description">invoke a function until a test condition is true.</span>
-   <span class="package-name">[`@stdlib/utils-async/while`][@stdlib/utils/async/while]</span><span class="delimiter">: </span><span class="description">invoke a function while a test condition is true.</span>

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

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-async-do-until.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-async-do-until

[test-image]: https://github.com/stdlib-js/utils-async-do-until/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/utils-async-do-until/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-async-do-until/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-async-do-until?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-async-do-until.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-async-do-until/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/utils-async-do-until/tree/deno
[deno-readme]: https://github.com/stdlib-js/utils-async-do-until/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/utils-async-do-until/tree/umd
[umd-readme]: https://github.com/stdlib-js/utils-async-do-until/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/utils-async-do-until/tree/esm
[esm-readme]: https://github.com/stdlib-js/utils-async-do-until/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/utils-async-do-until/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-async-do-until/main/LICENSE

<!-- <related-links> -->

[@stdlib/utils/do-until]: https://github.com/stdlib-js/utils-do-until

[@stdlib/utils/async/do-while]: https://github.com/stdlib-js/utils-async-do-while

[@stdlib/utils/async/until]: https://github.com/stdlib-js/utils-async-until

[@stdlib/utils/async/while]: https://github.com/stdlib-js/utils-async-while

<!-- </related-links> -->

</section>

<!-- /.links -->
