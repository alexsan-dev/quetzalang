

define(function(require){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,29],$V1=[1,30],$V2=[1,31],$V3=[1,32],$V4=[1,33],$V5=[1,14],$V6=[1,24],$V7=[1,34],$V8=[1,35],$V9=[1,36],$Va=[1,37],$Vb=[1,20],$Vc=[1,38],$Vd=[1,40],$Ve=[1,39],$Vf=[1,21],$Vg=[1,22],$Vh=[1,23],$Vi=[5,7,8,9,10,11,14,30,71,75,76,77,81,84,86,88,93,94,96,98,99,100],$Vj=[2,30],$Vk=[1,50],$Vl=[1,52],$Vm=[1,53],$Vn=[1,51],$Vo=[19,29,54],$Vp=[1,56],$Vq=[1,68],$Vr=[1,63],$Vs=[1,62],$Vt=[1,64],$Vu=[1,66],$Vv=[1,67],$Vw=[1,69],$Vx=[1,70],$Vy=[1,71],$Vz=[1,72],$VA=[1,73],$VB=[5,7,8,9,10,11,14,30,71,75,76,77,81,82,84,86,88,93,94,96,98,99,100],$VC=[1,84],$VD=[1,93],$VE=[19,29],$VF=[1,96],$VG=[1,108],$VH=[1,109],$VI=[1,110],$VJ=[1,111],$VK=[1,112],$VL=[1,113],$VM=[1,114],$VN=[1,115],$VO=[1,116],$VP=[1,117],$VQ=[1,118],$VR=[1,119],$VS=[1,120],$VT=[1,121],$VU=[1,122],$VV=[19,29,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,54,56,57],$VW=[13,19,29,30,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,54,56,57,75,76,77,84,93,94,96,98,99,100],$VX=[1,143],$VY=[1,151],$VZ=[1,153],$V_=[29,54],$V$=[19,29,37,38,39,40,41,45,47,48,49,50,51,54,56,57],$V01=[19,29,38,39,40,41,48,49,50,51,54,56,57],$V11=[19,29,50,51,54,56,57],$V21=[1,208],$V31=[14,86,88];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"START":3,"INSTRUCTIONS":4,"EOF":5,"TYPE":6,"intType":7,"dblType":8,"boolType":9,"charType":10,"strType":11,"BLOCKCONTENT":12,"openBracket":13,"closeBracket":14,"INLINEBLOCKCONTENT":15,"INLINEINSTRUCTION":16,"INSTRUCTION":17,"DECLARATION":18,"semicolom":19,"ASSIGNMENT":20,"METHOD":21,"FUNCTIONCALL":22,"CONTROLSEQ":23,"SWITCHSEQ":24,"LOOPESCAPE":25,"FUNCTION":26,"LOOPSEQ":27,"ASSIGNMENTS":28,"comma":29,"id":30,"equals":31,"EXPRESSIONS":32,"TERNARY":33,"INCREMENTALASSIGNMENT":34,"plusPlus":35,"minusMinus":36,"plus":37,"equalsEquals":38,"moreOrEquals":39,"lessOrEquals":40,"nonEquals":41,"division":42,"module":43,"power":44,"concat":45,"times":46,"minus":47,"minor":48,"major":49,"and":50,"or":51,"not":52,"openParenthesis":53,"closeParenthesis":54,"VARVALUE":55,"questionMark":56,"colom":57,"EXPLIST":58,"decimal":59,"text":60,"integer":61,"character":62,"trBool":63,"flBool":64,"nullType":65,"PARAMSLIST":66,"PARAMVAR":67,"openSquareBracket":68,"closeSquareBracket":69,"FUNCTIONPARAMS":70,"voidType":71,"PRINT":72,"PRINTLN":73,"EVAL":74,"printRw":75,"printLnRw":76,"evalRw":77,"IFSEQUENCE":78,"ELSESEQUENCE":79,"CONTROLSEQELIFS":80,"ifRw":81,"elseRw":82,"CONTROLSEQELIF":83,"switchRw":84,"SWITCHSEQCASES":85,"defaultRw":86,"SWITCHSEQCONTENT":87,"caseRw":88,"WHILESEQ":89,"DOWHILESEQ":90,"FORINSEQ":91,"FORSEQ":92,"whileRw":93,"forRw":94,"inRw":95,"doRw":96,"FORSEQPARAMS":97,"breakRw":98,"continueRw":99,"returnRw":100,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",7:"intType",8:"dblType",9:"boolType",10:"charType",11:"strType",13:"openBracket",14:"closeBracket",19:"semicolom",29:"comma",30:"id",31:"equals",35:"plusPlus",36:"minusMinus",37:"plus",38:"equalsEquals",39:"moreOrEquals",40:"lessOrEquals",41:"nonEquals",42:"division",43:"module",44:"power",45:"concat",46:"times",47:"minus",48:"minor",49:"major",50:"and",51:"or",52:"not",53:"openParenthesis",54:"closeParenthesis",56:"questionMark",57:"colom",59:"decimal",60:"text",61:"integer",62:"character",63:"trBool",64:"flBool",65:"nullType",68:"openSquareBracket",69:"closeSquareBracket",71:"voidType",75:"printRw",76:"printLnRw",77:"evalRw",81:"ifRw",82:"elseRw",84:"switchRw",86:"defaultRw",88:"caseRw",93:"whileRw",94:"forRw",95:"inRw",96:"doRw",98:"breakRw",99:"continueRw",100:"returnRw"},
productions_: [0,[3,2],[6,1],[6,1],[6,1],[6,1],[6,1],[12,3],[15,1],[15,1],[4,2],[4,1],[17,2],[17,2],[17,2],[17,2],[17,1],[17,1],[17,1],[17,1],[17,1],[16,2],[16,2],[16,2],[16,1],[16,1],[16,1],[18,2],[28,3],[28,1],[20,1],[20,3],[20,3],[20,1],[34,2],[34,2],[32,3],[32,3],[32,3],[32,3],[32,3],[32,3],[32,3],[32,3],[32,3],[32,3],[32,3],[32,3],[32,3],[32,3],[32,3],[32,2],[32,2],[32,3],[32,1],[32,3],[33,5],[58,3],[58,1],[55,1],[55,1],[55,1],[55,1],[55,1],[55,1],[55,1],[55,1],[55,1],[66,3],[66,1],[67,2],[67,4],[70,3],[70,2],[26,4],[26,6],[26,4],[22,4],[22,3],[21,1],[21,1],[21,1],[72,4],[73,4],[74,4],[23,1],[23,2],[23,2],[23,3],[78,5],[79,2],[80,2],[80,1],[83,6],[24,7],[24,10],[24,9],[85,2],[85,1],[87,4],[27,1],[27,1],[27,1],[27,1],[89,5],[91,5],[90,7],[92,5],[97,5],[97,5],[25,2],[25,2],[25,3]],
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
case 7: case 12: case 13: case 14: case 15: case 21: case 22: case 23: case 55: case 72:

        this.$ = $$[$0-1];
    
break;
case 8: case 16: case 17: case 18: case 19: case 24: case 25: case 33: case 67: case 79: case 80: case 81:

        this.$ = $$[$0];
    
break;
case 9: case 11: case 29: case 58: case 69: case 92: case 98:

        this.$ = [$$[$0]];
    
break;
case 10: case 91: case 97:

        this.$ = $$[$0-1];
        this.$.push($$[$0]);
    
break;
case 20: case 26:

        this.$ = $$[$0];    
    
break;
case 27:

        this.$ = new Declaration(getToken(_$[$0-1]), { type: $$[$0-1], assignments: $$[$0] });
    
break;
case 28: case 57: case 68:

        this.$ = $$[$0-2];
        this.$.push($$[$0]);
    
break;
case 30:

        this.$ = new ExpAssignment(getToken(_$[$0]), { id: $$[$0] });
    
break;
case 31:

        this.$ = new ExpAssignment(getToken(_$[$0-2]), { id: $$[$0-2], exp: $$[$0] });  
    
break;
case 32:

        this.$ = new ExpAssignment(getToken(_$[$0-2]), { id: $$[$0-2], exp: $$[$0] });
    
break;
case 34:

        this.$ = new IncrementalAssignment(getToken(_$[$0-1]), { 
            id: $$[$0-1], operator: Operator.PLUSPLUS })
    
break;
case 35:

        this.$ = new IncrementalAssignment(getToken(_$[$0-1]), { 
            id: $$[$0-1], operator: Operator.MINUSMINUS })
    
break;
case 36:

        this.$ = new Expression(getToken(_$[$0-2]), {
            left: $$[$0-2], right: $$[$0], operator: Operator.PLUS });
    
break;
case 37:

        this.$ = new Expression(getToken(_$[$0-2]), {
            left: $$[$0-2], right: $$[$0], operator: Operator.EQUALSEQUALS });
    
break;
case 38:

        this.$ = new Expression(getToken(_$[$0-2]), {
            left: $$[$0-2], right: $$[$0], operator: Operator.MOREOREQUALS });
    
break;
case 39:

        this.$ = new Expression(getToken(_$[$0-2]), {
            left: $$[$0-2], right: $$[$0], operator: Operator.LESSOREQUALS });
    
break;
case 40:

        this.$ = new Expression(getToken(_$[$0-2]), {
            left: $$[$0-2], right: $$[$0], operator: Operator.NONEQUALS });
    
break;
case 41:

        this.$ = new Expression(getToken(_$[$0-2]), {
            left: $$[$0-2], right: $$[$0], operator: Operator.DIVISION });
    
break;
case 42:

        this.$ = new Expression(getToken(_$[$0-2]), {
            left: $$[$0-2], right: $$[$0], operator: Operator.MODULE });
    
break;
case 43:

        this.$ = new Expression(getToken(_$[$0-2]), {
            left: $$[$0-2], right: $$[$0], operator: Operator.POWER });
    
break;
case 44:

        this.$ = new Expression(getToken(_$[$0-2]), {
            left: $$[$0-2], right: $$[$0], operator: Operator.CONCAT });
    
break;
case 45:

        this.$ = new Expression(getToken(_$[$0-2]), {
            left: $$[$0-2], right: $$[$0], operator: Operator.TIMES });
    
break;
case 46:

        this.$ = new Expression(getToken(_$[$0-2]), {
            left: $$[$0-2], right: $$[$0], operator: Operator.MINUS });
    
break;
case 47:

        this.$ = new Expression(getToken(_$[$0-2]), {
            left: $$[$0-2], right: $$[$0], operator: Operator.MINOR });
    
break;
case 48:

        this.$ = new Expression(getToken(_$[$0-2]), {
            left: $$[$0-2], right: $$[$0], operator: Operator.MAJOR });
    
break;
case 49:

        this.$ = new Expression(getToken(_$[$0-2]), {
            left: $$[$0-2], right: $$[$0], operator: Operator.AND });
    
break;
case 50:

        this.$ = new Expression(getToken(_$[$0-2]), {
            left: $$[$0-2], right: $$[$0], operator:Operator.OR });
    
break;
case 51:

        this.$ = new Expression(getToken(_$[$0-1]), {
            left: $$[$0], operator: Operator.NOT });
    
break;
case 52:

        this.$ = new Expression(getToken(_$[$0-1]), {
            left: $$[$0], operator: Operator.NEGATION });
    
break;
case 53:

        this.$ = new Expression(getToken(_$[$0-2]), { left: $$[$0-1] });
    
break;
case 54:

        this.$ = new Expression(getToken(_$[$0]), { value: $$[$0] });
    
break;
case 56:

        this.$ = new Expression(getToken(_$[$0-4]), {
            left: $$[$0-2], right: $$[$0], condition: $$[$0-4], operator: Operator.TERNARY })
    
break;
case 59:

        this.$ = new DoubleValue(getToken(_$[$0]), $$[$0])
    
break;
case 60:

        this.$ = new StringValue(getToken(_$[$0]), $$[$0])
    
break;
case 61:

        this.$ = new IdValue(getToken(_$[$0]), $$[$0])
    
break;
case 62:

        this.$ = new IntValue(getToken(_$[$0]), $$[$0])
    
break;
case 63:

        this.$ = new CharValue(getToken(_$[$0]), $$[$0])
    
break;
case 64: case 65:

        this.$ = new BooleanValue(getToken(_$[$0]), $$[$0])
    
break;
case 66:

        this.$ = null
    
break;
case 70:

        this.$ = { type: $$[$0-1], id: $$[$0] };
    
break;
case 71:

        this.$ = { type: DataType.ARRAY, id: $$[$0-2], generic: $$[$0-3] };
    
break;
case 73:

        this.$ = [];
    
break;
case 74:

        this.$ = new FunctionBlock(getToken(_$[$0-3]), { 
            id: $$[$0-2], type: $$[$0-3], params: $$[$0-1], content: $$[$0] });
    
break;
case 75:

        this.$ = new FunctionBlock(getToken(_$[$0-5]), { 
            id: $$[$0-4], type: DataType.ARRAY, generic: $$[$0-5] , params: $$[$0-1], content: $$[$0] });
    
break;
case 76:

        this.$ = new FunctionBlock(getToken(_$[$0-3]), { 
            id: $$[$0-2], type: DataType.VOID, params: $$[$0-1], content: $$[$0] });
    
break;
case 77:

        this.$ = new FunctionCall(getToken(_$[$0-3]), { params: $$[$0-1], id: $$[$0-3] })
    
break;
case 78:

        this.$ = new FunctionCall(getToken(_$[$0-2]), { params: [], id: $$[$0-2] })
    
break;
case 82:

        this.$ = new Print(getToken(_$[$0-3]), { params: $$[$0-1], breakLine: false });
    
break;
case 83:

        this.$ = new Print(getToken(_$[$0-3]), { params: $$[$0-1], breakLine: true });
    
break;
case 84:

        this.$ = new Evaluate(getToken(_$[$0-3]), { params: [$$[$0-1]] });
    
break;
case 85:

        this.$ = new Condition(getToken(_$[$0]), { 
            valid: { exp: $$[$0].exp, body: $$[$0].body }
        })
    
break;
case 86:

        this.$ = new Condition(getToken(_$[$0-1]), { 
            valid: { exp: $$[$0-1].exp, body: $$[$0-1].body },
            inValid: { exp: $$[$0-1].exp, body: $$[$0].body }
        })
    
break;
case 87:

        this.$ = new Condition(getToken(_$[$0-1]), { 
            valid: { exp: $$[$0-1].exp, body: $$[$0-1].body },
            fallback: $$[$0]
        })
    
break;
case 88:

        this.$ = new Condition(getToken(_$[$0-2]), { 
            inValid: { exp: $$[$0-2].exp, body: $$[$0].body },
            valid: { exp: $$[$0-2].exp, body: $$[$0-2].body },
            fallback: $$[$0-1]
        })
    
break;
case 89:

        this.$ = { exp: $$[$0-2], body: $$[$0] }
    
break;
case 90:

        this.$ = { exp: $$[$0-1], body: $$[$0] }
    
break;
case 93:

        this.$ = { exp: $$[$0-2], body: $$[$0] };
    
break;
case 94:

        this.$ = new Switch(getToken(_$[$0-6]), { value: $$[$0-4], cases: $$[$0-1] })
    
break;
case 95:

        this.$ = new Switch(getToken(_$[$0-9]), { 
            value: $$[$0-7], cases: $$[$0-4], default: { body: $$[$0-1] } })
    
break;
case 96:

        this.$ = new Switch(getToken(_$[$0-8]), { 
            value: $$[$0-6], default: { body: $$[$0-1] } })
    
break;
case 99:

        this.$ = { case: $$[$0-2], body: $$[$0] };
    
break;
case 104:

        this.$ = new CycleControl(getToken(_$[$0-4]), { 
            condition: $$[$0-2], body: $$[$0] 
         })
    
break;
case 105:

        this.$ = new ForInLoop(getToken(_$[$0-4]),  {
            iterVariable: $$[$0-3], iterReference: $$[$0-1], body: $$[$0]
        })
    
break;
case 106:

        this.$ = new CycleControl(getToken(_$[$0-6]), { 
            condition: $$[$0-2], body: $$[$0-5], isDoLoop: true
         })
    
break;
case 107:

        this.$ = new ForLoop(getToken(_$[$0-4]), { ...$$[$0-2], body: $$[$0] })
    
break;
case 108:

        this.$ = { withDeclarations: true, 
        assignments: [$$[$0-4]], condition: $$[$0-2], modifiers: $$[$0] }
    
break;
case 109:

        this.$ = { assignments: $$[$0-4], condition: $$[$0-2], modifiers: $$[$0] }
    
break;
case 110:

        this.$ = new ReturnValue(getToken(_$[$0-1]), { type: 'Break' })
    
break;
case 111:

        this.$ = new ReturnValue(getToken(_$[$0-1]), { type: 'Continue' })
    
break;
case 112:

        this.$ = new ReturnValue(getToken(_$[$0-2]), { content: $$[$0-1], type: 'Return'  });
    
break;
}
},
table: [{3:1,4:2,6:13,7:$V0,8:$V1,9:$V2,10:$V3,11:$V4,17:3,18:4,20:5,21:6,22:7,23:8,24:9,25:10,26:11,27:12,30:$V5,34:15,71:$V6,72:16,73:17,74:18,75:$V7,76:$V8,77:$V9,78:19,81:$Va,84:$Vb,89:25,90:26,91:27,92:28,93:$Vc,94:$Vd,96:$Ve,98:$Vf,99:$Vg,100:$Vh},{1:[3]},{5:[1,41],6:13,7:$V0,8:$V1,9:$V2,10:$V3,11:$V4,17:42,18:4,20:5,21:6,22:7,23:8,24:9,25:10,26:11,27:12,30:$V5,34:15,71:$V6,72:16,73:17,74:18,75:$V7,76:$V8,77:$V9,78:19,81:$Va,84:$Vb,89:25,90:26,91:27,92:28,93:$Vc,94:$Vd,96:$Ve,98:$Vf,99:$Vg,100:$Vh},o($Vi,[2,11]),{19:[1,43]},{19:[1,44]},{19:[1,45]},{19:[1,46]},o($Vi,[2,16]),o($Vi,[2,17]),o($Vi,[2,18]),o($Vi,[2,19]),o($Vi,[2,20]),{20:49,28:47,30:[1,48],34:15},{19:$Vj,31:$Vk,35:$Vl,36:$Vm,53:$Vn},o($Vo,[2,33]),{19:[2,79]},{19:[2,80]},{19:[2,81]},o($Vi,[2,85],{79:54,80:55,83:57,82:$Vp}),{53:[1,58]},{19:[1,59]},{19:[1,60]},{22:74,30:$Vq,32:61,47:$Vr,52:$Vs,53:$Vt,55:65,59:$Vu,60:$Vv,61:$Vw,62:$Vx,63:$Vy,64:$Vz,65:$VA},{30:[1,75]},o($VB,[2,100]),o($VB,[2,101]),o($VB,[2,102]),o($VB,[2,103]),{30:[2,2]},{30:[2,3]},{30:[2,4]},{30:[2,5]},{30:[2,6]},{53:[1,76]},{53:[1,77]},{53:[1,78]},{53:[1,79]},{53:[1,80]},{12:82,13:$VC,15:81,16:83,20:85,21:87,22:86,24:88,25:89,27:90,30:$V5,34:15,72:16,73:17,74:18,75:$V7,76:$V8,77:$V9,84:$Vb,89:25,90:26,91:27,92:28,93:$Vc,94:$Vd,96:$Ve,98:$Vf,99:$Vg,100:$Vh},{30:[1,91],53:[1,92]},{1:[2,1]},o($Vi,[2,10]),o($Vi,[2,12]),o($Vi,[2,13]),o($Vi,[2,14]),o($Vi,[2,15]),{19:[2,27],29:$VD},o($VE,$Vj,{70:94,31:$Vk,35:$Vl,36:$Vm,53:$VF,68:[1,95]}),o($VE,[2,29]),{22:74,30:$Vq,32:97,33:98,47:$Vr,52:$Vs,53:$Vt,55:65,59:$Vu,60:$Vv,61:$Vw,62:$Vx,63:$Vy,64:$Vz,65:$VA},{22:74,30:$Vq,32:101,47:$Vr,52:$Vs,53:$Vt,54:[1,100],55:65,58:99,59:$Vu,60:$Vv,61:$Vw,62:$Vx,63:$Vy,64:$Vz,65:$VA},o($Vo,[2,34]),o($Vo,[2,35]),o($Vi,[2,86]),o($Vi,[2,87],{79:102,83:103,82:$Vp}),{12:82,13:$VC,15:104,16:83,20:85,21:87,22:86,24:88,25:89,27:90,30:$V5,34:15,72:16,73:17,74:18,75:$V7,76:$V8,77:$V9,81:[1,105],84:$Vb,89:25,90:26,91:27,92:28,93:$Vc,94:$Vd,96:$Ve,98:$Vf,99:$Vg,100:$Vh},o($VB,[2,92]),{22:74,30:$Vq,32:106,47:$Vr,52:$Vs,53:$Vt,55:65,59:$Vu,60:$Vv,61:$Vw,62:$Vx,63:$Vy,64:$Vz,65:$VA},o($VB,[2,110]),o($VB,[2,111]),{19:[1,107],37:$VG,38:$VH,39:$VI,40:$VJ,41:$VK,42:$VL,43:$VM,44:$VN,45:$VO,46:$VP,47:$VQ,48:$VR,49:$VS,50:$VT,51:$VU},{22:74,30:$Vq,32:123,47:$Vr,52:$Vs,53:$Vt,55:65,59:$Vu,60:$Vv,61:$Vw,62:$Vx,63:$Vy,64:$Vz,65:$VA},{22:74,30:$Vq,32:124,47:$Vr,52:$Vs,53:$Vt,55:65,59:$Vu,60:$Vv,61:$Vw,62:$Vx,63:$Vy,64:$Vz,65:$VA},{22:74,30:$Vq,32:125,33:126,47:$Vr,52:$Vs,53:$Vt,55:65,59:$Vu,60:$Vv,61:$Vw,62:$Vx,63:$Vy,64:$Vz,65:$VA},o($VV,[2,54]),o($VW,[2,59]),o($VW,[2,60]),o($VW,[2,61],{53:$Vn}),o($VW,[2,62]),o($VW,[2,63]),o($VW,[2,64]),o($VW,[2,65]),o($VW,[2,66]),o($VW,[2,67]),{53:$VF,70:127},{22:74,30:$Vq,32:101,47:$Vr,52:$Vs,53:$Vt,55:65,58:128,59:$Vu,60:$Vv,61:$Vw,62:$Vx,63:$Vy,64:$Vz,65:$VA},{22:74,30:$Vq,32:101,47:$Vr,52:$Vs,53:$Vt,55:65,58:129,59:$Vu,60:$Vv,61:$Vw,62:$Vx,63:$Vy,64:$Vz,65:$VA},{22:74,30:$Vq,32:130,47:$Vr,52:$Vs,53:$Vt,55:65,59:$Vu,60:$Vv,61:$Vw,62:$Vx,63:$Vy,64:$Vz,65:$VA},{22:74,30:$Vq,32:131,47:$Vr,52:$Vs,53:$Vt,55:65,59:$Vu,60:$Vv,61:$Vw,62:$Vx,63:$Vy,64:$Vz,65:$VA},{22:74,30:$Vq,32:132,47:$Vr,52:$Vs,53:$Vt,55:65,59:$Vu,60:$Vv,61:$Vw,62:$Vx,63:$Vy,64:$Vz,65:$VA},{93:[1,133]},o($VB,[2,8]),o($VB,[2,9]),{4:134,6:13,7:$V0,8:$V1,9:$V2,10:$V3,11:$V4,17:3,18:4,20:5,21:6,22:7,23:8,24:9,25:10,26:11,27:12,30:$V5,34:15,71:$V6,72:16,73:17,74:18,75:$V7,76:$V8,77:$V9,78:19,81:$Va,84:$Vb,89:25,90:26,91:27,92:28,93:$Vc,94:$Vd,96:$Ve,98:$Vf,99:$Vg,100:$Vh},{19:[1,135]},{19:[1,136]},{19:[1,137]},o($VB,[2,24]),o($VB,[2,25]),o($VB,[2,26]),{95:[1,138]},{6:142,7:$V0,8:$V1,9:$V2,10:$V3,11:$V4,18:140,20:49,28:141,30:$VX,34:15,97:139},{20:144,30:$VX,34:15},{12:145,13:$VC},{69:[1,146]},{6:150,7:$V0,8:$V1,9:$V2,10:$V3,11:$V4,54:[1,148],66:147,67:149},o($Vo,[2,31],{37:$VG,38:$VH,39:$VI,40:$VJ,41:$VK,42:$VL,43:$VM,44:$VN,45:$VO,46:$VP,47:$VQ,48:$VR,49:$VS,50:$VT,51:$VU,56:$VY}),o($Vo,[2,32]),{29:$VZ,54:[1,152]},o($VW,[2,78]),o($V_,[2,58],{37:$VG,38:$VH,39:$VI,40:$VJ,41:$VK,42:$VL,43:$VM,44:$VN,45:$VO,46:$VP,47:$VQ,48:$VR,49:$VS,50:$VT,51:$VU}),o($Vi,[2,88]),o($VB,[2,91]),o($Vi,[2,90]),{53:[1,154]},{37:$VG,38:$VH,39:$VI,40:$VJ,41:$VK,42:$VL,43:$VM,44:$VN,45:$VO,46:$VP,47:$VQ,48:$VR,49:$VS,50:$VT,51:$VU,54:[1,155]},o($VB,[2,112]),{22:74,30:$Vq,32:156,47:$Vr,52:$Vs,53:$Vt,55:65,59:$Vu,60:$Vv,61:$Vw,62:$Vx,63:$Vy,64:$Vz,65:$VA},{22:74,30:$Vq,32:157,47:$Vr,52:$Vs,53:$Vt,55:65,59:$Vu,60:$Vv,61:$Vw,62:$Vx,63:$Vy,64:$Vz,65:$VA},{22:74,30:$Vq,32:158,47:$Vr,52:$Vs,53:$Vt,55:65,59:$Vu,60:$Vv,61:$Vw,62:$Vx,63:$Vy,64:$Vz,65:$VA},{22:74,30:$Vq,32:159,47:$Vr,52:$Vs,53:$Vt,55:65,59:$Vu,60:$Vv,61:$Vw,62:$Vx,63:$Vy,64:$Vz,65:$VA},{22:74,30:$Vq,32:160,47:$Vr,52:$Vs,53:$Vt,55:65,59:$Vu,60:$Vv,61:$Vw,62:$Vx,63:$Vy,64:$Vz,65:$VA},{22:74,30:$Vq,32:161,47:$Vr,52:$Vs,53:$Vt,55:65,59:$Vu,60:$Vv,61:$Vw,62:$Vx,63:$Vy,64:$Vz,65:$VA},{22:74,30:$Vq,32:162,47:$Vr,52:$Vs,53:$Vt,55:65,59:$Vu,60:$Vv,61:$Vw,62:$Vx,63:$Vy,64:$Vz,65:$VA},{22:74,30:$Vq,32:163,47:$Vr,52:$Vs,53:$Vt,55:65,59:$Vu,60:$Vv,61:$Vw,62:$Vx,63:$Vy,64:$Vz,65:$VA},{22:74,30:$Vq,32:164,47:$Vr,52:$Vs,53:$Vt,55:65,59:$Vu,60:$Vv,61:$Vw,62:$Vx,63:$Vy,64:$Vz,65:$VA},{22:74,30:$Vq,32:165,47:$Vr,52:$Vs,53:$Vt,55:65,59:$Vu,60:$Vv,61:$Vw,62:$Vx,63:$Vy,64:$Vz,65:$VA},{22:74,30:$Vq,32:166,47:$Vr,52:$Vs,53:$Vt,55:65,59:$Vu,60:$Vv,61:$Vw,62:$Vx,63:$Vy,64:$Vz,65:$VA},{22:74,30:$Vq,32:167,47:$Vr,52:$Vs,53:$Vt,55:65,59:$Vu,60:$Vv,61:$Vw,62:$Vx,63:$Vy,64:$Vz,65:$VA},{22:74,30:$Vq,32:168,47:$Vr,52:$Vs,53:$Vt,55:65,59:$Vu,60:$Vv,61:$Vw,62:$Vx,63:$Vy,64:$Vz,65:$VA},{22:74,30:$Vq,32:169,47:$Vr,52:$Vs,53:$Vt,55:65,59:$Vu,60:$Vv,61:$Vw,62:$Vx,63:$Vy,64:$Vz,65:$VA},{22:74,30:$Vq,32:170,47:$Vr,52:$Vs,53:$Vt,55:65,59:$Vu,60:$Vv,61:$Vw,62:$Vx,63:$Vy,64:$Vz,65:$VA},o($VV,[2,51]),o($V$,[2,52],{42:$VL,43:$VM,44:$VN,46:$VP}),{37:$VG,38:$VH,39:$VI,40:$VJ,41:$VK,42:$VL,43:$VM,44:$VN,45:$VO,46:$VP,47:$VQ,48:$VR,49:$VS,50:$VT,51:$VU,54:[1,171],56:$VY},{54:[1,172]},{12:173,13:$VC},{29:$VZ,54:[1,174]},{29:$VZ,54:[1,175]},{37:$VG,38:$VH,39:$VI,40:$VJ,41:$VK,42:$VL,43:$VM,44:$VN,45:$VO,46:$VP,47:$VQ,48:$VR,49:$VS,50:$VT,51:$VU,54:[1,176]},{37:$VG,38:$VH,39:$VI,40:$VJ,41:$VK,42:$VL,43:$VM,44:$VN,45:$VO,46:$VP,47:$VQ,48:$VR,49:$VS,50:$VT,51:$VU,54:[1,177]},{37:$VG,38:$VH,39:$VI,40:$VJ,41:$VK,42:$VL,43:$VM,44:$VN,45:$VO,46:$VP,47:$VQ,48:$VR,49:$VS,50:$VT,51:$VU,54:[1,178]},{53:[1,179]},{6:13,7:$V0,8:$V1,9:$V2,10:$V3,11:$V4,14:[1,180],17:42,18:4,20:5,21:6,22:7,23:8,24:9,25:10,26:11,27:12,30:$V5,34:15,71:$V6,72:16,73:17,74:18,75:$V7,76:$V8,77:$V9,78:19,81:$Va,84:$Vb,89:25,90:26,91:27,92:28,93:$Vc,94:$Vd,96:$Ve,98:$Vf,99:$Vg,100:$Vh},o($VB,[2,21]),o($VB,[2,22]),o($VB,[2,23]),{22:74,30:$Vq,55:181,59:$Vu,60:$Vv,61:$Vw,62:$Vx,63:$Vy,64:$Vz,65:$VA},{54:[1,182]},{19:[1,183]},{19:[1,184],29:$VD},{20:49,28:47,30:$VX,34:15},o($Vo,$Vj,{31:$Vk,35:$Vl,36:$Vm}),o($VE,[2,28]),o($Vi,[2,74]),{53:$VF,70:185},{29:[1,187],54:[1,186]},{13:[2,73]},o($V_,[2,69]),{30:[1,188]},{22:74,30:$Vq,32:189,47:$Vr,52:$Vs,53:$Vt,55:65,59:$Vu,60:$Vv,61:$Vw,62:$Vx,63:$Vy,64:$Vz,65:$VA},o($VW,[2,77]),{22:74,30:$Vq,32:190,47:$Vr,52:$Vs,53:$Vt,55:65,59:$Vu,60:$Vv,61:$Vw,62:$Vx,63:$Vy,64:$Vz,65:$VA},{22:74,30:$Vq,32:191,47:$Vr,52:$Vs,53:$Vt,55:65,59:$Vu,60:$Vv,61:$Vw,62:$Vx,63:$Vy,64:$Vz,65:$VA},{13:[1,192]},o($V$,[2,36],{42:$VL,43:$VM,44:$VN,46:$VP}),o($V01,[2,37],{37:$VG,42:$VL,43:$VM,44:$VN,45:$VO,46:$VP,47:$VQ}),o($V01,[2,38],{37:$VG,42:$VL,43:$VM,44:$VN,45:$VO,46:$VP,47:$VQ}),o($V01,[2,39],{37:$VG,42:$VL,43:$VM,44:$VN,45:$VO,46:$VP,47:$VQ}),o($V01,[2,40],{37:$VG,42:$VL,43:$VM,44:$VN,45:$VO,46:$VP,47:$VQ}),o($VV,[2,41]),o($VV,[2,42]),o($VV,[2,43]),o($V$,[2,44],{42:$VL,43:$VM,44:$VN,46:$VP}),o($VV,[2,45]),o($V$,[2,46],{42:$VL,43:$VM,44:$VN,46:$VP}),o($V01,[2,47],{37:$VG,42:$VL,43:$VM,44:$VN,45:$VO,46:$VP,47:$VQ}),o($V01,[2,48],{37:$VG,42:$VL,43:$VM,44:$VN,45:$VO,46:$VP,47:$VQ}),o($V11,[2,49],{37:$VG,38:$VH,39:$VI,40:$VJ,41:$VK,42:$VL,43:$VM,44:$VN,45:$VO,46:$VP,47:$VQ,48:$VR,49:$VS}),o($V11,[2,50],{37:$VG,38:$VH,39:$VI,40:$VJ,41:$VK,42:$VL,43:$VM,44:$VN,45:$VO,46:$VP,47:$VQ,48:$VR,49:$VS}),o($VV,[2,53]),o($VV,[2,55]),o($Vi,[2,76]),{19:[2,82]},{19:[2,83]},{19:[2,84]},{12:82,13:$VC,15:193,16:83,20:85,21:87,22:86,24:88,25:89,27:90,30:$V5,34:15,72:16,73:17,74:18,75:$V7,76:$V8,77:$V9,84:$Vb,89:25,90:26,91:27,92:28,93:$Vc,94:$Vd,96:$Ve,98:$Vf,99:$Vg,100:$Vh},{12:82,13:$VC,15:194,16:83,20:85,21:87,22:86,24:88,25:89,27:90,30:$V5,34:15,72:16,73:17,74:18,75:$V7,76:$V8,77:$V9,84:$Vb,89:25,90:26,91:27,92:28,93:$Vc,94:$Vd,96:$Ve,98:$Vf,99:$Vg,100:$Vh},{22:74,30:$Vq,32:195,47:$Vr,52:$Vs,53:$Vt,55:65,59:$Vu,60:$Vv,61:$Vw,62:$Vx,63:$Vy,64:$Vz,65:$VA},o($VB,[2,7]),{12:82,13:$VC,15:196,16:83,20:85,21:87,22:86,24:88,25:89,27:90,30:$V5,34:15,72:16,73:17,74:18,75:$V7,76:$V8,77:$V9,84:$Vb,89:25,90:26,91:27,92:28,93:$Vc,94:$Vd,96:$Ve,98:$Vf,99:$Vg,100:$Vh},{12:82,13:$VC,15:197,16:83,20:85,21:87,22:86,24:88,25:89,27:90,30:$V5,34:15,72:16,73:17,74:18,75:$V7,76:$V8,77:$V9,84:$Vb,89:25,90:26,91:27,92:28,93:$Vc,94:$Vd,96:$Ve,98:$Vf,99:$Vg,100:$Vh},{22:74,30:$Vq,32:198,47:$Vr,52:$Vs,53:$Vt,55:65,59:$Vu,60:$Vv,61:$Vw,62:$Vx,63:$Vy,64:$Vz,65:$VA},{22:74,30:$Vq,32:199,47:$Vr,52:$Vs,53:$Vt,55:65,59:$Vu,60:$Vv,61:$Vw,62:$Vx,63:$Vy,64:$Vz,65:$VA},{12:200,13:$VC},{13:[2,72]},{6:150,7:$V0,8:$V1,9:$V2,10:$V3,11:$V4,67:201},o($V_,[2,70],{68:[1,202]}),{37:$VG,38:$VH,39:$VI,40:$VJ,41:$VK,42:$VL,43:$VM,44:$VN,45:$VO,46:$VP,47:$VQ,48:$VR,49:$VS,50:$VT,51:$VU,57:[1,203]},o($V_,[2,57],{37:$VG,38:$VH,39:$VI,40:$VJ,41:$VK,42:$VL,43:$VM,44:$VN,45:$VO,46:$VP,47:$VQ,48:$VR,49:$VS,50:$VT,51:$VU}),{37:$VG,38:$VH,39:$VI,40:$VJ,41:$VK,42:$VL,43:$VM,44:$VN,45:$VO,46:$VP,47:$VQ,48:$VR,49:$VS,50:$VT,51:$VU,54:[1,204]},{85:205,86:[1,206],87:207,88:$V21},o($VB,[2,89]),o($VB,[2,104]),{37:$VG,38:$VH,39:$VI,40:$VJ,41:$VK,42:$VL,43:$VM,44:$VN,45:$VO,46:$VP,47:$VQ,48:$VR,49:$VS,50:$VT,51:$VU,54:[1,209]},o($VB,[2,105]),o($VB,[2,107]),{19:[1,210],37:$VG,38:$VH,39:$VI,40:$VJ,41:$VK,42:$VL,43:$VM,44:$VN,45:$VO,46:$VP,47:$VQ,48:$VR,49:$VS,50:$VT,51:$VU},{19:[1,211],37:$VG,38:$VH,39:$VI,40:$VJ,41:$VK,42:$VL,43:$VM,44:$VN,45:$VO,46:$VP,47:$VQ,48:$VR,49:$VS,50:$VT,51:$VU},o($Vi,[2,75]),o($V_,[2,68]),{69:[1,212]},{22:74,30:$Vq,32:213,47:$Vr,52:$Vs,53:$Vt,55:65,59:$Vu,60:$Vv,61:$Vw,62:$Vx,63:$Vy,64:$Vz,65:$VA},{12:82,13:$VC,15:214,16:83,20:85,21:87,22:86,24:88,25:89,27:90,30:$V5,34:15,72:16,73:17,74:18,75:$V7,76:$V8,77:$V9,84:$Vb,89:25,90:26,91:27,92:28,93:$Vc,94:$Vd,96:$Ve,98:$Vf,99:$Vg,100:$Vh},{14:[1,215],86:[1,216],87:217,88:$V21},{57:[1,218]},o($V31,[2,98]),{22:74,30:$Vq,32:219,47:$Vr,52:$Vs,53:$Vt,55:65,59:$Vu,60:$Vv,61:$Vw,62:$Vx,63:$Vy,64:$Vz,65:$VA},{19:[1,220]},{20:221,30:$VX,34:15},{20:222,30:$VX,34:15},o($V_,[2,71]),o($Vo,[2,56],{37:$VG,38:$VH,39:$VI,40:$VJ,41:$VK,42:$VL,43:$VM,44:$VN,45:$VO,46:$VP,47:$VQ,48:$VR,49:$VS,50:$VT,51:$VU}),o($VB,[2,93]),o($VB,[2,94]),{57:[1,223]},o($V31,[2,97]),{4:224,6:13,7:$V0,8:$V1,9:$V2,10:$V3,11:$V4,17:3,18:4,20:5,21:6,22:7,23:8,24:9,25:10,26:11,27:12,30:$V5,34:15,71:$V6,72:16,73:17,74:18,75:$V7,76:$V8,77:$V9,78:19,81:$Va,84:$Vb,89:25,90:26,91:27,92:28,93:$Vc,94:$Vd,96:$Ve,98:$Vf,99:$Vg,100:$Vh},{37:$VG,38:$VH,39:$VI,40:$VJ,41:$VK,42:$VL,43:$VM,44:$VN,45:$VO,46:$VP,47:$VQ,48:$VR,49:$VS,50:$VT,51:$VU,57:[1,225]},o($VB,[2,106]),{54:[2,108]},{54:[2,109]},{4:226,6:13,7:$V0,8:$V1,9:$V2,10:$V3,11:$V4,17:3,18:4,20:5,21:6,22:7,23:8,24:9,25:10,26:11,27:12,30:$V5,34:15,71:$V6,72:16,73:17,74:18,75:$V7,76:$V8,77:$V9,78:19,81:$Va,84:$Vb,89:25,90:26,91:27,92:28,93:$Vc,94:$Vd,96:$Ve,98:$Vf,99:$Vg,100:$Vh},{6:13,7:$V0,8:$V1,9:$V2,10:$V3,11:$V4,14:[1,227],17:42,18:4,20:5,21:6,22:7,23:8,24:9,25:10,26:11,27:12,30:$V5,34:15,71:$V6,72:16,73:17,74:18,75:$V7,76:$V8,77:$V9,78:19,81:$Va,84:$Vb,89:25,90:26,91:27,92:28,93:$Vc,94:$Vd,96:$Ve,98:$Vf,99:$Vg,100:$Vh},{4:228,6:13,7:$V0,8:$V1,9:$V2,10:$V3,11:$V4,17:3,18:4,20:5,21:6,22:7,23:8,24:9,25:10,26:11,27:12,30:$V5,34:15,71:$V6,72:16,73:17,74:18,75:$V7,76:$V8,77:$V9,78:19,81:$Va,84:$Vb,89:25,90:26,91:27,92:28,93:$Vc,94:$Vd,96:$Ve,98:$Vf,99:$Vg,100:$Vh},{6:13,7:$V0,8:$V1,9:$V2,10:$V3,11:$V4,14:[1,229],17:42,18:4,20:5,21:6,22:7,23:8,24:9,25:10,26:11,27:12,30:$V5,34:15,71:$V6,72:16,73:17,74:18,75:$V7,76:$V8,77:$V9,78:19,81:$Va,84:$Vb,89:25,90:26,91:27,92:28,93:$Vc,94:$Vd,96:$Ve,98:$Vf,99:$Vg,100:$Vh},o($VB,[2,96]),o($V31,[2,99],{18:4,20:5,21:6,22:7,23:8,24:9,25:10,26:11,27:12,6:13,34:15,72:16,73:17,74:18,78:19,89:25,90:26,91:27,92:28,17:42,7:$V0,8:$V1,9:$V2,10:$V3,11:$V4,30:$V5,71:$V6,75:$V7,76:$V8,77:$V9,81:$Va,84:$Vb,93:$Vc,94:$Vd,96:$Ve,98:$Vf,99:$Vg,100:$Vh}),o($VB,[2,95])],
defaultActions: {16:[2,79],17:[2,80],18:[2,81],29:[2,2],30:[2,3],31:[2,4],32:[2,5],33:[2,6],41:[2,1],148:[2,73],174:[2,82],175:[2,83],176:[2,84],186:[2,72],221:[2,108],222:[2,109]},
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
case 50:return addToken(yy_.yylloc, 'whileRw')
break;
case 51:return addToken(yy_.yylloc, 'forRw')
break;
case 52:return addToken(yy_.yylloc, 'doRw')
break;
case 53:return addToken(yy_.yylloc, 'inRw')
break;
case 54:return addToken(yy_.yylloc, 'continueRw')
break;
case 55:return addToken(yy_.yylloc, 'returnRw')
break;
case 56:"\""
break;
case 57:"\\\""
break;
case 58:"\\\\"
break;
case 59:"\\n"
break;
case 60:"\\r"
break;
case 61:"\\t"
break;
case 62:"\\0"
break;
case 63:
                                yy_.yytext = yy_.yytext.substr(1,yy_.yyleng-2);
                                return addToken(yy_.yylloc, 'text');
                            
