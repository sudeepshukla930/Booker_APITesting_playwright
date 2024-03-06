import { test, expect } from '@playwright/test';
import { generateRandomBooking } from './postPojo/bookingData';
import { createBooking } from './requests/postRequest';
import { getBooking } from './requests/getRequest';
import { ApiValidate } from './validations/apiValidation';
import { generateToken } from './generalMethods/generateToken';
import { updateBookingPut } from './requests/putRequest';
import { updateBookingPatch } from './requests/patchRequest';
import { deleteBooking } from './requests/deleteRequest';


let bookingId: string | null = null;


let bookingData ;

let getResponse;
let successfullyBookingCreateData;



test.describe.serial('Booking API Testing', ()=>{


    test.beforeAll(async ({request}) => {

        console.log("test1:  ", process.env.BOOKING_ID);

        // if(process.env.BOOKING_ID === null){
        //     console.log("testIf:  ", process.env.BOOKING_ID);
        //     process.env.BOOKING_ID = "1";
        // }

        if(process.env.BOOKING_ID === "null"){
            console.log("beforeall started.....")

            bookingData = await generateRandomBooking();
    
            successfullyBookingCreateData = await createBooking(request,bookingData);

            //ApiValidate.getPostValidate(successfullyBookingCreateData,bookingData);
           // console.log(successfullyBookingCreateData);

            ApiValidate.postValidate(successfullyBookingCreateData,bookingData);

            //console.log("::  ", await successfullyBookingCreateData.json());
            
            process.env.BOOKING_ID = (await successfullyBookingCreateData.json()).bookingid
            //process.env.BOOKING_ID = bookingId!;

            console.log("test:  ", process.env.BOOKING_ID);


           // console.log("beforeall ended.....")

        }
        
    });


    test('GET booking details of created id', async ({ request }) => {
  
       
        // console.log("data " , bookingData);

        // console.log("id  " , bookingId);
        
        // console.log('post :  ' , successfullyBookingCreateData);

        console.log("get started .....")

    
        getResponse = await getBooking(request);
    
        //console.log('get :  ' , await getResponse.json());
    
        ApiValidate.getValidate(getResponse,bookingData);

        console.log("get ended .....")


    
    });


    test('Update whole booking dettails using PUT', async ({ request }) => {
  
        console.log("update started .....")

        const bookingData2 = await generateRandomBooking();
        process.env.AUTH_TOKEN  = await generateToken(request);

        // console.log(bookingId)
         console.log(process.env.AUTH_TOKEN)

        // console.log("d  ", bookingData2)

        let response  = await updateBookingPut(request , bookingData2);

        
        // console.log(await response.json());
        //console.log('get put  :  ' , getResponse);
        
        ApiValidate.putValidate(response , bookingData2 , getResponse);

        console.log("update ended .....")

    
    });


    test('Update partial booking details using PATCH', async ({ request }) => {
  
        //console.log("update started .....")

        const bookingData2 = await generateRandomBooking();
        
        if(process.env.AUTH_TOKEN === "null"){
            process.env.AUTH_TOKEN  = await generateToken(request);
        }

        // console.log(bookingId)
        // console.log(token)
        // console.log("d  ", bookingData2)

        console.log("t  ", process.env.AUTH_TOKEN)

        console.log(bookingData2.firstname , bookingData2.totalprice);


        let response  = await updateBookingPatch(request , bookingData2);

        console.log(await response.json());
        // console.log(await response.json());
        //console.log('get put  :  ' , getResponse);
        
        ApiValidate.patchValidate(response , bookingData2 );

        //console.log("update ended .....")

    
    });



    test('Delete Booking', async ({ request}) => {
  
        let response = await deleteBooking(request);
        console.log(response)
    });
})




