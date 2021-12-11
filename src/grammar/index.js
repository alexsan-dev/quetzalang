

define(function(require){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,20],$V1=[1,21],$V2=[1,22],$V3=[1,23],$V4=[1,24],$V5=[1,11],$V6=[1,25],$V7=[1,26],$V8=[1,15],$V9=[1,16],$Va=[1,17],$Vb=[1,18],$Vc=[1,19],$Vd=[5,7,8,9,10,11,14,25,62,63,64,68,70,72,73,74,75],$Ve=[17,24],$Vf=[1,48],$Vg=[1,43],$Vh=[1,42],$Vi=[1,44],$Vj=[1,46],$Vk=[1,47],$Vl=[1,49],$Vm=[1,50],$Vn=[1,51],$Vo=[1,52],$Vp=[1,53],$Vq=[1,62],$Vr=[1,63],$Vs=[1,64],$Vt=[1,65],$Vu=[1,66],$Vv=[1,67],$Vw=[1,68],$Vx=[1,69],$Vy=[1,70],$Vz=[1,71],$VA=[1,72],$VB=[1,73],$VC=[1,74],$VD=[1,75],$VE=[17,24,32,33,34,35,36,37,38,39,40,41,42,43,44,45,48,50,51],$VF=[1,84],$VG=[17,24,32,33,34,35,36,41,42,43,44,45,48,50,51],$VH=[1,104],$VI=[24,48],$VJ=[1,108],$VK=[17,24,33,34,35,36,42,43,44,45,48,50,51],$VL=[17,24,44,45,48,50,51],$VM=[1,119],$VN=[1,122],$VO=[5,7,8,9,10,11,14,25,62,63,64,65,68,70,72,73,74,75],$VP=[14,70,72];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"START":3,"INSTRUCTIONS":4,"EOF":5,"TYPE":6,"intType":7,"dblType":8,"boolType":9,"charType":10,"strType":11,"BLOCKCONTENT":12,"openBracket":13,"closeBracket":14,"INSTRUCTION":15,"DECLARATION":16,"semicolom":17,"ASSIGNMENT":18,"METHODS":19,"CONTROLSEQ":20,"SWITCHSEQ":21,"LOOPESCAPE":22,"ASSIGNMENTS":23,"comma":24,"id":25,"equals":26,"EXPRESSIONS":27,"TERNARY":28,"INCREMENTALASSIGNMENT":29,"plusPlus":30,"minusMinus":31,"plus":32,"equalsEquals":33,"moreOrEquals":34,"lessOrEquals":35,"nonEquals":36,"division":37,"module":38,"power":39,"times":40,"minus":41,"minor":42,"major":43,"and":44,"or":45,"not":46,"openParenthesis":47,"closeParenthesis":48,"VARVALUE":49,"questionMark":50,"colom":51,"EXPLIST":52,"decimal":53,"text":54,"integer":55,"character":56,"trBool":57,"flBool":58,"nullType":59,"PRINT":60,"PRINTLN":61,"printRw":62,"printLnRw":63,"ifRw":64,"elseRw":65,"CONTROLSEQELIFS":66,"CONTROLSEQELIF":67,"switchRw":68,"SWITCHSEQCASES":69,"defaultRw":70,"SWITCHSEQCONTENT":71,"caseRw":72,"breakRw":73,"continueRw":74,"returnRw":75,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",7:"intType",8:"dblType",9:"boolType",10:"charType",11:"strType",13:"openBracket",14:"closeBracket",17:"semicolom",24:"comma",25:"id",26:"equals",30:"plusPlus",31:"minusMinus",32:"plus",33:"equalsEquals",34:"moreOrEquals",35:"lessOrEquals",36:"nonEquals",37:"division",38:"module",39:"power",40:"times",41:"minus",42:"minor",43:"major",44:"and",45:"or",46:"not",47:"openParenthesis",48:"closeParenthesis",50:"questionMark",51:"colom",53:"decimal",54:"text",55:"integer",56:"character",57:"trBool",58:"flBool",59:"nullType",62:"printRw",63:"printLnRw",64:"ifRw",65:"elseRw",68:"switchRw",70:"defaultRw",72:"caseRw",73:"breakRw",74:"continueRw",75:"returnRw"},
productions_: [0,[3,2],[6,1],[6,1],[6,1],[6,1],[6,1],[12,3],[4,2],[4,1],[15,2],[15,2],[15,2],[15,1],[15,1],[15,1],[16,2],[23,3],[23,1],[18,1],[18,3],[18,3],[18,1],[29,2],[29,2],[27,3],[27,3],[27,3],[27,3],[27,3],[27,3],[27,3],[27,3],[27,3],[27,3],[27,3],[27,3],[27,3],[27,3],[27,2],[27,2],[27,3],[27,1],[27,3],[28,5],[52,3],[52,1],[49,1],[49,1],[49,1],[49,1],[49,1],[49,1],[49,1],[49,1],[19,1],[19,1],[60,4],[61,4],[20,5],[20,7],[20,6],[20,8],[66,2],[66,1],[67,6],[21,7],[21,10],[21,9],[69,2],[69,1],[71,4],[22,2],[22,2],[22,3]],
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
case 7: case 10: case 11: case 12: case 43:

        this.$ = $$[$0-1];
    
break;
case 8: case 63: case 69:

        this.$ = $$[$0-1];
        this.$.push($$[$0]);
    
break;
case 9: case 18: case 46: case 64: case 70:

        this.$ = [$$[$0]];
    
break;
case 13: case 14: case 15: case 22: case 55: case 56:

        this.$ = $$[$0];
    
break;
case 16:

        this.$ = new Declaration(getToken(_$[$0-1]), { type: $$[$0-1], assignments: $$[$0] });
    
break;
case 17: case 45:

        this.$ = $$[$0-2];
        this.$.push($$[$0]);
    
break;
case 19:

        this.$ = new ExpAssignment(getToken(_$[$0]), { id: $$[$0] });
    
break;
case 20:

        this.$ = new ExpAssignment(getToken(_$[$0-2]), { id: $$[$0-2], exp: $$[$0] });  
    
break;
case 21:

        this.$ = new ExpAssignment(getToken(_$[$0-2]), { id: $$[$0-2], exp: $$[$0] });
    
break;
case 23:

        this.$ = new IncrementalAssignment(getToken(_$[$0-1]), { 
            id: $$[$0-1], operator: Operator.PLUSPLUS })
    
break;
case 24:

        this.$ = new IncrementalAssignment(getToken(_$[$0-1]), { 
            id: $$[$0-1], operator: Operator.MINUSMINUS })
    
break;
case 25:

        this.$ = new Expression(getToken(_$[$0-2]), {
            left: $$[$0-2], right: $$[$0], operator: Operator.PLUS });
    
break;
case 26:

        this.$ = new Expression(getToken(_$[$0-2]), {
            left: $$[$0-2], right: $$[$0], operator: Operator.EQUALSEQUALS });
    
break;
case 27:

        this.$ = new Expression(getToken(_$[$0-2]), {
            left: $$[$0-2], right: $$[$0], operator: Operator.MOREOREQUALS });
    
break;
case 28:

        this.$ = new Expression(getToken(_$[$0-2]), {
            left: $$[$0-2], right: $$[$0], operator: Operator.LESSOREQUALS });
    
break;
case 29:

        this.$ = new Expression(getToken(_$[$0-2]), {
            left: $$[$0-2], right: $$[$0], operator: Operator.NONEQUALS });
    
break;
case 30:

        this.$ = new Expression(getToken(_$[$0-2]), {
            left: $$[$0-2], right: $$[$0], operator: Operator.DIVISION });
    
break;
case 31:

        this.$ = new Expression(getToken(_$[$0-2]), {
            left: $$[$0-2], right: $$[$0], operator: Operator.MODULE });
    
break;
case 32:

        this.$ = new Expression(getToken(_$[$0-2]), {
            left: $$[$0-2], right: $$[$0], operator: Operator.POWER });
    
break;
case 33:

        this.$ = new Expression(getToken(_$[$0-2]), {
            left: $$[$0-2], right: $$[$0], operator: Operator.TIMES });
    
break;
case 34:

        this.$ = new Expression(getToken(_$[$0-2]), {
            left: $$[$0-2], right: $$[$0], operator: Operator.MINUS });
    
break;
case 35:

        this.$ = new Expression(getToken(_$[$0-2]), {
            left: $$[$0-2], right: $$[$0], operator: Operator.MINOR });
    
break;
case 36:

        this.$ = new Expression(getToken(_$[$0-2]), {
            left: $$[$0-2], right: $$[$0], operator: Operator.MAJOR });
    
break;
case 37:

        this.$ = new Expression(getToken(_$[$0-2]), {
            left: $$[$0-2], right: $$[$0], operator: Operator.AND });
    
break;
case 38:

        this.$ = new Expression(getToken(_$[$0-2]), {
            left: $$[$0-2], right: $$[$0], operator:Operator.OR });
    
break;
case 39:

        this.$ = new Expression(getToken(_$[$0-1]), {
            left: $$[$0], operator: Operator.NOT });
    
break;
case 40:

        this.$ = new Expression(getToken(_$[$0-1]), {
            left: $$[$0], operator: Operator.NEGATION });
    
break;
case 41:

        this.$ = new Expression(getToken(_$[$0-2]), { left: $$[$0-1] });
    
break;
case 42:

        this.$ = new Expression(getToken(_$[$0]), { value: $$[$0] });
    
break;
case 44:

        this.$ = new Expression(getToken(_$[$0-4]), {
            left: $$[$0-2], right: $$[$0], condition: $$[$0-4], operator: Operator.TERNARY })
    
break;
case 47:

        this.$ = new Value(getToken(_$[$0]), { value: $$[$0], type: DataType.DOUBLE })
    
break;
case 48:

        this.$ = new Value(getToken(_$[$0]), { value: $$[$0], type: DataType.STRING })
    
break;
case 49:

        this.$ = new Value(getToken(_$[$0]), { value: $$[$0], type: DataType.ID })
    
break;
case 50:

        this.$ = new Value(getToken(_$[$0]), { value: $$[$0], type: DataType.INTEGER })
    
break;
case 51:

        this.$ = new Value(getToken(_$[$0]), { value: $$[$0], type: DataType.CHARACTER })
    
break;
case 52: case 53:

        this.$ = new Value(getToken(_$[$0]), { value: $$[$0], type: DataType.BOOLEAN })
    
break;
case 54:

        this.$ = new Value(getToken(_$[$0]), { value: $$[$0], type: DataType.NULL })
    
break;
case 57:

        this.$ = new Print(getToken(_$[$0-3]), { params: $$[$0-1], breakLine: false });
    
break;
case 58:

        this.$ = new Print(getToken(_$[$0-3]), { params: $$[$0-1], breakLine: true });
    
break;
case 59:

        this.$ = new Condition(getToken(_$[$0-4]), { 
            valid: { exp: $$[$0-2], body: $$[$0] }
        })
    
break;
case 60:

        this.$ = new Condition(getToken(_$[$0-6]), { 
            valid: { exp: $$[$0-4], body: $$[$0-2] },
            inValid: { exp: $$[$0-4], body: $$[$0] }
        })
    
break;
case 61:

        this.$ = new Condition(getToken(_$[$0-5]), { 
            valid: { exp: $$[$0-3], body: $$[$0-1] },
            fallback: $$[$0]
        })
    
break;
case 62:

        this.$ = new Condition(getToken(_$[$0-7]), { 
            inValid: { exp: $$[$0-5], body: $$[$0] },
            valid: { exp: $$[$0-5], body: $$[$0-3] },
            fallback: $$[$0-2]
        })
    
break;
case 65:

        this.$ = { exp: $$[$0-2], body: $$[$0] };
    
break;
case 66:

        this.$ = new Switch(getToken(_$[$0-6]), { value: $$[$0-4], cases: $$[$0-1] })
    
break;
case 67:

        this.$ = new Switch(getToken(_$[$0-9]), { 
            value: $$[$0-7], cases: $$[$0-4], default: { body: $$[$0-1] } })
    
break;
case 68:

        this.$ = new Switch(getToken(_$[$0-8]), { 
            value: $$[$0-6], default: { body: $$[$0-1] } })
    
break;
case 71:

        this.$ = { case: $$[$0-2], body: $$[$0] };
    
break;
case 72:

        this.$ = new ReturnValue(getToken(_$[$0-1]), { type: 'break' })
    
break;
case 73:

        this.$ = new ReturnValue(getToken(_$[$0-1]), { type: 'continue' })
    
break;
case 74:

        this.$ = new ReturnValue(getToken(_$[$0-2]), { content: $$[$0-1], type: 'return'  });
    
break;
}
},
table: [{3:1,4:2,6:10,7:$V0,8:$V1,9:$V2,10:$V3,11:$V4,15:3,16:4,18:5,19:6,20:7,21:8,22:9,25:$V5,29:12,60:13,61:14,62:$V6,63:$V7,64:$V8,68:$V9,73:$Va,74:$Vb,75:$Vc},{1:[3]},{5:[1,27],6:10,7:$V0,8:$V1,9:$V2,10:$V3,11:$V4,15:28,16:4,18:5,19:6,20:7,21:8,22:9,25:$V5,29:12,60:13,61:14,62:$V6,63:$V7,64:$V8,68:$V9,73:$Va,74:$Vb,75:$Vc},o($Vd,[2,9]),{17:[1,29]},{17:[1,30]},{17:[1,31]},o($Vd,[2,13]),o($Vd,[2,14]),o($Vd,[2,15]),{18:33,23:32,25:$V5,29:12},o($Ve,[2,19],{26:[1,34],30:[1,35],31:[1,36]}),o($Ve,[2,22]),{17:[2,55]},{17:[2,56]},{47:[1,37]},{47:[1,38]},{17:[1,39]},{17:[1,40]},{25:$Vf,27:41,41:$Vg,46:$Vh,47:$Vi,49:45,53:$Vj,54:$Vk,55:$Vl,56:$Vm,57:$Vn,58:$Vo,59:$Vp},{25:[2,2]},{25:[2,3]},{25:[2,4]},{25:[2,5]},{25:[2,6]},{47:[1,54]},{47:[1,55]},{1:[2,1]},o($Vd,[2,8]),o($Vd,[2,10]),o($Vd,[2,11]),o($Vd,[2,12]),{17:[2,16],24:[1,56]},o($Ve,[2,18]),{25:$Vf,27:57,28:58,41:$Vg,46:$Vh,47:$Vi,49:45,53:$Vj,54:$Vk,55:$Vl,56:$Vm,57:$Vn,58:$Vo,59:$Vp},o($Ve,[2,23]),o($Ve,[2,24]),{25:$Vf,27:59,41:$Vg,46:$Vh,47:$Vi,49:45,53:$Vj,54:$Vk,55:$Vl,56:$Vm,57:$Vn,58:$Vo,59:$Vp},{25:$Vf,27:60,41:$Vg,46:$Vh,47:$Vi,49:45,53:$Vj,54:$Vk,55:$Vl,56:$Vm,57:$Vn,58:$Vo,59:$Vp},o($Vd,[2,72]),o($Vd,[2,73]),{17:[1,61],32:$Vq,33:$Vr,34:$Vs,35:$Vt,36:$Vu,37:$Vv,38:$Vw,39:$Vx,40:$Vy,41:$Vz,42:$VA,43:$VB,44:$VC,45:$VD},{25:$Vf,27:76,41:$Vg,46:$Vh,47:$Vi,49:45,53:$Vj,54:$Vk,55:$Vl,56:$Vm,57:$Vn,58:$Vo,59:$Vp},{25:$Vf,27:77,41:$Vg,46:$Vh,47:$Vi,49:45,53:$Vj,54:$Vk,55:$Vl,56:$Vm,57:$Vn,58:$Vo,59:$Vp},{25:$Vf,27:78,28:79,41:$Vg,46:$Vh,47:$Vi,49:45,53:$Vj,54:$Vk,55:$Vl,56:$Vm,57:$Vn,58:$Vo,59:$Vp},o($VE,[2,42]),o($VE,[2,47]),o($VE,[2,48]),o($VE,[2,49]),o($VE,[2,50]),o($VE,[2,51]),o($VE,[2,52]),o($VE,[2,53]),o($VE,[2,54]),{25:$Vf,27:81,41:$Vg,46:$Vh,47:$Vi,49:45,52:80,53:$Vj,54:$Vk,55:$Vl,56:$Vm,57:$Vn,58:$Vo,59:$Vp},{25:$Vf,27:81,41:$Vg,46:$Vh,47:$Vi,49:45,52:82,53:$Vj,54:$Vk,55:$Vl,56:$Vm,57:$Vn,58:$Vo,59:$Vp},{18:83,25:$V5,29:12},o($Ve,[2,20],{32:$Vq,33:$Vr,34:$Vs,35:$Vt,36:$Vu,37:$Vv,38:$Vw,39:$Vx,40:$Vy,41:$Vz,42:$VA,43:$VB,44:$VC,45:$VD,50:$VF}),o($Ve,[2,21]),{32:$Vq,33:$Vr,34:$Vs,35:$Vt,36:$Vu,37:$Vv,38:$Vw,39:$Vx,40:$Vy,41:$Vz,42:$VA,43:$VB,44:$VC,45:$VD,48:[1,85]},{32:$Vq,33:$Vr,34:$Vs,35:$Vt,36:$Vu,37:$Vv,38:$Vw,39:$Vx,40:$Vy,41:$Vz,42:$VA,43:$VB,44:$VC,45:$VD,48:[1,86]},o($Vd,[2,74]),{25:$Vf,27:87,41:$Vg,46:$Vh,47:$Vi,49:45,53:$Vj,54:$Vk,55:$Vl,56:$Vm,57:$Vn,58:$Vo,59:$Vp},{25:$Vf,27:88,41:$Vg,46:$Vh,47:$Vi,49:45,53:$Vj,54:$Vk,55:$Vl,56:$Vm,57:$Vn,58:$Vo,59:$Vp},{25:$Vf,27:89,41:$Vg,46:$Vh,47:$Vi,49:45,53:$Vj,54:$Vk,55:$Vl,56:$Vm,57:$Vn,58:$Vo,59:$Vp},{25:$Vf,27:90,41:$Vg,46:$Vh,47:$Vi,49:45,53:$Vj,54:$Vk,55:$Vl,56:$Vm,57:$Vn,58:$Vo,59:$Vp},{25:$Vf,27:91,41:$Vg,46:$Vh,47:$Vi,49:45,53:$Vj,54:$Vk,55:$Vl,56:$Vm,57:$Vn,58:$Vo,59:$Vp},{25:$Vf,27:92,41:$Vg,46:$Vh,47:$Vi,49:45,53:$Vj,54:$Vk,55:$Vl,56:$Vm,57:$Vn,58:$Vo,59:$Vp},{25:$Vf,27:93,41:$Vg,46:$Vh,47:$Vi,49:45,53:$Vj,54:$Vk,55:$Vl,56:$Vm,57:$Vn,58:$Vo,59:$Vp},{25:$Vf,27:94,41:$Vg,46:$Vh,47:$Vi,49:45,53:$Vj,54:$Vk,55:$Vl,56:$Vm,57:$Vn,58:$Vo,59:$Vp},{25:$Vf,27:95,41:$Vg,46:$Vh,47:$Vi,49:45,53:$Vj,54:$Vk,55:$Vl,56:$Vm,57:$Vn,58:$Vo,59:$Vp},{25:$Vf,27:96,41:$Vg,46:$Vh,47:$Vi,49:45,53:$Vj,54:$Vk,55:$Vl,56:$Vm,57:$Vn,58:$Vo,59:$Vp},{25:$Vf,27:97,41:$Vg,46:$Vh,47:$Vi,49:45,53:$Vj,54:$Vk,55:$Vl,56:$Vm,57:$Vn,58:$Vo,59:$Vp},{25:$Vf,27:98,41:$Vg,46:$Vh,47:$Vi,49:45,53:$Vj,54:$Vk,55:$Vl,56:$Vm,57:$Vn,58:$Vo,59:$Vp},{25:$Vf,27:99,41:$Vg,46:$Vh,47:$Vi,49:45,53:$Vj,54:$Vk,55:$Vl,56:$Vm,57:$Vn,58:$Vo,59:$Vp},{25:$Vf,27:100,41:$Vg,46:$Vh,47:$Vi,49:45,53:$Vj,54:$Vk,55:$Vl,56:$Vm,57:$Vn,58:$Vo,59:$Vp},o($VE,[2,39]),o($VG,[2,40],{37:$Vv,38:$Vw,39:$Vx,40:$Vy}),{32:$Vq,33:$Vr,34:$Vs,35:$Vt,36:$Vu,37:$Vv,38:$Vw,39:$Vx,40:$Vy,41:$Vz,42:$VA,43:$VB,44:$VC,45:$VD,48:[1,101],50:$VF},{48:[1,102]},{24:$VH,48:[1,103]},o($VI,[2,46],{32:$Vq,33:$Vr,34:$Vs,35:$Vt,36:$Vu,37:$Vv,38:$Vw,39:$Vx,40:$Vy,41:$Vz,42:$VA,43:$VB,44:$VC,45:$VD}),{24:$VH,48:[1,105]},o($Ve,[2,17]),{25:$Vf,27:106,41:$Vg,46:$Vh,47:$Vi,49:45,53:$Vj,54:$Vk,55:$Vl,56:$Vm,57:$Vn,58:$Vo,59:$Vp},{12:107,13:$VJ},{13:[1,109]},o($VG,[2,25],{37:$Vv,38:$Vw,39:$Vx,40:$Vy}),o($VK,[2,26],{32:$Vq,37:$Vv,38:$Vw,39:$Vx,40:$Vy,41:$Vz}),o($VK,[2,27],{32:$Vq,37:$Vv,38:$Vw,39:$Vx,40:$Vy,41:$Vz}),o($VK,[2,28],{32:$Vq,37:$Vv,38:$Vw,39:$Vx,40:$Vy,41:$Vz}),o($VK,[2,29],{32:$Vq,37:$Vv,38:$Vw,39:$Vx,40:$Vy,41:$Vz}),o($VE,[2,30]),o($VE,[2,31]),o($VE,[2,32]),o($VE,[2,33]),o($VG,[2,34],{37:$Vv,38:$Vw,39:$Vx,40:$Vy}),o($VK,[2,35],{32:$Vq,37:$Vv,38:$Vw,39:$Vx,40:$Vy,41:$Vz}),o($VK,[2,36],{32:$Vq,37:$Vv,38:$Vw,39:$Vx,40:$Vy,41:$Vz}),o($VL,[2,37],{32:$Vq,33:$Vr,34:$Vs,35:$Vt,36:$Vu,37:$Vv,38:$Vw,39:$Vx,40:$Vy,41:$Vz,42:$VA,43:$VB}),o($VL,[2,38],{32:$Vq,33:$Vr,34:$Vs,35:$Vt,36:$Vu,37:$Vv,38:$Vw,39:$Vx,40:$Vy,41:$Vz,42:$VA,43:$VB}),o($VE,[2,41]),o($VE,[2,43]),{17:[2,57]},{25:$Vf,27:110,41:$Vg,46:$Vh,47:$Vi,49:45,53:$Vj,54:$Vk,55:$Vl,56:$Vm,57:$Vn,58:$Vo,59:$Vp},{17:[2,58]},{32:$Vq,33:$Vr,34:$Vs,35:$Vt,36:$Vu,37:$Vv,38:$Vw,39:$Vx,40:$Vy,41:$Vz,42:$VA,43:$VB,44:$VC,45:$VD,51:[1,111]},o($Vd,[2,59],{66:113,67:114,65:[1,112]}),{4:115,6:10,7:$V0,8:$V1,9:$V2,10:$V3,11:$V4,15:3,16:4,18:5,19:6,20:7,21:8,22:9,25:$V5,29:12,60:13,61:14,62:$V6,63:$V7,64:$V8,68:$V9,73:$Va,74:$Vb,75:$Vc},{69:116,70:[1,117],71:118,72:$VM},o($VI,[2,45],{32:$Vq,33:$Vr,34:$Vs,35:$Vt,36:$Vu,37:$Vv,38:$Vw,39:$Vx,40:$Vy,41:$Vz,42:$VA,43:$VB,44:$VC,45:$VD}),{25:$Vf,27:120,41:$Vg,46:$Vh,47:$Vi,49:45,53:$Vj,54:$Vk,55:$Vl,56:$Vm,57:$Vn,58:$Vo,59:$Vp},{12:121,13:$VJ,64:$VN},o($Vd,[2,61],{67:124,65:[1,123]}),o($VO,[2,64]),{6:10,7:$V0,8:$V1,9:$V2,10:$V3,11:$V4,14:[1,125],15:28,16:4,18:5,19:6,20:7,21:8,22:9,25:$V5,29:12,60:13,61:14,62:$V6,63:$V7,64:$V8,68:$V9,73:$Va,74:$Vb,75:$Vc},{14:[1,126],70:[1,127],71:128,72:$VM},{51:[1,129]},o($VP,[2,70]),{25:$Vf,27:130,41:$Vg,46:$Vh,47:$Vi,49:45,53:$Vj,54:$Vk,55:$Vl,56:$Vm,57:$Vn,58:$Vo,59:$Vp},o([17,24,48],[2,44],{32:$Vq,33:$Vr,34:$Vs,35:$Vt,36:$Vu,37:$Vv,38:$Vw,39:$Vx,40:$Vy,41:$Vz,42:$VA,43:$VB,44:$VC,45:$VD}),o($Vd,[2,60]),{47:[1,131]},{12:132,13:$VJ,64:$VN},o($VO,[2,63]),o($VO,[2,7]),o($Vd,[2,66]),{51:[1,133]},o($VP,[2,69]),{4:134,6:10,7:$V0,8:$V1,9:$V2,10:$V3,11:$V4,15:3,16:4,18:5,19:6,20:7,21:8,22:9,25:$V5,29:12,60:13,61:14,62:$V6,63:$V7,64:$V8,68:$V9,73:$Va,74:$Vb,75:$Vc},{32:$Vq,33:$Vr,34:$Vs,35:$Vt,36:$Vu,37:$Vv,38:$Vw,39:$Vx,40:$Vy,41:$Vz,42:$VA,43:$VB,44:$VC,45:$VD,51:[1,135]},{25:$Vf,27:136,41:$Vg,46:$Vh,47:$Vi,49:45,53:$Vj,54:$Vk,55:$Vl,56:$Vm,57:$Vn,58:$Vo,59:$Vp},o($Vd,[2,62]),{4:137,6:10,7:$V0,8:$V1,9:$V2,10:$V3,11:$V4,15:3,16:4,18:5,19:6,20:7,21:8,22:9,25:$V5,29:12,60:13,61:14,62:$V6,63:$V7,64:$V8,68:$V9,73:$Va,74:$Vb,75:$Vc},{6:10,7:$V0,8:$V1,9:$V2,10:$V3,11:$V4,14:[1,138],15:28,16:4,18:5,19:6,20:7,21:8,22:9,25:$V5,29:12,60:13,61:14,62:$V6,63:$V7,64:$V8,68:$V9,73:$Va,74:$Vb,75:$Vc},{4:139,6:10,7:$V0,8:$V1,9:$V2,10:$V3,11:$V4,15:3,16:4,18:5,19:6,20:7,21:8,22:9,25:$V5,29:12,60:13,61:14,62:$V6,63:$V7,64:$V8,68:$V9,73:$Va,74:$Vb,75:$Vc},{32:$Vq,33:$Vr,34:$Vs,35:$Vt,36:$Vu,37:$Vv,38:$Vw,39:$Vx,40:$Vy,41:$Vz,42:$VA,43:$VB,44:$VC,45:$VD,48:[1,140]},{6:10,7:$V0,8:$V1,9:$V2,10:$V3,11:$V4,14:[1,141],15:28,16:4,18:5,19:6,20:7,21:8,22:9,25:$V5,29:12,60:13,61:14,62:$V6,63:$V7,64:$V8,68:$V9,73:$Va,74:$Vb,75:$Vc},o($Vd,[2,68]),o($VP,[2,71],{16:4,18:5,19:6,20:7,21:8,22:9,6:10,29:12,60:13,61:14,15:28,7:$V0,8:$V1,9:$V2,10:$V3,11:$V4,25:$V5,62:$V6,63:$V7,64:$V8,68:$V9,73:$Va,74:$Vb,75:$Vc}),{12:142,13:$VJ},o($Vd,[2,67]),o($VO,[2,65])],
defaultActions: {13:[2,55],14:[2,56],20:[2,2],21:[2,3],22:[2,4],23:[2,5],24:[2,6],27:[2,1],103:[2,57],105:[2,58]},
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
case 39:return addToken(yy_.yylloc, 'printRw')
break;
case 40:return addToken(yy_.yylloc, 'printLnRw')
break;
case 41:return addToken(yy_.yylloc, 'elseRw')
break;
case 42:return addToken(yy_.yylloc, 'ifRw')
break;
case 43:return addToken(yy_.yylloc, 'defaultRw')
break;
case 44:return addToken(yy_.yylloc, 'switchRw')
break;
case 45:return addToken(yy_.yylloc, 'breakRw')
break;
case 46:return addToken(yy_.yylloc, 'caseRw')
break;
case 47:return addToken(yy_.yylloc, 'continueRw')
break;
case 48:return addToken(yy_.yylloc, 'returnRw')
break;
case 49:"\""
break;
case 50:"\\\""
break;
case 51:"\\\\"
break;
case 52:"\\n"
break;
case 53:"\\r"
break;
case 54:"\\t"
break;
case 55:"\\0"
break;
case 56:
                                yy_.yytext = yy_.yytext.substr(1,yy_.yyleng-2);
                                return addToken(yy_.yylloc, 'text');
                            
