#include<stdio.h>
int main(){
int arr[3][3]={{1,2,3},{4,5,6},{7,8,9}};
for(int i=0;i<3;i++){
    printf("add of %d array %u, %u\n",i,arr[i],*(arr+i));
    for (int j=0;j<3;j++)
        printf("%d-Element %d %d \n",j,arr[i][j],*(*(arr+i)+j));
}
return 0;
}