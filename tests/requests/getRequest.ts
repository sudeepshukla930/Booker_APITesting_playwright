/**
 * Retrieves booking information by sending a GET request based on the BOOKING_ID.
 * @param {object} request - The request object used to make HTTP requests.
 * @returns {Promise} A promise that resolves with the response of the GET request.
 */

export async function getBooking(request){

    const response = await request.get(`/booking/${process.env.BOOKING_ID}`)

      return await response;

}