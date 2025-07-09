#include<stdio.h>
 func(int *p);
int main(){
    int array[]={1,5,3,6};
    printf("Inside Main size: %d\n",sizeof(array));
    func(array);
    //Array is given as argument on the func() but, only reference(Array Address) of first element will be passed to the function

    //Same for char and float type arrays
    return 0;
}
 func(int *p){
    printf("Inside func size of int: %d\n",sizeof(p));

}
//