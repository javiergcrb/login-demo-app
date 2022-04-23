
export class IUser{
    id: string;
    firstName: string;
    country: string;
    email: string;
}

export class User implements IUser{
    id: string;
    firstName: string;
    country: string;
    email: string;

    constructor(o?:IUser){
        if( o!= undefined) Object.assign(this,o);
    }

}
