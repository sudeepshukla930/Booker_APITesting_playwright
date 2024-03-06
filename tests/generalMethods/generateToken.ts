

export async function generateToken(request){
     

    let response  = await request.post('/auth', {
        data: {
            "username" : "admin",
            "password" : "password123"
        }
      });

      response = await response.json();
      return response.token ;
}