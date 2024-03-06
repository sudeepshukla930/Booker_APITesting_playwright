

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