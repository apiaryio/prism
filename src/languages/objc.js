// From http://www.dreamingwish.com/frontui/article/default/objc-brush-for-syntax-highlighter-mt.html.
define(function() {
  return function(Prism) {
    Prism.languages.objc = Prism.languages.extend('clike', {
      'keyword': /\b(IBAction|IBOutlet|SEL|YES|NO|readwrite|readonly|nonatomic|retain|assign|readonly|getter|setter|nil|NULL|super|self|copy|break|case|catch|class|const|copy|__finally|__exception|__try|const_cast|continue|private|public|protected|__declspec|default|delete|deprecated|dllexport|dllimport|do|dynamic_cast|else|enum|explicit|extern|if|for|friend|goto|inline|mutable|naked|namespace|new|noinline|noreturn|nothrow|register|reinterpret_cast|return|selectany|sizeof|static|static_cast|struct|switch|template|this|thread|throw|true|false|try|typedef|typeid|typename|union|using|uuid|virtual|volatile|whcar_t|while)\b/g,
      'number': /\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/g
    });
  };
});
