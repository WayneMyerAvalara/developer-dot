---
layout: post
title: General Delivery in AvaTax
description: Considerations for using General Delivery with AvaTax
date: 2018-11-26 16:00
author: Wayne Myer
comments: true
categories: avatax
product: avatax
doctype: blog
disqus: 1
---

## What is General Delivery?
General Delivery is a United States Postal System means to temporarily route mail for customers who lack a permanent location. Examples of this might be:
<ul>
<li>• customers who want PO Box service when there are no boxes available</li> 
<li>• touring cyclists who need parts and supplies delivered along their route</li> 
<li>• some retailers may not ship to a PO Box, but will ship to General Delivery</li>
</ul>
There are other applications and USPS use cases for General Delivery. You can read more about those uses at the <a href="https://pe.usps.com/archive/html/dmmarchive20030810/d930.htm" target="_blank">USPS site</a>.

When using General Delivery, the USPS delivers mail to the facility of that ZIP code. **In the case of larger, multiple mail center regions, like those in metropolitan areas, General Delivery mail is delivered to only one facility in that region.** For example, <a href="https://goo.gl/maps/7J3WrvHfHoJ2" target="_blank">Normandy Park is small city near Seattle</a> with ZIP codes 98148, 98166, and 98198. If a parcel were mailed via General Delivery to Normandy Park, it would actually be delivered to the <a href="https://goo.gl/maps/QLCPrGxfGUL2" target="_blank">downtown Seattle mail facility</a>, 12 miles away, at 301 Union Street.

The USPS format for using General Delivery is:

_Recipient's Name_  
**General Delivery**  
_City Name, State Zip_**-9999**

By using this format, the USPS will hold mail for pickup with identification. 

## What Does This Have to Do With AvaTax?
The TL;DR is: using an address of General Delivery overrides the default behavior of AvaTax's calculation.

AvaTax is designed to provide rooftop accuracy when calculating tax for you, delivering accurate taxes for where you are shipping your goods or delivering services. Applicable tax jurisdictions get applied while irrelevant taxes are ignored for your transaction.

There are cases where you might wish to override this behavior. A possible application for using General Delivery with AvaTax might be when the customer's address cannot be validated, but your customer confirms its validity. This failure to validate can occur in cases of new construction, before the USPS updates their central records.  

When overriding AvaTax's behavior, there are some factors of which to be aware. Using General Delivery causes AvaTax to use the ZIP centroid for calculation. This may result in more tax being calculated than necessary, because all taxes within the ZIP code are applied. An example of this is unincorporated vs incorporated townships. Incorporation boundaries can, and often do, differ from ZIP code boundaries.

Here is an example response summary for a transaction to a specific address in unincorporated Williston VT:
```json
{
  "summary": [
    {
      "country": "US",
      "region": "VT",
      "jurisType": "State",
      "jurisCode": "50",
      "jurisName": "VERMONT",
      "taxAuthorityType": 45,
      "stateAssignedNo": "",
      "taxType": "Sales",
      "taxName": "VT STATE TAX",
      "rateType": "General",
      "taxable": 100,
      "rate": 0.06,
      "tax": 6,
      "taxCalculated": 6,
      "nonTaxable": 0,
      "exemption": 0
    }
  ]
}
```


And here is the response summary for the same transaction, but using General Delivery as the destination address:
```json
{
  "summary": [
    {
      "country": "US",
      "region": "VT",
      "jurisType": "State",
      "jurisCode": "50",
      "jurisName": "VERMONT",
      "taxAuthorityType": 45,
      "stateAssignedNo": "",
      "taxType": "Sales",
      "taxName": "VT STATE TAX",
      "rateType": "General",
      "taxable": 100,
      "rate": 0.06,
      "tax": 6,
      "taxCalculated": 6,
      "nonTaxable": 0,
      "exemption": 0
    },
    {
      "country": "US",
      "region": "VT",
      "jurisType": "City",
      "jurisCode": "CRMI0",
      "jurisName": "WILLISTON",
      "taxAuthorityType": 45,
      "stateAssignedNo": "502",
      "taxType": "Sales",
      "taxName": "VT CITY TAX",
      "rateType": "General",
      "taxable": 100,
      "rate": 0.01,
      "tax": 1,
      "taxCalculated": 1,
      "nonTaxable": 0,
      "exemption": 0
    },
    {
      "country": "US",
      "region": "VT",
      "jurisType": "Special",
      "jurisCode": "EISX0",
      "jurisName": "WILLISTON LOCAL OPTION",
      "taxAuthorityType": 45,
      "stateAssignedNo": "502",
      "taxType": "Sales",
      "taxName": "VT SPECIAL TAX",
      "rateType": "General",
      "taxable": 100,
      "rate": 0,
      "tax": 0,
      "taxCalculated": 0,
      "nonTaxable": 0,
      "exemption": 0
    }
  ]
}
```
General Delivery in this case results in a 1% increase in applicable sales tax.

We will cover incorporated vs unincorporated addresses in a later blog post. 

## How to Use General Delivery In AvaTax
Now that you are aware of potential concerns with using General Delivery, let's look at how to instruct AvaTax to calculate tax using a ZIP centroid. Using Williston VT again, our destination address looks like this:
```json
{
  "addresses": {
    "shipTo": {
      "line1": "General Delivery",
      "city": "Williston",
      "region": "VT",
      "country": "US",
      "postalCode": "05495-9999"
    }
  }
}
```
That's all there is to it. The address format above will override AvaTax behavior and respond with a generalized tax calculation.

Please feel free to comment below or talk to your account manager if you have further questions about using AvaTax. Happy selling!

-Wayne Myer, Software Engineer