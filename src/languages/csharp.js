// From http://www.broculos.net/2013/05/why-we-chose-prism-syntax-highlighter.html#.UvtD1kJdU08.
define(function() {
  return function(Prism) {
    Prism.languages.csharp = Prism.languages.extend('clike', {
      'keyword': /\b(abstract|as|base|bool|break|byte|case|catch|char|checked|class|const|continue|decimal|default|delegate|do|double|else|enum|event|explicit|extern|false|finally|fixed|float|for|foreach|get|goto|if|implicit|in|int|interface|internal|is|lock|long|namespace|new|null|object|operator|out|override|params|private|protected|public|readonly|ref|return|sbyte|sealed|set|short|sizeof|stackalloc|static|string|struct|switch|this|throw|true|try|typeof|uint|ulong|unchecked|unsafe|ushort|using|virtual|void|while)\b/g,
      'string': /@?("|')(\\?.)*?\1/g,
      'preprocessor': /^\s*#.*/gm,
      'number': /\b-?(0x)?\d*\.?\d+\b/g
    });
  };
});
