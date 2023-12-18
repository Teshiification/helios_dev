import { AddUser, GetUsers, UserExists } from "@/app/types/user";

export async function GET(req: Request) {
  return new Response(JSON.stringify(GetUsers()), {status:200})
}

export async function POST(req: Request) {
 try{

   const body = await req.json();
   const {id} = body;
      
   if (UserExists(id)) 
     return new Response('Already added this user', { status: 400 })
    
    console.log(`New subscription: ${id}`);
    AddUser(id);    
    return new Response("Subscription successful", {
      status: 200,
    })
  }catch(error){
    return new Response("Internal server error: " + error, {status:500});
  }
}
