
export async function createBooking(request , bookingBody){

    const response = await request.post(`/booking`, {
        data: bookingBody
      });

      return response;

}