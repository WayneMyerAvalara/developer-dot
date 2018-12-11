---
layout: post
title: Using $include with CreateTransaction
description: How to use $include with the CreateTransaction endpoint
date: 2018-11-15 12:00
author: Genevieve Conty
comments: true
categories: avatax
product: avatax
doctype: blog
disqus: 1
---

The CreateTransaction endpoint is one of our most used endpoints, so we’ve baked in a certain flexibility to allow our users to ensure they get the exact information they need. How did we do this? Our team built the `$include` parameter to help you pinpoint data you'll use in your calculations. Now the question is: how do you actually make use of this parameter?

First, let’s start with an example of an unedited response from the CreateTransaction endpoint:
<div class="panel-group">
  <a data-toggle="collapse" href="#response1">Click here to view a CreateTransaction response</a>
  <div id="response1" class="panel-collapse collapse">
    <div class="panel-body">
{% highlight json %}
{
    "id": 6783815606,
    "code": "ec52444f-1eda-4df4-b6ff-279efe984160",
    "companyId": 474615,
    "date": "2018-10-23",
    "status": "Committed",
    "type": "SalesInvoice",
    "batchCode": "",
    "currencyCode": "USD",
    "customerUsageType": "",
    "entityUseCode": "",
    "customerVendorCode": "ABC",
    "customerCode": "ABC",
    "exemptNo": "",
    "reconciled": false,
    "locationCode": "",
    "reportingLocationCode": "",
    "purchaseOrderNo": "2018-10-23-001",
    "referenceCode": "",
    "salespersonCode": "",
    "taxOverrideType": "None",
    "taxOverrideAmount": 0,
    "taxOverrideReason": "",
    "totalAmount": 100,
    "totalExempt": 100,
    "totalDiscount": 0,
    "totalTax": 0,
    "totalTaxable": 0,
    "totalTaxCalculated": 0,
    "adjustmentReason": "NotAdjusted",
    "adjustmentDescription": "",
    "locked": false,
    "region": "CA",
    "country": "US",
    "version": 1,
    "softwareVersion": "18.11.1.22",
    "originAddressId": 11352322999,
    "destinationAddressId": 11352322999,
    "exchangeRateEffectiveDate": "2018-10-23",
    "exchangeRate": 1,
    "isSellerImporterOfRecord": false,
    "description": "Yarn",
    "email": "",
    "businessIdentificationNo": "",
    "modifiedDate": "2018-11-14T18:28:50.507",
    "modifiedUserId": 247126,
    "taxDate": "2018-10-23T00:00:00",
    "lines": [
        {
            "id": 11745511002,
            "transactionId": 6783815606,
            "lineNumber": "1",
            "boundaryOverrideId": 0,
            "customerUsageType": "",
            "entityUseCode": "",
            "description": "Yarn",
            "destinationAddressId": 11352322999,
            "originAddressId": 11352322999,
            "discountAmount": 0,
            "discountTypeId": 0,
            "exemptAmount": 100,
            "exemptCertId": 0,
            "exemptNo": "",
            "isItemTaxable": true,
            "isSSTP": false,
            "itemCode": "Y0001",
            "lineAmount": 100,
            "quantity": 1,
            "ref1": "",
            "ref2": "",
            "reportingDate": "2018-10-23",
            "revAccount": "",
            "sourcing": "Origin",
            "tax": 0,
            "taxableAmount": 0,
            "taxCalculated": 0,
            "taxCode": "PS081282",
            "taxCodeId": 38007,
            "taxDate": "2018-10-23",
            "taxEngine": "",
            "taxOverrideType": "None",
            "businessIdentificationNo": "",
            "taxOverrideAmount": 0,
            "taxOverrideReason": "",
            "taxIncluded": false,
            "details": [
                {
                    "id": 27520681384,
                    "transactionLineId": 11745511002,
                    "transactionId": 6783815606,
                    "addressId": 11352322999,
                    "country": "US",
                    "region": "CA",
                    "countyFIPS": "",
                    "stateFIPS": "06",
                    "exemptAmount": 0,
                    "exemptReasonId": 6,
                    "inState": true,
                    "jurisCode": "06",
                    "jurisName": "CALIFORNIA",
                    "jurisdictionId": 5000531,
                    "signatureCode": "AGAM",
                    "stateAssignedNo": "",
                    "jurisType": "STA",
                    "jurisdictionType": "State",
                    "nonTaxableAmount": 100,
                    "nonTaxableRuleId": 0,
                    "nonTaxableType": "NexusRule",
                    "rate": 0,
                    "rateRuleId": 0,
                    "rateSourceId": 0,
                    "serCode": "",
                    "sourcing": "Origin",
                    "tax": 0,
                    "taxableAmount": 0,
                    "taxType": "Sales",
                    "taxSubTypeId": "S",
                    "taxTypeGroupId": "SalesAndUse",
                    "taxName": "CA STATE TAX",
                    "taxAuthorityTypeId": 45,
                    "taxRegionId": 2127863,
                    "taxCalculated": 0,
                    "taxOverride": 0,
                    "rateType": "General",
                    "rateTypeCode": "G",
                    "taxableUnits": 0,
                    "nonTaxableUnits": 100,
                    "exemptUnits": 0,
                    "unitOfBasis": "PerCurrencyUnit",
                    "isNonPassThru": false
                }
            ],
            "nonPassthroughDetails": [],
            "lineLocationTypes": [
                {
                    "documentLineLocationTypeId": 12339463549,
                    "documentLineId": 11745511002,
                    "documentAddressId": 11352322999,
                    "locationTypeCode": "PointOfOrderOrigin"
                },
                {
                    "documentLineLocationTypeId": 12339463548,
                    "documentLineId": 11745511002,
                    "documentAddressId": 11352322999,
                    "locationTypeCode": "PointOfOrderAcceptance"
                },
                {
                    "documentLineLocationTypeId": 12339463547,
                    "documentLineId": 11745511002,
                    "documentAddressId": 11352322999,
                    "locationTypeCode": "ShipTo"
                },
                {
                    "documentLineLocationTypeId": 12339463546,
                    "documentLineId": 11745511002,
                    "documentAddressId": 11352322999,
                    "locationTypeCode": "ShipFrom"
                }
            ],
            "parameters": {},
            "hsCode": "",
            "costInsuranceFreight": 0,
            "vatCode": "",
            "vatNumberTypeId": 0
        }
    ],
    "addresses": [
        {
            "id": 11352322999,
            "transactionId": 6783815606,
            "boundaryLevel": "Address",
            "line1": "2000 Main St",
            "line2": "",
            "line3": "",
            "city": "Irvine",
            "region": "CA",
            "postalCode": "92614-7202",
            "country": "US",
            "taxRegionId": 2127863,
            "latitude": "33.684689",
            "longitude": "-117.851495"
        }
    ],
    "locationTypes": [
        {
            "documentLocationTypeId": 10613469034,
            "documentId": 6783815606,
            "documentAddressId": 11352322999,
            "locationTypeCode": "PointOfOrderOrigin"
        },
        {
            "documentLocationTypeId": 10613469033,
            "documentId": 6783815606,
            "documentAddressId": 11352322999,
            "locationTypeCode": "PointOfOrderAcceptance"
        },
        {
            "documentLocationTypeId": 10613469032,
            "documentId": 6783815606,
            "documentAddressId": 11352322999,
            "locationTypeCode": "ShipTo"
        },
        {
            "documentLocationTypeId": 10613469031,
            "documentId": 6783815606,
            "documentAddressId": 11352322999,
            "locationTypeCode": "ShipFrom"
        }
    ],
    "summary": [
        {
            "country": "US",
            "region": "CA",
            "jurisType": "State",
            "jurisCode": "06",
            "jurisName": "CALIFORNIA",
            "taxAuthorityType": 45,
            "stateAssignedNo": "",
            "taxType": "Sales",
            "taxName": "CA STATE TAX",
            "rateType": "General",
            "taxable": 0,
            "rate": 0,
            "tax": 0,
            "taxCalculated": 0,
            "nonTaxable": 100,
            "exemption": 0
        }
    ],
    "parameters": {}
}
{% endhighlight %}
    </div>
  </div>
