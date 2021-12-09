

define(function(require){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,9],$V1=[1,10],$V2=[1,11],$V3=[1,12],$V4=[1,13],$V5=[1,7],$V6=[5,7,8,9,10,11,18],$V7=[14,17],$V8=[1,32],$V9=[1,27],$Va=[1,26],$Vb=[1,28],$Vc=[1,30],$Vd=[1,31],$Ve=[1,33],$Vf=[1,34],$Vg=[1,35],$Vh=[1,36],$Vi=[1,37],$Vj=[1,39],$Vk=[1,40],$Vl=[1,41],$Vm=[1,42],$Vn=[1,43],$Vo=[1,44],$Vp=[1,45],$Vq=[1,46],$Vr=[1,47],$Vs=[1,48],$Vt=[1,49],$Vu=[1,50],$Vv=[1,51],$Vw=[1,52],$Vx=[1,53],$Vy=[14,17,25,26,27,28,29,30,31,32,33,34,35,36,37,38,41,43,44],$Vz=[14,17,25,26,27,28,29,34,35,36,41,43,44],$VA=[14,17,26,27,28,29,35,36,41,43,44],$VB=[14,17,25,26,27,28,29,30,31,32,33,34,35,36,41,43,44];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"START":3,"INSTRUCTIONS":4,"EOF":5,"TYPE":6,"intType":7,"dblType":8,"boolType":9,"charType":10,"strType":11,"INSTRUCTION":12,"DECLARATION":13,"semicolom":14,"ASSIGNMENT":15,"ASSIGNMENTS":16,"comma":17,"id":18,"equals":19,"EXPRESSIONS":20,"TERNARY":21,"INCREMENTALASSIGNMENT":22,"plusPlus":23,"minusMinus":24,"plus":25,"equalsEquals":26,"moreOrEquals":27,"lessOrEquals":28,"nonEquals":29,"division":30,"module":31,"power":32,"times":33,"minus":34,"minor":35,"major":36,"and":37,"or":38,"not":39,"openParenthesis":40,"closeParenthesis":41,"VARVALUE":42,"questionMark":43,"colom":44,"decimal":45,"text":46,"integer":47,"character":48,"trBool":49,"flBool":50,"nullType":51,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",7:"intType",8:"dblType",9:"boolType",10:"charType",11:"strType",14:"semicolom",17:"comma",18:"id",19:"equals",23:"plusPlus",24:"minusMinus",25:"plus",26:"equalsEquals",27:"moreOrEquals",28:"lessOrEquals",29:"nonEquals",30:"division",31:"module",32:"power",33:"times",34:"minus",35:"minor",36:"major",37:"and",38:"or",39:"not",40:"openParenthesis",41:"closeParenthesis",43:"questionMark",44:"colom",45:"decimal",46:"text",47:"integer",48:"character",49:"trBool",50:"flBool",51:"nullType"},
productions_: [0,[3,2],[6,1],[6,1],[6,1],[6,1],[6,1],[4,2],[4,1],[12,2],[12,2],[13,2],[16,3],[16,1],[15,1],[15,3],[15,3],[15,1],[22,2],[22,2],[20,3],[20,3],[20,3],[20,3],[20,3],[20,3],[20,3],[20,3],[20,3],[20,3],[20,3],[20,3],[20,3],[20,3],[20,2],[20,2],[20,3],[20,1],[20,3],[21,5],[42,1],[42,1],[42,1],[42,1],[42,1],[42,1],[42,1],[42,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:

        return $$[$0-1];
    
break;
case 2:

        this.$ = DataType.INTEGER;
    
break;
case 3:

        this.$ = DataType.DOUBLE;
    
break;
case 4:

        this.$ = DataType.BOOLEAN;
    
break;
case 5:

        this.$ = DataType.CHARACTER;
    
break;
case 6:

        this.$ = DataType.STRING;
    
break;
case 7:

        this.$ = $$[$0-1];
        this.$.push($$[$0]);
    
break;
case 8: case 13:

        this.$ = [$$[$0]];
    
break;
case 9: case 10: case 38:

        this.$ = $$[$0-1];
    
break;
case 11:

        this.$ = new Declaration(getToken(_$[$0-1]), { type: $$[$0-1], assignments: $$[$0] });
    
break;
case 12:

        this.$ = $$[$0-2];
        this.$.push($$[$0]);
    
break;
case 14:

        this.$ = new ExpAssignment(getToken(_$[$0]), { id: $$[$0] });
    
break;
case 15:

        this.$ = new ExpAssignment(getToken(_$[$0-2]), { id: $$[$0-2], exp: $$[$0] });  
    
break;
case 16:

        this.$ = new ExpAssignment(getToken(_$[$0-2]), { id: $$[$0-2], exp: $$[$0] });
    
break;
case 17:

        this.$ = $$[$0];
    
break;
case 18:

        this.$ = new IncrementalAssignment(getToken(_$[$0-1]), { 
            id: $$[$0-1], operator: Operator.PLUSPLUS })
    
break;
case 19:

        this.$ = new IncrementalAssignment(getToken(_$[$0-1]), { 
            id: $$[$0-1], operator: Operator.MINUSMINUS })
    
break;
case 20:

        this.$ = new Expression(getToken(_$[$0-2]), {
            left: $$[$0-2], right: $$[$0], operator: Operator.PLUS });
    
break;
case 21:

        this.$ = new Expression(getToken(_$[$0-2]), {
            left: $$[$0-2], right: $$[$0], operator: Operator.EQUALSEQUALS });
    
break;
case 22:

        this.$ = new Expression(getToken(_$[$0-2]), {
            left: $$[$0-2], right: $$[$0], operator: Operator.MOREOREQUALS });
    
break;
case 23:

        this.$ = new Expression(getToken(_$[$0-2]), {
            left: $$[$0-2], right: $$[$0], operator: Operator.LESSOREQUALS });
    
break;
case 24:

        this.$ = new Expression(getToken(_$[$0-2]), {
            left: $$[$0-2], right: $$[$0], operator: Operator.NONEQUALS });
    
break;
case 25:

        this.$ = new Expression(getToken(_$[$0-2]), {
            left: $$[$0-2], right: $$[$0], operator: Operator.DIVISION });
    
break;
case 26:

        this.$ = new Expression(getToken(_$[$0-2]), {
            left: $$[$0-2], right: $$[$0], operator: Operator.MODULE });
    
break;
case 27:

        this.$ = new Expression(getToken(_$[$0-2]), {
            left: $$[$0-2], right: $$[$0], operator: Operator.POWER });
    
break;
case 28:

        this.$ = new Expression(getToken(_$[$0-2]), {
            left: $$[$0-2], right: $$[$0], operator: Operator.TIMES });
    
break;
case 29:

        this.$ = new Expression(getToken(_$[$0-2]), {
            left: $$[$0-2], right: $$[$0], operator: Operator.MINUS });
    
break;
case 30:

        this.$ = new Expression(getToken(_$[$0-2]), {
            left: $$[$0-2], right: $$[$0], operator: Operator.MINOR });
    
break;
case 31:

        this.$ = new Expression(getToken(_$[$0-2]), {
            left: $$[$0-2], right: $$[$0], operator: Operator.MAJOR });
    
break;
case 32:

        this.$ = new Expression(getToken(_$[$0-2]), {
            left: $$[$0-2], right: $$[$0], operator: Operator.AND });
    
break;
case 33:

        this.$ = new Expression(getToken(_$[$0-2]), {
            left: $$[$0-2], right: $$[$0], operator:Operator.OR });
    
break;
case 34:

        this.$ = new Expression(getToken(_$[$0-1]), {
            left: $$[$0], operator: Operator.NOT });
    
break;
case 35:

        this.$ = new Expression(getToken(_$[$0-1]), {
            left: $$[$0], operator: Operator.NEGATION });
    
break;
case 36:

        this.$ = new Expression(getToken(_$[$0-2]), { left: $$[$0-1] });
    
break;
case 37:

        this.$ = new Expression(getToken(_$[$0]), { value: $$[$0] });
    
break;
case 39:

        this.$ = new Expression(getToken(_$[$0-4]), {
            left: $$[$0-2], right: $$[$0], condition: $$[$0-4], operator: Operator.TERNARY })
    
break;
case 40:

        this.$ = new Value(getToken(_$[$0]), { value: $$[$0], type: DataType.DOUBLE })
    
break;
case 41:

        this.$ = new Value(getToken(_$[$0]), { value: $$[$0], type: DataType.STRING })
    
break;
case 42:

        this.$ = new Value(getToken(_$[$0]), { value: $$[$0], type: DataType.ID })
    
break;
case 43:

        this.$ = new Value(getToken(_$[$0]), { value: $$[$0], type: DataType.INTEGER })
    
break;
case 44:

        this.$ = new Value(getToken(_$[$0]), { value: $$[$0], type: DataType.CHARACTER })
    
break;
case 45: case 46:

        this.$ = new Value(getToken(_$[$0]), { value: $$[$0], type: DataType.BOOLEAN })
    
break;
case 47:

        this.$ = new Value(getToken(_$[$0]), { value: $$[$0], type: DataType.NULL })
    
break;
}
},
table: [{3:1,4:2,6:6,7:$V0,8:$V1,9:$V2,10:$V3,11:$V4,12:3,13:4,15:5,18:$V5,22:8},{1:[3]},{5:[1,14],6:6,7:$V0,8:$V1,9:$V2,10:$V3,11:$V4,12:15,13:4,15:5,18:$V5,22:8},o($V6,[2,8]),{14:[1,16]},{14:[1,17]},{15:19,16:18,18:$V5,22:8},o($V7,[2,14],{19:[1,20],23:[1,21],24:[1,22]}),o($V7,[2,17]),{18:[2,2]},{18:[2,3]},{18:[2,4]},{18:[2,5]},{18:[2,6]},{1:[2,1]},o($V6,[2,7]),o($V6,[2,9]),o($V6,[2,10]),{14:[2,11],17:[1,23]},o($V7,[2,13]),{18:$V8,20:24,21:25,34:$V9,39:$Va,40:$Vb,42:29,45:$Vc,46:$Vd,47:$Ve,48:$Vf,49:$Vg,50:$Vh,51:$Vi},o($V7,[2,18]),o($V7,[2,19]),{15:38,18:$V5,22:8},o($V7,[2,15],{25:$Vj,26:$Vk,27:$Vl,28:$Vm,29:$Vn,30:$Vo,31:$Vp,32:$Vq,33:$Vr,34:$Vs,35:$Vt,36:$Vu,37:$Vv,38:$Vw,43:$Vx}),o($V7,[2,16]),{18:$V8,20:54,34:$V9,39:$Va,40:$Vb,42:29,45:$Vc,46:$Vd,47:$Ve,48:$Vf,49:$Vg,50:$Vh,51:$Vi},{18:$V8,20:55,34:$V9,39:$Va,40:$Vb,42:29,45:$Vc,46:$Vd,47:$Ve,48:$Vf,49:$Vg,50:$Vh,51:$Vi},{18:$V8,20:56,21:57,34:$V9,39:$Va,40:$Vb,42:29,45:$Vc,46:$Vd,47:$Ve,48:$Vf,49:$Vg,50:$Vh,51:$Vi},o($Vy,[2,37]),o($Vy,[2,40]),o($Vy,[2,41]),o($Vy,[2,42]),o($Vy,[2,43]),o($Vy,[2,44]),o($Vy,[2,45]),o($Vy,[2,46]),o($Vy,[2,47]),o($V7,[2,12]),{18:$V8,20:58,34:$V9,39:$Va,40:$Vb,42:29,45:$Vc,46:$Vd,47:$Ve,48:$Vf,49:$Vg,50:$Vh,51:$Vi},{18:$V8,20:59,34:$V9,39:$Va,40:$Vb,42:29,45:$Vc,46:$Vd,47:$Ve,48:$Vf,49:$Vg,50:$Vh,51:$Vi},{18:$V8,20:60,34:$V9,39:$Va,40:$Vb,42:29,45:$Vc,46:$Vd,47:$Ve,48:$Vf,49:$Vg,50:$Vh,51:$Vi},{18:$V8,20:61,34:$V9,39:$Va,40:$Vb,42:29,45:$Vc,46:$Vd,47:$Ve,48:$Vf,49:$Vg,50:$Vh,51:$Vi},{18:$V8,20:62,34:$V9,39:$Va,40:$Vb,42:29,45:$Vc,46:$Vd,47:$Ve,48:$Vf,49:$Vg,50:$Vh,51:$Vi},{18:$V8,20:63,34:$V9,39:$Va,40:$Vb,42:29,45:$Vc,46:$Vd,47:$Ve,48:$Vf,49:$Vg,50:$Vh,51:$Vi},{18:$V8,20:64,34:$V9,39:$Va,40:$Vb,42:29,45:$Vc,46:$Vd,47:$Ve,48:$Vf,49:$Vg,50:$Vh,51:$Vi},{18:$V8,20:65,34:$V9,39:$Va,40:$Vb,42:29,45:$Vc,46:$Vd,47:$Ve,48:$Vf,49:$Vg,50:$Vh,51:$Vi},{18:$V8,20:66,34:$V9,39:$Va,40:$Vb,42:29,45:$Vc,46:$Vd,47:$Ve,48:$Vf,49:$Vg,50:$Vh,51:$Vi},{18:$V8,20:67,34:$V9,39:$Va,40:$Vb,42:29,45:$Vc,46:$Vd,47:$Ve,48:$Vf,49:$Vg,50:$Vh,51:$Vi},{18:$V8,20:68,34:$V9,39:$Va,40:$Vb,42:29,45:$Vc,46:$Vd,47:$Ve,48:$Vf,49:$Vg,50:$Vh,51:$Vi},{18:$V8,20:69,34:$V9,39:$Va,40:$Vb,42:29,45:$Vc,46:$Vd,47:$Ve,48:$Vf,49:$Vg,50:$Vh,51:$Vi},{18:$V8,20:70,34:$V9,39:$Va,40:$Vb,42:29,45:$Vc,46:$Vd,47:$Ve,48:$Vf,49:$Vg,50:$Vh,51:$Vi},{18:$V8,20:71,34:$V9,39:$Va,40:$Vb,42:29,45:$Vc,46:$Vd,47:$Ve,48:$Vf,49:$Vg,50:$Vh,51:$Vi},{18:$V8,20:72,34:$V9,39:$Va,40:$Vb,42:29,45:$Vc,46:$Vd,47:$Ve,48:$Vf,49:$Vg,50:$Vh,51:$Vi},o($Vy,[2,34]),o($Vz,[2,35],{30:$Vo,31:$Vp,32:$Vq,33:$Vr,37:$Vv,38:$Vw}),{25:$Vj,26:$Vk,27:$Vl,28:$Vm,29:$Vn,30:$Vo,31:$Vp,32:$Vq,33:$Vr,34:$Vs,35:$Vt,36:$Vu,37:$Vv,38:$Vw,41:[1,73],43:$Vx},{41:[1,74]},o($Vz,[2,20],{30:$Vo,31:$Vp,32:$Vq,33:$Vr,37:$Vv,38:$Vw}),o($VA,[2,21],{25:$Vj,30:$Vo,31:$Vp,32:$Vq,33:$Vr,34:$Vs,37:$Vv,38:$Vw}),o($VA,[2,22],{25:$Vj,30:$Vo,31:$Vp,32:$Vq,33:$Vr,34:$Vs,37:$Vv,38:$Vw}),o($VA,[2,23],{25:$Vj,30:$Vo,31:$Vp,32:$Vq,33:$Vr,34:$Vs,37:$Vv,38:$Vw}),o($VA,[2,24],{25:$Vj,30:$Vo,31:$Vp,32:$Vq,33:$Vr,34:$Vs,37:$Vv,38:$Vw}),o($VB,[2,25],{37:$Vv,38:$Vw}),o($VB,[2,26],{37:$Vv,38:$Vw}),o($VB,[2,27],{37:$Vv,38:$Vw}),o($VB,[2,28],{37:$Vv,38:$Vw}),o($Vz,[2,29],{30:$Vo,31:$Vp,32:$Vq,33:$Vr,37:$Vv,38:$Vw}),o($VA,[2,30],{25:$Vj,30:$Vo,31:$Vp,32:$Vq,33:$Vr,34:$Vs,37:$Vv,38:$Vw}),o($VA,[2,31],{25:$Vj,30:$Vo,31:$Vp,32:$Vq,33:$Vr,34:$Vs,37:$Vv,38:$Vw}),o($Vy,[2,32]),o($Vy,[2,33]),{25:$Vj,26:$Vk,27:$Vl,28:$Vm,29:$Vn,30:$Vo,31:$Vp,32:$Vq,33:$Vr,34:$Vs,35:$Vt,36:$Vu,37:$Vv,38:$Vw,44:[1,75]},o($Vy,[2,36]),o($Vy,[2,38]),{18:$V8,20:76,34:$V9,39:$Va,40:$Vb,42:29,45:$Vc,46:$Vd,47:$Ve,48:$Vf,49:$Vg,50:$Vh,51:$Vi},o([14,17,41],[2,39],{25:$Vj,26:$Vk,27:$Vl,28:$Vm,29:$Vn,30:$Vo,31:$Vp,32:$Vq,33:$Vr,34:$Vs,35:$Vt,36:$Vu,37:$Vv,38:$Vw})],
defaultActions: {9:[2,2],10:[2,3],11:[2,4],12:[2,5],13:[2,6],14:[2,1]},
parseError: function parseError (str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};

    // TOOLS
    const symbols = require('../compiler/lexical/symbols/index').default
    const errors = require('../compiler/lexical/error/index').default
    const DataType = require('../compiler/utils/types').default
    const getToken = require('../compiler/utils/tools').default

    // INSTRUCCIONES
    const IncrementalAssignment = require('../compiler/instruction/assignment/incremental/index').default
    const ExpAssignment = require('../compiler/instruction/assignment/expression/index').default
    const Declaration = require('../compiler/instruction/assignment/declaration/index').default
    const Expression = require('../compiler/instruction/expression/index').default
    const Value = require('../compiler/instruction/value/index').default

    // AGREGAR TOKEN
    const addToken = (yylloc, name) => {
        symbols.push({ ...getToken(yylloc), name })
        return name
    }


/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function(match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex () {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin (condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState () {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules () {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState (n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState (condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {"case-insensitive":true},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* IGNORE */
break;
case 1:/* IGNORE */
break;
case 2:/* IGNORE */
break;
case 3:return addToken(yy_.yylloc, 'charType')
break;
case 4:return addToken(yy_.yylloc, 'boolType')
break;
case 5:return addToken(yy_.yylloc, 'nullType')
break;
case 6:return addToken(yy_.yylloc, 'strType')
break;
case 7:return addToken(yy_.yylloc, 'dblType')
break;
case 8:return addToken(yy_.yylloc, 'intType')
break;
case 9:return addToken(yy_.yylloc, 'trBool')
break;
case 10:return addToken(yy_.yylloc, 'flBool')
break;
case 11:return addToken(yy_.yylloc, 'lessOrEquals')
break;
case 12:return addToken(yy_.yylloc, 'moreOrEquals')
break;
case 13:return addToken(yy_.yylloc, 'equalsEquals')
break;
case 14:return addToken(yy_.yylloc, 'minusMinus')
break;
case 15:return addToken(yy_.yylloc, 'nonEquals')
break;
case 16:return addToken(yy_.yylloc, 'plusPlus')
break;
case 17:return addToken(yy_.yylloc, 'questionMark')
break;
case 18:return addToken(yy_.yylloc, 'colom')
break;
case 19:return addToken(yy_.yylloc, 'division')
break;
case 20:return addToken(yy_.yylloc, 'module')
break;
case 21:return addToken(yy_.yylloc, 'times')
break;
case 22:return addToken(yy_.yylloc, 'power')
break;
case 23:return addToken(yy_.yylloc, 'equals')
break;
case 24:return addToken(yy_.yylloc, 'minor')
break;
case 25:return addToken(yy_.yylloc, 'major')
break;
case 26:return addToken(yy_.yylloc, 'minus')
break;
case 27:return addToken(yy_.yylloc, 'plus')
break;
case 28:return addToken(yy_.yylloc, 'and')
break;
case 29:return addToken(yy_.yylloc, 'not')
break;
case 30:return addToken(yy_.yylloc, 'or')
break;
case 31:return addToken(yy_.yylloc, 'comma')
break;
case 32:return addToken(yy_.yylloc, 'semicolom')
break;
case 33:return addToken(yy_.yylloc, 'openBracket')
break;
case 34:return addToken(yy_.yylloc, 'closeBracket')
break;
case 35:return addToken(yy_.yylloc, 'openParenthesis')
break;
case 36:return addToken(yy_.yylloc, 'closeParenthesis')
break;
case 37:return addToken(yy_.yylloc, 'openSquareBracket')
break;
case 38:return addToken(yy_.yylloc, 'closeSquareBracket')
break;
case 39:"\""
break;
case 40:"\\\""
break;
case 41:"\\\\"
break;
case 42:"\\n"
break;
case 43:"\\r"
break;
case 44:"\\t"
break;
case 45:"\\0"
break;
case 46:
                                yy_.yytext = yy_.yytext.substr(1,yy_.yyleng-2);
                                return addToken(yy_.yylloc, 'text');
                            
break;
case 47:
                                yy_.yytext = yy_.yytext.substr(1,yy_.yyleng-2);
                                return addToken(yy_.yylloc, 'character');
						    
break;
case 48:return addToken(yy_.yylloc, 'decimal')
break;
case 49:return addToken(yy_.yylloc, 'integer')
break;
case 50:return addToken(yy_.yylloc, 'id')
break;
case 51:return 5
break;
case 52:
                                errors.push({
                                    type: 'Lexical',
                                    token: {
                                        line: yy_.yylloc.first_line,
                                        col: yy_.yylloc.fist_column
                                    },
                                    msg: `${yy_.yytext} no reconocido`
                                });
                            
break;
}
},
rules: [/^(?:\s+)/i,/^(?:\/\/.*)/i,/^(?:[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/])/i,/^(?:char\b)/i,/^(?:boolean\b)/i,/^(?:null\b)/i,/^(?:string\b)/i,/^(?:double\b)/i,/^(?:int\b)/i,/^(?:true\b)/i,/^(?:false\b)/i,/^(?:<=)/i,/^(?:>=)/i,/^(?:==)/i,/^(?:--)/i,/^(?:!=)/i,/^(?:\+\+)/i,/^(?:\?)/i,/^(?::)/i,/^(?:\/)/i,/^(?:%)/i,/^(?:\*)/i,/^(?:\^)/i,/^(?:=)/i,/^(?:<)/i,/^(?:>)/i,/^(?:-)/i,/^(?:\+)/i,/^(?:&&)/i,/^(?:!)/i,/^(?:\|\|)/i,/^(?:,)/i,/^(?:;)/i,/^(?:\{)/i,/^(?:\})/i,/^(?:\()/i,/^(?:\))/i,/^(?:\[)/i,/^(?:\])/i,/^(?:QUOTES\b)/i,/^(?:PIPE_QUOTES\b)/i,/^(?:DOUBLE_PIPES\b)/i,/^(?:BREAKLINE\b)/i,/^(?:CARRETURN\b)/i,/^(?:TABULATION\b)/i,/^(?:NULLCHAR\b)/i,/^(?:"[^\"]*")/i,/^(?:'[^\']?')/i,/^(?:[0-9]*\.[0-9]+\b)/i,/^(?:[0-9]+\b)/i,/^(?:([a-zA-Z])[a-zA-Z0-9_]*)/i,/^(?:$)/i,/^(?:.)/i],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
return parser;
});