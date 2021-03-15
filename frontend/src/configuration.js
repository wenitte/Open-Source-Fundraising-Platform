const CONFIGURATION = {
  themeColor: '#134896',

  // Funding Goal
  goal: '1000', // adjustable during funding campaign
  currency: 'USD', // shouldn't ne adjusted during funding compaing (find supported currencies at https://stripe.com/docs/currencies)

  // Checkout Form
  checkoutTitle: 'Thank you!',
  checkoutDescription: 'RaiseMeFunds Campaign', // will show up in your Stripe payment dashboard too
  checkoutButtonLabel: 'Fund',
  callToAction: 'Fund it!',
  defaultAmount: 25
};

export default CONFIGURATION;