</div>
As you can see, the response can be quite lengthy, because we try to send back everything that might be useful. However, you might not need every line of the standard response for each call you make. That’s exactly where the `$include` parameter comes into play. If you find you only need some of this information, you can tailor your response to fit your needs. 

<h2>So, what are the options?</h2>

Here are all 8 options for the `$include` query string:

<ul class="normal">
    <li>Lines</li>
    <li>Details</li>
    <li>Summary</li>
    <li>Addresses</li>
    <li>SummaryOnly</li>
    <li>LinesOnly</li>
    <li>ForceTimeout</li>
    <li>TaxDetailsByTaxType</li>
</ul>

When you build your query string, you can use any combination of the above, but be sure to separate them with commas! Here's an example query string: `$include=Lines,Addresses,TaxDetailsByTaxType`.

<h2>What are these options for?</h2>
These options specify what you want included in your response. The REST API can be verbose in it’s responses which is great for accuracy and understanding. However, if you find you only need a certain object to do your calculations, you can tell the api to respond with only what you need.

<h3>Lines</h3>
Each transaction can have multiple lines items detailing the various items involved. The `lines` object array will give you each line involved in the transaction. Each line will have information like item cost, item quantity, tax codes, total tax and more. 

Here is a truncated example of the lines object array:
```json
"lines": [
    {
        "id": 11111111111,
        "transactionId": 777777777,
        "lineNumber": "1",
        "boundaryOverrideId": 0,
        "customerUsageType": "",
        "entityUseCode": "",
        "description": "Yarn",
        "destinationAddressId": 111111111999,
        "originAddressId": 11111111999,
        "exemptAmount": 100,
        "isItemTaxable": true,
        "itemCode": "Y0001",
        "lineAmount": 100,
        "quantity": 1,
        "tax": 0,
        "taxableAmount": 0,
        "taxCalculated": 0,
        "taxCode": "PS081282",
        "taxCodeId": 38007,
        "taxDate": "2018-10-23",
        "taxOverrideType": "None",
        "details":[...],
        "nonPassthroughDetails": [],
        "lineLocationTypes": [...],
    }
]
```

