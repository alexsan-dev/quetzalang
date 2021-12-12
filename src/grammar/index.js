

define(function(require){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,24],$V1=[1,25],$V2=[1,26],$V3=[1,27],$V4=[1,28],$V5=[1,13],$V6=[1,23],$V7=[1,29],$V8=[1,30],$V9=[1,31],$Va=[1,32],$Vb=[1,19],$Vc=[1,20],$Vd=[1,21],$Ve=[1,22],$Vf=[5,7,8,9,10,11,14,29,70,74,75,76,80,83,85,87,88,89,90],$Vg=[2,28],$Vh=[1,42],$Vi=[1,44],$Vj=[1,45],$Vk=[1,43],$Vl=[19,28],$Vm=[1,48],$Vn=[1,60],$Vo=[1,55],$Vp=[1,54],$Vq=[1,56],$Vr=[1,58],$Vs=[1,59],$Vt=[1,61],$Vu=[1,62],$Vv=[1,63],$Vw=[1,64],$Vx=[1,65],$Vy=[1,75],$Vz=[1,87],$VA=[5,7,8,9,10,11,14,29,70,74,75,76,80,81,83,85,87,88,89,90],$VB=[1,95],$VC=[1,96],$VD=[1,97],$VE=[1,98],$VF=[1,99],$VG=[1,100],$VH=[1,101],$VI=[1,102],$VJ=[1,103],$VK=[1,104],$VL=[1,105],$VM=[1,106],$VN=[1,107],$VO=[1,108],$VP=[1,109],$VQ=[19,28,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,53,55,56],$VR=[1,127],$VS=[1,129],$VT=[28,53],$VU=[19,28,36,37,38,39,40,44,46,47,48,49,50,53,55,56],$VV=[19,28,37,38,39,40,47,48,49,50,53,55,56],$VW=[19,28,49,50,53,55,56],$VX=[1,176],$VY=[14,85,87];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"START":3,"INSTRUCTIONS":4,"EOF":5,"TYPE":6,"intType":7,"dblType":8,"boolType":9,"charType":10,"strType":11,"BLOCKCONTENT":12,"openBracket":13,"closeBracket":14,"INLINEBLOCKCONTENT":15,"INLINEINSTRUCTION":16,"INSTRUCTION":17,"DECLARATION":18,"semicolom":19,"ASSIGNMENT":20,"METHOD":21,"FUNCTIONCALL":22,"CONTROLSEQ":23,"SWITCHSEQ":24,"LOOPESCAPE":25,"FUNCTION":26,"ASSIGNMENTS":27,"comma":28,"id":29,"equals":30,"EXPRESSIONS":31,"TERNARY":32,"INCREMENTALASSIGNMENT":33,"plusPlus":34,"minusMinus":35,"plus":36,"equalsEquals":37,"moreOrEquals":38,"lessOrEquals":39,"nonEquals":40,"division":41,"module":42,"power":43,"concat":44,"times":45,"minus":46,"minor":47,"major":48,"and":49,"or":50,"not":51,"openParenthesis":52,"closeParenthesis":53,"VARVALUE":54,"questionMark":55,"colom":56,"EXPLIST":57,"decimal":58,"text":59,"integer":60,"character":61,"trBool":62,"flBool":63,"nullType":64,"PARAMSLIST":65,"PARAMVAR":66,"openSquareBracket":67,"closeSquareBracket":68,"FUNCTIONPARAMS":69,"voidType":70,"PRINT":71,"PRINTLN":72,"EVAL":73,"printRw":74,"printLnRw":75,"evalRw":76,"IFSEQUENCE":77,"ELSESEQUENCE":78,"CONTROLSEQELIFS":79,"ifRw":80,"elseRw":81,"CONTROLSEQELIF":82,"switchRw":83,"SWITCHSEQCASES":84,"defaultRw":85,"SWITCHSEQCONTENT":86,"caseRw":87,"breakRw":88,"continueRw":89,"returnRw":90,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",7:"intType",8:"dblType",9:"boolType",10:"charType",11:"strType",13:"openBracket",14:"closeBracket",19:"semicolom",28:"comma",29:"id",30:"equals",34:"plusPlus",35:"minusMinus",36:"plus",37:"equalsEquals",38:"moreOrEquals",39:"lessOrEquals",40:"nonEquals",41:"division",42:"module",43:"power",44:"concat",45:"times",46:"minus",47:"minor",48:"major",49:"and",50:"or",51:"not",52:"openParenthesis",53:"closeParenthesis",55:"questionMark",56:"colom",58:"decimal",59:"text",60:"integer",61:"character",62:"trBool",63:"flBool",64:"nullType",67:"openSquareBracket",68:"closeSquareBracket",70:"voidType",74:"printRw",75:"printLnRw",76:"evalRw",80:"ifRw",81:"elseRw",83:"switchRw",85:"defaultRw",87:"caseRw",88:"breakRw",89:"continueRw",90:"returnRw"},
productions_: [0,[3,2],[6,1],[6,1],[6,1],[6,1],[6,1],[12,3],[15,1],[15,1],[4,2],[4,1],[17,2],[17,2],[17,2],[17,2],[17,1],[17,1],[17,1],[17,1],[16,2],[16,2],[16,2],[16,1],[16,1],[18,2],[27,3],[27,1],[20,1],[20,3],[20,3],[20,1],[33,2],[33,2],[31,3],[31,3],[31,3],[31,3],[31,3],[31,3],[31,3],[31,3],[31,3],[31,3],[31,3],[31,3],[31,3],[31,3],[31,3],[31,2],[31,2],[31,3],[31,1],[31,3],[32,5],[57,3],[57,1],[54,1],[54,1],[54,1],[54,1],[54,1],[54,1],[54,1],[54,1],[54,1],[65,3],[65,1],[66,2],[66,4],[69,3],[69,2],[26,4],[26,6],[26,4],[22,4],[22,3],[21,1],[21,1],[21,1],[71,4],[72,4],[73,4],[23,1],[23,2],[23,2],[23,3],[77,5],[78,2],[79,2],[79,1],[82,6],[24,7],[24,10],[24,9],[84,2],[84,1],[86,4],[25,2],[25,2],[25,3]],
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
case 7: case 12: case 13: case 14: case 15: case 20: case 21: case 22: case 53: case 70:

        this.$ = $$[$0-1];
    
break;
case 8: case 16: case 17: case 18: case 19: case 23: case 24: case 31: case 65: case 77: case 78: case 79:

        this.$ = $$[$0];
    
break;
case 9: case 11: case 27: case 56: case 67: case 90: case 96:

        this.$ = [$$[$0]];
    
break;
case 10: case 89: case 95:

        this.$ = $$[$0-1];
        this.$.push($$[$0]);
    
break;
case 25:

        this.$ = new Declaration(getToken(_$[$0-1]), { type: $$[$0-1], assignments: $$[$0] });
    
break;
case 26: case 55: case 66:

        this.$ = $$[$0-2];
        this.$.push($$[$0]);
    
break;
case 28:

        this.$ = new ExpAssignment(getToken(_$[$0]), { id: $$[$0] });
    
break;
case 29:

        this.$ = new ExpAssignment(getToken(_$[$0-2]), { id: $$[$0-2], exp: $$[$0] });  
    
break;
case 30:

        this.$ = new ExpAssignment(getToken(_$[$0-2]), { id: $$[$0-2], exp: $$[$0] });
    
break;
case 32:

        this.$ = new IncrementalAssignment(getToken(_$[$0-1]), { 
            id: $$[$0-1], operator: Operator.PLUSPLUS })
    
break;
case 33:

        this.$ = new IncrementalAssignment(getToken(_$[$0-1]), { 
            id: $$[$0-1], operator: Operator.MINUSMINUS })
    
break;
case 34:

        this.$ = new Expression(getToken(_$[$0-2]), {
            left: $$[$0-2], right: $$[$0], operator: Operator.PLUS });
    
break;
case 35:

        this.$ = new Expression(getToken(_$[$0-2]), {
            left: $$[$0-2], right: $$[$0], operator: Operator.EQUALSEQUALS });
    
break;
case 36:

        this.$ = new Expression(getToken(_$[$0-2]), {
            left: $$[$0-2], right: $$[$0], operator: Operator.MOREOREQUALS });
    
break;
case 37:

        this.$ = new Expression(getToken(_$[$0-2]), {
            left: $$[$0-2], right: $$[$0], operator: Operator.LESSOREQUALS });
    
break;
case 38:

        this.$ = new Expression(getToken(_$[$0-2]), {
            left: $$[$0-2], right: $$[$0], operator: Operator.NONEQUALS });
    
break;
case 39:

        this.$ = new Expression(getToken(_$[$0-2]), {
            left: $$[$0-2], right: $$[$0], operator: Operator.DIVISION });
    
break;
case 40:

        this.$ = new Expression(getToken(_$[$0-2]), {
            left: $$[$0-2], right: $$[$0], operator: Operator.MODULE });
    
break;
case 41:

        this.$ = new Expression(getToken(_$[$0-2]), {
            left: $$[$0-2], right: $$[$0], operator: Operator.POWER });
    
break;
case 42:

        this.$ = new Expression(getToken(_$[$0-2]), {
            left: $$[$0-2], right: $$[$0], operator: Operator.CONCAT });
    
break;
case 43:

        this.$ = new Expression(getToken(_$[$0-2]), {
            left: $$[$0-2], right: $$[$0], operator: Operator.TIMES });
    
break;
case 44:

        this.$ = new Expression(getToken(_$[$0-2]), {
            left: $$[$0-2], right: $$[$0], operator: Operator.MINUS });
    
break;
case 45:

        this.$ = new Expression(getToken(_$[$0-2]), {
            left: $$[$0-2], right: $$[$0], operator: Operator.MINOR });
    
break;
case 46:

        this.$ = new Expression(getToken(_$[$0-2]), {
            left: $$[$0-2], right: $$[$0], operator: Operator.MAJOR });
    
break;
case 47:

        this.$ = new Expression(getToken(_$[$0-2]), {
            left: $$[$0-2], right: $$[$0], operator: Operator.AND });
    
break;
case 48:

        this.$ = new Expression(getToken(_$[$0-2]), {
            left: $$[$0-2], right: $$[$0], operator:Operator.OR });
    
break;
case 49:

        this.$ = new Expression(getToken(_$[$0-1]), {
            left: $$[$0], operator: Operator.NOT });
    
break;
case 50:

        this.$ = new Expression(getToken(_$[$0-1]), {
            left: $$[$0], operator: Operator.NEGATION });
    
break;
case 51:

        this.$ = new Expression(getToken(_$[$0-2]), { left: $$[$0-1] });
    
break;
case 52:

        this.$ = new Expression(getToken(_$[$0]), { value: $$[$0] });
    
break;
case 54:

        this.$ = new Expression(getToken(_$[$0-4]), {
            left: $$[$0-2], right: $$[$0], condition: $$[$0-4], operator: Operator.TERNARY })
    
break;
case 57:

        this.$ = new Value(getToken(_$[$0]), { value: $$[$0], type: DataType.DOUBLE })
    
break;
case 58:

        this.$ = new Value(getToken(_$[$0]), { value: $$[$0], type: DataType.STRING })
    
break;
case 59:

        this.$ = new Value(getToken(_$[$0]), { value: $$[$0], type: DataType.ID })
    
break;
case 60:

        this.$ = new Value(getToken(_$[$0]), { value: $$[$0], type: DataType.INTEGER })
    
break;
case 61:

        this.$ = new Value(getToken(_$[$0]), { value: $$[$0], type: DataType.CHARACTER })
    
break;
case 62: case 63:

        this.$ = new Value(getToken(_$[$0]), { value: $$[$0], type: DataType.BOOLEAN })
    
break;
case 64:

        this.$ = new Value(getToken(_$[$0]), { value: $$[$0], type: DataType.NULL })
    
break;
case 68:

        this.$ = { type: $$[$0-1], id: $$[$0] };
    
break;
case 69:

        this.$ = { type: DataType.ARRAY, id: $$[$0-2], generic: $$[$0-3] };
    
break;
case 71:

        this.$ = [];
    
break;
case 72:

        this.$ = new FunctionBlock(getToken(_$[$0-3]), { 
            id: $$[$0-2], type: $$[$0-3], params: $$[$0-1], content: $$[$0] });
    
break;
case 73:

        this.$ = new FunctionBlock(getToken(_$[$0-5]), { 
            id: $$[$0-4], type: DataType.ARRAY, generic: $$[$0-5] , params: $$[$0-1], content: $$[$0] });
    
break;
case 74:

        this.$ = new FunctionBlock(getToken(_$[$0-3]), { 
            id: $$[$0-2], type: DataType.VOID, params: $$[$0-1], content: $$[$0] });
    
break;
case 75:

        this.$ = new FunctionCall(getToken(_$[$0-3]), { params: $$[$0-1], id: $$[$0-3] })
    
break;
case 76:

        this.$ = new FunctionCall(getToken(_$[$0-2]), { params: [], id: $$[$0-2] })
    
break;
case 80:

        this.$ = new Print(getToken(_$[$0-3]), { params: $$[$0-1], breakLine: false });
    
break;
case 81:

        this.$ = new Print(getToken(_$[$0-3]), { params: $$[$0-1], breakLine: true });
    
break;
case 82:

        this.$ = new Evaluate(getToken(_$[$0-3]), { params: [$$[$0-1]] });
    
break;
case 83:

        this.$ = new Condition(getToken(_$[$0]), { 
            valid: { exp: $$[$0].exp, body: $$[$0].body }
        })
    
break;
case 84:

        this.$ = new Condition(getToken(_$[$0-1]), { 
            valid: { exp: $$[$0-1].exp, body: $$[$0-1].body },
            inValid: { exp: $$[$0-1].exp, body: $$[$0].body }
        })
    
break;
case 85:

        this.$ = new Condition(getToken(_$[$0-1]), { 
            valid: { exp: $$[$0-1].exp, body: $$[$0-1].body },
            fallback: $$[$0]
        })
    
break;
case 86:

        this.$ = new Condition(getToken(_$[$0-2]), { 
            inValid: { exp: $$[$0-2].exp, body: $$[$0].body },
            valid: { exp: $$[$0-2].exp, body: $$[$0-2].body },
            fallback: $$[$0-1]
        })
    
break;
case 87:

        this.$ = { exp: $$[$0-2], body: $$[$0] }
    
break;
case 88:

        this.$ = { exp: $$[$0-1], body: $$[$0] }
    
break;
case 91:

        this.$ = { exp: $$[$0-2], body: $$[$0] };
    
break;
case 92:

        this.$ = new Switch(getToken(_$[$0-6]), { value: $$[$0-4], cases: $$[$0-1] })
    
break;
case 93:

        this.$ = new Switch(getToken(_$[$0-9]), { 
            value: $$[$0-7], cases: $$[$0-4], default: { body: $$[$0-1] } })
    
break;
case 94:

        this.$ = new Switch(getToken(_$[$0-8]), { 
            value: $$[$0-6], default: { body: $$[$0-1] } })
    
break;
case 97:

        this.$ = { case: $$[$0-2], body: $$[$0] };
    
break;
case 98:

        this.$ = new ReturnValue(getToken(_$[$0-1]), { type: 'Break' })
    
break;
case 99:

        this.$ = new ReturnValue(getToken(_$[$0-1]), { type: 'Continue' })
    
break;
case 100:

        this.$ = new ReturnValue(getToken(_$[$0-2]), { content: $$[$0-1], type: 'Return'  });
    
break;
}
},
table: [{3:1,4:2,6:12,7:$V0,8:$V1,9:$V2,10:$V3,11:$V4,17:3,18:4,20:5,21:6,22:7,23:8,24:9,25:10,26:11,29:$V5,33:14,70:$V6,71:15,72:16,73:17,74:$V7,75:$V8,76:$V9,77:18,80:$Va,83:$Vb,88:$Vc,89:$Vd,90:$Ve},{1:[3]},{5:[1,33],6:12,7:$V0,8:$V1,9:$V2,10:$V3,11:$V4,17:34,18:4,20:5,21:6,22:7,23:8,24:9,25:10,26:11,29:$V5,33:14,70:$V6,71:15,72:16,73:17,74:$V7,75:$V8,76:$V9,77:18,80:$Va,83:$Vb,88:$Vc,89:$Vd,90:$Ve},o($Vf,[2,11]),{19:[1,35]},{19:[1,36]},{19:[1,37]},{19:[1,38]},o($Vf,[2,16]),o($Vf,[2,17]),o($Vf,[2,18]),o($Vf,[2,19]),{20:41,27:39,29:[1,40],33:14},{19:$Vg,30:$Vh,34:$Vi,35:$Vj,52:$Vk},o($Vl,[2,31]),{19:[2,77]},{19:[2,78]},{19:[2,79]},o($Vf,[2,83],{78:46,79:47,82:49,81:$Vm}),{52:[1,50]},{19:[1,51]},{19:[1,52]},{22:66,29:$Vn,31:53,46:$Vo,51:$Vp,52:$Vq,54:57,58:$Vr,59:$Vs,60:$Vt,61:$Vu,62:$Vv,63:$Vw,64:$Vx},{29:[1,67]},{29:[2,2]},{29:[2,3]},{29:[2,4]},{29:[2,5]},{29:[2,6]},{52:[1,68]},{52:[1,69]},{52:[1,70]},{52:[1,71]},{1:[2,1]},o($Vf,[2,10]),o($Vf,[2,12]),o($Vf,[2,13]),o($Vf,[2,14]),o($Vf,[2,15]),{19:[2,25],28:[1,72]},o($Vl,$Vg,{69:73,30:$Vh,34:$Vi,35:$Vj,52:$Vy,67:[1,74]}),o($Vl,[2,27]),{22:66,29:$Vn,31:76,32:77,46:$Vo,51:$Vp,52:$Vq,54:57,58:$Vr,59:$Vs,60:$Vt,61:$Vu,62:$Vv,63:$Vw,64:$Vx},{22:66,29:$Vn,31:80,46:$Vo,51:$Vp,52:$Vq,53:[1,79],54:57,57:78,58:$Vr,59:$Vs,60:$Vt,61:$Vu,62:$Vv,63:$Vw,64:$Vx},o($Vl,[2,32]),o($Vl,[2,33]),o($Vf,[2,84]),o($Vf,[2,85],{78:81,82:82,81:$Vm}),{12:85,13:$Vz,15:83,16:86,20:88,21:90,22:89,24:91,25:92,29:$V5,33:14,71:15,72:16,73:17,74:$V7,75:$V8,76:$V9,80:[1,84],83:$Vb,88:$Vc,89:$Vd,90:$Ve},o($VA,[2,90]),{22:66,29:$Vn,31:93,46:$Vo,51:$Vp,52:$Vq,54:57,58:$Vr,59:$Vs,60:$Vt,61:$Vu,62:$Vv,63:$Vw,64:$Vx},o($VA,[2,98]),o($VA,[2,99]),{19:[1,94],36:$VB,37:$VC,38:$VD,39:$VE,40:$VF,41:$VG,42:$VH,43:$VI,44:$VJ,45:$VK,46:$VL,47:$VM,48:$VN,49:$VO,50:$VP},{22:66,29:$Vn,31:110,46:$Vo,51:$Vp,52:$Vq,54:57,58:$Vr,59:$Vs,60:$Vt,61:$Vu,62:$Vv,63:$Vw,64:$Vx},{22:66,29:$Vn,31:111,46:$Vo,51:$Vp,52:$Vq,54:57,58:$Vr,59:$Vs,60:$Vt,61:$Vu,62:$Vv,63:$Vw,64:$Vx},{22:66,29:$Vn,31:112,32:113,46:$Vo,51:$Vp,52:$Vq,54:57,58:$Vr,59:$Vs,60:$Vt,61:$Vu,62:$Vv,63:$Vw,64:$Vx},o($VQ,[2,52]),o($VQ,[2,57]),o($VQ,[2,58]),o($VQ,[2,59],{52:$Vk}),o($VQ,[2,60]),o($VQ,[2,61]),o($VQ,[2,62]),o($VQ,[2,63]),o($VQ,[2,64]),o($VQ,[2,65]),{52:$Vy,69:114},{22:66,29:$Vn,31:80,46:$Vo,51:$Vp,52:$Vq,54:57,57:115,58:$Vr,59:$Vs,60:$Vt,61:$Vu,62:$Vv,63:$Vw,64:$Vx},{22:66,29:$Vn,31:80,46:$Vo,51:$Vp,52:$Vq,54:57,57:116,58:$Vr,59:$Vs,60:$Vt,61:$Vu,62:$Vv,63:$Vw,64:$Vx},{22:66,29:$Vn,31:117,46:$Vo,51:$Vp,52:$Vq,54:57,58:$Vr,59:$Vs,60:$Vt,61:$Vu,62:$Vv,63:$Vw,64:$Vx},{22:66,29:$Vn,31:118,46:$Vo,51:$Vp,52:$Vq,54:57,58:$Vr,59:$Vs,60:$Vt,61:$Vu,62:$Vv,63:$Vw,64:$Vx},{20:119,29:[1,120],33:14},{12:121,13:$Vz},{68:[1,122]},{6:126,7:$V0,8:$V1,9:$V2,10:$V3,11:$V4,53:[1,124],65:123,66:125},o($Vl,[2,29],{36:$VB,37:$VC,38:$VD,39:$VE,40:$VF,41:$VG,42:$VH,43:$VI,44:$VJ,45:$VK,46:$VL,47:$VM,48:$VN,49:$VO,50:$VP,55:$VR}),o($Vl,[2,30]),{28:$VS,53:[1,128]},o($VQ,[2,76]),o($VT,[2,56],{36:$VB,37:$VC,38:$VD,39:$VE,40:$VF,41:$VG,42:$VH,43:$VI,44:$VJ,45:$VK,46:$VL,47:$VM,48:$VN,49:$VO,50:$VP}),o($Vf,[2,86]),o($VA,[2,89]),o($Vf,[2,88]),{52:[1,130]},o($VA,[2,8]),o($VA,[2,9]),{4:131,6:12,7:$V0,8:$V1,9:$V2,10:$V3,11:$V4,17:3,18:4,20:5,21:6,22:7,23:8,24:9,25:10,26:11,29:$V5,33:14,70:$V6,71:15,72:16,73:17,74:$V7,75:$V8,76:$V9,77:18,80:$Va,83:$Vb,88:$Vc,89:$Vd,90:$Ve},{19:[1,132]},{19:[1,133]},{19:[1,134]},o($VA,[2,23]),o($VA,[2,24]),{36:$VB,37:$VC,38:$VD,39:$VE,40:$VF,41:$VG,42:$VH,43:$VI,44:$VJ,45:$VK,46:$VL,47:$VM,48:$VN,49:$VO,50:$VP,53:[1,135]},o($VA,[2,100]),{22:66,29:$Vn,31:136,46:$Vo,51:$Vp,52:$Vq,54:57,58:$Vr,59:$Vs,60:$Vt,61:$Vu,62:$Vv,63:$Vw,64:$Vx},{22:66,29:$Vn,31:137,46:$Vo,51:$Vp,52:$Vq,54:57,58:$Vr,59:$Vs,60:$Vt,61:$Vu,62:$Vv,63:$Vw,64:$Vx},{22:66,29:$Vn,31:138,46:$Vo,51:$Vp,52:$Vq,54:57,58:$Vr,59:$Vs,60:$Vt,61:$Vu,62:$Vv,63:$Vw,64:$Vx},{22:66,29:$Vn,31:139,46:$Vo,51:$Vp,52:$Vq,54:57,58:$Vr,59:$Vs,60:$Vt,61:$Vu,62:$Vv,63:$Vw,64:$Vx},{22:66,29:$Vn,31:140,46:$Vo,51:$Vp,52:$Vq,54:57,58:$Vr,59:$Vs,60:$Vt,61:$Vu,62:$Vv,63:$Vw,64:$Vx},{22:66,29:$Vn,31:141,46:$Vo,51:$Vp,52:$Vq,54:57,58:$Vr,59:$Vs,60:$Vt,61:$Vu,62:$Vv,63:$Vw,64:$Vx},{22:66,29:$Vn,31:142,46:$Vo,51:$Vp,52:$Vq,54:57,58:$Vr,59:$Vs,60:$Vt,61:$Vu,62:$Vv,63:$Vw,64:$Vx},{22:66,29:$Vn,31:143,46:$Vo,51:$Vp,52:$Vq,54:57,58:$Vr,59:$Vs,60:$Vt,61:$Vu,62:$Vv,63:$Vw,64:$Vx},{22:66,29:$Vn,31:144,46:$Vo,51:$Vp,52:$Vq,54:57,58:$Vr,59:$Vs,60:$Vt,61:$Vu,62:$Vv,63:$Vw,64:$Vx},{22:66,29:$Vn,31:145,46:$Vo,51:$Vp,52:$Vq,54:57,58:$Vr,59:$Vs,60:$Vt,61:$Vu,62:$Vv,63:$Vw,64:$Vx},{22:66,29:$Vn,31:146,46:$Vo,51:$Vp,52:$Vq,54:57,58:$Vr,59:$Vs,60:$Vt,61:$Vu,62:$Vv,63:$Vw,64:$Vx},{22:66,29:$Vn,31:147,46:$Vo,51:$Vp,52:$Vq,54:57,58:$Vr,59:$Vs,60:$Vt,61:$Vu,62:$Vv,63:$Vw,64:$Vx},{22:66,29:$Vn,31:148,46:$Vo,51:$Vp,52:$Vq,54:57,58:$Vr,59:$Vs,60:$Vt,61:$Vu,62:$Vv,63:$Vw,64:$Vx},{22:66,29:$Vn,31:149,46:$Vo,51:$Vp,52:$Vq,54:57,58:$Vr,59:$Vs,60:$Vt,61:$Vu,62:$Vv,63:$Vw,64:$Vx},{22:66,29:$Vn,31:150,46:$Vo,51:$Vp,52:$Vq,54:57,58:$Vr,59:$Vs,60:$Vt,61:$Vu,62:$Vv,63:$Vw,64:$Vx},o($VQ,[2,49]),o($VU,[2,50],{41:$VG,42:$VH,43:$VI,45:$VK}),{36:$VB,37:$VC,38:$VD,39:$VE,40:$VF,41:$VG,42:$VH,43:$VI,44:$VJ,45:$VK,46:$VL,47:$VM,48:$VN,49:$VO,50:$VP,53:[1,151],55:$VR},{53:[1,152]},{12:153,13:$Vz},{28:$VS,53:[1,154]},{28:$VS,53:[1,155]},{36:$VB,37:$VC,38:$VD,39:$VE,40:$VF,41:$VG,42:$VH,43:$VI,44:$VJ,45:$VK,46:$VL,47:$VM,48:$VN,49:$VO,50:$VP,53:[1,156]},{36:$VB,37:$VC,38:$VD,39:$VE,40:$VF,41:$VG,42:$VH,43:$VI,44:$VJ,45:$VK,46:$VL,47:$VM,48:$VN,49:$VO,50:$VP,53:[1,157]},o($Vl,[2,26]),o($Vl,$Vg,{30:$Vh,34:$Vi,35:$Vj}),o($Vf,[2,72]),{52:$Vy,69:158},{28:[1,160],53:[1,159]},{13:[2,71]},o($VT,[2,67]),{29:[1,161]},{22:66,29:$Vn,31:162,46:$Vo,51:$Vp,52:$Vq,54:57,58:$Vr,59:$Vs,60:$Vt,61:$Vu,62:$Vv,63:$Vw,64:$Vx},o($VQ,[2,75]),{22:66,29:$Vn,31:163,46:$Vo,51:$Vp,52:$Vq,54:57,58:$Vr,59:$Vs,60:$Vt,61:$Vu,62:$Vv,63:$Vw,64:$Vx},{22:66,29:$Vn,31:164,46:$Vo,51:$Vp,52:$Vq,54:57,58:$Vr,59:$Vs,60:$Vt,61:$Vu,62:$Vv,63:$Vw,64:$Vx},{6:12,7:$V0,8:$V1,9:$V2,10:$V3,11:$V4,14:[1,165],17:34,18:4,20:5,21:6,22:7,23:8,24:9,25:10,26:11,29:$V5,33:14,70:$V6,71:15,72:16,73:17,74:$V7,75:$V8,76:$V9,77:18,80:$Va,83:$Vb,88:$Vc,89:$Vd,90:$Ve},o($VA,[2,20]),o($VA,[2,21]),o($VA,[2,22]),{13:[1,166]},o($VU,[2,34],{41:$VG,42:$VH,43:$VI,45:$VK}),o($VV,[2,35],{36:$VB,41:$VG,42:$VH,43:$VI,44:$VJ,45:$VK,46:$VL}),o($VV,[2,36],{36:$VB,41:$VG,42:$VH,43:$VI,44:$VJ,45:$VK,46:$VL}),o($VV,[2,37],{36:$VB,41:$VG,42:$VH,43:$VI,44:$VJ,45:$VK,46:$VL}),o($VV,[2,38],{36:$VB,41:$VG,42:$VH,43:$VI,44:$VJ,45:$VK,46:$VL}),o($VQ,[2,39]),o($VQ,[2,40]),o($VQ,[2,41]),o($VU,[2,42],{41:$VG,42:$VH,43:$VI,45:$VK}),o($VQ,[2,43]),o($VU,[2,44],{41:$VG,42:$VH,43:$VI,45:$VK}),o($VV,[2,45],{36:$VB,41:$VG,42:$VH,43:$VI,44:$VJ,45:$VK,46:$VL}),o($VV,[2,46],{36:$VB,41:$VG,42:$VH,43:$VI,44:$VJ,45:$VK,46:$VL}),o($VW,[2,47],{36:$VB,37:$VC,38:$VD,39:$VE,40:$VF,41:$VG,42:$VH,43:$VI,44:$VJ,45:$VK,46:$VL,47:$VM,48:$VN}),o($VW,[2,48],{36:$VB,37:$VC,38:$VD,39:$VE,40:$VF,41:$VG,42:$VH,43:$VI,44:$VJ,45:$VK,46:$VL,47:$VM,48:$VN}),o($VQ,[2,51]),o($VQ,[2,53]),o($Vf,[2,74]),{19:[2,80]},{19:[2,81]},{19:[2,82]},{12:85,13:$Vz,15:167,16:86,20:88,21:90,22:89,24:91,25:92,29:$V5,33:14,71:15,72:16,73:17,74:$V7,75:$V8,76:$V9,83:$Vb,88:$Vc,89:$Vd,90:$Ve},{12:168,13:$Vz},{13:[2,70]},{6:126,7:$V0,8:$V1,9:$V2,10:$V3,11:$V4,66:169},o($VT,[2,68],{67:[1,170]}),{36:$VB,37:$VC,38:$VD,39:$VE,40:$VF,41:$VG,42:$VH,43:$VI,44:$VJ,45:$VK,46:$VL,47:$VM,48:$VN,49:$VO,50:$VP,56:[1,171]},o($VT,[2,55],{36:$VB,37:$VC,38:$VD,39:$VE,40:$VF,41:$VG,42:$VH,43:$VI,44:$VJ,45:$VK,46:$VL,47:$VM,48:$VN,49:$VO,50:$VP}),{36:$VB,37:$VC,38:$VD,39:$VE,40:$VF,41:$VG,42:$VH,43:$VI,44:$VJ,45:$VK,46:$VL,47:$VM,48:$VN,49:$VO,50:$VP,53:[1,172]},o($VA,[2,7]),{84:173,85:[1,174],86:175,87:$VX},o($VA,[2,87]),o($Vf,[2,73]),o($VT,[2,66]),{68:[1,177]},{22:66,29:$Vn,31:178,46:$Vo,51:$Vp,52:$Vq,54:57,58:$Vr,59:$Vs,60:$Vt,61:$Vu,62:$Vv,63:$Vw,64:$Vx},{12:85,13:$Vz,15:179,16:86,20:88,21:90,22:89,24:91,25:92,29:$V5,33:14,71:15,72:16,73:17,74:$V7,75:$V8,76:$V9,83:$Vb,88:$Vc,89:$Vd,90:$Ve},{14:[1,180],85:[1,181],86:182,87:$VX},{56:[1,183]},o($VY,[2,96]),{22:66,29:$Vn,31:184,46:$Vo,51:$Vp,52:$Vq,54:57,58:$Vr,59:$Vs,60:$Vt,61:$Vu,62:$Vv,63:$Vw,64:$Vx},o($VT,[2,69]),o([19,28,53],[2,54],{36:$VB,37:$VC,38:$VD,39:$VE,40:$VF,41:$VG,42:$VH,43:$VI,44:$VJ,45:$VK,46:$VL,47:$VM,48:$VN,49:$VO,50:$VP}),o($VA,[2,91]),o($VA,[2,92]),{56:[1,185]},o($VY,[2,95]),{4:186,6:12,7:$V0,8:$V1,9:$V2,10:$V3,11:$V4,17:3,18:4,20:5,21:6,22:7,23:8,24:9,25:10,26:11,29:$V5,33:14,70:$V6,71:15,72:16,73:17,74:$V7,75:$V8,76:$V9,77:18,80:$Va,83:$Vb,88:$Vc,89:$Vd,90:$Ve},{36:$VB,37:$VC,38:$VD,39:$VE,40:$VF,41:$VG,42:$VH,43:$VI,44:$VJ,45:$VK,46:$VL,47:$VM,48:$VN,49:$VO,50:$VP,56:[1,187]},{4:188,6:12,7:$V0,8:$V1,9:$V2,10:$V3,11:$V4,17:3,18:4,20:5,21:6,22:7,23:8,24:9,25:10,26:11,29:$V5,33:14,70:$V6,71:15,72:16,73:17,74:$V7,75:$V8,76:$V9,77:18,80:$Va,83:$Vb,88:$Vc,89:$Vd,90:$Ve},{6:12,7:$V0,8:$V1,9:$V2,10:$V3,11:$V4,14:[1,189],17:34,18:4,20:5,21:6,22:7,23:8,24:9,25:10,26:11,29:$V5,33:14,70:$V6,71:15,72:16,73:17,74:$V7,75:$V8,76:$V9,77:18,80:$Va,83:$Vb,88:$Vc,89:$Vd,90:$Ve},{4:190,6:12,7:$V0,8:$V1,9:$V2,10:$V3,11:$V4,17:3,18:4,20:5,21:6,22:7,23:8,24:9,25:10,26:11,29:$V5,33:14,70:$V6,71:15,72:16,73:17,74:$V7,75:$V8,76:$V9,77:18,80:$Va,83:$Vb,88:$Vc,89:$Vd,90:$Ve},{6:12,7:$V0,8:$V1,9:$V2,10:$V3,11:$V4,14:[1,191],17:34,18:4,20:5,21:6,22:7,23:8,24:9,25:10,26:11,29:$V5,33:14,70:$V6,71:15,72:16,73:17,74:$V7,75:$V8,76:$V9,77:18,80:$Va,83:$Vb,88:$Vc,89:$Vd,90:$Ve},o($VA,[2,94]),o($VY,[2,97],{18:4,20:5,21:6,22:7,23:8,24:9,25:10,26:11,6:12,33:14,71:15,72:16,73:17,77:18,17:34,7:$V0,8:$V1,9:$V2,10:$V3,11:$V4,29:$V5,70:$V6,74:$V7,75:$V8,76:$V9,80:$Va,83:$Vb,88:$Vc,89:$Vd,90:$Ve}),o($VA,[2,93])],
defaultActions: {15:[2,77],16:[2,78],17:[2,79],24:[2,2],25:[2,3],26:[2,4],27:[2,5],28:[2,6],33:[2,1],124:[2,71],154:[2,80],155:[2,81],156:[2,82],159:[2,70]},
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
    const symbols = require('../compiler/lexical/symbols').default
    const errors = require('../compiler/lexical/error').default
    const Operator = require('../compiler/utils/types').Operator
    const DataType = require('../compiler/utils/types').default
    const getToken = require('../compiler/utils/tools').default

    // INSTRUCCIONES
    const IncrementalAssignment = require('../compiler/instruction/assignment/incremental').default
    const ExpAssignment = require('../compiler/instruction/assignment/expression').default
    const Declaration = require('../compiler/instruction/assignment/declaration').default
    const FunctionCall = require('../compiler/instruction/functions/call').default
    const ReturnValue = require('../compiler/instruction/control/return').default
    const FunctionBlock = require('../compiler/instruction/functions').default
    const Expression = require('../compiler/instruction/expression').default
    const Switch = require('../compiler/instruction/control/switch').default
    const Condition = require('../compiler/instruction/control').default
    const Value = require('../compiler/instruction/value').default
    
    // FUNCIONES NATIVAS
    const Evaluate = require('../compiler/instruction/functions/builtin/evaluate').default
    const Print = require('../compiler/instruction/functions/builtin/print').default

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
case 11:return addToken(yy_.yylloc, 'voidType')
break;
case 12:return addToken(yy_.yylloc, 'lessOrEquals')
break;
case 13:return addToken(yy_.yylloc, 'moreOrEquals')
break;
case 14:return addToken(yy_.yylloc, 'equalsEquals')
break;
case 15:return addToken(yy_.yylloc, 'minusMinus')
break;
case 16:return addToken(yy_.yylloc, 'nonEquals')
break;
case 17:return addToken(yy_.yylloc, 'plusPlus')
break;
case 18:return addToken(yy_.yylloc, 'questionMark')
break;
case 19:return addToken(yy_.yylloc, 'colom')
break;
case 20:return addToken(yy_.yylloc, 'division')
break;
case 21:return addToken(yy_.yylloc, 'module')
break;
case 22:return addToken(yy_.yylloc, 'times')
break;
case 23:return addToken(yy_.yylloc, 'power')
break;
case 24:return addToken(yy_.yylloc, 'equals')
break;
case 25:return addToken(yy_.yylloc, 'minor')
break;
case 26:return addToken(yy_.yylloc, 'major')
break;
case 27:return addToken(yy_.yylloc, 'minus')
break;
case 28:return addToken(yy_.yylloc, 'plus')
break;
case 29:return addToken(yy_.yylloc, 'and')
break;
case 30:return addToken(yy_.yylloc, 'not')
break;
case 31:return addToken(yy_.yylloc, 'or')
break;
case 32:return addToken(yy_.yylloc, 'concat')
break;
case 33:return addToken(yy_.yylloc, 'comma')
break;
case 34:return addToken(yy_.yylloc, 'semicolom')
break;
case 35:return addToken(yy_.yylloc, 'openBracket')
break;
case 36:return addToken(yy_.yylloc, 'closeBracket')
break;
case 37:return addToken(yy_.yylloc, 'openParenthesis')
break;
case 38:return addToken(yy_.yylloc, 'closeParenthesis')
break;
case 39:return addToken(yy_.yylloc, 'openSquareBracket')
break;
case 40:return addToken(yy_.yylloc, 'closeSquareBracket')
break;
case 41:return addToken(yy_.yylloc, 'printRw')
break;
case 42:return addToken(yy_.yylloc, 'printLnRw')
break;
case 43:return addToken(yy_.yylloc, 'evalRw')
break;
case 44:return addToken(yy_.yylloc, 'elseRw')
break;
case 45:return addToken(yy_.yylloc, 'ifRw')
break;
case 46:return addToken(yy_.yylloc, 'defaultRw')
break;
case 47:return addToken(yy_.yylloc, 'switchRw')
break;
case 48:return addToken(yy_.yylloc, 'breakRw')
break;
case 49:return addToken(yy_.yylloc, 'caseRw')
break;
case 50:return addToken(yy_.yylloc, 'continueRw')
break;
case 51:return addToken(yy_.yylloc, 'returnRw')
break;
case 52:"\""
break;
case 53:"\\\""
break;
case 54:"\\\\"
break;
case 55:"\\n"
break;
case 56:"\\r"
break;
case 57:"\\t"
break;
case 58:"\\0"
break;
case 59:
                                yy_.yytext = yy_.yytext.substr(1,yy_.yyleng-2);
                                return addToken(yy_.yylloc, 'text');
                            
