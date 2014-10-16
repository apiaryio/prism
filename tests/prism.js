r = require('requirejs');
assert = require('chai').assert;

r.config({
  baseUrl: './src/',
  paths: {
    'languages/clike': 'languages/clike',
    'languages/bash': 'languages/bash',
    'languages/javascript': 'languages/javascript'
  }
});

describe('Prism', function(){
  var prism;

  before(function(done) {
    r([
      'languages/clike',
      'languages/bash',
      'languages/javascript',
      'prism'
    ], function(
      clike,
      bash,
      javascript
    ) {
      prism = arguments[arguments.length - 1];

      // Add the languages to Prism.
      clike(prism);
      bash(prism);
      javascript(prism);

      done()
    });
  });

  describe('JavaScript Syntax Highlighting', function() {
    describe('When I highlight ‘alert(\'Hello!\');’', function() {
      var actualOutput;

      var expectedOutput = '<span class="token function" >alert';
      expectedOutput += '<span class="token punctuation" >(</span>';
      expectedOutput += '</span>';
      expectedOutput += '<span class="token string oneLine" >\'Hello!\'</span>';
      expectedOutput += '<span class="token punctuation" >)</span>';

      before(function() {
        actualOutput = prism.highlight('alert(\'Hello!\')', prism.languages.javascript);
      });

      it('It should be properly highlighted', function() {
        assert.strictEqual(actualOutput, expectedOutput);
      });

    });

  });

});

