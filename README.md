<div align="center">
  <img src="media/logo.png" alt="stringaling"/>
</div>
<div align="center">
  <strong>Collection of string manipulation helpers</strong>
</div>
<div align="center">
  <a href="https://npmjs.org/package/stringaling">
    <img src="https://img.shields.io/npm/v/stringaling.svg?style=flat-square" alt="npm package version" />
  </a>
  <a href="https://npmjs.org/package/stringaling">
  <img src="https://img.shields.io/npm/dm/stringaling.svg?style=flat-square" alt="npm downloads" />
  </a>
  <a href="https://github.com/feross/standard">
    <img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square" alt="standard JS linter" />
  </a>
  <a href="https://github.com/prettier/prettier">
    <img src="https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square" alt="prettier code formatting" />
  </a>
  <a href="https://travis-ci.org/tiaanduplessis/stringaling">
    <img src="https://img.shields.io/travis/tiaanduplessis/stringaling.svg?style=flat-square" alt="travis ci build status" />
  </a>
  <a href="https://github.com/tiaanduplessis/stringaling/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/stringaling.svg?style=flat-square" alt="project license" />
  </a>
  <a href="http://makeapullrequest.com">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="make a pull request" />
  </a>
</div>
<br>
<div align="center">
  <a href="https://github.com/tiaanduplessis/stringaling/watchers">
    <img src="https://img.shields.io/github/watchers/tiaanduplessis/stringaling.svg?style=social" alt="Github Watch Badge" />
  </a>
  <a href="https://github.com/tiaanduplessis/stringaling/stargazers">
    <img src="https://img.shields.io/github/stars/tiaanduplessis/stringaling.svg?style=social" alt="Github Star Badge" />
  </a>
  <a href="https://twitter.com/intent/tweet?text=Check%20out%20stringaling!%20https://github.com/tiaanduplessis/stringaling%20%F0%9F%91%8D">
    <img src="https://img.shields.io/twitter/url/https/github.com/tiaanduplessis/stringaling.svg?style=social" alt="Tweet" />
  </a>
</div>
<br>
<div align="center">
  Built with ❤︎ by <a href="https://github.com/tiaanduplessis">tiaanduplessis</a> and <a href="https://github.com/tiaanduplessis/stringaling/contributors">contributors</a>
</div>

<h2>Table of Contents</h2>
<details>
  <summary>Table of Contents</summary>
  <li><a href="#install">Install</a></li>
  <li><a href="#usage">Usage</a></li>
  <li><a href="#api">API</a></li>
  <li><a href="#contribute">Contribute</a></li>
  <li><a href="#license">License</a></li>
</details>

## Install

```sh
$ npm install stringaling
# OR
$ yarn add stringaling
```

## Usage - TODO

## API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### afterFirst

**Parameters**

-   `str` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** to search (optional, default `''`)
-   `delimiter`   (optional, default `''`)
-   `delimter` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** to look for

### append

**Parameters**

-   `str` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** to append strings to (optional, default `''`)
-   `appends` **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** is an array of strings to append to the str

Returns **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** str with appends appended

### at

Search str for character at given index

**Parameters**

-   `str` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** Input str to search (optional, default `''`)
-   `index` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** Index str of character to return(starting from 0) (optional, default `0`)

Returns **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** Character at given index

### beforeFirst

Searches string for given delimiter and returns substring before the first occurence of delimiter

**Parameters**

-   `str` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** to search (optional, default `''`)
-   `delimiter` **any** to find

### beforeLast

Searches string for given delimiter and returns substring before last occurence of delimiter

**Parameters**

-   `str` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** to search (optional, default `''`)
-   `delimiter` **any** to find

### camelize

Camelcase a given string

**Parameters**

-   `str` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** to convert to camelcase (optional, default `''`)

Returns **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** Camelcase string

### chars

Split given strings into array of characters

**Parameters**

-   `strs` **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** to split into array of characters

Returns **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** Characters in given strings

### first

**Parameters**

-   `str` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** to get substring from (optional, default `''`)
-   `length` **Nunber** of substring (optional, default `1`)

### last

**Parameters**

-   `str` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** to get substring from (optional, default `''`)
-   `length` **Nunber** of substring (optional, default `1`)

### slugify

Converts a value from a slug
Extracted from: <https://github.com/egoist/slugo>

**Parameters**

-   `str` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** to convert to slug (optional, default `''`)

Returns **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** Slug

### split

Split a string at given delimter.
Wrapper around String.prototype.split

**Parameters**

-   `str` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** to split based on delimter (optional, default `''`)
-   `delimiter` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** to split str on (optional, default `''`)

Returns **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** 

### toTitleCase

Convert a string to title case

**Parameters**

-   `str` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** to convert to title case

## Contributing

Contributions are welcome!

1.  Fork it.
2.  Create your feature branch: `git checkout -b my-new-feature`
3.  Commit your changes: `git commit -am 'Add some feature'`
4.  Push to the branch: `git push origin my-new-feature`
5.  Submit a pull request :D

Or open up [a issue](https://github.com/tiaanduplessis/stringaling/issues).

## License

Licensed under the MIT License.
