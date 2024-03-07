/**
 * Creates a new booking by sending a POST request with the provided bookingBody data.
 * @param {object} request - The request object used to make HTTP requests.
 * @param {BookingType} bookingBody - The booking data to be sent in the POST request.
 * @returns {Promise} A promise that resolves with the response of the POST request.
 */


import { BookingType } from "../postPojo/bookingData";


export async function createBooking(request, bookingBody:BookingType){

    const response = await request.post(`/booking`, {
        data: bookingBody
      });

      return response;

}