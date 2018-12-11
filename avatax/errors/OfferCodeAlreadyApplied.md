---
layout: page
title: OfferCodeAlreadyApplied
number: 610
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

The offer code has already been applied to this account.

## Example

```json
{
  "code": "OfferCodeAlreadyApplied",
  "target": "Unknown",
  "details": [
    {
      "code": "OfferCodeAlreadyApplied",
      "number": 610,
      "message": "Account already has the offer code -0-.",
      "description": "You do not need to add an offer code multiple times. The account -1- already has the offer -0-, so no further action is required.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/OfferCodeAlreadyApplied",
      "severity": "Error"
    }
  ]
}
```

## Explanation

This offer code is already applied to this account and does not need to be added again. You will continue to receive this error when adding this particular offer code to this account.