<h3>LinesOnly</h3>
Is everything you really need in the lines object array? Great! All you need to do is add `LinesOnly` to your `$inlcude` query string and you are all set. 

<h3>Details</h3>
The details object contains an abundance of information about your individual line items, such as the locations involved, the units of measure and the name of the tax being applied. Each line will have a details object similar to the truncated example below:
```json
"details": [
    {
        "id": 2222222222,
        "transactionLineId": 1111111111,
        "transactionId": 777777777,
        "addressId": 11352322999,
        "country": "US",
        "region": "CA",
        "exemptAmount": 0,
        "exemptReasonId": 6,
        "inState": true,
        "jurisCode": "06",
        "jurisName": "CALIFORNIA",
        "jurisdictionId": 5000531,
        "signatureCode": "AGAM",
        "jurisType": "STA",
        "jurisdictionType": "State",
        "nonTaxableAmount": 100,
        "nonTaxableType": "NexusRule",
        "rate": 0,
        "tax": 0,
        "taxableAmount": 0,
        "taxType": "Sales",
        "taxSubTypeId": "S",
        "taxTypeGroupId": "SalesAndUse",
        "taxName": "CA STATE TAX",
        "unitOfBasis": "PerCurrencyUnit",
        "isNonPassThru": false
    }
],
```

<h3>Summary</h3>
The summary object array will give you a brief, but information rich, overview of relevant tax information for your transaction. This typically will include the taxing jurisdictions involved and the total tax calculated for your transaction.

```json
"summary": [
    {
        "country": "US",
        "region": "CA",
        "jurisType": "State",
        "jurisCode": "06",
        "jurisName": "CALIFORNIA",
        "taxAuthorityType": 45,
        "stateAssignedNo": "",
        "taxType": "Sales",
        "taxName": "CA STATE TAX",
        "rateType": "General",
        "taxable": 0,
        "rate": 0,
        "tax": 0,
        "taxCalculated": 0,
        "nonTaxable": 100,
        "exemption": 0
    }
],
```

<h3>SummaryOnly</h3>
If you find all the information you really need is in the summary, you can use `SummaryOnly` to get a concise response from out API. 

<h3>Addresses</h3>
The addresses object array will contain any of the shipping locations involved. If you choose to create a transaction with `ShipFrom` and `ShipTo` addresses, your response would likely have an `addresses` array similar to the one below:
```json
"addresses": [
    {
        "id": 5346891079,
        "transactionId": 8783827047,
        "boundaryLevel": "Zip5",
        "line1": "2000 Main Street",
        "line2": "",
        "line3": "",
        "city": "Irvine",
        "region": "CA",
        "postalCode": "92614",
        "country": "US",
        "taxRegionId": 0
    },
    {
        "id": 11552384682,
        "transactionId": 8783827047,
        "boundaryLevel": "Address",
        "line1": "180 Bpw Club Rd",
        "line2": "",
        "line3": "",
        "city": "Carrboro",
        "region": "NC",
        "postalCode": "27510-2589",
        "country": "US",
        "taxRegionId": 4011237,
        "latitude": "35.895184",
        "longitude": "-79.084878"
    }
],
```

<h3>ForceTimeout</h3>
As the name implies, this option will force a timeout which will simply result in an empty object: `{ }`. This option can be particularly useful for testing integration and a full response is not necessary. 

<h3>TaxDetailsByTaxType</h3>
With this object array, you can expect to see things like aggregated tax, non-taxable totals, exempt tax totals and more for each tax type in the summary. Here is a quick example of the `TaxDetailsByTaxType` object array:
```json
"taxDetailsByTaxType": [
    {
        "taxType": "Sales",
        "totalTaxable": 0,
        "totalExempt": 0,
        "totalNonTaxable": 100,
        "totalTax": 0
    }
],
```

<h2>Want to give it a try?</h2>
On the [CreateTransaction](https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Transactions/CreateTransaction/) page, you can test out the `$include` feature with some sample data. For the `$include` input, put any combination of filters separated by commas and press submit. You’ll see the full output for the CreateTransaction endpoint, so you know what to expect before you test out your own code.

You can also find links to our swagger in addition to more information about the capabilities of the `CreateTransaction` endpoint. If you can’t find the answer you are looking for, don’t hesitate to comment below!