/**
 * Class containing static methods to validate API responses for booking operations.
 */

import { Response, expect } from "@playwright/test";
import { BookingType } from "../postPojo/bookingData";

export class ApiValidate{

    /**
     * Validates the response of a POST request for booking creation.
     */

    static async  postValidate( response :Response, bookingData : BookingType){

        expect(response.status()).toBe(200);

        
        const bookingDetails = await response.json();

        // Assert individual booking details

        expect(bookingDetails.booking['firstname']).toBe(bookingData.firstname);
        expect(bookingDetails.booking['lastname']).toBe(bookingData.lastname);
        expect(bookingDetails.booking['totalprice']).toBe(bookingData.totalprice);
        expect(bookingDetails.booking['depositpaid']).toBe(bookingData.depositpaid);
        expect(bookingDetails.booking.bookingdates['checkin']).toBe(bookingData.bookingdates.checkin);
        expect(bookingDetails.booking.bookingdates['checkout']).toBe(bookingData.bookingdates.checkout);
        expect(bookingDetails.booking['additionalneeds']).toBe(bookingData.additionalneeds);

    }


    /**
     * Validates the response of a GET request for booking retrieval.
     */

    static async  getValidate( response : Response, bookingData : BookingType){

        expect(response.status()).toBe(200);

        // Assert the booking details with the data used for creation
        const bookingDetails = await response.json();

        expect(bookingDetails).toEqual(expect.objectContaining(bookingData));

    }

     /**
     * Validates the response of a PUT request for updating a booking.
     */

    static async  putValidate( response : Response , bookingData : BookingType, getResponse : any){

        expect(response.status()).toBe(200);

        // Assert updated details do not match initial details but match updated data
        const updatedBookingDetails = await response.json();
      

        expect(updatedBookingDetails).not.toEqual(expect.objectContaining(getResponse));

        expect(updatedBookingDetails).toEqual(expect.objectContaining(bookingData));


    }

     /**
     * Validates the response of a PATCH request for updating a booking partially.
     */

    static async  patchValidate( response : Response, bookingData : BookingType){

        expect(response.status()).toBe(200);

        const bookingDetails = await response.json();

        // Assert specific fields have been updated correctly

        expect(bookingDetails['firstname']).toBe(bookingData.firstname);
        expect(bookingDetails['totalprice']).toBe(bookingData.totalprice);
       

    }

    /**
     * Validates the response of a DELETE request for deleting a booking.
     */

    static async deleteValidate(response:Response, requestMethod : string){

        (requestMethod === "delete") ? expect(response.status()).toBe(201) :  expect(response.status()).toBe(404);
        
    }




    
}