/**
 * Updates a booking using PATCH request with the provided bookingBody data.
 * @param {object} request - The request object used to make HTTP requests.
 * @param {BookingType} bookingBody - The updated booking data to be sent in the PATCH request.
 * @returns {Promise} A promise that resolves with the response of the PATCH request.
 */

import { BookingType } from "../postPojo/bookingData";


export async function updateBookingPatch(request , bookingBody:BookingType){

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