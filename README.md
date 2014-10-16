# [Prism](http://prismjs.com/)

Apiary's fork of [Prism](http://prismjs.com/).

Prism is a lightweight, robust, elegant syntax highlighting library. It's a spin-off project from [Dabblet](http://dabblet.com/).

## Differences

* AMD support *(RequireJS)*
* Optional encoding *(`_.util.encode`)*
* Parallelism with Web Workers *(if available)*
* No automatic highlighting, you have to use the `highlight` method
* Low-level API *(`tokenize`, `Token`, ...)*

# API

## `highlight(code, grammar, options)`
