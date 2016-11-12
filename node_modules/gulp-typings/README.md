# gulp-typings
gulp-typings allows you to install typings from typings.json with gulp

## Status
[![bitHound Code](https://www.bithound.io/github/typings/gulp-typings/badges/code.svg)](https://www.bithound.io/github/pushrocks/gulp-typings)
[![Dependency Status](https://david-dm.org/typings/gulp-typings.svg)](https://david-dm.org/pushrocks/gulp-typings)
[![node](https://img.shields.io/badge/node->=%204.x.x-blue.svg)](https://nodejs.org/dist/latest-v6.x/docs/api/)
## Usage

```js
var gulp = require("gulp");
var gulpTypings = require("gulp-typings");

gulp.task("installTypings",function(){
    var stream = gulp.src("./typings.json")
        .pipe(gulpTypings()); //will install all typingsfiles in pipeline.
    return stream; // by returning stream gulp can listen to events from the stream and knows when it is finished.
});
```
