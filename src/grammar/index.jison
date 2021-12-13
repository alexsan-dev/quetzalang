%{
    // TOOLS
    const symbols = require('../compiler/lexical/symbols').default
    const Operator = require('../compiler/utils/types').Operator
    const errors = require('../compiler/lexical/error').default
    const DataType = require('../compiler/utils/types').default
    const getToken = require('../compiler/utils/tools').default

    // INSTRUCCIONES
    const IncrementalAssignment = require('../compiler/instruction/assignment/incremental').default
    const ExpAssignment = require('../compiler/instruction/assignment/expression').default
    const Declaration = require('../compiler/instruction/assignment/declaration').default
    const FunctionCall = require('../compiler/instruction/functions/call').default
    const ReturnValue = require('../compiler/instruction/control/return').default
    const FunctionBlock = require('../compiler/instruction/functions').default
    const ForInLoop = require('../compiler/instruction/cycle/forIn').default
    const Expression = require('../compiler/instruction/expression').default
    const Switch = require('../compiler/instruction/control/switch').default
    const ForLoop = require('../compiler/instruction/cycle/forLoop').default
    const CycleControl = require('../compiler/instruction/cycle').default
    const Condition = require('../compiler/instruction/control').default
    
    // FUNCIONES NATIVAS
    const Evaluate = require('../compiler/instruction/functions/builtin/evaluate').default
    const Print = require('../compiler/instruction/functions/builtin/print').default
    const Log10 = require('../compiler/instruction/functions/builtin/log10').default
    const Sqrt = require('../compiler/instruction/functions/builtin/sqrt').default
    const Cos = require('../compiler/instruction/functions/builtin/cos').default
    const Pow = require('../compiler/instruction/functions/builtin/pow').default
    const Sin = require('../compiler/instruction/functions/builtin/sin').default
    const Tan = require('../compiler/instruction/functions/builtin/tan').default

    // VALORES PRIMITIVOS
    const BooleanValue = require("../compiler/instruction/value/boolean").default
    const CharValue = require("../compiler/instruction/value/character").default
    const StringValue = require("../compiler/instruction/value/string").default
    const DoubleValue = require("../compiler/instruction/value/double").default
    const IntValue = require("../compiler/instruction/value/int").default
    const IdValue = require("../compiler/instruction/value/id").default

    // AGREGAR TOKEN
    const addToken = (yylloc, name) => {
        symbols.push({ ...getToken(yylloc), name })
        return name
    }
%}

%lex
%options case-insensitive

%%

\s+                                   /* IGNORE */
"//".*                                /* IGNORE */
[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/]   /* IGNORE */

/*. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .*/
/* TIPOS DE DATOS */
"char"                      return addToken(yylloc, 'charType')
"boolean"                   return addToken(yylloc, 'boolType')
"null"                      return addToken(yylloc, 'nullType')
"string"                    return addToken(yylloc, 'strType')
"double"                    return addToken(yylloc, 'dblType')
"int"                       return addToken(yylloc, 'intType')
"true"                      return addToken(yylloc, 'trBool')
"false"                     return addToken(yylloc, 'flBool')
"void"                      return addToken(yylloc, 'voidType')

/*. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .*/
/* OPERADORES */
"<="                        return addToken(yylloc, 'lessOrEquals')
">="                        return addToken(yylloc, 'moreOrEquals')
"=="                        return addToken(yylloc, 'equalsEquals')
"--"                        return addToken(yylloc, 'minusMinus')
"!="                        return addToken(yylloc, 'nonEquals')
"++"                        return addToken(yylloc, 'plusPlus')

"?"                         return addToken(yylloc, 'questionMark')
":"                         return addToken(yylloc, 'colom')

"/"                         return addToken(yylloc, 'division')
"%"                         return addToken(yylloc, 'module')
"*"                         return addToken(yylloc, 'times')
"^"                         return addToken(yylloc, 'power')

"="                         return addToken(yylloc, 'equals')
"<"                         return addToken(yylloc, 'minor')
">"                         return addToken(yylloc, 'major')

