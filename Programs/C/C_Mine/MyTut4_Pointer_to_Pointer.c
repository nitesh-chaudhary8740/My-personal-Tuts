#include<stdio.h>
int main(){
    int a=5;
    int *pa=&a;
    int** ppa=&pa;
    printf("a=%u ,pa=%u, ppa=%u",a,pa,ppa);
    return 0;
}