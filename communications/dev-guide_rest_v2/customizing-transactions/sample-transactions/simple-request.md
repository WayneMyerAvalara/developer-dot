---
layout: page
title: Chapter 4.3.1 - Simple Request
product: communications
doctype: comms_rest_v2_dev_guide
chapter: customizing-transactions
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/customizing-transactions/transaction-use-cases/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/multi-line-request/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

The simplest <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calc-taxes-request/"><code>CalcTaxes</code> request</a> in Communications REST v2 is 1 <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/line-item/">line item</a> contained within 1 <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/invoice/">invoice</a>.

<h3>Simple Request Example</h3>
This is an example of a simple request containing an invoice and 1 line item.  All <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/calculate-taxes/required-fields/">required fields</a> are set, plus a charge (<code>chg</code>) of 100 and a lines count (<code>line</code>) of 10.

{% highlight json %}
{
  "cmpn": {
    "bscl": 1,
    "svcl": 1,
    "fclt": true,
    "frch": true,
    "reg": true
  },
  "inv": [
    {
      "bill": {
        "ctry": "USA",
        "st": "NC",
        "cty": "Durham",
        "zip": 27701
      },
      "cust": 1,
      "date": "2018-09-24T11:00:00",
      "itms": [
        {
          "chg": 100,
          "line": 10,
          "sale": 1,
          "tran": 19,
          "serv": 6
        }
      ]
    }
  ]
}
{% endhighlight %}

<h4>Response</h4>
This transaction returns 3 taxes (<code>txs</code>), totalling 19.640015.

<div class="panel-group">
  <a data-toggle="collapse" href="#collapse1">View the Response JSON</a>
  <div id="collapse1" class="panel-collapse collapse">
    <div class="panel-body">
{% highlight json %}
{
  "inv": [
    {
      "itms": [
        {
          "txs": [
            {
              "bill": true,
              "cmpl": true,
              "tm": 111.813098,
              "calc": 1,
              "cat": "SALES AND USE TAXES",
              "cid": 1,
              "name": "North Carolina Telecommunications Sales Tax",
              "exm": 0,
              "lns": 0,
              "min": 0,
              "pcd": 2716900,
              "rate": 0.07,
              "sur": false,
              "tax": 7.826916860000001,
              "lvl": 1,
              "tid": 231
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 64.9,
              "calc": 1,
              "cat": "CONNECTIVITY CHARGES",
              "cid": 5,
              "name": "FUSF (VoIP)",
              "exm": 35.099999999999994,
              "lns": 10,
              "min": 0,
              "pcd": 0,
              "rate": 0.179,
              "sur": false,
              "tax": 11.6171,
              "lvl": 0,
              "tid": 162
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 64.9,
              "calc": 1,
              "cat": "REGULATORY CHARGES",
              "cid": 6,
              "name": "FCC Regulatory Fee (VoIP)",
              "exm": 35.099999999999994,
              "lns": 10,
              "min": 0,
              "pcd": 0,
              "rate": 0.00302,
              "sur": false,
              "tax": 0.19599800000000003,
              "lvl": 0,
              "tid": 226
            }
          ]
        }
      ]
    }
  ]
}
{% endhighlight %}
    </div>
  </div>
</div>


<h3>Single Line Item Example</h3>
This example contains one line item and some additional information, including:
<ul class="dev-guide-list">
  <li><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/commit-uncommit">Commit</a> details</li>
  <li>An <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/key-value-pair">optional field</a></li>
  <li>Additional <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/invoice">Invoice</a> and <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/line-item">Line Item</a> fields</li>
</ul>

{% highlight json %}
{
  "cmpn": {
    "bscl": 0,
    "svcl": 0,
    "fclt": false,
    "frch": false,
    "reg": false
  },
  "inv": [
    {
      "doc": "TEST-VOIP SINGLE TAX ITEM AVA",
      "cmmt": false,
      "bill": {
        "cnty": "San Francisco",
        "ctry": "USA",
        "int": true,
        "geo": false,
        "city": "San Francisco",
        "st": "CA",
        "zip": "94102"
      },
      "cust": 0,
      "lfln": false,
      "date": "2018-05-01T12:00:00Z",
      "itms": [
        {
          "ref": "Tax Item 001 - VoIP/Access Charge",
          "chg": 100,
          "line": 0,
          "sale": 1,
          "incl": false,
          "tran": 19,
          "serv": 6,
          "dbt": false,
          "adj": false
        }
      ],
      "invm": false,
      "dtl": true,
      "summ": false,
      "opt": [
        {
          "key": "1",
          "val": "VoIP Sample Single Tax Item ABC-ZZZ"
        }
      ]
    }
  ]
}
{% endhighlight %}

