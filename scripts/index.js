(()=>{var t={533:(t,e)=>{"use strict";e.__esModule=!0,e.default=[]},981:(t,e)=>{"use strict";e.__esModule=!0,e.default=[]},274:(t,e)=>{"use strict";e.__esModule=!0,e.default=[]},469:(t,e)=>{"use strict";e.Z=function(t){return{line:t.first_line,col:t.first_column+1}}},27:(t,e)=>{"use strict";var i,n;e.EF=void 0,function(t){t.NULL="NULL",t.INTEGER="INT",t.ARRAY="ARRAY",t.STRUCT="STRUCT",t.STRING="STRING",t.DOUBLE="DOUBLE",t.BOOLEAN="BOOLEAN",t.CHARACTER="CHARACTER"}(i||(i={})),(n=e.EF||(e.EF={})).PLUS="+",n.MINUSMINUS="--",n.PLUSPLUS="++",n.MINUS="-",n.NEGATION="-*",n.DIVISION="/",n.TIMES="*",n.MODULE="%",n.POWER="^",n.TERNARY="?:",n.EQUALSEQUALS="==",n.MOREOREQUALS=">=",n.MAJOR=">",n.LESSOREQUALS="<=",n.MINOR="<",n.NOT="!",n.NONEQUALS="!=",n.AND="&&",n.OR="||",e.ZP=i},629:(t,e,i)=>{var n;void 0===(n=function(t){var e=function(t,e,i,n){for(i=i||{},n=t.length;n--;i[t[n]]=e);return i},n=[1,3],s=[1,4],r=[1,5],l=[1,6],o=[1,7],c=[5,6,7,8,9,10],h={trace:function(){},yy:{},symbols_:{error:2,START:3,TYPE:4,EOF:5,intType:6,dblType:7,boolType:8,charType:9,strType:10,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",6:"intType",7:"dblType",8:"boolType",9:"charType",10:"strType"},productions_:[0,[3,3],[4,1],[4,1],[4,1],[4,1],[4,1]],performAction:function(t,e,i,n,s,r,l){var o=r.length-1;switch(s){case 1:return r[o-2];case 2:this.$=u.INTEGER;break;case 3:this.$=u.DOUBLE;break;case 4:this.$=u.BOOLEAN;break;case 5:this.$=u.CHARACTER;break;case 6:this.$=u.STRING}},table:[{3:1,4:2,6:n,7:s,8:r,9:l,10:o},{1:[3]},{4:8,6:n,7:s,8:r,9:l,10:o},e(c,[2,2]),e(c,[2,3]),e(c,[2,4]),e(c,[2,5]),e(c,[2,6]),{5:[1,9]},{1:[2,1]}],defaultActions:{9:[2,1]},parseError:function(t,e){if(!e.recoverable){var i=new Error(t);throw i.hash=e,i}this.trace(t)},parse:function(t){var e=this,i=[0],n=[null],s=[],r=this.table,l="",o=0,c=0,h=0,a=2,y=1,u=s.slice.call(arguments,1),p=Object.create(this.lexer),f={yy:{}};for(var g in this.yy)Object.prototype.hasOwnProperty.call(this.yy,g)&&(f.yy[g]=this.yy[g]);p.setInput(t,f.yy),f.yy.lexer=p,f.yy.parser=this,void 0===p.yylloc&&(p.yylloc={});var m=p.yylloc;s.push(m);var _=p.options&&p.options.ranges;"function"==typeof f.yy.parseError?this.parseError=f.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;for(var d,E,b,k,v,S,x,T,A,I=function(){var t;return"number"!=typeof(t=p.lex()||y)&&(t=e.symbols_[t]||t),t},O={};;){if(b=i[i.length-1],this.defaultActions[b]?k=this.defaultActions[b]:(null==d&&(d=I()),k=r[b]&&r[b][d]),void 0===k||!k.length||!k[0]){var L="";for(S in A=[],r[b])this.terminals_[S]&&S>a&&A.push("'"+this.terminals_[S]+"'");L=p.showPosition?"Parse error on line "+(o+1)+":\n"+p.showPosition()+"\nExpecting "+A.join(", ")+", got '"+(this.terminals_[d]||d)+"'":"Parse error on line "+(o+1)+": Unexpected "+(d==y?"end of input":"'"+(this.terminals_[d]||d)+"'"),this.parseError(L,{text:p.match,token:this.terminals_[d]||d,line:p.yylineno,loc:m,expected:A})}if(k[0]instanceof Array&&k.length>1)throw new Error("Parse Error: multiple actions possible at state: "+b+", token: "+d);switch(k[0]){case 1:i.push(d),n.push(p.yytext),s.push(p.yylloc),i.push(k[1]),d=null,E?(d=E,E=null):(c=p.yyleng,l=p.yytext,o=p.yylineno,m=p.yylloc,h>0&&h--);break;case 2:if(x=this.productions_[k[1]][1],O.$=n[n.length-x],O._$={first_line:s[s.length-(x||1)].first_line,last_line:s[s.length-1].last_line,first_column:s[s.length-(x||1)].first_column,last_column:s[s.length-1].last_column},_&&(O._$.range=[s[s.length-(x||1)].range[0],s[s.length-1].range[1]]),void 0!==(v=this.performAction.apply(O,[l,c,o,f.yy,k[1],n,s].concat(u))))return v;x&&(i=i.slice(0,-1*x*2),n=n.slice(0,-1*x),s=s.slice(0,-1*x)),i.push(this.productions_[k[1]][0]),n.push(O.$),s.push(O._$),T=r[i[i.length-2]][i[i.length-1]],i.push(T);break;case 3:return!0}}return!0}};const a=i(981).default,y=i(533).default,u=i(27).ZP,p=i(469).Z,f=(t,e)=>(a.push({...p(t),name:e}),e);var g={EOF:1,parseError:function(t,e){if(!this.yy.parser)throw new Error(t);this.yy.parser.parseError(t,e)},setInput:function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},unput:function(t){var e=t.length,i=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var n=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),i.length-1&&(this.yylineno-=i.length-1);var s=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:i?(i.length===n.length?this.yylloc.first_column:0)+n[n.length-i.length].length-i[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[s[0],s[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(t){this.unput(this.match.slice(t))},pastInput:function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var t=this.pastInput(),e=new Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"},test_match:function(t,e){var i,n,s;if(this.options.backtrack_lexer&&(s={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(s.yylloc.range=this.yylloc.range.slice(0))),(n=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=n.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:n?n[n.length-1].length-n[n.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],i=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),i)return i;if(this._backtrack){for(var r in s)this[r]=s[r];return!1}return!1},next:function(){if(this.done)return this.EOF;var t,e,i,n;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var s=this._currentRules(),r=0;r<s.length;r++)if((i=this._input.match(this.rules[s[r]]))&&(!e||i[0].length>e[0].length)){if(e=i,n=r,this.options.backtrack_lexer){if(!1!==(t=this.test_match(i,s[r])))return t;if(this._backtrack){e=!1;continue}return!1}if(!this.options.flex)break}return e?!1!==(t=this.test_match(e,s[n]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){return this.next()||this.lex()},begin:function(t){this.conditionStack.push(t)},popState:function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"},pushState:function(t){this.begin(t)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(t,e,i,n){switch(i){case 0:case 1:case 2:case 38:case 39:case 40:case 41:case 42:case 43:case 44:break;case 3:return f(e.yylloc,"charType");case 4:return f(e.yylloc,"boolType");case 5:return f(e.yylloc,"strType");case 6:return f(e.yylloc,"dblType");case 7:return f(e.yylloc,"intType");case 8:return f(e.yylloc,"trBool");case 9:return f(e.yylloc,"flBool");case 10:return f(e.yylloc,"lessOrEquals");case 11:return f(e.yylloc,"moreOrEquals");case 12:return f(e.yylloc,"equalsEquals");case 13:return f(e.yylloc,"minusMinus");case 14:return f(e.yylloc,"nonEquals");case 15:return f(e.yylloc,"plusPlus");case 16:return f(e.yylloc,"questionMark");case 17:return f(e.yylloc,"colom");case 18:return f(e.yylloc,"division");case 19:return f(e.yylloc,"module");case 20:return f(e.yylloc,"times");case 21:return f(e.yylloc,"power");case 22:return f(e.yylloc,"equals");case 23:return f(e.yylloc,"minor");case 24:return f(e.yylloc,"major");case 25:return f(e.yylloc,"minus");case 26:return f(e.yylloc,"plus");case 27:return f(e.yylloc,"and");case 28:return f(e.yylloc,"not");case 29:return f(e.yylloc,"or");case 30:return f(e.yylloc,"comma");case 31:return f(e.yylloc,"semicolom");case 32:return f(e.yylloc,"openBracket");case 33:return f(e.yylloc,"closeBracket");case 34:return f(e.yylloc,"openParenthesis");case 35:return f(e.yylloc,"closeParenthesis");case 36:return f(e.yylloc,"openSquareBracket");case 37:return f(e.yylloc,"closeSquareBracket");case 45:return e.yytext=e.yytext.substr(1,e.yyleng-2),f(e.yylloc,"text");case 46:return e.yytext=e.yytext.substr(1,e.yyleng-2),f(e.yylloc,"character");case 47:return f(e.yylloc,"decimal");case 48:return f(e.yylloc,"integer");case 49:return f(e.yylloc,"id");case 50:return 5;case 51:y.push({type:"Lexical",token:{line:e.yylloc.first_line,col:e.yylloc.fist_column},msg:`${e.yytext} no reconocido`})}},rules:[/^(?:\s+)/i,/^(?:\/\/.*)/i,/^(?:[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/])/i,/^(?:char\b)/i,/^(?:boolean\b)/i,/^(?:string\b)/i,/^(?:double\b)/i,/^(?:int\b)/i,/^(?:true\b)/i,/^(?:false\b)/i,/^(?:<=)/i,/^(?:>=)/i,/^(?:==)/i,/^(?:--)/i,/^(?:!=)/i,/^(?:\+\+)/i,/^(?:\?)/i,/^(?::)/i,/^(?:\/)/i,/^(?:%)/i,/^(?:\*)/i,/^(?:\^)/i,/^(?:=)/i,/^(?:<)/i,/^(?:>)/i,/^(?:-)/i,/^(?:\+)/i,/^(?:&&)/i,/^(?:!)/i,/^(?:\|\|)/i,/^(?:,)/i,/^(?:;)/i,/^(?:\{)/i,/^(?:\})/i,/^(?:\()/i,/^(?:\))/i,/^(?:\[)/i,/^(?:\])/i,/^(?:QUOTES\b)/i,/^(?:PIPE_QUOTES\b)/i,/^(?:DOUBLE_PIPES\b)/i,/^(?:BREAKLINE\b)/i,/^(?:CARRETURN\b)/i,/^(?:TABULATION\b)/i,/^(?:NULLCHAR\b)/i,/^(?:"[^\"]*")/i,/^(?:'[^\']?')/i,/^(?:[0-9]*\.[0-9]+\b)/i,/^(?:[0-9]+\b)/i,/^(?:([a-zA-Z])[a-zA-Z0-9_]*)/i,/^(?:$)/i,/^(?:.)/i],conditions:{INITIAL:{rules:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51],inclusive:!0}}};return h.lexer=g,h}.call(e,i,e,t))||(t.exports=n)}},e={};function i(n){var s=e[n];if(void 0!==s)return s.exports;var r=e[n]={exports:{}};return t[n](r,r.exports,i),r.exports}(()=>{"use strict";var t,e,n,s,r=i(981),l=i(533),o=i(629),c=i(274),h=[],a=function(){var t,e=document.querySelector("#editor > textarea"),i=null!==(t=null==e?void 0:e.value)&&void 0!==t?t:"";r.default.length=0,l.default.length=0,c.default.length=0;try{h=o.parse(i),console.log(h)}catch(t){console.log(t)}},y=function(){document.getElementById("console").value=""};n=document.getElementById("console"),s=window.console.log,window.console.log=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];s.apply(void 0,t),n&&t.forEach((function(t){n&&(n.value+="".concat(JSON.stringify(t).substring(1,JSON.stringify(t).length-1),"\n"))}))},t=document.getElementById("cleanBtn"),null==(e=document.getElementById("runtimeBtn"))||e.addEventListener("click",a),null==t||t.addEventListener("click",y),window.addEventListener("keydown",(function(t){if(t.ctrlKey||t.metaKey){var e=!1;"p"===t.key?(a(),e=!0):"m"===t.key&&(y(),e=!0),e&&t.preventDefault()}}))})()})();