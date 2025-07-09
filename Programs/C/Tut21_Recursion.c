#include<stdio.h>
int fact(int n){
    if (n==1 ||n==0){
    return 1;
    }
    else {
        return (n*fact(n-1));
    }
}
int main()
{
    printf("hkjdfhk %d",fact(5));
    
    return 0;
}
