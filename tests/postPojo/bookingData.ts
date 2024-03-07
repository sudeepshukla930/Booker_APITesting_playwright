/**
 * Represents a booking entity with specific properties.
 * Also generate random Dynamic data using faker
 * It can be used in update or create booking request
 */


import {faker} from '@faker-js/faker';

class Booking {

    firstname: string;
    lastname: string;
    totalprice: number;
    depositpaid: boolean;
    bookingdates: {
        checkin: string;
        checkout: string;
    };
    additionalneeds: string;

    constructor(
        firstname: string,
        lastname: string,
        totalprice: number,
        depositpaid: boolean,
        bookingdates: { checkin: string; checkout: string },
        additionalneeds: string
    ) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.totalprice = totalprice;
        this.depositpaid = depositpaid;
        this.bookingdates = bookingdates;
        this.additionalneeds = additionalneeds;
    }


    

}


/**
 * Defines the structure of a Booking entity.
 */

export type BookingType = {
    firstname: string;
    lastname: string;
    totalprice: number;
    depositpaid: boolean;
    bookingdates: {
        checkin: string;
        checkout: string;
    };
    additionalneeds: string;
}


/**
 * Generates random booking data using Faker library.
 * @returns {Booking} A new instance of Booking with randomly generated data.
 */

export function generateRandomBooking(): Booking {

         const  firstname = faker.person.firstName();
        const lastName = faker.person.lastName();
        const totalprice = faker.string.numeric(3);
      const checkin = faker.date.soon().toISOString().split('T')[0];
      const  checkout = faker.date.soon({days:5,refDate: checkin}).toISOString().split('T')[0];
    const additionalneeds = 'Breakfast';
    const bookingdates = {checkin, checkout};
    return new Booking(firstname, lastName, +totalprice, true, bookingdates, additionalneeds);




}