break;
case 60:
                                yy_.yytext = yy_.yytext.substr(1,yy_.yyleng-2);
                                return addToken(yy_.yylloc, 'character');
						    
break;
case 61:return addToken(yy_.yylloc, 'decimal')
break;
case 62:return addToken(yy_.yylloc, 'integer')
break;
case 63:return addToken(yy_.yylloc, 'id')
break;
case 64:return 5
break;
case 65:
                                errors.push({
                                    type: 'Lexical',
                                    token: {
                                        line: yy_.yylloc.first_line,
                                        col: yy_.yylloc.first_column + 1
                                    },
                                    msg: `${yy_.yytext} no reconocido`
                                });
                            
break;
}
},
rules: [/^(?:\s+)/i,/^(?:\/\/.*)/i,/^(?:[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/])/i,/^(?:char\b)/i,/^(?:boolean\b)/i,/^(?:null\b)/i,/^(?:string\b)/i,/^(?:double\b)/i,/^(?:int\b)/i,/^(?:true\b)/i,/^(?:false\b)/i,/^(?:void\b)/i,/^(?:<=)/i,/^(?:>=)/i,/^(?:==)/i,/^(?:--)/i,/^(?:!=)/i,/^(?:\+\+)/i,/^(?:\?)/i,/^(?::)/i,/^(?:\/)/i,/^(?:%)/i,/^(?:\*)/i,/^(?:\^)/i,/^(?:=)/i,/^(?:<)/i,/^(?:>)/i,/^(?:-)/i,/^(?:\+)/i,/^(?:&&)/i,/^(?:!)/i,/^(?:\|\|)/i,/^(?:&)/i,/^(?:,)/i,/^(?:;)/i,/^(?:\{)/i,/^(?:\})/i,/^(?:\()/i,/^(?:\))/i,/^(?:\[)/i,/^(?:\])/i,/^(?:print\b)/i,/^(?:printLn\b)/i,/^(?:eval\b)/i,/^(?:else\b)/i,/^(?:if\b)/i,/^(?:default\b)/i,/^(?:switch\b)/i,/^(?:break\b)/i,/^(?:case\b)/i,/^(?:continue\b)/i,/^(?:return\b)/i,/^(?:QUOTES\b)/i,/^(?:PIPE_QUOTES\b)/i,/^(?:DOUBLE_PIPES\b)/i,/^(?:BREAKLINE\b)/i,/^(?:CARRETURN\b)/i,/^(?:TABULATION\b)/i,/^(?:NULLCHAR\b)/i,/^(?:"[^\"]*")/i,/^(?:'[^\']?')/i,/^(?:[0-9]*\.[0-9]+\b)/i,/^(?:[0-9]+\b)/i,/^(?:([a-zA-Z])[a-zA-Z0-9_]*)/i,/^(?:$)/i,/^(?:.)/i],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
return parser;
});