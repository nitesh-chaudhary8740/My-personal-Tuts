interface UserInterFace36 {
    id: number;
    name: string;
    location: string;
    contact: string;
}
declare const UserData36: Omit<UserInterFace36, 'id'>;
type APIStatus = 'loading' | 'error' | 'sucess' | 'pending';
declare let myVar36: Exclude<APIStatus, 'pending'>;
declare let myVar36_1: Extract<APIStatus, 'error' | 'sucess'>;
type AnyType = string | number | null | undefined | string[];
declare var randomData: NonNullable<AnyType>;
declare var randomData3: NonNullable<AnyType>;
