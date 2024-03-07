import { BookingType } from "../postPojo/bookingData";

export async function updateBookingPut(request , bookingBody:BookingType){

    const response = await request.put(`/booking/${process.env.BOOKING_ID}`,{
        data: bookingBody,
        headers: {
            Cookie: `token=${process.env.AUTH_TOKEN}`,
            Accept: "*/*",
          }
        });
      return response;

}