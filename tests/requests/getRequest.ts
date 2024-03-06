

export async function getBooking(request){

    const response = await request.get(`/booking/${process.env.BOOKING_ID}`)

    console.log("testget:  ", process.env.BOOKING_ID);

      return await response;

}