"-"                         return addToken(yylloc, 'minus')
"+"                         return addToken(yylloc, 'plus')

"&&"                        return addToken(yylloc, 'and')
"!"                         return addToken(yylloc, 'not')
"||"                        return addToken(yylloc, 'or')

"&"                         return addToken(yylloc, 'concat')

/*. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .*/
/* SIMBOLOS */
","                         return addToken(yylloc, 'comma')
";"                         return addToken(yylloc, 'semicolom')
"{"                         return addToken(yylloc, 'openBracket')
"}"                         return addToken(yylloc, 'closeBracket')
"("                         return addToken(yylloc, 'openParenthesis')
")"                         return addToken(yylloc, 'closeParenthesis')
"["                         return addToken(yylloc, 'openSquareBracket')
"]"                         return addToken(yylloc, 'closeSquareBracket')

/*. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .*/
/* PALABRAS RESERVADAS */
'print'                     return addToken(yylloc, 'printRw')
'printLn'                   return addToken(yylloc, 'printLnRw')
'eval'                      return addToken(yylloc, 'evalRw')
'cos'                       return addToken(yylloc, 'cosRw')
'log10'                     return addToken(yylloc, 'log10Rw')
'pow'                       return addToken(yylloc, 'powRw')
'sin'                       return addToken(yylloc, 'sinRw')
'sqrt'                      return addToken(yylloc, 'sqrtRw')
'tan'                       return addToken(yylloc, 'tanRw')

'else'                      return addToken(yylloc, 'elseRw')
'if'                        return addToken(yylloc, 'ifRw')

'default'                   return addToken(yylloc, 'defaultRw')
'switch'                    return addToken(yylloc, 'switchRw')
'break'                     return addToken(yylloc, 'breakRw')
'case'                      return addToken(yylloc, 'caseRw')

'while'                     return addToken(yylloc, 'whileRw')
'for'                       return addToken(yylloc, 'forRw')
'do'                        return addToken(yylloc, 'doRw')
'in'                        return addToken(yylloc, 'inRw')

'continue'                  return addToken(yylloc, 'continueRw')
'return'                    return addToken(yylloc, 'returnRw')

/*. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .*/
/* SECUENCIAS DE ESCAPE */
QUOTES "\""
PIPE_QUOTES "\\\""
DOUBLE_PIPES "\\\\"
BREAKLINE "\\n"
CARRETURN "\\r"
TABULATION "\\t"
NULLCHAR "\\0"

/*. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .*/
/* REGEX */
\"[^\"]*\"				    {
                                yytext = yytext.substr(1,yyleng-2);
                                return addToken(yylloc, 'text');
                            }
\'[^\']?\'                  {
                                yytext = yytext.substr(1,yyleng-2);
                                return addToken(yylloc, 'character');
						    }

[0-9]*"."[0-9]+\b           return addToken(yylloc, 'decimal')
[0-9]+\b				    return addToken(yylloc, 'integer')
([a-zA-Z])[a-zA-Z0-9_]*	    return addToken(yylloc, 'id')
<<EOF>>				        return 'EOF'

.                           {
                                errors.push({
                                    type: 'Lexical',
                                    token: {
                                        line: yylloc.first_line,
                                        col: yylloc.first_column + 1
                                    },
                                    msg: `${yytext} no reconocido`
                                });
                            }

/lex

/*. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .*/
/* GLOBAL */
%{
%}

/*. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .*/
/* PRESEDENCIA */
%left 'questionMark'
%left 'and' 'or'
%left 'minor' 'lessOrEquals' 'major' 'moreOrEquals' 'equalsEquals' 'nonEquals'
%left 'plus' 'concat' 'minus'
%left 'times' 'division' 'module' 'power' 
%right 'not'
%left UMIN
%left UNOT
%nonassoc 'comma' 'openParenthesis' 'closeParenthesis'

%start START

