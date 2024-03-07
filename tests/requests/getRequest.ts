

export async function getBooking(request){

    const response = await request.get(`/booking/${process.env.BOOKING_ID}`)

      return await response;

}