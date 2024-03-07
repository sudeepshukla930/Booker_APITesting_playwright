import { BookingType } from "../postPojo/bookingData";


export async function createBooking(request, bookingBody:BookingType){

    const response = await request.post(`/booking`, {
        data: bookingBody
      });

      return response;

}