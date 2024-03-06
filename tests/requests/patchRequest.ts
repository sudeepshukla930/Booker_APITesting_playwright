export async function updateBookingPatch(request , bookingBody){

    const response = await request.patch(`/booking/${process.env.BOOKING_ID}`,{
        data: {
            "firstname" : `${bookingBody.firstname}`,
            "totalprice" : `${bookingBody.totalprice}`
        },
        headers: {
            Cookie: `token=${process.env.AUTH_TOKEN}`,
            Accept: "*/*",
          }
        });
      return response;

}