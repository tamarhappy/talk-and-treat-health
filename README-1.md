### Talk and Treat Health | KE
Talk and Treat Health is a React app that is all about creating accessibility to healthcare by solving the problem of time wastage and crowding while waiting to recieve healthcare. It helps the doctors by managing their clinic schedules and the patients by managing their personal time. Different languages such as React, JavaScript and HTML/JSX/CSS have all been used while developing the app.

### Development Process:

### Features
As you open the app, they are a number of features you will see:

### 1 Navigation
It contains the Company Logo (Redirects to the home page) created using Canva app.
The Searchbar
The Checkup icon (Redirects to the dashboard page)
The Profile icon (Redirects to the profile page
The Checkout icon (Redirects to the checkout page)
The overall Navigation was created and Designed using JSX/CSS and link tags for easy and efficient navigation to different features in the app. The colors were chosen to give a sense of the hospital environment and trust.

### 2 Homepage
Sign Up button (Redirects to the login page). It was created using JSX/CSS and easily directs the user from the home page to the login page, so as to be able to access the dashboard once signed in.
Reviews are also created and designed using JSX/CSS with dummy data at the moment.

### 3 Login page
Contains a login container that uses Firebase to authenticate users. It contains a container for the user to fill in their email and password, then can access the dashboard by clicking the Create Account button then the Sign In button.
Sign In button Created using JSX/CSS and React is used to access the dashboard for existing users.
Create Account button also created using JSX/CSS and React is used to allow the user to create a Firebase account, then Sign In ti access the Dashboard.

### 4 Dashboard
It is created and designed using JSX/CSS and also contains the Navigation.
The Sidebar contains different specialties that redirects the user to a specific doctor in that specialty using link tags and icons specifically from Google Fonts. It's designed using JSX/CSS.
The Main page contains a consult link that redirects the user to the consult page for consultation by the use of link tags. It also contains features like dummy data on the user's health progress and analytics.

### 5 Consult page
Contains different doctors and their specific specialties and ratings in a container each designed using useContext in JSX/CSS with a Consult button that redirects the user to their profile page, where they can book or join a virtual meeting.
Contains a Consult button that not only redirects the user to the profile page for booking/joining the meeting with the doctor, but
also adds the consultation fee to the Checkout page using basket functionalites and JSX/CSS. The button contains an addToBasketHandler prop that allows the button to transfer the consultation fee into the checkout.

### 6 Profile page
Contains a short form meant for the user to personalise for dummy data using HTML.
Contains a booking link that redirects the user to book a consultation with a doctor using link tags.
Contains a Pharmacy button created and designed using JSX/CSS and link tags that redirects the user to the Pharmacy page once done with payment.

### 7 Checkout page
Contains the consultation fee subtotal that's created using useContext and Arrays together with the basket functionalities to add the total fee in the checkout page. The subtotal container contains the  currency and total value, almost as if you were to add itmes to the cart.
A Procceed to Checkout Button that leads directly to the payment page using link tags and created and designed using JSX/CSS.

### 8 Payment page
Contains the consultation fee subtotal which is imported to the payment page and exit button that redirects the user back to the checkout page using link tags. It also contains the users address and card information form.
Contains a payment section by card functionality created by using a personal stripe function created in the Stripe app which allows payments to be made by implementing the stripe code. (Insuarance/M-pesa to be introduced)

### 9 Pharmacy page
Contains representation cards that contain the name of the pills and a Buy button created using JSX/CSS.
The Buy button redirects the user using link tags to Dovey Pharma which specifically has affordable prices for pills and is accessible due to it having many branches countrywide and delivery options. This is since we do not have an in built pharmacy.

alternatively...

A prescription can be sent to the patient by the doctor after consultation via the patients's email that they signed in with.
This is in the case that they are not able to access any of the Dovey Pharm branches.

### Challenges:
1. Using the most efficient React functionalities (useConxtext / props).
2. Adding an in-house pharmacy with real medicine.
3. Creating a way for patients and doctors to interact virtually from the application.
4. Adding insurance as a payment method.

### Solutions:
1. Using useContext instead of passing down items as props manually to reduce workload.
2. Creating a pharmacy directory into a licensed pharmacy (Dovey Pharmacy) which has branches all over Kenya and offers affordable meds and affordable deliveries.
3. For patient-doctor interractions, I created a Calendry account that allows patients to book for a consultation from the doctor's designed schedule and allows sends the user a reminder before the online consultation begins on the Google Meet Virtual Call.
4. Finding a way to get insurace stripe codes to allow patients who use insuarance to pay online.

### Conclusion:
We are hopping to continue making improvements to create a better user experience for the user and in future real medical professionals. We will add more features and a space where users can give us a review of their experience while using the app. Talk and Treat hopes to make lives better by creating accessible and affordable healthcare for all Kenyans.
