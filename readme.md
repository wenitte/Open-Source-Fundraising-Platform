# Open Source Fundraising Tool!
## An open source  Tool Created 100% with React, Stripe, Node and Firebase
##Ever wanted to run a personal fundraiser without paying the huge fees on GoFundMe and other platforms? This free open source project is the solution. You will only pay Stripe fees.

##Instructions
##Step 1:
 Clone the repo
##Step 2:
Create a Firebase Project and upgrade to Blaze plan
##Step 3:
 cd into backend folder then cd into functions and run npm install
##Step 4:
Run firebase deploy --only functions and follow the prompts
##Step 5:
 Copy the URL on which firebase just deployed your payment server
##Step 6:
cd into fronted
##Step 7:
Edit the .env.development and .env.production files to contain the correct Stripe keys. Make sure you put your live server url in both the development and production files.
##Step 8:
cd into src then cd into utils. Edit the firebase.js file to contain the correct config information (Can be found in the project's firebase console.)
##Step 9:
run npm install
##Step 10:
run npm start
##Step 11:
Ta Da! If you want to make any changes now you can.
##Step 12:
When you are ready to deploy the site live run npm run build
##Step 13
Then do firebase init, select hosting , configure site as single page, do not set up Github automatic deploys, set build as the public directory, do not overwrite build/index.html
##Step 14
Now run firebase deploy and you're good to go! You can connect a custom domain in firebase if you want.
