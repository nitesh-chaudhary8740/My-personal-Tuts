#include<stdio.h>
int main(){

    int a=10,b=20;
    int *aptr=&a;
    int *bptr=&b;
    printf("*bptr now: %p",(void*)bptr);
    printf("\n aptr=%p bptr=%p",(void*)aptr,(void*)bptr++);
    printf("\n bptr=%p ",(void*)bptr);
    printf("\n*bptr after increment: %d",*bptr);
    printf("\nvalue of varriable b%d",b);
      int *newbptr=&b;
      printf("b variable fixed location: %p",(void*)newbptr);

    
    return 0;
}
