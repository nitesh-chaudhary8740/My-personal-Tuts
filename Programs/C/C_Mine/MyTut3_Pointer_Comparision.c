#include <stdio.h>
int main (){
    int arr[4]={4,5,6,2};
    int* parr0= &arr[0];
    int* parr1= &arr[1];
    int*parr=&arr;
    if(parr0==parr1){
        printf("p0=%u, p1=%u \n",parr0,parr1);
        printf("True");
    }
    else{
        printf("p0=%u, p1=%u parr=%u\n",parr0,parr1,parr);
        printf("False");
    }
    return 0;
}