import { Response, expect } from "@playwright/test";
import { BookingType } from "../postPojo/bookingData";

export class ApiValidate{

    static async  postValidate( response :Response, bookingData : BookingType){

        expect(response.status()).toBe(200);

        
        const bookingDetails = await response.json();

        expect(bookingDetails.booking['firstname']).toBe(bookingData.firstname);
        expect(bookingDetails.booking['lastname']).toBe(bookingData.lastname);
        expect(bookingDetails.booking['totalprice']).toBe(bookingData.totalprice);
        expect(bookingDetails.booking['depositpaid']).toBe(bookingData.depositpaid);
        expect(bookingDetails.booking.bookingdates['checkin']).toBe(bookingData.bookingdates.checkin);
        expect(bookingDetails.booking.bookingdates['checkout']).toBe(bookingData.bookingdates.checkout);
        expect(bookingDetails.booking['additionalneeds']).toBe(bookingData.additionalneeds);

    }


    static async  getValidate( response : Response, bookingData : BookingType){

        expect(response.status()).toBe(200);

        // Assert the booking details with the data used for creation
        const bookingDetails = await response.json();

        expect(bookingDetails).toEqual(expect.objectContaining(bookingData));

    }


    static async  putValidate( response : Response , bookingData : BookingType, getResponse : any){

        expect(response.status()).toBe(200);

        // Assert the booking details with the data used for creation
        const updatedBookingDetails = await response.json();
      

        expect(updatedBookingDetails).not.toEqual(expect.objectContaining(getResponse));

        expect(updatedBookingDetails).toEqual(expect.objectContaining(bookingData));


    }

    static async  patchValidate( response : Response, bookingData : BookingType){

        expect(response.status()).toBe(200);

        // Assert the booking details with the data used for creation
        const bookingDetails = await response.json();

        
        expect(bookingDetails['firstname']).toBe(bookingData.firstname);
        expect(bookingDetails['totalprice']).toBe(bookingData.totalprice);
       

    }

    static async deleteValidate(response:Response, requestMethod : string){

        (requestMethod === "delete") ? expect(response.status()).toBe(201) :  expect(response.status()).toBe(404);
        
    }




    
}