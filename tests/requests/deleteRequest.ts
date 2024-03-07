/**
 * Sends a DELETE request to delete a booking based on the BOOKING_ID.
 * @param {object} request - The request object used to make HTTP requests.
 * @returns {Promise} A promise that resolves with the response of the DELETE request.
 */

export async function deleteBooking(request){

    const response = await request.delete(`/booking/${process.env.BOOKING_ID}`, {
        headers: {
            'Content-Type': 'application/json',
            'Cookie': `token=${process.env.AUTH_TOKEN}`,
            'Accept': "*/*",    
        }
    });

     return response;

    

}