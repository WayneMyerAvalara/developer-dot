---
layout: post
title: RefundTransaction vs ReturnInvoice
description: When to use refundTransaction endpoint vs returnInvoice type with createTransaction endpoint
date: 2018-12-07 12:00
author: Genevieve Conty
comments: true
categories: [avatax, how to]
product: avatax
doctype: blog
disqus: 1
---

When you find you need to refund a transaction, you have two options to create your return invoice:
<ul class="normal">
    <li>Use the RefundTransaction API endpoint</li>
    <li>Use the CreateTransaction API endpoint with `type = ReturnInvoice`</li>
</ul>

What’s the difference? The RefundTransaction endpoint is a shortcut for creating return invoices that requires fewer inputs and user information. On the other hand, the CreateTransaction endpoint is useful in situations where refunds are especially complex, like when you want to refund partial quantities or partial lines. 

<h2>When do you use Refund Transaction Endpoint?</h2>

For most refunds, the RefundTransaction endpoint can do everything you need. The endpoint sets up a certain amount of automation for creating a <a href="https://developer.avalara.com/api-reference/avatax/rest/v2/models/enums/DocumentType/#comment-3475229272" target="_blank">return invoice</a>, so it’s essentially the quickest way to an accurate refund. While the CreateTransaction endpoint can also create return invoices, it requires much more user input to do so.

The <a href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Transactions/RefundTransaction/#comment-3895519974" target="_blank">RefundTransaction endpoint</a> is ideal for situations where you need to:
<ul class="normal">
    <li>Issue a full refund</li>
    <li>Issue a partial refund</li>
    <li>Specify a specific line to refund</li>
    <li>Ensure the refunded amount matches the original transaction _regardless of any settings or configuration changes_</li>
</ul>

To fully utilize the versatility of the endpoint, check out the options and examples below.  

<h2>How do you use the RefundTransaction endpoint?</h2>

This is an example of a typical request for RefundTransaction:
```json
{
  "refundTransactionCode": "a5bc33c0-76c2-479a-a4c2-f5b3403c9692",
  "refundDate": "2018-10-23",
  "refundType": "Full",
  "referenceCode": "Refund for a committed transaction"
}
```

It’s a straight forward <a href="https://developer.avalara.com/api-reference/avatax/rest/v2/models/RefundTransactionModel/" target="_blank">RefundTransactionModel</a> and the rest of the required address and customer information is automatically collected through the endpoint. All you need is a transaction code and date. However, the `refundType` is key to utilizing the endpoint’s flexibility. You can have several different types of refunds: 

* • `Full` refunds the full amount of the transaction
* • `TaxOnly`only refunds the calculated tax. This is great for cases when customers give you a tax exemption certificate after the sale.
* • `Percentage` allows you to refund a percentage of your transaction.
* • `Partial` will allow you to refund certain lines of the transaction.

The  `refundType = Percentage` request also uses another input called `refundPercentage` where the user can dictate the correct amount to return. 
```json
{
  "refundTransactionCode": "a5bc33c0-76c2-479a-a4c2-f5b3403c9692",
  "refundDate": "2018-10-23",
  "refundType": "Percentage",
  "refundPercentage": 25,
  "referenceCode": "Refund for a committed transaction"
}
```


In the `refundType = Partial` example below. Notice that the lines that need to be refunded are specified with the  `refundLines` input using their line numbers. In this case, lines 2 and 7 will be refunded on the transaction.
```json
{
  "refundTransactionCode": "a5bc33c0-76c2-479a-a4c2-f5b3403c9692",
  "refundDate": "2018-10-23",
  "refundType": "Partial",
  "refundLines": ["2", "7"],
  "referenceCode": "Refund for a committed transaction"
}
```


In response to the `Partial` example, the API would return a response similar to the truncated one below:
```json
{
  "id": 0123456789,
  "code": "df2ad34a-7c56-4705-abaf-3d11c1dbc4ca",
  "companyId": 1234567,
  "date": "2018-12-05",
  "status": "Committed",
  "type": "ReturnInvoice",
  "currencyCode": "USD",
  "customerVendorCode": "1234",
  "customerCode": "1234",
  "referenceCode": "Refund for a committed transaction",
  "totalAmount": -1234,
  "totalTax": -92.56,
  "totalTaxable": -1234,
  "totalTaxCalculated": -92.56,
  "region": "NC",
  "country": "US",
  "exchangeRateEffectiveDate": "2018-12-05",
  "exchangeRate": 1,
  [...]
  "lines": [
    {
      "id": 19483081973,
      "transactionId": 8454818665,
      "lineNumber": "2",
      "destinationAddressId": 15539135659,
      "originAddressId": 15539135659,
      "isItemTaxable": true,
      "isSSTP": true,
      "itemCode": "234",
      "lineAmount": -1234,
      "quantity": 1,
      "reportingDate": "2018-12-05",
      "sourcing": "Destination",
      "tax": -92.56,
      "taxableAmount": -1234,
      "taxCalculated": -92.56,
      "taxCode": "P0000000",
      "taxCodeId": 4316,
      "taxDate": "2018-12-05",
      "taxOverrideType": "TaxAmount",
      "taxOverrideAmount": -92.56,
      "taxOverrideReason": "Refund request on 2018-12-05",
      [...]
    }
  ],
  "addresses": [...],
  "locationTypes": [...],
  "summary": [...],
}
```

