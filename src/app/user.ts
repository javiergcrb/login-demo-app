export class IUser{
    id: string;
    firstName: string;
    country: string;
    email: string;
    password: string;
}

export class User implements IUser{
    id: string;
    firstName: string;
    country: string;
    email: string;
    password: string;

    constructor(o?:IUser){
        if( o!= undefined) Object.assign(this,o);
    }

}
