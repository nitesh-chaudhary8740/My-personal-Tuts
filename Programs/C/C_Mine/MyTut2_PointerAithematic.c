#include <stdio.h>
int main(){
    int a=10;
    int b=23;
    int *aptr,*bptr;
    aptr=&a;
    bptr=&b;
    printf("aptr=%u ,bptr=%u\n",aptr,bptr);
    printf("aptr-bptr=%u",(unsigned int)(aptr-bptr));
    /*
    so here is aptr=6422292 and bptr=6422288
    then aptr-bptr=6422292-6422288=(4bytes)==>1 (int)
    if difference was 8 then it will print 2 and so on....
    */
   int x=5;
   int*xptr=&x;
    printf("\n\nBefore: add=%u value=%d",xptr,*xptr);
   *xptr++;
   printf("\n\nAfter: add=%u value=%d",xptr,*xptr);
   /*
   1. (*pointr++)
   so *pointer++(post increment) is equal to:
   poitner=pointer+1(vary of size of data type);
   */
    printf("\n\nBefore: add=%u value=%d",xptr,*xptr);
   *++xptr;
   printf("\n\nAfter: add=%u value=%d",xptr,*xptr);
  /*
  2. (++*pointer)
  concept is same
  
  */
 //------------------------But---------------------------

//here's game changed now dereferece operator is over the *xptr not same as *++xptr
    printf("\n\nBefore: add=%u value=%d",xptr,*xptr);
    ++*xptr;
    printf("\n\nAfter: add=%u value=%d",xptr,*xptr);
    return 0;
//

}