%%
/*. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .*/
/* INICIO */
START : INSTRUCTIONS EOF {
        return $1;
    };

/*. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .*/
/* GLOBALES */
TYPE :
    intType {
        $$ = DataType.INTEGER;
    } | dblType  {
        $$ = DataType.DOUBLE;
    } | boolType {
        $$ = DataType.BOOLEAN;
    } | charType {
        $$ = DataType.CHARACTER;
    } | strType  {
        $$ = DataType.STRING;
    };

/*. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .*/
/* INSTRUCCIONES */
BLOCKCONTENT : openBracket INSTRUCTIONS closeBracket {
        $$ = $2;
    };

INLINEBLOCKCONTENT : BLOCKCONTENT {
        $$ = $1;
    } | INLINEINSTRUCTION {
        $$ = [$1];
    };

INSTRUCTIONS : INSTRUCTIONS INSTRUCTION {
        $$ = $1;
        $$.push($2);
    } | INSTRUCTION {
        $$ = [$1];
    };

INSTRUCTION : DECLARATION semicolom {
        $$ = $1;
    } | ASSIGNMENT semicolom {
        $$ = $1;
    } | METHOD semicolom {
        $$ = $1;
    } | FUNCTIONCALL semicolom {
        $$ = $1;
    } | CONTROLSEQ {
        $$ = $1;
    } | SWITCHSEQ {
        $$ = $1;
    } | LOOPESCAPE {
        $$ = $1;
    } | FUNCTION {
        $$ = $1;
    } | LOOPSEQ {
        $$ = $1;    
    };

INLINEINSTRUCTION : ASSIGNMENT semicolom {
        $$ = $1;
    } | FUNCTIONCALL semicolom {
        $$ = $1;
    } | METHOD semicolom {
        $$ = $1;
    } | SWITCHSEQ {
        $$ = $1;
    } | LOOPESCAPE {
        $$ = $1;
    } | LOOPSEQ {
        $$ = $1;    
    };

/*. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .*/
/* DECLARACION DE VARIABLES */
DECLARATION : TYPE ASSIGNMENTS {
        $$ = new Declaration(getToken(@1), { type: $1, assignments: $2 });
    };

ASSIGNMENTS : ASSIGNMENTS comma ASSIGNMENT {
        $$ = $1;
        $$.push($3);
    } | ASSIGNMENT {
        $$ = [$1];
    };

ASSIGNMENT : id {
        $$ = new ExpAssignment(getToken(@1), { id: $1 });
    } | id equals EXPRESSIONS {
        $$ = new ExpAssignment(getToken(@1), { id: $1, exp: $3 });  
    } | id equals TERNARY {
        $$ = new ExpAssignment(getToken(@1), { id: $1, exp: $3 });
    } | INCREMENTALASSIGNMENT {
        $$ = $1;
    };

INCREMENTALASSIGNMENT : id plusPlus {
        $$ = new IncrementalAssignment(getToken(@1), { 
            id: $1, operator: Operator.PLUSPLUS })
    } | id minusMinus {
        $$ = new IncrementalAssignment(getToken(@1), { 
            id: $1, operator: Operator.MINUSMINUS })
    };

