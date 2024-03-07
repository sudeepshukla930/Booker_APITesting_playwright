/**
 * Updates a booking using PUT request with the provided bookingBody data.
 * @param {object} request - The request object used to make HTTP requests.
 * @param {BookingType} bookingBody - The updated booking data to be sent in the PUT request.
 * @returns {Promise} A promise that resolves with the response of the PUT request.
 */


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