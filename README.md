 
# Restful Booker API Testing


![image](https://img.shields.io/badge/Playwright-2EAD33?style=for-the-badge&logo=Playwright&logoColor=yellow)    ![js](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E
)   ![ts](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white
)  ![API](https://img.shields.io/badge/API_Testing-48B9C7?style=for-the-badge&logo=pkgsrc&logoColor=white)

## 🤖 Overview
This repository contains a Playwright API automation framework in TypeScript for testing the RESTful Booker API. The framework includes test cases that cover various API operations such as creating, retrieving, updating, and deleting bookings.
***

## 🛠 Requirements Fulfilled 

1. **Create a Booking**: Test data for the POST request is built using a separate POJO (Plain Old JavaScript Object) to generate random booking data.

2. **Assert Create Booking Response**: The response of the Create Booking request is validated against the data posted in the request body.

3. **Save Booking ID**: The Booking ID from the Create Booking response is stored in a variable for further test usage.

4. **Get Booking Details**: Retrieve booking details using the Booking ID and compare them with the initial data used for booking creation.

5. **Token Generation Method**: A method is implemented to generate tokens for use in PUT, PATCH, and DELETE requests.

6. **Update Booking Details**: Update all booking details using the Booking ID and AUTH token generated. Separate booking data is created for this operation.

7. **Assert Update Booking Response**: Validate the status code and response of the update booking operation.

8. **Update Partial Details with PATCH**: Update only firstname and totalprice using a PATCH request.

9. **Assert PATCH Response**: Validate the status code and response returned from the PATCH request with the updated data supplied.

10. **Delete Booking**: Delete a booking and assert the status code of the deletion operation.

11. **Confirm Deletion**: Verify that attempting to retrieve a deleted booking returns a 404 status code, confirming successful deletion.




## 📁 Folder Structure
```
 tests/

   generalMethods/
     generateToken.ts
     

    postPojo/
      bookingData.ts


    requests/
      deleteRequest.ts
      getRequest.ts
      patchRequest.ts
      postRequest.ts
      putRequest.ts


    validations/
        apiValidation.ts
    
    bookingApiTesting.spec.ts
        
```

***
### 📜 Files Details & Role

Certainly! Here are the details of each file in the Playwright API Automation Framework:

1. **`postPojo/bookingData.ts`**:
   - **Purpose**: This file contains a Plain Old JavaScript Object (POJO) for generating random booking data.
   - **Functionality**: It provides a structure for creating random booking data that can be used in POST requests to create bookings.

2. **`requests/`**:
   - **Purpose**: This directory includes functions for making various API requests.
   - **Files**:
     - `postRequest.ts`: Function for making POST requests to create bookings.
     - `getRequest.ts`: Function for making GET requests to retrieve booking details.
     - `putRequest.ts`: Function for making PUT requests to update booking details.
     - `patchRequest.ts`: Function for making PATCH requests to partially update booking details.
     - `deleteRequest.ts`: Function for making DELETE requests to delete bookings.

3. **`validations/apiValidation.ts`**:
   - **Purpose**: This file contains validation methods for validating API responses.
   - **Functionality**: It includes functions to validate responses from API requests based on the requirements specified.

4. **`generalMethods/generateToken.ts`**:
   - **Purpose**: This file provides a method for generating authentication tokens.
   - **Functionality**: It offers a reusable method to generate tokens that can be used in PUT, PATCH, and DELETE requests.



Each file plays a specific role in the framework, contributing to the overall functionality of the Playwright API automation tests. Together, they form a cohesive system for testing the RESTful Booker API with Playwright in TypeScript.


***

### 🔨 Test file

- `bookingApiTesting.spec.ts`: This file contains end-to-end api test covering all the flow and requirements mentioned in docs and contains the main test suite with test cases for CRUD operations on the booking API. 
***



## 💻 Technologies Used
- **🎭 Playwright**: Automation library for web applications. 
- **![JavaScript Icon](https://img.icons8.com/color/24/000000/javascript--v1.png) JavaScript**: Programming language used for scripting. 
- **![Ts Icon](https://img.icons8.com/color/24/000000/typescript--v1.png) Typescript** : Markup language for creating web pages. 
- **![Allure Icon](https://img.icons8.com/ios/18/000000/test-tube.png) Playwright**: automation api testing tool. 

***

## ✔ Installation

```bash
   git clone https://github.com/sudeepshukla930/Booker_APITesting_playwright.git
```

install dependencies

```bash
   npm install
```

## 🚀 Usage

###  Running Tests



- **Run tests** 

```
npm run test
```

## 📈 Reports

- **HTML Report** 

```
npm run htmlReport

```

***

## 📌 Keypoints & Learning:

**Key Takeaways from the Booking API Testing Framework:**

1. **Modular Design**: Breaking down the testing logic into separate modules for data generation, requests, validations, and token management enhances code organization, reusability, and maintainability.

2. **Sequential Test Execution**: Running tests in a specific order ensures proper flow and dependency management, mimicking real-world scenarios and maintaining test reliability.

3. **Environment Variables Usage**: Leveraging environment variables for storing and sharing data like booking IDs and authentication tokens improves test flexibility, efficiency, and adaptability to different testing environments.

4. **Response Validation**: Thoroughly validating API responses against expected data ensures the correctness of operations, helps in detecting errors or inconsistencies, and boosts overall test reliability.


*******************************
********************


   **<h2 align="center"> Contributed by <a href="https://github.com/sudeepshukla930">Sudeep Shukla</a> With 💜. </h2>**





 