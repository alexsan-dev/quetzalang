%{
    const symbols = require('../compiler/lexical/symbols/index').default
    const errors = require('../compiler/lexical/error/index').default
    const DataType = require('../compiler/utils/types').default
		const getToken = require('../compiler/utils/tools').default

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
\"[^\"]*\"				    			{
															yytext = yytext.substr(1,yyleng-2);
															return addToken(yylloc, 'text');
														}
\'[^\']?\'                  {
															yytext = yytext.substr(1,yyleng-2);
															return addToken(yylloc, 'character');
														}
[0-9]*"."[0-9]+\b           return addToken(yylloc, 'decimal')
[0-9]+\b				    				return addToken(yylloc, 'integer')
([a-zA-Z])[a-zA-Z0-9_]*	    return addToken(yylloc, 'id')

<<EOF>>				        			return 'EOF'
.					        					{
															errors.push({
                                type: 'Lexical',
                                token: {
																	line: yylloc.first_line,
																	col: yylloc.fist_column
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
%left 'minor' 'lessOrEquals' 'major' 'moreOrEquals' 'equalsEquals' 'nonEquals'
%left 'plus' 'minus'
%left 'times' 'division' 'module' 'power'
%left 'and' 'or'
%right 'not'

%nonassoc 'comma' 'openParenthesis' 'closeParenthesis'

%start START

%%
/*. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .*/
/* INICIO */
START : TYPE EOF {
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