/*. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .*/
/* TODAS LAS EXPRESIONES VALIDAS */
EXPRESSIONS : EXPRESSIONS plus EXPRESSIONS {
        $$ = new Expression(getToken(@1), {
            left: $1, right: $3, operator: Operator.PLUS });
    } | EXPRESSIONS equalsEquals EXPRESSIONS {
        $$ = new Expression(getToken(@1), {
            left: $1, right: $3, operator: Operator.EQUALSEQUALS });
    } | EXPRESSIONS moreOrEquals EXPRESSIONS {
        $$ = new Expression(getToken(@1), {
            left: $1, right: $3, operator: Operator.MOREOREQUALS });
    } | EXPRESSIONS lessOrEquals EXPRESSIONS {
        $$ = new Expression(getToken(@1), {
            left: $1, right: $3, operator: Operator.LESSOREQUALS });
    } | EXPRESSIONS nonEquals EXPRESSIONS {
        $$ = new Expression(getToken(@1), {
            left: $1, right: $3, operator: Operator.NONEQUALS });
    } | EXPRESSIONS division EXPRESSIONS {
        $$ = new Expression(getToken(@1), {
            left: $1, right: $3, operator: Operator.DIVISION });
    } | EXPRESSIONS module EXPRESSIONS {
        $$ = new Expression(getToken(@1), {
            left: $1, right: $3, operator: Operator.MODULE });
    } | EXPRESSIONS power EXPRESSIONS {
        $$ = new Expression(getToken(@1), {
            left: $1, right: $3, operator: Operator.POWER });
    } | EXPRESSIONS concat EXPRESSIONS {
        $$ = new Expression(getToken(@1), {
            left: $1, right: $3, operator: Operator.CONCAT });
    } | EXPRESSIONS times EXPRESSIONS {
        $$ = new Expression(getToken(@1), {
            left: $1, right: $3, operator: Operator.TIMES });
    } | EXPRESSIONS minus EXPRESSIONS {
        $$ = new Expression(getToken(@1), {
            left: $1, right: $3, operator: Operator.MINUS });
    } | EXPRESSIONS minor EXPRESSIONS {
        $$ = new Expression(getToken(@1), {
            left: $1, right: $3, operator: Operator.MINOR });
    } | EXPRESSIONS major EXPRESSIONS {
        $$ = new Expression(getToken(@1), {
            left: $1, right: $3, operator: Operator.MAJOR });
    } | EXPRESSIONS and EXPRESSIONS {
        $$ = new Expression(getToken(@1), {
            left: $1, right: $3, operator: Operator.AND });
    } | EXPRESSIONS or EXPRESSIONS {
        $$ = new Expression(getToken(@1), {
            left: $1, right: $3, operator:Operator.OR });
    } | not EXPRESSIONS {
        $$ = new Expression(getToken(@1), {
            left: $2, operator: Operator.NOT });
    } | minus EXPRESSIONS {
        $$ = new Expression(getToken(@1), {
            left: $2, operator: Operator.NEGATION });
    } | openParenthesis EXPRESSIONS closeParenthesis {
        $$ = new Expression(getToken(@1), { left: $2 });
    } | VARVALUE {
        $$ = new Expression(getToken(@1), { value: $1 });
    } | openParenthesis TERNARY closeParenthesis {
        $$ = $2;
    };

TERNARY : EXPRESSIONS questionMark EXPRESSIONS colom EXPRESSIONS {
        $$ = new Expression(getToken(@1), {
            left: $3, right: $5, condition: $1, operator: Operator.TERNARY })
    };

EXPLIST : EXPLIST comma EXPRESSIONS {
        $$ = $1;
        $$.push($3);
    } | EXPRESSIONS {
        $$ = [$1];
    };

/*. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .*/
/* VALORES DE VARIABLES */
VARVALUE : decimal {
        $$ = new DoubleValue(getToken(@1), $1)
    } | text {
        $$ = new StringValue(getToken(@1), $1)
    } | id {
        $$ = new IdValue(getToken(@1), $1)
    } | integer {
        $$ = new IntValue(getToken(@1), $1)
    } | character {
        $$ = new CharValue(getToken(@1), $1)
    } | trBool {
        $$ = new BooleanValue(getToken(@1), $1)
    } | flBool {
        $$ = new BooleanValue(getToken(@1), $1)
    } | nullType {
        $$ = null
    } | FUNCTIONCALL {
        $$ = $1;
    } | METHOD {
        $$ = $1;
    };

/*. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .*/
/* METODOS */
PARAMSLIST : PARAMSLIST comma PARAMVAR {
        $$ = $1;
        $$.push($3);
    } | PARAMVAR {
        $$ = [$1];
    };

PARAMVAR : TYPE id {
        $$ = { type: $1, id: $2 };
    } | TYPE id openSquareBracket closeSquareBracket {
        $$ = { type: DataType.ARRAY, id: $2, generic: $1 };
    };