break;
case 64:
                                yy_.yytext = yy_.yytext.substr(1,yy_.yyleng-2);
                                return addToken(yy_.yylloc, 'character');
						    
break;
case 65:return addToken(yy_.yylloc, 'decimal')
break;
case 66:return addToken(yy_.yylloc, 'integer')
break;
case 67:return addToken(yy_.yylloc, 'id')
break;
case 68:return 5
break;
case 69:
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
rules: [/^(?:\s+)/i,/^(?:\/\/.*)/i,/^(?:[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/])/i,/^(?:char\b)/i,/^(?:boolean\b)/i,/^(?:null\b)/i,/^(?:string\b)/i,/^(?:double\b)/i,/^(?:int\b)/i,/^(?:true\b)/i,/^(?:false\b)/i,/^(?:void\b)/i,/^(?:<=)/i,/^(?:>=)/i,/^(?:==)/i,/^(?:--)/i,/^(?:!=)/i,/^(?:\+\+)/i,/^(?:\?)/i,/^(?::)/i,/^(?:\/)/i,/^(?:%)/i,/^(?:\*)/i,/^(?:\^)/i,/^(?:=)/i,/^(?:<)/i,/^(?:>)/i,/^(?:-)/i,/^(?:\+)/i,/^(?:&&)/i,/^(?:!)/i,/^(?:\|\|)/i,/^(?:&)/i,/^(?:,)/i,/^(?:;)/i,/^(?:\{)/i,/^(?:\})/i,/^(?:\()/i,/^(?:\))/i,/^(?:\[)/i,/^(?:\])/i,/^(?:print\b)/i,/^(?:printLn\b)/i,/^(?:eval\b)/i,/^(?:else\b)/i,/^(?:if\b)/i,/^(?:default\b)/i,/^(?:switch\b)/i,/^(?:break\b)/i,/^(?:case\b)/i,/^(?:while\b)/i,/^(?:for\b)/i,/^(?:do\b)/i,/^(?:in\b)/i,/^(?:continue\b)/i,/^(?:return\b)/i,/^(?:QUOTES\b)/i,/^(?:PIPE_QUOTES\b)/i,/^(?:DOUBLE_PIPES\b)/i,/^(?:BREAKLINE\b)/i,/^(?:CARRETURN\b)/i,/^(?:TABULATION\b)/i,/^(?:NULLCHAR\b)/i,/^(?:"[^\"]*")/i,/^(?:'[^\']?')/i,/^(?:[0-9]*\.[0-9]+\b)/i,/^(?:[0-9]+\b)/i,/^(?:([a-zA-Z])[a-zA-Z0-9_]*)/i,/^(?:$)/i,/^(?:.)/i],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
return parser;
});