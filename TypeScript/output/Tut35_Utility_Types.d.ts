interface UserInterFace35 {
    id: number;
    name: string;
    location: string;
    contact: string;
}
declare let UserData35: Partial<UserInterFace35>;
declare function getData35(data: Partial<UserInterFace35>): void;
declare function getData35_1(data: Required<UserInterFace35>): void;
declare const myData35: Pick<UserInterFace35, 'name' | 'location'>;
