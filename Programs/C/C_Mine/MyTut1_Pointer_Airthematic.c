#include <stdio.h>
int main(){
    int a=10;
    int* aptr=&a;
    printf("aptr=%x *aptr=%d\n",aptr,*aptr);
    printf("aptr=%u *aptr=%d\n",aptr+2,*aptr+1);
    printf("aptr++=%u aptr--=%u *aptr++=%d \n",aptr++,aptr,*aptr++);
    /*its affecting 4-bytes in airthematic operatios (but in ref book the there is 2-bytes)
    because- the data type int reserves 4 bytes in memory so its pointer affect 4 bytes in airthematic operations.
    */
   //Let's check it on char data type
   char c='n';
   char* cptr=&c;
   printf("\n\n*cptr=%d cptr=%u, cptr++=%u and %d cptr--=%u and %d",*cptr,cptr,cptr++, *cptr,cptr--,*cptr--);
    int b=*aptr;
    printf("\n *aptr=%d",*aptr);

    printf("\n b=%d",b);

    return 0;

}