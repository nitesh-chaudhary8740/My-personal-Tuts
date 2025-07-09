#include<stdio.h>

int main()
{
    labl:
        printf("Inside the label");
        printf("hi\n");
        goto en;
        goto labl;
    en
    
    :
        printf("this is end");
  

    
    return 0;
}
