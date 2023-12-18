export type User = {
    id: string;
}

const userlist:User[] = [];

export function UserExists(id: any): boolean {
  console.log(userlist);
  return userlist.some((entry) => {
    console.log(entry.id + " is? " + id);
    return entry.id === id;
  });
}

export function AddUser(id:any): boolean{
    try{

        const user:User = {id:id}
        userlist.push(user);
    }
    catch(error){
        console.log(error)
        return false;
    }
    return true;
}

export function GetUsers(): User[] {
    return userlist;
}

export function GetUser(id:any): User|null {
    return userlist.find((p) => p.id === id) ||null;
}