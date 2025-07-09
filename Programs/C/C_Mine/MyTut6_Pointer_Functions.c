#include <stdio.h>
void func(int a,int b,int *ps,int *pd,int *pp);
int main(){
    int a=5,b=6,sum,diff,pro;
   func(a,b,&sum,&diff,&pro);
    printf("sum=%d ,diff=%d pro=%d",sum,diff,pro);
    return 0;
}
void func(int a,int b,int *ps,int *pd,int *pp){
    *ps=a+b;
    *pd=a-b;
    *pp=a*b;
}