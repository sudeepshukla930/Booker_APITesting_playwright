
/**
 * Generates a token by making a POST request to the authentication endpoint.
 * @param {object} request - The request object used to make HTTP requests.
 * @returns {string} The generated token.
 */


export async function generateToken(request){
     
    // Make a POST request to the authentication endpoint with predefined username and password

    let response  = await request.post('/auth', {
        data: {
            "username" : "admin",
            "password" : "password123"
        }
      });

    // Extract the token from the response

      response = await response.json();
      return response.token ;
}