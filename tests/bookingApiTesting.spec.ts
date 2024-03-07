/**
 * This test suite performs end-to-end testing of booking API operations including creation, retrieval, update, and deletion.
 * It utilizes various helper functions for generating random booking data, making API requests, validating responses, and managing tokens.
 */


import { test, expect, Response } from '@playwright/test';
import {  BookingType, generateRandomBooking } from './postPojo/bookingData';
import { createBooking } from './requests/postRequest';
import { getBooking } from './requests/getRequest';
import { ApiValidate } from './validations/apiValidation';
import { generateToken } from './generalMethods/generateToken';
import { updateBookingPut } from './requests/putRequest';
import { updateBookingPatch } from './requests/patchRequest';
import { deleteBooking } from './requests/deleteRequest';



let bookingData:BookingType ;

let getResponse:Response;
let successfullyBookingCreateData : Response;



test.describe.serial('Booking API Testing', ()=>{


    test.beforeAll(async ({request}) => {

        
        if(process.env.BOOKING_ID === "null"){
           
            bookingData = await generateRandomBooking();
    
            successfullyBookingCreateData = await createBooking(request,bookingData);


            ApiValidate.postValidate(successfullyBookingCreateData,bookingData);

            
            process.env.BOOKING_ID = (await successfullyBookingCreateData.json()).bookingid
            

        }
        
    });


    test('GET booking details of created id', async ({ request }) => {
  
       
        getResponse = await getBooking(request);
    
    
        ApiValidate.getValidate(getResponse,bookingData);

    });


    test('Update whole booking dettails using PUT', async ({ request }) => {
  
       

        const bookingData2 = await generateRandomBooking();
        process.env.AUTH_TOKEN  = await generateToken(request);

        let response  = await updateBookingPut(request , bookingData2);

        ApiValidate.putValidate(response , bookingData2 , getResponse);

    
    });


    test('Update partial booking details using PATCH', async ({ request }) => {
  
      

        const bookingData2 = await generateRandomBooking();
        
        if(process.env.AUTH_TOKEN === "null"){
            process.env.AUTH_TOKEN  = await generateToken(request);
        }


        let response  = await updateBookingPatch(request , bookingData2);
        
        ApiValidate.patchValidate(response , bookingData2 );


    
    });



    test('Delete Booking', async ({ request}) => {
  
        let response = await deleteBooking(request);
       
        ApiValidate.deleteValidate( response, "delete");

        response = await getBooking(request);

        ApiValidate.deleteValidate( response, "get");


    });
})




