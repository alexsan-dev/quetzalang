// EXPRESIONES
int ex = 1 + 2 * 2 / 2 - 5 * 1;
int ex2 = ex + 2;

// VECTORES
int[] list = [1, 4, 2, 5];
int[] list2 = #list;
int[] list3 = list[0:3];

list[0] = 3;
list[1] = list2[2];

// CONTROL
if(1 + 1 == 2)
    print(2);
else if (1 + 2 == 3)
    print(3);
else 
    print(5);
    
int num = 3;
switch(num){
    case 1:
        print(1);
    case 2:
        print(2);
    case 3:
        print(3);
    default:
        print(4);
}

// CICLOS
int count = 0;
while(count < 10)
    print(count);
    
do print(count);
while(count < 10);

void main(){ print(""); }