<h4>Response</h4>
In this <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calc-taxes-response">response</a>, 8 taxes (<code>txs</code>) are returned, totalling 38.100488.

<div class="panel-group">
  <a data-toggle="collapse" href="#collapse2">View the Response JSON</a>
  <div id="collapse2" class="panel-collapse collapse">
    <div class="panel-body">
{% highlight json %}
{
  "inv": [
    {
      "doc": "TEST-VOIP SINGLE TAX ITEM AVA",
      "itms": [
        {
          "ref": "Tax Item 001 - VoIP/Access Charge",
          "txs": [
            {
              "bill": true,
              "cmpl": true,
              "tm": 35.099999999999994,
              "calc": 1,
              "cat": "CONNECTIVITY CHARGES",
              "cid": 5,
              "name": "Universal Lifeline Telephone Service Charge (VoIP)",
              "exm": 64.9,
              "lns": 0,
              "min": 0,
              "pcd": 253500,
              "rate": 0.0475,
              "sur": true,
              "tax": 1.6672499999999997,
              "lvl": 1,
              "tid": 454
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 35.099999999999994,
              "calc": 1,
              "cat": "CONNECTIVITY CHARGES",
              "cid": 5,
              "name": "CASF (VoIP)",
              "exm": 64.9,
              "lns": 0,
              "min": 0,
              "pcd": 253500,
              "rate": 0.0056,
              "sur": true,
              "tax": 0.19655999999999996,
              "lvl": 1,
              "tid": 453
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 35.099999999999994,
              "calc": 1,
              "cat": "CONNECTIVITY CHARGES",
              "cid": 5,
              "name": "CA Teleconnect Fund (VoIP)",
              "exm": 64.9,
              "lns": 0,
              "min": 0,
              "pcd": 253500,
              "rate": 0.0108,
              "sur": true,
              "tax": 0.37908,
              "lvl": 1,
              "tid": 452
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 35.099999999999994,
              "calc": 1,
              "cat": "CONNECTIVITY CHARGES",
              "cid": 5,
              "name": "CA High Cost Fund A (VoIP)",
              "exm": 64.9,
              "lns": 0,
              "min": 0,
              "pcd": 253500,
              "rate": 0.0035,
              "sur": true,
              "tax": 0.12284999999999999,
              "lvl": 1,
              "tid": 450
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 35.099999999999994,
              "calc": 1,
              "cat": "CONNECTIVITY CHARGES",
              "cid": 5,
              "name": "TRS (VoIP)",
              "exm": 64.9,
              "lns": 0,
              "min": 0,
              "pcd": 253500,
              "rate": 0.005,
              "sur": true,
              "tax": 0.17549999999999996,
              "lvl": 1,
              "tid": 217
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 35.099999999999994,
              "calc": 1,
              "cat": "E-911 CHARGES",
              "cid": 7,
              "name": "E911 (VoIP)",
              "exm": 64.9,
              "lns": 0,
              "min": 0,
              "pcd": 253500,
              "rate": 0.0075,
              "sur": false,
              "tax": 0.26324999999999993,
              "lvl": 1,
              "tid": 161
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 64.9,
              "calc": 1,
              "cat": "CONNECTIVITY CHARGES",
              "cid": 5,
              "name": "FUSF (VoIP)",
              "exm": 35.099999999999994,
              "lns": 0,
              "min": 0,
              "pcd": 0,
              "rate": 0.184,
              "sur": false,
              "tax": 11.941600000000001,
              "lvl": 0,
              "tid": 162
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 64.9,
              "calc": 1,
              "cat": "REGULATORY CHARGES",
              "cid": 6,
              "name": "FCC Regulatory Fee (VoIP)",
              "exm": 35.099999999999994,
              "lns": 0,
              "min": 0,
              "pcd": 0,
              "rate": 0.00302,
              "sur": false,
              "tax": 0.19599800000000003,
              "lvl": 0,
              "tid": 226
            }
          ]
        }
      ]
    }
  ]
}
{% endhighlight %}
    </div>
  </div>
</div>

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/customizing-transactions/transaction-use-cases/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/multi-line-request/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>