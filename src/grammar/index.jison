%{
    // TOOLS
    const symbols = require('../compiler/lexical/symbols/index').default
    const errors = require('../compiler/lexical/error/index').default
    const Operator = require('../compiler/utils/types').Operator
    const DataType = require('../compiler/utils/types').default
    const getToken = require('../compiler/utils/tools').default

    // INSTRUCCIONES
    const IncrementalAssignment = require('../compiler/instruction/assignment/incremental/index').default
    const ExpAssignment = require('../compiler/instruction/assignment/expression/index').default
    const Declaration = require('../compiler/instruction/assignment/declaration/index').default
    const ReturnValue = require('../compiler/instruction/control/return/index').default
    const Expression = require('../compiler/instruction/expression/index').default
    const Switch = require('../compiler/instruction/control/switch/index').default
    const Condition = require('../compiler/instruction/control/index').default
    const Value = require('../compiler/instruction/value/index').default
    
    // FUNCIONES NATIVAS
    const Print = require('../compiler/instruction/functions/builtin/print/index').default

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

'else'                      return addToken(yylloc, 'elseRw')
'if'                        return addToken(yylloc, 'ifRw')

'default'                   return addToken(yylloc, 'defaultRw')
'switch'                    return addToken(yylloc, 'switchRw')
'break'                     return addToken(yylloc, 'breakRw')
'case'                      return addToken(yylloc, 'caseRw')

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
%left 'plus' 'minus'
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
    } | METHODS semicolom {
        $$ = $1;
    } | CONTROLSEQ {
        $$ = $1;
    } | SWITCHSEQ {
        $$ = $1;
    } | LOOPESCAPE {
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
        $$ = new Value(getToken(@1), { value: $1, type: DataType.DOUBLE })
    } | text {
        $$ = new Value(getToken(@1), { value: $1, type: DataType.STRING })
    } | id {
        $$ = new Value(getToken(@1), { value: $1, type: DataType.ID })
    } | integer {
        $$ = new Value(getToken(@1), { value: $1, type: DataType.INTEGER })
    } | character {
        $$ = new Value(getToken(@1), { value: $1, type: DataType.CHARACTER })
    } | trBool {
        $$ = new Value(getToken(@1), { value: $1, type: DataType.BOOLEAN })
    } | flBool {
        $$ = new Value(getToken(@1), { value: $1, type: DataType.BOOLEAN })
    } | nullType {
        $$ = new Value(getToken(@1), { value: $1, type: DataType.NULL })
    };
    
/*. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .*/
/* BUILT-IN FUNCTIONS */
METHODS : PRINT {
        $$ = $1;
    } | PRINTLN {
        $$ = $1;
    };

PRINT : printRw openParenthesis EXPLIST closeParenthesis {
        $$ = new Print(getToken(@1), { params: $3, breakLine: false });
    };

PRINTLN : printLnRw openParenthesis EXPLIST closeParenthesis {
        $$ = new Print(getToken(@1), { params: $3, breakLine: true });
    };

/*. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .*/
/* SENTENCIAS DE CONTROL */
CONTROLSEQ : ifRw openParenthesis EXPRESSIONS closeParenthesis BLOCKCONTENT {
        $$ = new Condition(getToken(@1), { 
            valid: { exp: $3, body: $5 }
        })
    } | ifRw openParenthesis EXPRESSIONS closeParenthesis BLOCKCONTENT
    elseRw BLOCKCONTENT {
        $$ = new Condition(getToken(@1), { 
            valid: { exp: $3, body: $5 },
            inValid: { exp: $3, body: $7 }
        })
    } | ifRw openParenthesis EXPRESSIONS closeParenthesis BLOCKCONTENT
    CONTROLSEQELIFS {
        $$ = new Condition(getToken(@1), { 
            valid: { exp: $3, body: $5 },
            fallback: $6
        })
    } | ifRw openParenthesis EXPRESSIONS closeParenthesis BLOCKCONTENT
    CONTROLSEQELIFS elseRw BLOCKCONTENT {
        $$ = new Condition(getToken(@1), { 
            inValid: { exp: $3, body: $8 },
            valid: { exp: $3, body: $5 },
            fallback: $6
        })
    };

CONTROLSEQELIFS : CONTROLSEQELIFS CONTROLSEQELIF {
        $$ = $1;
        $$.push($2);
    } | CONTROLSEQELIF {
        $$ = [$1];
    };

CONTROLSEQELIF : elseRw ifRw 
    openParenthesis EXPRESSIONS closeParenthesis BLOCKCONTENT {
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
LOOPESCAPE : breakRw semicolom {
        $$ = new ReturnValue(getToken(@1), { type: 'break' })
    }
    | continueRw semicolom {
        $$ = new ReturnValue(getToken(@1), { type: 'continue' })
    }
    | returnRw EXPRESSIONS semicolom {
        $$ = new ReturnValue(getToken(@1), { content: $2, type: 'return'  });
    };