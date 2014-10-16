# Prism

[![Build Status](https://travis-ci.org/apiaryio/prism.svg)](https://travis-ci.org/apiaryio/prism)

Apiary's fork of [Prism](http://prismjs.com/).

Prism is a lightweight, robust, elegant syntax highlighting library. It's a spin-off project from [Dabblet](http://dabblet.com/).

## Differences

* Tests
* AMD support *(RequireJS)*
* Optional encoding *(`_.util.encode`)*
* Parallelism with Web Workers *(if available)*
* No automatic highlighting, you have to use the `highlight` method
* Low-level API *(`tokenize`, `Token`, ...)*

# API

```JavaScript
require([
  'languages/clike',
  'languages/bash',
  'languages/javascript'
  'prism'
], function(
  cLikeGrammar
  bashGrammar
  javaScriptGrammar
  prism
) {
  // Add the languages to Prism.
  cLikeGrammar(prism);
  bashGrammar(prism);
  javaScriptGrammar(prism);

  // Highlight the code.
  prism.highlight('alert("Hello!");', prism.languages.javascript)
});
```

## `highlight(code, grammar, options)`

# Tests

```
npm test
```
