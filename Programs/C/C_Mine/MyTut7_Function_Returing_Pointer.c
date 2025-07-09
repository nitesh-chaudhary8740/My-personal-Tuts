#include <stdio.h>
int *func(int *p,int n);
int main(){
    int arr[5]={5,9,7,2,3},n,*ptr;
    n=2;
    ptr=func(arr,n);
    //Reference passed of the first element of the array to the function
    printf("%x\n",arr);
    printf("initial arr add: %u\nvalue of ptr: %u \nvalue of *ptr: %d",arr,ptr,*ptr);
    return 0;

}
int *func(int *p, int n)
{
     p=p+n;
    return p;
}

