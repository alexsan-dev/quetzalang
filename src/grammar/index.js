

define(function(require){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,35],$V1=[1,36],$V2=[1,37],$V3=[1,38],$V4=[1,39],$V5=[1,14],$V6=[1,30],$V7=[1,40],$V8=[1,41],$V9=[1,42],$Va=[1,43],$Vb=[1,44],$Vc=[1,45],$Vd=[1,46],$Ve=[1,47],$Vf=[1,48],$Vg=[1,49],$Vh=[1,26],$Vi=[1,50],$Vj=[1,52],$Vk=[1,51],$Vl=[1,27],$Vm=[1,28],$Vn=[1,29],$Vo=[5,7,8,9,10,11,14,30,71,81,82,83,84,85,86,87,88,89,93,96,98,100,105,106,108,110,111,112],$Vp=[2,30],$Vq=[1,62],$Vr=[1,64],$Vs=[1,65],$Vt=[1,63],$Vu=[19,29,54],$Vv=[13,19,29,30,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,54,56,57,81,82,83,84,85,86,87,88,89,96,105,106,108,110,111,112],$Vw=[1,68],$Vx=[1,80],$Vy=[1,75],$Vz=[1,74],$VA=[1,76],$VB=[1,78],$VC=[1,79],$VD=[1,81],$VE=[1,82],$VF=[1,83],$VG=[1,84],$VH=[1,85],$VI=[5,7,8,9,10,11,14,30,71,81,82,83,84,85,86,87,88,89,93,94,96,98,100,105,106,108,110,111,112],$VJ=[1,103],$VK=[1,112],$VL=[19,29],$VM=[1,115],$VN=[1,127],$VO=[1,128],$VP=[1,129],$VQ=[1,130],$VR=[1,131],$VS=[1,132],$VT=[1,133],$VU=[1,134],$VV=[1,135],$VW=[1,136],$VX=[1,137],$VY=[1,138],$VZ=[1,139],$V_=[1,140],$V$=[1,141],$V01=[19,29,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,54,56,57],$V11=[1,168],$V21=[1,176],$V31=[1,178],$V41=[29,54],$V51=[19,29,37,38,39,40,41,45,47,48,49,50,51,54,56,57],$V61=[19,29,38,39,40,41,48,49,50,51,54,56,57],$V71=[19,29,50,51,54,56,57],$V81=[1,239],$V91=[14,98,100];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"START":3,"INSTRUCTIONS":4,"EOF":5,"TYPE":6,"intType":7,"dblType":8,"boolType":9,"charType":10,"strType":11,"BLOCKCONTENT":12,"openBracket":13,"closeBracket":14,"INLINEBLOCKCONTENT":15,"INLINEINSTRUCTION":16,"INSTRUCTION":17,"DECLARATION":18,"semicolom":19,"ASSIGNMENT":20,"METHOD":21,"FUNCTIONCALL":22,"CONTROLSEQ":23,"SWITCHSEQ":24,"LOOPESCAPE":25,"FUNCTION":26,"LOOPSEQ":27,"ASSIGNMENTS":28,"comma":29,"id":30,"equals":31,"EXPRESSIONS":32,"TERNARY":33,"INCREMENTALASSIGNMENT":34,"plusPlus":35,"minusMinus":36,"plus":37,"equalsEquals":38,"moreOrEquals":39,"lessOrEquals":40,"nonEquals":41,"division":42,"module":43,"power":44,"concat":45,"times":46,"minus":47,"minor":48,"major":49,"and":50,"or":51,"not":52,"openParenthesis":53,"closeParenthesis":54,"VARVALUE":55,"questionMark":56,"colom":57,"EXPLIST":58,"decimal":59,"text":60,"integer":61,"character":62,"trBool":63,"flBool":64,"nullType":65,"PARAMSLIST":66,"PARAMVAR":67,"openSquareBracket":68,"closeSquareBracket":69,"FUNCTIONPARAMS":70,"voidType":71,"PRINT":72,"PRINTLN":73,"EVAL":74,"COS":75,"LOG":76,"POW":77,"SIN":78,"SQRT":79,"TAN":80,"printRw":81,"printLnRw":82,"evalRw":83,"cosRw":84,"log10Rw":85,"powRw":86,"sinRw":87,"sqrtRw":88,"tanRw":89,"IFSEQUENCE":90,"ELSESEQUENCE":91,"CONTROLSEQELIFS":92,"ifRw":93,"elseRw":94,"CONTROLSEQELIF":95,"switchRw":96,"SWITCHSEQCASES":97,"defaultRw":98,"SWITCHSEQCONTENT":99,"caseRw":100,"WHILESEQ":101,"DOWHILESEQ":102,"FORINSEQ":103,"FORSEQ":104,"whileRw":105,"forRw":106,"inRw":107,"doRw":108,"FORSEQPARAMS":109,"breakRw":110,"continueRw":111,"returnRw":112,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",7:"intType",8:"dblType",9:"boolType",10:"charType",11:"strType",13:"openBracket",14:"closeBracket",19:"semicolom",29:"comma",30:"id",31:"equals",35:"plusPlus",36:"minusMinus",37:"plus",38:"equalsEquals",39:"moreOrEquals",40:"lessOrEquals",41:"nonEquals",42:"division",43:"module",44:"power",45:"concat",46:"times",47:"minus",48:"minor",49:"major",50:"and",51:"or",52:"not",53:"openParenthesis",54:"closeParenthesis",56:"questionMark",57:"colom",59:"decimal",60:"text",61:"integer",62:"character",63:"trBool",64:"flBool",65:"nullType",68:"openSquareBracket",69:"closeSquareBracket",71:"voidType",81:"printRw",82:"printLnRw",83:"evalRw",84:"cosRw",85:"log10Rw",86:"powRw",87:"sinRw",88:"sqrtRw",89:"tanRw",93:"ifRw",94:"elseRw",96:"switchRw",98:"defaultRw",100:"caseRw",105:"whileRw",106:"forRw",107:"inRw",108:"doRw",110:"breakRw",111:"continueRw",112:"returnRw"},
productions_: [0,[3,2],[6,1],[6,1],[6,1],[6,1],[6,1],[12,3],[15,1],[15,1],[4,2],[4,1],[17,2],[17,2],[17,2],[17,2],[17,1],[17,1],[17,1],[17,1],[17,1],[16,2],[16,2],[16,2],[16,1],[16,1],[16,1],[18,2],[28,3],[28,1],[20,1],[20,3],[20,3],[20,1],[34,2],[34,2],[32,3],[32,3],[32,3],[32,3],[32,3],[32,3],[32,3],[32,3],[32,3],[32,3],[32,3],[32,3],[32,3],[32,3],[32,3],[32,2],[32,2],[32,3],[32,1],[32,3],[33,5],[58,3],[58,1],[55,1],[55,1],[55,1],[55,1],[55,1],[55,1],[55,1],[55,1],[55,1],[55,1],[66,3],[66,1],[67,2],[67,4],[70,3],[70,2],[26,4],[26,6],[26,4],[22,4],[22,3],[21,1],[21,1],[21,1],[21,1],[21,1],[21,1],[21,1],[21,1],[21,1],[72,4],[73,4],[74,4],[75,4],[76,4],[77,4],[78,4],[79,4],[80,4],[23,1],[23,2],[23,2],[23,3],[90,5],[91,2],[92,2],[92,1],[95,6],[24,7],[24,10],[24,9],[97,2],[97,1],[99,4],[27,1],[27,1],[27,1],[27,1],[101,5],[103,5],[102,7],[104,5],[109,5],[109,5],[25,2],[25,2],[25,3]],
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
case 7: case 12: case 13: case 14: case 15: case 21: case 22: case 23: case 55: case 73:

        this.$ = $$[$0-1];
    
break;
case 8: case 16: case 17: case 18: case 19: case 24: case 25: case 33: case 67: case 68: case 80: case 81: case 82: case 83: case 84: case 85: case 86: case 87: case 88:

        this.$ = $$[$0];
    
break;
case 9: case 11: case 29: case 58: case 70: case 105: case 111:

        this.$ = [$$[$0]];
    
break;
case 10: case 104: case 110:

        this.$ = $$[$0-1];
        this.$.push($$[$0]);
    
break;
case 20: case 26:

        this.$ = $$[$0];    
    
break;
case 27:

        this.$ = new Declaration(getToken(_$[$0-1]), { type: $$[$0-1], assignments: $$[$0] });
    
break;
case 28: case 57: case 69:

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
case 71:

        this.$ = { type: $$[$0-1], id: $$[$0] };
    
break;
case 72:

        this.$ = { type: DataType.ARRAY, id: $$[$0-2], generic: $$[$0-3] };
    
break;
case 74:

        this.$ = [];
    
break;
case 75:

        this.$ = new FunctionBlock(getToken(_$[$0-3]), { 
            id: $$[$0-2], type: $$[$0-3], params: $$[$0-1], content: $$[$0] });
    
break;
case 76:

        this.$ = new FunctionBlock(getToken(_$[$0-5]), { 
            id: $$[$0-4], type: DataType.ARRAY, generic: $$[$0-5] , params: $$[$0-1], content: $$[$0] });
    
break;
case 77:

        this.$ = new FunctionBlock(getToken(_$[$0-3]), { 
            id: $$[$0-2], type: DataType.VOID, params: $$[$0-1], content: $$[$0] });
    
break;
case 78:

        this.$ = new FunctionCall(getToken(_$[$0-3]), { params: $$[$0-1], id: $$[$0-3] })
    
break;
case 79:

        this.$ = new FunctionCall(getToken(_$[$0-2]), { params: [], id: $$[$0-2] })
    
break;
case 89:

        this.$ = new Print(getToken(_$[$0-3]), { params: $$[$0-1], breakLine: false });
    
break;
case 90:

        this.$ = new Print(getToken(_$[$0-3]), { params: $$[$0-1], breakLine: true });
    
break;
case 91:

        this.$ = new Evaluate(getToken(_$[$0-3]), { params: [$$[$0-1]] });
    
break;
case 92:

        this.$ = new Cos(getToken(_$[$0-3]), { params: [$$[$0-1]] });
    
break;
case 93:

        this.$ = new Log10(getToken(_$[$0-3]), { params: [$$[$0-1]] });
    
break;
case 94:

        this.$ = new Pow(getToken(_$[$0-3]), { params: $$[$0-1] });
    
break;
case 95:

        this.$ = new Sin(getToken(_$[$0-3]), { params: [$$[$0-1]] });
    
break;
case 96:

        this.$ = new Sqrt(getToken(_$[$0-3]), { params: [$$[$0-1]] });
    
break;
case 97:

        this.$ = new Tan(getToken(_$[$0-3]), { params: [$$[$0-1]] });
    
break;
case 98:

        this.$ = new Condition(getToken(_$[$0]), { 
            valid: { exp: $$[$0].exp, body: $$[$0].body }
        })
    
break;
case 99:

        this.$ = new Condition(getToken(_$[$0-1]), { 
            valid: { exp: $$[$0-1].exp, body: $$[$0-1].body },
            inValid: { exp: $$[$0-1].exp, body: $$[$0].body }
        })
    
break;
case 100:

        this.$ = new Condition(getToken(_$[$0-1]), { 
            valid: { exp: $$[$0-1].exp, body: $$[$0-1].body },
            fallback: $$[$0]
        })
    
break;
case 101:

        this.$ = new Condition(getToken(_$[$0-2]), { 
            inValid: { exp: $$[$0-2].exp, body: $$[$0].body },
            valid: { exp: $$[$0-2].exp, body: $$[$0-2].body },
            fallback: $$[$0-1]
        })
    
break;
case 102:

        this.$ = { exp: $$[$0-2], body: $$[$0] }
    
break;
case 103:

        this.$ = { exp: $$[$0-1], body: $$[$0] }
    
break;
case 106:

        this.$ = { exp: $$[$0-2], body: $$[$0] };
    
break;
case 107:

        this.$ = new Switch(getToken(_$[$0-6]), { value: $$[$0-4], cases: $$[$0-1] })
    
break;
case 108:

        this.$ = new Switch(getToken(_$[$0-9]), { 
            value: $$[$0-7], cases: $$[$0-4], default: { body: $$[$0-1] } })
    
break;
case 109:

        this.$ = new Switch(getToken(_$[$0-8]), { 
            value: $$[$0-6], default: { body: $$[$0-1] } })
    
break;
case 112:

        this.$ = { case: $$[$0-2], body: $$[$0] };
    
break;
case 117:

        this.$ = new CycleControl(getToken(_$[$0-4]), { 
            condition: $$[$0-2], body: $$[$0] 
         })
    
break;
case 118:

        this.$ = new ForInLoop(getToken(_$[$0-4]),  {
            iterVariable: $$[$0-3], iterReference: $$[$0-1], body: $$[$0]
        })
    
break;
case 119:

        this.$ = new CycleControl(getToken(_$[$0-6]), { 
            condition: $$[$0-2], body: $$[$0-5], isDoLoop: true
         })
    
break;
case 120:

        this.$ = new ForLoop(getToken(_$[$0-4]), { ...$$[$0-2], body: $$[$0] })
    
break;
case 121:

        this.$ = { withDeclarations: true, 
        assignments: [$$[$0-4]], condition: $$[$0-2], modifiers: $$[$0] }
    
break;
case 122:

        this.$ = { assignments: $$[$0-4], condition: $$[$0-2], modifiers: $$[$0] }
    
break;
case 123:

        this.$ = new ReturnValue(getToken(_$[$0-1]), { type: 'Break' })
    
break;
case 124:

        this.$ = new ReturnValue(getToken(_$[$0-1]), { type: 'Continue' })
    
break;
case 125:

        this.$ = new ReturnValue(getToken(_$[$0-2]), { content: $$[$0-1], type: 'Return'  });
    
break;
}
},
table: [{3:1,4:2,6:13,7:$V0,8:$V1,9:$V2,10:$V3,11:$V4,17:3,18:4,20:5,21:6,22:7,23:8,24:9,25:10,26:11,27:12,30:$V5,34:15,71:$V6,72:16,73:17,74:18,75:19,76:20,77:21,78:22,79:23,80:24,81:$V7,82:$V8,83:$V9,84:$Va,85:$Vb,86:$Vc,87:$Vd,88:$Ve,89:$Vf,90:25,93:$Vg,96:$Vh,101:31,102:32,103:33,104:34,105:$Vi,106:$Vj,108:$Vk,110:$Vl,111:$Vm,112:$Vn},{1:[3]},{5:[1,53],6:13,7:$V0,8:$V1,9:$V2,10:$V3,11:$V4,17:54,18:4,20:5,21:6,22:7,23:8,24:9,25:10,26:11,27:12,30:$V5,34:15,71:$V6,72:16,73:17,74:18,75:19,76:20,77:21,78:22,79:23,80:24,81:$V7,82:$V8,83:$V9,84:$Va,85:$Vb,86:$Vc,87:$Vd,88:$Ve,89:$Vf,90:25,93:$Vg,96:$Vh,101:31,102:32,103:33,104:34,105:$Vi,106:$Vj,108:$Vk,110:$Vl,111:$Vm,112:$Vn},o($Vo,[2,11]),{19:[1,55]},{19:[1,56]},{19:[1,57]},{19:[1,58]},o($Vo,[2,16]),o($Vo,[2,17]),o($Vo,[2,18]),o($Vo,[2,19]),o($Vo,[2,20]),{20:61,28:59,30:[1,60],34:15},{19:$Vp,31:$Vq,35:$Vr,36:$Vs,53:$Vt},o($Vu,[2,33]),o($Vv,[2,80]),o($Vv,[2,81]),o($Vv,[2,82]),o($Vv,[2,83]),o($Vv,[2,84]),o($Vv,[2,85]),o($Vv,[2,86]),o($Vv,[2,87]),o($Vv,[2,88]),o($Vo,[2,98],{91:66,92:67,95:69,94:$Vw}),{53:[1,70]},{19:[1,71]},{19:[1,72]},{21:87,22:86,30:$Vx,32:73,47:$Vy,52:$Vz,53:$VA,55:77,59:$VB,60:$VC,61:$VD,62:$VE,63:$VF,64:$VG,65:$VH,72:16,73:17,74:18,75:19,76:20,77:21,78:22,79:23,80:24,81:$V7,82:$V8,83:$V9,84:$Va,85:$Vb,86:$Vc,87:$Vd,88:$Ve,89:$Vf},{30:[1,88]},o($VI,[2,113]),o($VI,[2,114]),o($VI,[2,115]),o($VI,[2,116]),{30:[2,2]},{30:[2,3]},{30:[2,4]},{30:[2,5]},{30:[2,6]},{53:[1,89]},{53:[1,90]},{53:[1,91]},{53:[1,92]},{53:[1,93]},{53:[1,94]},{53:[1,95]},{53:[1,96]},{53:[1,97]},{53:[1,98]},{53:[1,99]},{12:101,13:$VJ,15:100,16:102,20:104,21:106,22:105,24:107,25:108,27:109,30:$V5,34:15,72:16,73:17,74:18,75:19,76:20,77:21,78:22,79:23,80:24,81:$V7,82:$V8,83:$V9,84:$Va,85:$Vb,86:$Vc,87:$Vd,88:$Ve,89:$Vf,96:$Vh,101:31,102:32,103:33,104:34,105:$Vi,106:$Vj,108:$Vk,110:$Vl,111:$Vm,112:$Vn},{30:[1,110],53:[1,111]},{1:[2,1]},o($Vo,[2,10]),o($Vo,[2,12]),o($Vo,[2,13]),o($Vo,[2,14]),o($Vo,[2,15]),{19:[2,27],29:$VK},o($VL,$Vp,{70:113,31:$Vq,35:$Vr,36:$Vs,53:$VM,68:[1,114]}),o($VL,[2,29]),{21:87,22:86,30:$Vx,32:116,33:117,47:$Vy,52:$Vz,53:$VA,55:77,59:$VB,60:$VC,61:$VD,62:$VE,63:$VF,64:$VG,65:$VH,72:16,73:17,74:18,75:19,76:20,77:21,78:22,79:23,80:24,81:$V7,82:$V8,83:$V9,84:$Va,85:$Vb,86:$Vc,87:$Vd,88:$Ve,89:$Vf},{21:87,22:86,30:$Vx,32:120,47:$Vy,52:$Vz,53:$VA,54:[1,119],55:77,58:118,59:$VB,60:$VC,61:$VD,62:$VE,63:$VF,64:$VG,65:$VH,72:16,73:17,74:18,75:19,76:20,77:21,78:22,79:23,80:24,81:$V7,82:$V8,83:$V9,84:$Va,85:$Vb,86:$Vc,87:$Vd,88:$Ve,89:$Vf},o($Vu,[2,34]),o($Vu,[2,35]),o($Vo,[2,99]),o($Vo,[2,100],{91:121,95:122,94:$Vw}),{12:101,13:$VJ,15:123,16:102,20:104,21:106,22:105,24:107,25:108,27:109,30:$V5,34:15,72:16,73:17,74:18,75:19,76:20,77:21,78:22,79:23,80:24,81:$V7,82:$V8,83:$V9,84:$Va,85:$Vb,86:$Vc,87:$Vd,88:$Ve,89:$Vf,93:[1,124],96:$Vh,101:31,102:32,103:33,104:34,105:$Vi,106:$Vj,108:$Vk,110:$Vl,111:$Vm,112:$Vn},o($VI,[2,105]),{21:87,22:86,30:$Vx,32:125,47:$Vy,52:$Vz,53:$VA,55:77,59:$VB,60:$VC,61:$VD,62:$VE,63:$VF,64:$VG,65:$VH,72:16,73:17,74:18,75:19,76:20,77:21,78:22,79:23,80:24,81:$V7,82:$V8,83:$V9,84:$Va,85:$Vb,86:$Vc,87:$Vd,88:$Ve,89:$Vf},o($VI,[2,123]),o($VI,[2,124]),{19:[1,126],37:$VN,38:$VO,39:$VP,40:$VQ,41:$VR,42:$VS,43:$VT,44:$VU,45:$VV,46:$VW,47:$VX,48:$VY,49:$VZ,50:$V_,51:$V$},{21:87,22:86,30:$Vx,32:142,47:$Vy,52:$Vz,53:$VA,55:77,59:$VB,60:$VC,61:$VD,62:$VE,63:$VF,64:$VG,65:$VH,72:16,73:17,74:18,75:19,76:20,77:21,78:22,79:23,80:24,81:$V7,82:$V8,83:$V9,84:$Va,85:$Vb,86:$Vc,87:$Vd,88:$Ve,89:$Vf},{21:87,22:86,30:$Vx,32:143,47:$Vy,52:$Vz,53:$VA,55:77,59:$VB,60:$VC,61:$VD,62:$VE,63:$VF,64:$VG,65:$VH,72:16,73:17,74:18,75:19,76:20,77:21,78:22,79:23,80:24,81:$V7,82:$V8,83:$V9,84:$Va,85:$Vb,86:$Vc,87:$Vd,88:$Ve,89:$Vf},{21:87,22:86,30:$Vx,32:144,33:145,47:$Vy,52:$Vz,53:$VA,55:77,59:$VB,60:$VC,61:$VD,62:$VE,63:$VF,64:$VG,65:$VH,72:16,73:17,74:18,75:19,76:20,77:21,78:22,79:23,80:24,81:$V7,82:$V8,83:$V9,84:$Va,85:$Vb,86:$Vc,87:$Vd,88:$Ve,89:$Vf},o($V01,[2,54]),o($Vv,[2,59]),o($Vv,[2,60]),o($Vv,[2,61],{53:$Vt}),o($Vv,[2,62]),o($Vv,[2,63]),o($Vv,[2,64]),o($Vv,[2,65]),o($Vv,[2,66]),o($Vv,[2,67]),o($Vv,[2,68]),{53:$VM,70:146},{21:87,22:86,30:$Vx,32:120,47:$Vy,52:$Vz,53:$VA,55:77,58:147,59:$VB,60:$VC,61:$VD,62:$VE,63:$VF,64:$VG,65:$VH,72:16,73:17,74:18,75:19,76:20,77:21,78:22,79:23,80:24,81:$V7,82:$V8,83:$V9,84:$Va,85:$Vb,86:$Vc,87:$Vd,88:$Ve,89:$Vf},{21:87,22:86,30:$Vx,32:120,47:$Vy,52:$Vz,53:$VA,55:77,58:148,59:$VB,60:$VC,61:$VD,62:$VE,63:$VF,64:$VG,65:$VH,72:16,73:17,74:18,75:19,76:20,77:21,78:22,79:23,80:24,81:$V7,82:$V8,83:$V9,84:$Va,85:$Vb,86:$Vc,87:$Vd,88:$Ve,89:$Vf},{21:87,22:86,30:$Vx,32:149,47:$Vy,52:$Vz,53:$VA,55:77,59:$VB,60:$VC,61:$VD,62:$VE,63:$VF,64:$VG,65:$VH,72:16,73:17,74:18,75:19,76:20,77:21,78:22,79:23,80:24,81:$V7,82:$V8,83:$V9,84:$Va,85:$Vb,86:$Vc,87:$Vd,88:$Ve,89:$Vf},{21:87,22:86,30:$Vx,32:150,47:$Vy,52:$Vz,53:$VA,55:77,59:$VB,60:$VC,61:$VD,62:$VE,63:$VF,64:$VG,65:$VH,72:16,73:17,74:18,75:19,76:20,77:21,78:22,79:23,80:24,81:$V7,82:$V8,83:$V9,84:$Va,85:$Vb,86:$Vc,87:$Vd,88:$Ve,89:$Vf},{21:87,22:86,30:$Vx,32:151,47:$Vy,52:$Vz,53:$VA,55:77,59:$VB,60:$VC,61:$VD,62:$VE,63:$VF,64:$VG,65:$VH,72:16,73:17,74:18,75:19,76:20,77:21,78:22,79:23,80:24,81:$V7,82:$V8,83:$V9,84:$Va,85:$Vb,86:$Vc,87:$Vd,88:$Ve,89:$Vf},{21:87,22:86,30:$Vx,32:120,47:$Vy,52:$Vz,53:$VA,55:77,58:152,59:$VB,60:$VC,61:$VD,62:$VE,63:$VF,64:$VG,65:$VH,72:16,73:17,74:18,75:19,76:20,77:21,78:22,79:23,80:24,81:$V7,82:$V8,83:$V9,84:$Va,85:$Vb,86:$Vc,87:$Vd,88:$Ve,89:$Vf},{21:87,22:86,30:$Vx,32:153,47:$Vy,52:$Vz,53:$VA,55:77,59:$VB,60:$VC,61:$VD,62:$VE,63:$VF,64:$VG,65:$VH,72:16,73:17,74:18,75:19,76:20,77:21,78:22,79:23,80:24,81:$V7,82:$V8,83:$V9,84:$Va,85:$Vb,86:$Vc,87:$Vd,88:$Ve,89:$Vf},{21:87,22:86,30:$Vx,32:154,47:$Vy,52:$Vz,53:$VA,55:77,59:$VB,60:$VC,61:$VD,62:$VE,63:$VF,64:$VG,65:$VH,72:16,73:17,74:18,75:19,76:20,77:21,78:22,79:23,80:24,81:$V7,82:$V8,83:$V9,84:$Va,85:$Vb,86:$Vc,87:$Vd,88:$Ve,89:$Vf},{21:87,22:86,30:$Vx,32:155,47:$Vy,52:$Vz,53:$VA,55:77,59:$VB,60:$VC,61:$VD,62:$VE,63:$VF,64:$VG,65:$VH,72:16,73:17,74:18,75:19,76:20,77:21,78:22,79:23,80:24,81:$V7,82:$V8,83:$V9,84:$Va,85:$Vb,86:$Vc,87:$Vd,88:$Ve,89:$Vf},{21:87,22:86,30:$Vx,32:156,47:$Vy,52:$Vz,53:$VA,55:77,59:$VB,60:$VC,61:$VD,62:$VE,63:$VF,64:$VG,65:$VH,72:16,73:17,74:18,75:19,76:20,77:21,78:22,79:23,80:24,81:$V7,82:$V8,83:$V9,84:$Va,85:$Vb,86:$Vc,87:$Vd,88:$Ve,89:$Vf},{21:87,22:86,30:$Vx,32:157,47:$Vy,52:$Vz,53:$VA,55:77,59:$VB,60:$VC,61:$VD,62:$VE,63:$VF,64:$VG,65:$VH,72:16,73:17,74:18,75:19,76:20,77:21,78:22,79:23,80:24,81:$V7,82:$V8,83:$V9,84:$Va,85:$Vb,86:$Vc,87:$Vd,88:$Ve,89:$Vf},{105:[1,158]},o($VI,[2,8]),o($VI,[2,9]),{4:159,6:13,7:$V0,8:$V1,9:$V2,10:$V3,11:$V4,17:3,18:4,20:5,21:6,22:7,23:8,24:9,25:10,26:11,27:12,30:$V5,34:15,71:$V6,72:16,73:17,74:18,75:19,76:20,77:21,78:22,79:23,80:24,81:$V7,82:$V8,83:$V9,84:$Va,85:$Vb,86:$Vc,87:$Vd,88:$Ve,89:$Vf,90:25,93:$Vg,96:$Vh,101:31,102:32,103:33,104:34,105:$Vi,106:$Vj,108:$Vk,110:$Vl,111:$Vm,112:$Vn},{19:[1,160]},{19:[1,161]},{19:[1,162]},o($VI,[2,24]),o($VI,[2,25]),o($VI,[2,26]),{107:[1,163]},{6:167,7:$V0,8:$V1,9:$V2,10:$V3,11:$V4,18:165,20:61,28:166,30:$V11,34:15,109:164},{20:169,30:$V11,34:15},{12:170,13:$VJ},{69:[1,171]},{6:175,7:$V0,8:$V1,9:$V2,10:$V3,11:$V4,54:[1,173],66:172,67:174},o($Vu,[2,31],{37:$VN,38:$VO,39:$VP,40:$VQ,41:$VR,42:$VS,43:$VT,44:$VU,45:$VV,46:$VW,47:$VX,48:$VY,49:$VZ,50:$V_,51:$V$,56:$V21}),o($Vu,[2,32]),{29:$V31,54:[1,177]},o($Vv,[2,79]),o($V41,[2,58],{37:$VN,38:$VO,39:$VP,40:$VQ,41:$VR,42:$VS,43:$VT,44:$VU,45:$VV,46:$VW,47:$VX,48:$VY,49:$VZ,50:$V_,51:$V$}),o($Vo,[2,101]),o($VI,[2,104]),o($Vo,[2,103]),{53:[1,179]},{37:$VN,38:$VO,39:$VP,40:$VQ,41:$VR,42:$VS,43:$VT,44:$VU,45:$VV,46:$VW,47:$VX,48:$VY,49:$VZ,50:$V_,51:$V$,54:[1,180]},o($VI,[2,125]),{21:87,22:86,30:$Vx,32:181,47:$Vy,52:$Vz,53:$VA,55:77,59:$VB,60:$VC,61:$VD,62:$VE,63:$VF,64:$VG,65:$VH,72:16,73:17,74:18,75:19,76:20,77:21,78:22,79:23,80:24,81:$V7,82:$V8,83:$V9,84:$Va,85:$Vb,86:$Vc,87:$Vd,88:$Ve,89:$Vf},{21:87,22:86,30:$Vx,32:182,47:$Vy,52:$Vz,53:$VA,55:77,59:$VB,60:$VC,61:$VD,62:$VE,63:$VF,64:$VG,65:$VH,72:16,73:17,74:18,75:19,76:20,77:21,78:22,79:23,80:24,81:$V7,82:$V8,83:$V9,84:$Va,85:$Vb,86:$Vc,87:$Vd,88:$Ve,89:$Vf},{21:87,22:86,30:$Vx,32:183,47:$Vy,52:$Vz,53:$VA,55:77,59:$VB,60:$VC,61:$VD,62:$VE,63:$VF,64:$VG,65:$VH,72:16,73:17,74:18,75:19,76:20,77:21,78:22,79:23,80:24,81:$V7,82:$V8,83:$V9,84:$Va,85:$Vb,86:$Vc,87:$Vd,88:$Ve,89:$Vf},{21:87,22:86,30:$Vx,32:184,47:$Vy,52:$Vz,53:$VA,55:77,59:$VB,60:$VC,61:$VD,62:$VE,63:$VF,64:$VG,65:$VH,72:16,73:17,74:18,75:19,76:20,77:21,78:22,79:23,80:24,81:$V7,82:$V8,83:$V9,84:$Va,85:$Vb,86:$Vc,87:$Vd,88:$Ve,89:$Vf},{21:87,22:86,30:$Vx,32:185,47:$Vy,52:$Vz,53:$VA,55:77,59:$VB,60:$VC,61:$VD,62:$VE,63:$VF,64:$VG,65:$VH,72:16,73:17,74:18,75:19,76:20,77:21,78:22,79:23,80:24,81:$V7,82:$V8,83:$V9,84:$Va,85:$Vb,86:$Vc,87:$Vd,88:$Ve,89:$Vf},{21:87,22:86,30:$Vx,32:186,47:$Vy,52:$Vz,53:$VA,55:77,59:$VB,60:$VC,61:$VD,62:$VE,63:$VF,64:$VG,65:$VH,72:16,73:17,74:18,75:19,76:20,77:21,78:22,79:23,80:24,81:$V7,82:$V8,83:$V9,84:$Va,85:$Vb,86:$Vc,87:$Vd,88:$Ve,89:$Vf},{21:87,22:86,30:$Vx,32:187,47:$Vy,52:$Vz,53:$VA,55:77,59:$VB,60:$VC,61:$VD,62:$VE,63:$VF,64:$VG,65:$VH,72:16,73:17,74:18,75:19,76:20,77:21,78:22,79:23,80:24,81:$V7,82:$V8,83:$V9,84:$Va,85:$Vb,86:$Vc,87:$Vd,88:$Ve,89:$Vf},{21:87,22:86,30:$Vx,32:188,47:$Vy,52:$Vz,53:$VA,55:77,59:$VB,60:$VC,61:$VD,62:$VE,63:$VF,64:$VG,65:$VH,72:16,73:17,74:18,75:19,76:20,77:21,78:22,79:23,80:24,81:$V7,82:$V8,83:$V9,84:$Va,85:$Vb,86:$Vc,87:$Vd,88:$Ve,89:$Vf},{21:87,22:86,30:$Vx,32:189,47:$Vy,52:$Vz,53:$VA,55:77,59:$VB,60:$VC,61:$VD,62:$VE,63:$VF,64:$VG,65:$VH,72:16,73:17,74:18,75:19,76:20,77:21,78:22,79:23,80:24,81:$V7,82:$V8,83:$V9,84:$Va,85:$Vb,86:$Vc,87:$Vd,88:$Ve,89:$Vf},{21:87,22:86,30:$Vx,32:190,47:$Vy,52:$Vz,53:$VA,55:77,59:$VB,60:$VC,61:$VD,62:$VE,63:$VF,64:$VG,65:$VH,72:16,73:17,74:18,75:19,76:20,77:21,78:22,79:23,80:24,81:$V7,82:$V8,83:$V9,84:$Va,85:$Vb,86:$Vc,87:$Vd,88:$Ve,89:$Vf},{21:87,22:86,30:$Vx,32:191,47:$Vy,52:$Vz,53:$VA,55:77,59:$VB,60:$VC,61:$VD,62:$VE,63:$VF,64:$VG,65:$VH,72:16,73:17,74:18,75:19,76:20,77:21,78:22,79:23,80:24,81:$V7,82:$V8,83:$V9,84:$Va,85:$Vb,86:$Vc,87:$Vd,88:$Ve,89:$Vf},{21:87,22:86,30:$Vx,32:192,47:$Vy,52:$Vz,53:$VA,55:77,59:$VB,60:$VC,61:$VD,62:$VE,63:$VF,64:$VG,65:$VH,72:16,73:17,74:18,75:19,76:20,77:21,78:22,79:23,80:24,81:$V7,82:$V8,83:$V9,84:$Va,85:$Vb,86:$Vc,87:$Vd,88:$Ve,89:$Vf},{21:87,22:86,30:$Vx,32:193,47:$Vy,52:$Vz,53:$VA,55:77,59:$VB,60:$VC,61:$VD,62:$VE,63:$VF,64:$VG,65:$VH,72:16,73:17,74:18,75:19,76:20,77:21,78:22,79:23,80:24,81:$V7,82:$V8,83:$V9,84:$Va,85:$Vb,86:$Vc,87:$Vd,88:$Ve,89:$Vf},{21:87,22:86,30:$Vx,32:194,47:$Vy,52:$Vz,53:$VA,55:77,59:$VB,60:$VC,61:$VD,62:$VE,63:$VF,64:$VG,65:$VH,72:16,73:17,74:18,75:19,76:20,77:21,78:22,79:23,80:24,81:$V7,82:$V8,83:$V9,84:$Va,85:$Vb,86:$Vc,87:$Vd,88:$Ve,89:$Vf},{21:87,22:86,30:$Vx,32:195,47:$Vy,52:$Vz,53:$VA,55:77,59:$VB,60:$VC,61:$VD,62:$VE,63:$VF,64:$VG,65:$VH,72:16,73:17,74:18,75:19,76:20,77:21,78:22,79:23,80:24,81:$V7,82:$V8,83:$V9,84:$Va,85:$Vb,86:$Vc,87:$Vd,88:$Ve,89:$Vf},o($V01,[2,51]),o($V51,[2,52],{42:$VS,43:$VT,44:$VU,46:$VW}),{37:$VN,38:$VO,39:$VP,40:$VQ,41:$VR,42:$VS,43:$VT,44:$VU,45:$VV,46:$VW,47:$VX,48:$VY,49:$VZ,50:$V_,51:$V$,54:[1,196],56:$V21},{54:[1,197]},{12:198,13:$VJ},{29:$V31,54:[1,199]},{29:$V31,54:[1,200]},{37:$VN,38:$VO,39:$VP,40:$VQ,41:$VR,42:$VS,43:$VT,44:$VU,45:$VV,46:$VW,47:$VX,48:$VY,49:$VZ,50:$V_,51:$V$,54:[1,201]},{37:$VN,38:$VO,39:$VP,40:$VQ,41:$VR,42:$VS,43:$VT,44:$VU,45:$VV,46:$VW,47:$VX,48:$VY,49:$VZ,50:$V_,51:$V$,54:[1,202]},{37:$VN,38:$VO,39:$VP,40:$VQ,41:$VR,42:$VS,43:$VT,44:$VU,45:$VV,46:$VW,47:$VX,48:$VY,49:$VZ,50:$V_,51:$V$,54:[1,203]},{29:$V31,54:[1,204]},{37:$VN,38:$VO,39:$VP,40:$VQ,41:$VR,42:$VS,43:$VT,44:$VU,45:$VV,46:$VW,47:$VX,48:$VY,49:$VZ,50:$V_,51:$V$,54:[1,205]},{37:$VN,38:$VO,39:$VP,40:$VQ,41:$VR,42:$VS,43:$VT,44:$VU,45:$VV,46:$VW,47:$VX,48:$VY,49:$VZ,50:$V_,51:$V$,54:[1,206]},{37:$VN,38:$VO,39:$VP,40:$VQ,41:$VR,42:$VS,43:$VT,44:$VU,45:$VV,46:$VW,47:$VX,48:$VY,49:$VZ,50:$V_,51:$V$,54:[1,207]},{37:$VN,38:$VO,39:$VP,40:$VQ,41:$VR,42:$VS,43:$VT,44:$VU,45:$VV,46:$VW,47:$VX,48:$VY,49:$VZ,50:$V_,51:$V$,54:[1,208]},{37:$VN,38:$VO,39:$VP,40:$VQ,41:$VR,42:$VS,43:$VT,44:$VU,45:$VV,46:$VW,47:$VX,48:$VY,49:$VZ,50:$V_,51:$V$,54:[1,209]},{53:[1,210]},{6:13,7:$V0,8:$V1,9:$V2,10:$V3,11:$V4,14:[1,211],17:54,18:4,20:5,21:6,22:7,23:8,24:9,25:10,26:11,27:12,30:$V5,34:15,71:$V6,72:16,73:17,74:18,75:19,76:20,77:21,78:22,79:23,80:24,81:$V7,82:$V8,83:$V9,84:$Va,85:$Vb,86:$Vc,87:$Vd,88:$Ve,89:$Vf,90:25,93:$Vg,96:$Vh,101:31,102:32,103:33,104:34,105:$Vi,106:$Vj,108:$Vk,110:$Vl,111:$Vm,112:$Vn},o($VI,[2,21]),o($VI,[2,22]),o($VI,[2,23]),{21:87,22:86,30:$Vx,55:212,59:$VB,60:$VC,61:$VD,62:$VE,63:$VF,64:$VG,65:$VH,72:16,73:17,74:18,75:19,76:20,77:21,78:22,79:23,80:24,81:$V7,82:$V8,83:$V9,84:$Va,85:$Vb,86:$Vc,87:$Vd,88:$Ve,89:$Vf},{54:[1,213]},{19:[1,214]},{19:[1,215],29:$VK},{20:61,28:59,30:$V11,34:15},o($Vu,$Vp,{31:$Vq,35:$Vr,36:$Vs}),o($VL,[2,28]),o($Vo,[2,75]),{53:$VM,70:216},{29:[1,218],54:[1,217]},{13:[2,74]},o($V41,[2,70]),{30:[1,219]},{21:87,22:86,30:$Vx,32:220,47:$Vy,52:$Vz,53:$VA,55:77,59:$VB,60:$VC,61:$VD,62:$VE,63:$VF,64:$VG,65:$VH,72:16,73:17,74:18,75:19,76:20,77:21,78:22,79:23,80:24,81:$V7,82:$V8,83:$V9,84:$Va,85:$Vb,86:$Vc,87:$Vd,88:$Ve,89:$Vf},o($Vv,[2,78]),{21:87,22:86,30:$Vx,32:221,47:$Vy,52:$Vz,53:$VA,55:77,59:$VB,60:$VC,61:$VD,62:$VE,63:$VF,64:$VG,65:$VH,72:16,73:17,74:18,75:19,76:20,77:21,78:22,79:23,80:24,81:$V7,82:$V8,83:$V9,84:$Va,85:$Vb,86:$Vc,87:$Vd,88:$Ve,89:$Vf},{21:87,22:86,30:$Vx,32:222,47:$Vy,52:$Vz,53:$VA,55:77,59:$VB,60:$VC,61:$VD,62:$VE,63:$VF,64:$VG,65:$VH,72:16,73:17,74:18,75:19,76:20,77:21,78:22,79:23,80:24,81:$V7,82:$V8,83:$V9,84:$Va,85:$Vb,86:$Vc,87:$Vd,88:$Ve,89:$Vf},{13:[1,223]},o($V51,[2,36],{42:$VS,43:$VT,44:$VU,46:$VW}),o($V61,[2,37],{37:$VN,42:$VS,43:$VT,44:$VU,45:$VV,46:$VW,47:$VX}),o($V61,[2,38],{37:$VN,42:$VS,43:$VT,44:$VU,45:$VV,46:$VW,47:$VX}),o($V61,[2,39],{37:$VN,42:$VS,43:$VT,44:$VU,45:$VV,46:$VW,47:$VX}),o($V61,[2,40],{37:$VN,42:$VS,43:$VT,44:$VU,45:$VV,46:$VW,47:$VX}),o($V01,[2,41]),o($V01,[2,42]),o($V01,[2,43]),o($V51,[2,44],{42:$VS,43:$VT,44:$VU,46:$VW}),o($V01,[2,45]),o($V51,[2,46],{42:$VS,43:$VT,44:$VU,46:$VW}),o($V61,[2,47],{37:$VN,42:$VS,43:$VT,44:$VU,45:$VV,46:$VW,47:$VX}),o($V61,[2,48],{37:$VN,42:$VS,43:$VT,44:$VU,45:$VV,46:$VW,47:$VX}),o($V71,[2,49],{37:$VN,38:$VO,39:$VP,40:$VQ,41:$VR,42:$VS,43:$VT,44:$VU,45:$VV,46:$VW,47:$VX,48:$VY,49:$VZ}),o($V71,[2,50],{37:$VN,38:$VO,39:$VP,40:$VQ,41:$VR,42:$VS,43:$VT,44:$VU,45:$VV,46:$VW,47:$VX,48:$VY,49:$VZ}),o($V01,[2,53]),o($V01,[2,55]),o($Vo,[2,77]),o($Vv,[2,89]),o($Vv,[2,90]),o($Vv,[2,91]),o($Vv,[2,92]),o($Vv,[2,93]),o($Vv,[2,94]),o($Vv,[2,95]),o($Vv,[2,96]),o($Vv,[2,97]),{12:101,13:$VJ,15:224,16:102,20:104,21:106,22:105,24:107,25:108,27:109,30:$V5,34:15,72:16,73:17,74:18,75:19,76:20,77:21,78:22,79:23,80:24,81:$V7,82:$V8,83:$V9,84:$Va,85:$Vb,86:$Vc,87:$Vd,88:$Ve,89:$Vf,96:$Vh,101:31,102:32,103:33,104:34,105:$Vi,106:$Vj,108:$Vk,110:$Vl,111:$Vm,112:$Vn},{12:101,13:$VJ,15:225,16:102,20:104,21:106,22:105,24:107,25:108,27:109,30:$V5,34:15,72:16,73:17,74:18,75:19,76:20,77:21,78:22,79:23,80:24,81:$V7,82:$V8,83:$V9,84:$Va,85:$Vb,86:$Vc,87:$Vd,88:$Ve,89:$Vf,96:$Vh,101:31,102:32,103:33,104:34,105:$Vi,106:$Vj,108:$Vk,110:$Vl,111:$Vm,112:$Vn},{21:87,22:86,30:$Vx,32:226,47:$Vy,52:$Vz,53:$VA,55:77,59:$VB,60:$VC,61:$VD,62:$VE,63:$VF,64:$VG,65:$VH,72:16,73:17,74:18,75:19,76:20,77:21,78:22,79:23,80:24,81:$V7,82:$V8,83:$V9,84:$Va,85:$Vb,86:$Vc,87:$Vd,88:$Ve,89:$Vf},o($VI,[2,7]),{12:101,13:$VJ,15:227,16:102,20:104,21:106,22:105,24:107,25:108,27:109,30:$V5,34:15,72:16,73:17,74:18,75:19,76:20,77:21,78:22,79:23,80:24,81:$V7,82:$V8,83:$V9,84:$Va,85:$Vb,86:$Vc,87:$Vd,88:$Ve,89:$Vf,96:$Vh,101:31,102:32,103:33,104:34,105:$Vi,106:$Vj,108:$Vk,110:$Vl,111:$Vm,112:$Vn},{12:101,13:$VJ,15:228,16:102,20:104,21:106,22:105,24:107,25:108,27:109,30:$V5,34:15,72:16,73:17,74:18,75:19,76:20,77:21,78:22,79:23,80:24,81:$V7,82:$V8,83:$V9,84:$Va,85:$Vb,86:$Vc,87:$Vd,88:$Ve,89:$Vf,96:$Vh,101:31,102:32,103:33,104:34,105:$Vi,106:$Vj,108:$Vk,110:$Vl,111:$Vm,112:$Vn},{21:87,22:86,30:$Vx,32:229,47:$Vy,52:$Vz,53:$VA,55:77,59:$VB,60:$VC,61:$VD,62:$VE,63:$VF,64:$VG,65:$VH,72:16,73:17,74:18,75:19,76:20,77:21,78:22,79:23,80:24,81:$V7,82:$V8,83:$V9,84:$Va,85:$Vb,86:$Vc,87:$Vd,88:$Ve,89:$Vf},{21:87,22:86,30:$Vx,32:230,47:$Vy,52:$Vz,53:$VA,55:77,59:$VB,60:$VC,61:$VD,62:$VE,63:$VF,64:$VG,65:$VH,72:16,73:17,74:18,75:19,76:20,77:21,78:22,79:23,80:24,81:$V7,82:$V8,83:$V9,84:$Va,85:$Vb,86:$Vc,87:$Vd,88:$Ve,89:$Vf},{12:231,13:$VJ},{13:[2,73]},{6:175,7:$V0,8:$V1,9:$V2,10:$V3,11:$V4,67:232},o($V41,[2,71],{68:[1,233]}),{37:$VN,38:$VO,39:$VP,40:$VQ,41:$VR,42:$VS,43:$VT,44:$VU,45:$VV,46:$VW,47:$VX,48:$VY,49:$VZ,50:$V_,51:$V$,57:[1,234]},o($V41,[2,57],{37:$VN,38:$VO,39:$VP,40:$VQ,41:$VR,42:$VS,43:$VT,44:$VU,45:$VV,46:$VW,47:$VX,48:$VY,49:$VZ,50:$V_,51:$V$}),{37:$VN,38:$VO,39:$VP,40:$VQ,41:$VR,42:$VS,43:$VT,44:$VU,45:$VV,46:$VW,47:$VX,48:$VY,49:$VZ,50:$V_,51:$V$,54:[1,235]},{97:236,98:[1,237],99:238,100:$V81},o($VI,[2,102]),o($VI,[2,117]),{37:$VN,38:$VO,39:$VP,40:$VQ,41:$VR,42:$VS,43:$VT,44:$VU,45:$VV,46:$VW,47:$VX,48:$VY,49:$VZ,50:$V_,51:$V$,54:[1,240]},o($VI,[2,118]),o($VI,[2,120]),{19:[1,241],37:$VN,38:$VO,39:$VP,40:$VQ,41:$VR,42:$VS,43:$VT,44:$VU,45:$VV,46:$VW,47:$VX,48:$VY,49:$VZ,50:$V_,51:$V$},{19:[1,242],37:$VN,38:$VO,39:$VP,40:$VQ,41:$VR,42:$VS,43:$VT,44:$VU,45:$VV,46:$VW,47:$VX,48:$VY,49:$VZ,50:$V_,51:$V$},o($Vo,[2,76]),o($V41,[2,69]),{69:[1,243]},{21:87,22:86,30:$Vx,32:244,47:$Vy,52:$Vz,53:$VA,55:77,59:$VB,60:$VC,61:$VD,62:$VE,63:$VF,64:$VG,65:$VH,72:16,73:17,74:18,75:19,76:20,77:21,78:22,79:23,80:24,81:$V7,82:$V8,83:$V9,84:$Va,85:$Vb,86:$Vc,87:$Vd,88:$Ve,89:$Vf},{12:101,13:$VJ,15:245,16:102,20:104,21:106,22:105,24:107,25:108,27:109,30:$V5,34:15,72:16,73:17,74:18,75:19,76:20,77:21,78:22,79:23,80:24,81:$V7,82:$V8,83:$V9,84:$Va,85:$Vb,86:$Vc,87:$Vd,88:$Ve,89:$Vf,96:$Vh,101:31,102:32,103:33,104:34,105:$Vi,106:$Vj,108:$Vk,110:$Vl,111:$Vm,112:$Vn},{14:[1,246],98:[1,247],99:248,100:$V81},{57:[1,249]},o($V91,[2,111]),{21:87,22:86,30:$Vx,32:250,47:$Vy,52:$Vz,53:$VA,55:77,59:$VB,60:$VC,61:$VD,62:$VE,63:$VF,64:$VG,65:$VH,72:16,73:17,74:18,75:19,76:20,77:21,78:22,79:23,80:24,81:$V7,82:$V8,83:$V9,84:$Va,85:$Vb,86:$Vc,87:$Vd,88:$Ve,89:$Vf},{19:[1,251]},{20:252,30:$V11,34:15},{20:253,30:$V11,34:15},o($V41,[2,72]),o($Vu,[2,56],{37:$VN,38:$VO,39:$VP,40:$VQ,41:$VR,42:$VS,43:$VT,44:$VU,45:$VV,46:$VW,47:$VX,48:$VY,49:$VZ,50:$V_,51:$V$}),o($VI,[2,106]),o($VI,[2,107]),{57:[1,254]},o($V91,[2,110]),{4:255,6:13,7:$V0,8:$V1,9:$V2,10:$V3,11:$V4,17:3,18:4,20:5,21:6,22:7,23:8,24:9,25:10,26:11,27:12,30:$V5,34:15,71:$V6,72:16,73:17,74:18,75:19,76:20,77:21,78:22,79:23,80:24,81:$V7,82:$V8,83:$V9,84:$Va,85:$Vb,86:$Vc,87:$Vd,88:$Ve,89:$Vf,90:25,93:$Vg,96:$Vh,101:31,102:32,103:33,104:34,105:$Vi,106:$Vj,108:$Vk,110:$Vl,111:$Vm,112:$Vn},{37:$VN,38:$VO,39:$VP,40:$VQ,41:$VR,42:$VS,43:$VT,44:$VU,45:$VV,46:$VW,47:$VX,48:$VY,49:$VZ,50:$V_,51:$V$,57:[1,256]},o($VI,[2,119]),{54:[2,121]},{54:[2,122]},{4:257,6:13,7:$V0,8:$V1,9:$V2,10:$V3,11:$V4,17:3,18:4,20:5,21:6,22:7,23:8,24:9,25:10,26:11,27:12,30:$V5,34:15,71:$V6,72:16,73:17,74:18,75:19,76:20,77:21,78:22,79:23,80:24,81:$V7,82:$V8,83:$V9,84:$Va,85:$Vb,86:$Vc,87:$Vd,88:$Ve,89:$Vf,90:25,93:$Vg,96:$Vh,101:31,102:32,103:33,104:34,105:$Vi,106:$Vj,108:$Vk,110:$Vl,111:$Vm,112:$Vn},{6:13,7:$V0,8:$V1,9:$V2,10:$V3,11:$V4,14:[1,258],17:54,18:4,20:5,21:6,22:7,23:8,24:9,25:10,26:11,27:12,30:$V5,34:15,71:$V6,72:16,73:17,74:18,75:19,76:20,77:21,78:22,79:23,80:24,81:$V7,82:$V8,83:$V9,84:$Va,85:$Vb,86:$Vc,87:$Vd,88:$Ve,89:$Vf,90:25,93:$Vg,96:$Vh,101:31,102:32,103:33,104:34,105:$Vi,106:$Vj,108:$Vk,110:$Vl,111:$Vm,112:$Vn},{4:259,6:13,7:$V0,8:$V1,9:$V2,10:$V3,11:$V4,17:3,18:4,20:5,21:6,22:7,23:8,24:9,25:10,26:11,27:12,30:$V5,34:15,71:$V6,72:16,73:17,74:18,75:19,76:20,77:21,78:22,79:23,80:24,81:$V7,82:$V8,83:$V9,84:$Va,85:$Vb,86:$Vc,87:$Vd,88:$Ve,89:$Vf,90:25,93:$Vg,96:$Vh,101:31,102:32,103:33,104:34,105:$Vi,106:$Vj,108:$Vk,110:$Vl,111:$Vm,112:$Vn},{6:13,7:$V0,8:$V1,9:$V2,10:$V3,11:$V4,14:[1,260],17:54,18:4,20:5,21:6,22:7,23:8,24:9,25:10,26:11,27:12,30:$V5,34:15,71:$V6,72:16,73:17,74:18,75:19,76:20,77:21,78:22,79:23,80:24,81:$V7,82:$V8,83:$V9,84:$Va,85:$Vb,86:$Vc,87:$Vd,88:$Ve,89:$Vf,90:25,93:$Vg,96:$Vh,101:31,102:32,103:33,104:34,105:$Vi,106:$Vj,108:$Vk,110:$Vl,111:$Vm,112:$Vn},o($VI,[2,109]),o($V91,[2,112],{18:4,20:5,21:6,22:7,23:8,24:9,25:10,26:11,27:12,6:13,34:15,72:16,73:17,74:18,75:19,76:20,77:21,78:22,79:23,80:24,90:25,101:31,102:32,103:33,104:34,17:54,7:$V0,8:$V1,9:$V2,10:$V3,11:$V4,30:$V5,71:$V6,81:$V7,82:$V8,83:$V9,84:$Va,85:$Vb,86:$Vc,87:$Vd,88:$Ve,89:$Vf,93:$Vg,96:$Vh,105:$Vi,106:$Vj,108:$Vk,110:$Vl,111:$Vm,112:$Vn}),o($VI,[2,108])],
defaultActions: {35:[2,2],36:[2,3],37:[2,4],38:[2,5],39:[2,6],53:[2,1],173:[2,74],217:[2,73],252:[2,121],253:[2,122]},
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
case 44:return addToken(yy_.yylloc, 'cosRw')
break;
case 45:return addToken(yy_.yylloc, 'log10Rw')
break;
case 46:return addToken(yy_.yylloc, 'powRw')
break;
case 47:return addToken(yy_.yylloc, 'sinRw')
break;
case 48:return addToken(yy_.yylloc, 'sqrtRw')
break;
case 49:return addToken(yy_.yylloc, 'tanRw')
break;
case 50:return addToken(yy_.yylloc, 'elseRw')
break;
case 51:return addToken(yy_.yylloc, 'ifRw')
break;
case 52:return addToken(yy_.yylloc, 'defaultRw')
break;
case 53:return addToken(yy_.yylloc, 'switchRw')
break;
case 54:return addToken(yy_.yylloc, 'breakRw')
break;
case 55:return addToken(yy_.yylloc, 'caseRw')
break;
case 56:return addToken(yy_.yylloc, 'whileRw')
break;
case 57:return addToken(yy_.yylloc, 'forRw')
break;
case 58:return addToken(yy_.yylloc, 'doRw')
break;
case 59:return addToken(yy_.yylloc, 'inRw')
break;
case 60:return addToken(yy_.yylloc, 'continueRw')
break;
case 61:return addToken(yy_.yylloc, 'returnRw')
break;
case 62:"\""
break;
case 63:"\\\""
break;
case 64:"\\\\"
break;
case 65:"\\n"
break;
case 66:"\\r"
break;
case 67:"\\t"
break;
case 68:"\\0"
break;
case 69:
                                yy_.yytext = yy_.yytext.substr(1,yy_.yyleng-2);
                                return addToken(yy_.yylloc, 'text');
                            
