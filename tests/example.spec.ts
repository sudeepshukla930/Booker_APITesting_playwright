import { test, expect } from '@playwright/test';
import { generateRandomBooking } from './postPojo/bookingData';

test('POST request', async ({ request }) => {
  
    const booking = await generateRandomBooking();

    console.log("OOOO    " , JSON.stringify(booking))

    const dd = {"firstname":"Jim","lastname":"Brown","totalprice":111,"depositpaid":false,"bookingdates":{"checkin":"2018-12-13","checkout":"2019-01-01"},"additionalneeds":"Breakfast"}

    const response = await request.post(`https://restful-booker.herokuapp.com/booking`, {
        data: dd
      });

      //console.log ("**************    ",response);
      console.log(dd);

      console.log ("data....... : " , await response.json());

    const response2 = await request.post(`https://restful-booker.herokuapp.com/booking`, {
        data: booking
      });
    
      console.log ("data....... : " , await response2);

});


