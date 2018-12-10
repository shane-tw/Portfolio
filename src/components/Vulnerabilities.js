import { Container } from 'reactstrap'
import React from 'react'

export const Vulnerabilities = () => (
  <div id="vulnerabilities">
    <h2 class="navpad">Vulnerability Disclosures</h2>
    <Container>
      <h3 style={{display: 'inline-block', marginRight: '0.5rem'}}>Dunnes Stores</h3>
      <h4 className="text-muted" style={{display: 'inline-block'}}>(2015)</h4>
      <p>
        Dunnes Stores was using a separate payment system for gift cards.
        The checkout page was leaking the payment processor's secret token in requests and responses.
        Given the secret token, it was possible to buy gift cards of any amount for any price.
        As a test scenario, I bought a &euro;100 gift card for &euro;1 by signing my own payment and then disclosed the issue, had the order cancelled and the issue was promptly fixed.
      </p>
      <h3 style={{display: 'inline-block', marginRight: '0.5rem'}}>BuyGameCredit</h3>
      <h4 className="text-muted" style={{display: 'inline-block'}}>(2017)</h4>
      <p>
        BuyGameCredit was a site which allowed buying digital content for Xbox and Playstation using phone credit.
        In payments it used a separate ID for the product and price.
        This meant one could find the ID of the cheapest item on the site and order any product using that ID.
        One could order the most expensive item on the shop for the price of the cheapest item.
      </p>
      <h3 style={{display: 'inline-block', marginRight: '0.5rem'}}>Vodafone Ireland</h3>
      <h4 className="text-muted" style={{display: 'inline-block'}}>(2017)</h4>
      <p>
        Some Vodafone accounts have PINs which one must enter in order to top up other accounts or view bills.
        The PIN by default is the last 4 digits of a person's account number, listed on their bill.
        The API used by the <i>My Vodafone Ireland</i> mobile app allowed listing bill IDs if logged in.
        One could log in with a separate account and request the other user's bill ID and read their bill without needing to enter a PIN.
        Hence one could obtain their PIN from the bill and make unauthorized bill pay topups, thereby bypassing the PIN check.
      </p>
    </Container>
  </div>
)

export default Vulnerabilities