break;
case 57:
                                yy_.yytext = yy_.yytext.substr(1,yy_.yyleng-2);
                                return addToken(yy_.yylloc, 'character');
						    
break;
case 58:return addToken(yy_.yylloc, 'decimal')
break;
case 59:return addToken(yy_.yylloc, 'integer')
break;
case 60:return addToken(yy_.yylloc, 'id')
break;
case 61:return 5
break;
case 62:
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
rules: [/^(?:\s+)/i,/^(?:\/\/.*)/i,/^(?:[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/])/i,/^(?:char\b)/i,/^(?:boolean\b)/i,/^(?:null\b)/i,/^(?:string\b)/i,/^(?:double\b)/i,/^(?:int\b)/i,/^(?:true\b)/i,/^(?:false\b)/i,/^(?:<=)/i,/^(?:>=)/i,/^(?:==)/i,/^(?:--)/i,/^(?:!=)/i,/^(?:\+\+)/i,/^(?:\?)/i,/^(?::)/i,/^(?:\/)/i,/^(?:%)/i,/^(?:\*)/i,/^(?:\^)/i,/^(?:=)/i,/^(?:<)/i,/^(?:>)/i,/^(?:-)/i,/^(?:\+)/i,/^(?:&&)/i,/^(?:!)/i,/^(?:\|\|)/i,/^(?:,)/i,/^(?:;)/i,/^(?:\{)/i,/^(?:\})/i,/^(?:\()/i,/^(?:\))/i,/^(?:\[)/i,/^(?:\])/i,/^(?:print\b)/i,/^(?:printLn\b)/i,/^(?:else\b)/i,/^(?:if\b)/i,/^(?:default\b)/i,/^(?:switch\b)/i,/^(?:break\b)/i,/^(?:case\b)/i,/^(?:continue\b)/i,/^(?:return\b)/i,/^(?:QUOTES\b)/i,/^(?:PIPE_QUOTES\b)/i,/^(?:DOUBLE_PIPES\b)/i,/^(?:BREAKLINE\b)/i,/^(?:CARRETURN\b)/i,/^(?:TABULATION\b)/i,/^(?:NULLCHAR\b)/i,/^(?:"[^\"]*")/i,/^(?:'[^\']?')/i,/^(?:[0-9]*\.[0-9]+\b)/i,/^(?:[0-9]+\b)/i,/^(?:([a-zA-Z])[a-zA-Z0-9_]*)/i,/^(?:$)/i,/^(?:.)/i],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
return parser;
});