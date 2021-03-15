import Stripe from 'stripe';

const paymentApi = app => {
  app.get('/', (req, res) => {
    res.send({
      message: 'Ping from Checkout Server',
      timestamp: new Date().toISOString(),
      env: process.env.NODE_ENV,
    });
  });

  app.post('/payment/session-initiate', async (req, res) => {
    const {
      clientReferenceId,
      customerEmail,
      lineItem,
      successUrl,
      cancelUrl,
    } = req.body;

    const stripe = Stripe('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');

    let session;

    try {
      session = await stripe.checkout.sessions.create({
        client_reference_id: clientReferenceId,
        customer_email: customerEmail,
        payment_method_types: ['card'],
        line_items: [lineItem],
        payment_intent_data: {
          description: `${lineItem.name} ${lineItem.description}`,
        },
        success_url: successUrl,
        cancel_url: cancelUrl,
      });
    } catch (error) {
      res.status(500).send({ error });
    }

    return res.status(200).send(session);
  });

  app.post('/payment/session-complete', async (req, res) => {
    const stripe = Stripe('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');

    let event;

    try {
      event = stripe.webhooks.constructEvent(
        req.rawBody,
        req.headers['stripe-signature'],
        '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'
      );
    } catch (error) {
      return res.status(400).send(`Webhook Error: ${error.message}`);
    }

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object;

      try {
        // complete your customer's order
        // e.g. save the purchased product into your database
        // take the clientReferenceId to map your customer to a product
      } catch (error) {
        return res.status(404).send({ error, session });
      }
    }

    return res.status(200).send({ received: true });
  });

  return app;
};

export default paymentApi;