FUNCTIONPARAMS : openParenthesis PARAMSLIST closeParenthesis {
        $$ = $2;
    } | openParenthesis closeParenthesis {
        $$ = [];
    }; 

FUNCTION : TYPE id FUNCTIONPARAMS BLOCKCONTENT {
        $$ = new FunctionBlock(getToken(@1), { 
            id: $2, type: $1, params: $3, content: $4 });
    } | TYPE id openSquareBracket closeSquareBracket FUNCTIONPARAMS BLOCKCONTENT {
        $$ = new FunctionBlock(getToken(@1), { 
            id: $2, type: DataType.ARRAY, generic: $1 , params: $5, content: $6 });
    } | voidType id FUNCTIONPARAMS BLOCKCONTENT {
        $$ = new FunctionBlock(getToken(@1), { 
            id: $2, type: DataType.VOID, params: $3, content: $4 });
    };

FUNCTIONCALL : id openParenthesis EXPLIST closeParenthesis {
        $$ = new FunctionCall(getToken(@1), { params: $3, id: $1 })
    } | id openParenthesis closeParenthesis {
        $$ = new FunctionCall(getToken(@1), { params: [], id: $1 })
    };
    
/*. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .*/
/* BUILT-IN FUNCTIONS */
METHOD : PRINT {
        $$ = $1;
    } | PRINTLN {
        $$ = $1;
    } | EVAL {
        $$ = $1;
    } | COS {
        $$ = $1;
    } | LOG {
        $$ = $1;
    } | POW {
        $$ = $1;
    } | SIN {
        $$ = $1;
    } | SQRT {
        $$ = $1;
    } | TAN {
        $$ = $1;
    };

PRINT : printRw openParenthesis EXPLIST closeParenthesis {
        $$ = new Print(getToken(@1), { params: $3, breakLine: false });
    };

PRINTLN : printLnRw openParenthesis EXPLIST closeParenthesis {
        $$ = new Print(getToken(@1), { params: $3, breakLine: true });
    };

EVAL : evalRw openParenthesis EXPRESSIONS closeParenthesis {
        $$ = new Evaluate(getToken(@1), { params: [$3] });
    };

COS : cosRw openParenthesis EXPRESSIONS closeParenthesis {
        $$ = new Cos(getToken(@1), { params: [$3] });
    };

LOG : log10Rw openParenthesis EXPRESSIONS closeParenthesis {
        $$ = new Log10(getToken(@1), { params: [$3] });
    };

POW : powRw openParenthesis EXPLIST closeParenthesis {
        $$ = new Pow(getToken(@1), { params: $3 });
    };

SIN : sinRw openParenthesis EXPRESSIONS closeParenthesis {
        $$ = new Sin(getToken(@1), { params: [$3] });
    };

SQRT : sqrtRw openParenthesis EXPRESSIONS closeParenthesis {
        $$ = new Sqrt(getToken(@1), { params: [$3] });
    };

TAN : tanRw openParenthesis EXPRESSIONS closeParenthesis {
        $$ = new Tan(getToken(@1), { params: [$3] });
    };

/*. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .*/
/* SENTENCIAS DE CONTROL */
CONTROLSEQ : IFSEQUENCE {
        $$ = new Condition(getToken(@1), { 
            valid: { exp: $1.exp, body: $1.body }
        })
    } | IFSEQUENCE ELSESEQUENCE {
        $$ = new Condition(getToken(@1), { 
            valid: { exp: $1.exp, body: $1.body },
            inValid: { exp: $1.exp, body: $2.body }
        })
    } | IFSEQUENCE CONTROLSEQELIFS {
        $$ = new Condition(getToken(@1), { 
            valid: { exp: $1.exp, body: $1.body },
            fallback: $2
        })
    } | IFSEQUENCE CONTROLSEQELIFS ELSESEQUENCE {
        $$ = new Condition(getToken(@1), { 
            inValid: { exp: $1.exp, body: $3.body },
            valid: { exp: $1.exp, body: $1.body },
            fallback: $2
        })
    };

