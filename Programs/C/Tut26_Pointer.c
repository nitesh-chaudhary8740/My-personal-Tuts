#include<stdio.h>
int main(){
    int a;
    printf("Enter the number-\n ");
    // scanf("Enter: %d",&a);
    a=10;
    int* p=&a;
    printf("value of p: %d | addreess of p: %x | a-address: %x  | a-value: %d",p,p,a,a);
    printf("\n");
    printf("value of p: %d | addreess of p: %u | a-address: %u  | a-value: %d",p,p,a,a);
    printf("\n");
    int x=124;
    int *pte=&x;
    int ptr=*pte;
    int *l=&ptr;
    printf("value of pte=%d value stored=%u ||value of ptr=%d  value stored=%u ",*pte,*pte,ptr,ptr);
    printf("\n");
    printf("value of pte=%d value stored=%u ||value of ptr=%d  value stored=%u ",&pte,&pte,&ptr,&ptr);
    printf("\n\n value stored in l=%u|| %d",l,l);
    return 0;
}