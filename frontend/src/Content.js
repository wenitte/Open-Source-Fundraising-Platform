import React from 'react';
import styled from 'styled-components';

const Content = ({ children }) => (
  <div>
    <BannerWrapper>
      <Banner
        src={'./static/africa.jpg'}
        alt="Your Crowdfunding Title"
      />
    </BannerWrapper>

    <h1>Raise Me Funds Crowdfunding Campaign</h1>

    <p>
      Hey there. My name is Descript{' '}
    </p>


    <p>
      Fantastic
    </p>

    <h2>The Pitch</h2>

    <p>Lorem ipsum ...</p>

    <h2>Goals and Perks</h2>

    <p>
      This crowd funding campaign runs until ...
    </p>

    <ul>
      <li>
        If more than <strong>100 USD</strong> are funded, I am able to !
      </li>
      <li>
        If more than <strong>500 USD</strong> are funded, I am going to do it!
      </li>
      <li>
        If more than <strong>1500 USD</strong> are funded, I will ...!
      </li>
    </ul>

    <p>
      The payments are handled by <a href="https://stripe.com/">Stripe</a> and
      thus your credit card details are securely managed by them. No credit card
      information is saved on my server.
    </p>

    <p>
      So what are the perks for your contribution to this crowdfunding campaign ...
    </p>

    <ul>
      <li>
        Thank you!
      </li>
      <li>
        Thanks !
      </li>
      <li>
      Thank you!
      </li>
    </ul>

    <p>
      Thank you for reading and for your support, RAISEMEFUNDS
    </p>

    {children}
  </div>
);

const BannerWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Banner = styled.img`
  margin: 0;
  max-width: 100%;
  height: 400px;
`;

export default Content;