IFSEQUENCE : ifRw openParenthesis EXPRESSIONS closeParenthesis INLINEBLOCKCONTENT {
        $$ = { exp: $3, body: $5 }
    };

ELSESEQUENCE : elseRw INLINEBLOCKCONTENT {
        $$ = { exp: $1, body: $2 }
    };

CONTROLSEQELIFS : CONTROLSEQELIFS CONTROLSEQELIF {
        $$ = $1;
        $$.push($2);
    } | CONTROLSEQELIF {
        $$ = [$1];
    };

CONTROLSEQELIF : elseRw ifRw 
    openParenthesis EXPRESSIONS closeParenthesis INLINEBLOCKCONTENT {
        $$ = { exp: $4, body: $6 };
    };

/*. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .*/
/* SWITCH */
SWITCHSEQ : switchRw openParenthesis EXPRESSIONS closeParenthesis
    openBracket SWITCHSEQCASES closeBracket {
        $$ = new Switch(getToken(@1), { value: $3, cases: $6 })
    } | switchRw openParenthesis EXPRESSIONS closeParenthesis
    openBracket SWITCHSEQCASES defaultRw colom INSTRUCTIONS closeBracket {
        $$ = new Switch(getToken(@1), { 
            value: $3, cases: $6, default: { body: $9 } })
    } | switchRw openParenthesis EXPRESSIONS closeParenthesis
    openBracket defaultRw colom INSTRUCTIONS closeBracket {
        $$ = new Switch(getToken(@1), { 
            value: $3, default: { body: $8 } })
    };

SWITCHSEQCASES : SWITCHSEQCASES SWITCHSEQCONTENT {
        $$ = $1;
        $$.push($2);
    } | SWITCHSEQCONTENT {
        $$ = [$1];
    };

SWITCHSEQCONTENT : caseRw EXPRESSIONS colom INSTRUCTIONS {
        $$ = { case: $2, body: $4 };
    };

/*. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .*/
/* CICLOS */
LOOPSEQ : WHILESEQ | DOWHILESEQ | FORINSEQ | FORSEQ;

WHILESEQ : whileRw openParenthesis EXPRESSIONS closeParenthesis INLINEBLOCKCONTENT {
        $$ = new CycleControl(getToken(@1), { 
            condition: $3, body: $5 
         })
    };

FORINSEQ : forRw id inRw VARVALUE INLINEBLOCKCONTENT {
        $$ = new ForInLoop(getToken(@1),  {
            iterVariable: $2, iterReference: $4, body: $5
        })
    };

DOWHILESEQ : doRw INLINEBLOCKCONTENT 
    whileRw openParenthesis EXPRESSIONS closeParenthesis semicolom {
        $$ = new CycleControl(getToken(@1), { 
            condition: $5, body: $2, isDoLoop: true
         })
    };

FORSEQ : forRw openParenthesis FORSEQPARAMS closeParenthesis INLINEBLOCKCONTENT {
        $$ = new ForLoop(getToken(@1), { ...$3, body: $5 })
    };

FORSEQPARAMS : DECLARATION semicolom EXPRESSIONS semicolom ASSIGNMENT {
        $$ = { withDeclarations: true, 
        assignments: [$1], condition: $3, modifiers: $5 }
    } | ASSIGNMENTS semicolom EXPRESSIONS semicolom ASSIGNMENT {
        $$ = { assignments: $1, condition: $3, modifiers: $5 }
    };

LOOPESCAPE : breakRw semicolom {
        $$ = new ReturnValue(getToken(@1), { type: 'Break' })
    } | continueRw semicolom {
        $$ = new ReturnValue(getToken(@1), { type: 'Continue' })
    } | returnRw EXPRESSIONS semicolom {
        $$ = new ReturnValue(getToken(@1), { content: $2, type: 'Return'  });
    };