In the above, you’ll notice that the amounts for `taxCalculated`, `lineAmount` and `totalAmount` are all negative, which indicates the refund was correctly applied. 

<h2>When do you use ReturnInvoices and the CreateTransaction endpoint?</h2>
If the RefundTransaction is a shortcut, creating a ReturnInvoice through the <a href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Transactions/CreateTransaction/" target="_blank">CreateTransaction endpoint</a> is definitely the long way around. However, the long way has the advantage of giving you more control and flexibility over your refund. Partial line refunds are the perfect example where you should make your return invoice through the CreateTransaction endpoint. 

What’s a *partial line refund*? Let’s say you have a line on a transaction for 50 balls of yarn and you find you need to refund 10 balls of yarn from this line. This is a partial line refund because you don’t intend to refund the amount for the full 50 balls of yarn.

Is the partial line refund doable? Yes, but only with the CreateTransaction endpoint.

<h2>How do you construct Return Invoices?</h2>
If partial line refunds are fair game, how do we construct the correct <a href="https://developer.avalara.com/api-reference/avatax/rest/v2/models/CreateTransactionModel/" target="_blank">model for the CreateTransaction</a> endpoint?  Let’s continue with our yarn example and say each ball of yarn originally cost $5. 

First, we need to set up a request with `type = ReturnInvoice` and a negative value for `amount` and a positive amount for `quantity`. In this case,  `amount = -50` and `quantity = 10`. We also need key information like addresses and the `customerCode`. 


```json
{
  "lines": [
    {
      "number": "1",
      "quantity": 10,
      "amount": -50,
      "itemCode": "Y0001",
      "description": "Yarn"
    }
  ],
  "type": "ReturnInvoice",
  "companyCode": "DEFAULT",
  "date": "2018-12-05",
  "customerCode": "1234",
  "purchaseOrderNo": "2018-12-05-001",
  "addresses": {
    "singleLocation": {
      "line1": "180 Bpw Club Rd",
      "city": "Carrboro",
      "region": "NC",
      "country": "US",
      "postalCode": "27510"
    }
  },
  "commit": true,
  "currencyCode": "USD",
  "description": "Yarn"
}
```
Now that we’ve set up our response with a negative amount value, we can expect the return invoice to return negative values, indicating the refund has been made. Here is a truncated response for the above example:

```json
{
  "id": 0123456789,
  "code": "3771db13-3cf0-43ec-a2f6-7ce7c9b2acae",
  "companyId": 1234567,
  "date": "2018-12-05",
  "status": "Committed",
  "type": "ReturnInvoice",
  "currencyCode": "USD",
  "customerVendorCode": "1234",
  "customerCode": "1234",
  "purchaseOrderNo": "2018-12-05-001",
  "totalAmount": -50,
  "totalTax": -3.76,
  "totalTaxable": -50,
  "totalTaxCalculated": -3.76,
  "region": "NC",
  "country": "US",
  "description": "Yarn",
  "taxDate": "2018-12-05T00:00:00",
  "lines": [
    {
      "id": 01234567890,
      "transactionId": 0123456789,
      "lineNumber": "1",
      "description": "Yarn",
      "isItemTaxable": true,
      "isSSTP": true,
      "itemCode": "Y0001",
      "lineAmount": -50,
      "quantity": 10,
      "tax": -3.76,
      "taxableAmount": -50,
      "taxCalculated": -3.76,
      "taxCode": "P0000000",
      "taxCodeId": 4316,
      "taxDate": "2018-12-05",
      "details": [...],
      "nonPassthroughDetails": [],
      "lineLocationTypes": [...],
      "parameters": {},
      "hsCode": "",
      "costInsuranceFreight": 0,
      "vatCode": "",
      "vatNumberTypeId": 0
    }
  ],
  "addresses": [...],
  "locationTypes": [...],
  "summary": [...],
  "parameters": {}
}
```

<h2>Where to go next?</h2>
As you can see, the RefundTransaction endpoint is robust and easy to use. For most situations, this endpoint is flexible enough to provide what you need for your refund. However, for those especially nuanced scenarios, CreateTransaction gives you access to all the bells and whistles so you can cater to your niche users and edge cases.  

If you find you need more information about this endpoint, comment below or checkout our responsive <a href="https://community.avalara.com/avalara/category_sets/developers" target="_blank">community forums</a>. 