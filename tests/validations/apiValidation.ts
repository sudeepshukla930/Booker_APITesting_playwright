import { expect } from "@playwright/test";

export class ApiValidate{

    static async  postValidate( response , bookingData){

        expect(response.status()).toBe(200);

        // Assert the booking details with the data used for creation
        const bookingDetails = await response.json();

        //console.log("@@+++   ", bookingDetails)
        //console.log("@@   ", bookingDetails.booking['firstname'])
        expect(bookingDetails.booking['firstname']).toBe(bookingData.firstname);
        expect(bookingDetails.booking['lastname']).toBe(bookingData.lastname);
        expect(bookingDetails.booking['totalprice']).toBe(bookingData.totalprice);
        expect(bookingDetails.booking['depositpaid']).toBe(bookingData.depositpaid);
        expect(bookingDetails.booking.bookingdates['checkin']).toBe(bookingData.bookingdates.checkin);
        expect(bookingDetails.booking.bookingdates['checkout']).toBe(bookingData.bookingdates.checkout);
        expect(bookingDetails.booking['additionalneeds']).toBe(bookingData.additionalneeds);

    }


    static async  getValidate( response , bookingData){

        expect(response.status()).toBe(200);

        // Assert the booking details with the data used for creation
        const bookingDetails = await response.json();

        expect(bookingDetails).toEqual(expect.objectContaining(bookingData));

    }


    static async  putValidate( response , bookingData, getResponse){

        expect(response.status()).toBe(200);

        // Assert the booking details with the data used for creation
        const updatedBookingDetails = await response.json();
       //const getResponses = await getResponse.json();

        expect(updatedBookingDetails).not.toEqual(expect.objectContaining(getResponse));

        expect(updatedBookingDetails).toEqual(expect.objectContaining(bookingData));


    }

    static async  patchValidate( response , bookingData){

        expect(response.status()).toBe(200);

        // Assert the booking details with the data used for creation
        const bookingDetails = await response.json();

        
        expect(bookingDetails['firstname']).toBe(bookingData.firstname);
        expect(bookingDetails['totalprice']).toBe(bookingData.totalprice);
       

    }




    
}