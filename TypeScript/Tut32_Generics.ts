//Generics in Typescript allow you to create reusable components that work 
// with a variety of data types while mainting type safety.

//generics better choice over 'any' if function param is taking same type and returning the same type
function myFunc32<N>(value:N):N{
    // return email; //it will throw error
    return value;
}
// <T> or <N> or any <custom> generic token specifies that both return type and param will be same type

// If any used in place of generic it will return any s
let value32_1 = myFunc32(23);//this variable has explicit datatype
let value32_2 = myFunc32('str');
