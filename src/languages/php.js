/**
 * Original by Aaron Harun: http://aahacreative.com/2012/07/31/php-syntax-highlighting-prism/
 * Modified by Miles Johnson: http://milesj.me
 *
 * Supports the following:
 *    - Extends clike syntax
 *    - Support for PHP 5.3+ (namespaces, traits, generators, etc)
 *    - Smarter constant and function matching
 *
 * Adds the following new token classes:
 *    constant, delimiter, variable, function, package
 */
define(function() {
  return function(Prism) {
    Prism.languages.php = Prism.languages.extend('clike', {
      'keyword': /\b(and|or|xor|array|as|break|case|cfunction|class|const|continue|declare|default|die|do|else|elseif|enddeclare|endfor|endforeach|endif|endswitch|endwhile|extends|for|foreach|function|include|include_once|global|if|new|return|static|switch|use|require|require_once|var|while|abstract|interface|public|implements|private|protected|parent|throw|null|echo|print|trait|namespace|final|yield|goto|instanceof|finally|try|catch)\b/ig,
      'constant': /\b[A-Z0-9_]{2,}\b/g,
      'comment': {
        pattern: /(^|[^\\])(\/\*[\w\W]*?\*\/|(^|[^:])(\/\/|#).*?(\r?\n|$))/g,
        lookbehind: true
      }
    });

    Prism.languages.insertBefore('php', 'keyword', {
      'delimiter': /(\?>|<\?php|<\?)/ig,
      'variable': /(\$\w+)\b/ig,
      'package': {
        pattern: /(\\|namespace\s+|use\s+)[\w\\]+/g,
        lookbehind: true,
        inside: {
          punctuation: /\\/
        }
      }
    });

    // Must be defined after the function pattern.
    Prism.languages.insertBefore('php', 'operator', {
      'property': {
        pattern: /(->)[\w]+/g,
        lookbehind: true
      }
    });
  };
});