break;
case 70:
                                yy_.yytext = yy_.yytext.substr(1,yy_.yyleng-2);
                                return addToken(yy_.yylloc, 'character');
						    
break;
case 71:return addToken(yy_.yylloc, 'decimal')
break;
case 72:return addToken(yy_.yylloc, 'integer')
break;
case 73:return addToken(yy_.yylloc, 'id')
break;
case 74:return 5
break;
case 75:
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
rules: [/^(?:\s+)/i,/^(?:\/\/.*)/i,/^(?:[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/])/i,/^(?:char\b)/i,/^(?:boolean\b)/i,/^(?:null\b)/i,/^(?:string\b)/i,/^(?:double\b)/i,/^(?:int\b)/i,/^(?:true\b)/i,/^(?:false\b)/i,/^(?:void\b)/i,/^(?:<=)/i,/^(?:>=)/i,/^(?:==)/i,/^(?:--)/i,/^(?:!=)/i,/^(?:\+\+)/i,/^(?:\?)/i,/^(?::)/i,/^(?:\/)/i,/^(?:%)/i,/^(?:\*)/i,/^(?:\^)/i,/^(?:=)/i,/^(?:<)/i,/^(?:>)/i,/^(?:-)/i,/^(?:\+)/i,/^(?:&&)/i,/^(?:!)/i,/^(?:\|\|)/i,/^(?:&)/i,/^(?:,)/i,/^(?:;)/i,/^(?:\{)/i,/^(?:\})/i,/^(?:\()/i,/^(?:\))/i,/^(?:\[)/i,/^(?:\])/i,/^(?:print\b)/i,/^(?:printLn\b)/i,/^(?:eval\b)/i,/^(?:cos\b)/i,/^(?:log10\b)/i,/^(?:pow\b)/i,/^(?:sin\b)/i,/^(?:sqrt\b)/i,/^(?:tan\b)/i,/^(?:else\b)/i,/^(?:if\b)/i,/^(?:default\b)/i,/^(?:switch\b)/i,/^(?:break\b)/i,/^(?:case\b)/i,/^(?:while\b)/i,/^(?:for\b)/i,/^(?:do\b)/i,/^(?:in\b)/i,/^(?:continue\b)/i,/^(?:return\b)/i,/^(?:QUOTES\b)/i,/^(?:PIPE_QUOTES\b)/i,/^(?:DOUBLE_PIPES\b)/i,/^(?:BREAKLINE\b)/i,/^(?:CARRETURN\b)/i,/^(?:TABULATION\b)/i,/^(?:NULLCHAR\b)/i,/^(?:"[^\"]*")/i,/^(?:'[^\']?')/i,/^(?:[0-9]*\.[0-9]+\b)/i,/^(?:[0-9]+\b)/i,/^(?:([a-zA-Z])[a-zA-Z0-9_]*)/i,/^(?:$)/i,/^(?:.)/i],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
return parser;
});