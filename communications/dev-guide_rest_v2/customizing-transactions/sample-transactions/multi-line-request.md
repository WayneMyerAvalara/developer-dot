---
layout: page
title: Chapter 4.3.2 - Multi-line Request
product: communications
doctype: comms_rest_v2_dev_guide
chapter: customizing-transactions
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/simple-request/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/jurisdiction-determination/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

An <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/invoice/">invoice</a> can contain many <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/line-item/">line items</a>.

<h4>Note</h4>
Multiple <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/invoice/">invoices</a> (with multiple <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/line-item/">line items</a>) can be added to a transaction.  This page demonstrates multiple line items only.

<h3>Simple Multi-line Invoice Example</h3>
This invoice contains 3 simple <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/line-item/">line items</a>.

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
      "doc": "TEST-VOIP INVOICE 2017.12.26:12.02 AVA",
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
      "date": "2017-05-01T12:00:00Z",
      "itms": [
        {
          "ref": "Line Item 001 - VoIP/Access Charge",
          "chg": 100,
          "line": 0,
          "sale": 1,
          "incl": false,
          "tran": 19,
          "serv": 6,
          "dbt": false,
          "adj": false
        },
        {
          "ref": "Line Item 002 - VoIP/Lines",
          "chg": 0,
          "line": 10,
          "sale": 1,
          "incl": false,
          "tran": 19,
          "serv": 21,
          "dbt": false,
          "adj": false
        },
        {
          "ref": "Line Item 003 - VoIP/Equip Rental",
          "chg": 25,
          "line": 0,
          "sale": 1,
          "incl": false,
          "tran": 19,
          "serv": 37,
          "dbt": false,
          "adj": false
        }
      ],
      "invm": true,
      "dtl": true,
      "summ": true,
      "opt": [
        {
          "key": "1",
          "val": "VoIP Sample Line Items Invoice ABC-ZZZ"
        }
      ]
    }
  ]
}
{% endhighlight %}

<h4>Response</h4>
A few things are going on in this <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calc-taxes-response/">response</a>:
<ul class="dev-guide-list">
  <li><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/detailed-tax-result/">Detailed taxes</a> (<code>txs</code>) for the three line items are displayed</li>
    <ul class="dev-guide-list">
      <li>Line Item 001 returns 7 taxes totalling 14.096528</li>
      <li>Line Item 002 returns 1 tax totalling 32.7</li>
      <li>Line Item 003 returns 3 taxes totalling 2.125</li>
    </ul>
  <li><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/summarized-tax-result/">Summarized taxes</a> (<code>summ</code>) for the entire <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/invoice/">invoice</a> are displayed - 11 taxes returned totalling 48.921528</li>
</ul>

<div class="panel-group">
  <a data-toggle="collapse" href="#collapse1">View the Response JSON</a>
  <div id="collapse1" class="panel-collapse collapse">
    <div class="panel-body">
{% highlight json %}
{
  "inv": [
    {
      "doc": "TEST-VOIP INVOICE 2017.12.26:12.02 AVA",
      "itms": [
        {
          "ref": "Line Item 001 - VoIP/Access Charge",
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
              "rate": 0.174,
              "sur": false,
              "tax": 11.2926,
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
        },
        {
          "ref": "Line Item 002 - VoIP/Lines",
          "txs": [
            {
              "bill": true,
              "cmpl": true,
              "tm": 0,
              "calc": 4,
              "cat": "E-911 CHARGES",
              "cid": 7,
              "name": "San Francisco Access line Tax (VoIP)",
              "exm": 0,
              "lns": 10,
              "min": 0,
              "pcd": 377300,
              "rate": 3.27,
              "sur": false,
              "tax": 32.7,
              "lvl": 3,
              "tid": 250
            }
          ]
        },
        {
          "ref": "Line Item 003 - VoIP/Equip Rental",
          "txs": [
            {
              "bill": true,
              "cmpl": true,
              "tm": 25,
              "calc": 1,
              "cat": "SALES AND USE TAXES",
              "cid": 1,
              "name": "District Tax",
              "exm": 0,
              "lns": 0,
              "min": 0,
              "pcd": 377200,
              "rate": 0.0125,
              "sur": false,
              "tax": 0.3125,
              "lvl": 2,
              "tid": 4
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 25,
              "calc": 1,
              "cat": "SALES AND USE TAXES",
              "cid": 1,
              "name": "Sales Tax",
              "exm": 0,
              "lns": 0,
              "min": 0,
              "pcd": 377300,
              "rate": 0.0125,
              "sur": false,
              "tax": 0.3125,
              "lvl": 2,
              "tid": 1
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 25,
              "calc": 1,
              "cat": "SALES AND USE TAXES",
              "cid": 1,
              "name": "Sales Tax",
              "exm": 0,
              "lns": 0,
              "min": 0,
              "pcd": 377300,
              "rate": 0.06,
              "sur": false,
              "tax": 1.5,
              "lvl": 1,
              "tid": 1
            }
          ]
        }
      ],
      "summ": [
        {
          "max": 2147483647,
          "min": 0,
          "tchg": 35.099999999999994,
          "calc": 1,
          "cat": "CONNECTIVITY CHARGES",
          "cid": 5,
          "name": "Universal Lifeline Telephone Service Charge (VoIP)",
          "exm": 64.9,
          "lns": 0,
          "pcd": 253500,
          "rate": 0.0475,
          "sur": true,
          "tax": 1.6672499999999997,
          "lvl": 1,
          "tid": 454
        },
        {
          "max": 2147483647,
          "min": 0,
          "tchg": 35.099999999999994,
          "calc": 1,
          "cat": "CONNECTIVITY CHARGES",
          "cid": 5,
          "name": "CA Teleconnect Fund (VoIP)",
          "exm": 64.9,
          "lns": 0,
          "pcd": 253500,
          "rate": 0.0108,
          "sur": true,
          "tax": 0.37908,
          "lvl": 1,
          "tid": 452
        },
        {
          "max": 2147483647,
          "min": 0,
          "tchg": 35.099999999999994,
          "calc": 1,
          "cat": "CONNECTIVITY CHARGES",
          "cid": 5,
          "name": "CA High Cost Fund A (VoIP)",
          "exm": 64.9,
          "lns": 0,
          "pcd": 253500,
          "rate": 0.0035,
          "sur": true,
          "tax": 0.12284999999999999,
          "lvl": 1,
          "tid": 450
        },
        {
          "max": 2147483647,
          "min": 0,
          "tchg": 35.099999999999994,
          "calc": 1,
          "cat": "CONNECTIVITY CHARGES",
          "cid": 5,
          "name": "TRS (VoIP)",
          "exm": 64.9,
          "lns": 0,
          "pcd": 253500,
          "rate": 0.005,
          "sur": true,
          "tax": 0.17549999999999996,
          "lvl": 1,
          "tid": 217
        },
        {
          "max": 2147483647,
          "min": 0,
          "tchg": 35.099999999999994,
          "calc": 1,
          "cat": "E-911 CHARGES",
          "cid": 7,
          "name": "E911 (VoIP)",
          "exm": 64.9,
          "lns": 0,
          "pcd": 253500,
          "rate": 0.0075,
          "sur": false,
          "tax": 0.26324999999999993,
          "lvl": 1,
          "tid": 161
        },
        {
          "max": 2147483647,
          "min": 0,
          "tchg": 64.9,
          "calc": 1,
          "cat": "CONNECTIVITY CHARGES",
          "cid": 5,
          "name": "FUSF (VoIP)",
          "exm": 35.099999999999994,
          "lns": 0,
          "pcd": 0,
          "rate": 0.174,
          "sur": false,
          "tax": 11.2926,
          "lvl": 0,
          "tid": 162
        },
        {
          "max": 2147483647,
          "min": 0,
          "tchg": 64.9,
          "calc": 1,
          "cat": "REGULATORY CHARGES",
          "cid": 6,
          "name": "FCC Regulatory Fee (VoIP)",
          "exm": 35.099999999999994,
          "lns": 0,
          "pcd": 0,
          "rate": 0.00302,
          "sur": false,
          "tax": 0.19599800000000003,
          "lvl": 0,
          "tid": 226
        },
        {
          "max": 2147483647,
          "min": 0,
          "tchg": 0,
          "calc": 4,
          "cat": "E-911 CHARGES",
          "cid": 7,
          "name": "San Francisco Access line Tax (VoIP)",
          "exm": 0,
          "lns": 10,
          "pcd": 377300,
          "rate": 3.27,
          "sur": false,
          "tax": 32.7,
          "lvl": 3,
          "tid": 250
        },
        {
          "max": 2147483647,
          "min": 0,
          "tchg": 25,
          "calc": 1,
          "cat": "SALES AND USE TAXES",
          "cid": 1,
          "name": "District Tax",
          "exm": 0,
          "lns": 0,
          "pcd": 377200,
          "rate": 0.0125,
          "sur": false,
          "tax": 0.3125,
          "lvl": 2,
          "tid": 4
        },
        {
          "max": 2147483647,
          "min": 0,
          "tchg": 25,
          "calc": 1,
          "cat": "SALES AND USE TAXES",
          "cid": 1,
          "name": "Sales Tax",
          "exm": 0,
          "lns": 0,
          "pcd": 377300,
          "rate": 0.0125,
          "sur": false,
          "tax": 0.3125,
          "lvl": 2,
          "tid": 1
        },
        {
          "max": 2147483647,
          "min": 0,
          "tchg": 25,
          "calc": 1,
          "cat": "SALES AND USE TAXES",
          "cid": 1,
          "name": "Sales Tax",
          "exm": 0,
          "lns": 0,
          "pcd": 377300,
          "rate": 0.06,
          "sur": false,
          "tax": 1.5,
          "lvl": 1,
          "tid": 1
        }
      ]
    }
  ]
}
{% endhighlight %}
    </div>
  </div>
</div>

<h3>Texas Internet Tax Multi-line Invoice Example</h3>
This example shows an <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/invoice/">invoice</a> with 2 <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/line-item">line items</a> processed in <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/invoice-mode/">Invoice Mode</a> (<code>invm</code> is <code>true</code>).  
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
      "doc": "TEST-VOIP INVOICE 2018.06.05:12.02 AVA",
      "cmmt": false,
      "bill": {
        "cnty": "Harris",
        "ctry": "USA",
        "int": true,
        "geo": false,
        "city": "Houston",
        "st": "TX",
        "zip": "77003"
      },
      "cust": 0,
      "lfln": false,
      "date": "2018-05-01T12:00:00Z",
      "itms": [
        {
          "ref": "Line Item 001 - Internet/Access Charge",
          "chg": 15,
          "line": 0,
          "sale": 1,
          "incl": false,
          "tran": 5,
          "serv": 6,
          "dbt": false,
          "adj": false
        },
        {
          "ref": "Line Item 002 - Internet/Access Line",
          "chg": 15,
          "line": 0,
          "sale": 1,
          "incl": false,
          "tran": 5,
          "serv": 58,
          "dbt": false,
          "adj": false
        }
      ],
      "invm": true,
      "dtl": true,
      "summ": true,
      "opt": [
        {
          "key": "1",
          "val": "Internet $25 exemption invoice example"
        }
      ]
    }
  ]
}
{% endhighlight %}

<h4>Response</h4>
Both the line item <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/detailed-tax-result/">detailed taxes</a> (<code>txs</code>) and the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/summarized-tax-result/">summarized taxes</a> (<code>summ</code>) are returned.

<div class="panel-group">
  <a data-toggle="collapse" href="#collapse2">View the Response JSON</a>
  <div id="collapse2" class="panel-collapse collapse">
    <div class="panel-body">
<h4>Response</h4>
{% highlight json %}
{
  "inv": [
    {
      "doc": "TEST-VOIP INVOICE 2018.06.05:12.02 AVA",
      "itms": [
        {
          "ref": "Line Item 001 - Internet/Access Charge",
          "txs": [
            {
              "bill": true,
              "cmpl": true,
              "tm": 0,
              "calc": 1,
              "cat": "SALES AND USE TAXES",
              "cid": 1,
              "name": "Transit Tax",
              "exm": 15,
              "lns": 0,
              "min": 0,
              "pcd": 3775200,
              "rate": 0.01,
              "sur": false,
              "tax": 0,
              "lvl": 3,
              "tid": 33
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 0,
              "calc": 1,
              "cat": "SALES AND USE TAXES",
              "cid": 1,
              "name": "Sales Tax",
              "exm": 15,
              "lns": 0,
              "min": 0,
              "pcd": 3775200,
              "rate": 0.01,
              "sur": false,
              "tax": 0,
              "lvl": 3,
              "tid": 1
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 0,
              "calc": 1,
              "cat": "SALES AND USE TAXES",
              "cid": 1,
              "name": "Sales Tax",
              "exm": 15,
              "lns": 0,
              "min": 0,
              "pcd": 3775200,
              "rate": 0.0625,
              "sur": false,
              "tax": 0,
              "lvl": 1,
              "tid": 1
            }
          ]
        },
        {
          "ref": "Line Item 002 - Internet/Access Line",
          "txs": [
            {
              "bill": true,
              "cmpl": true,
              "tm": 5,
              "calc": 1,
              "cat": "SALES AND USE TAXES",
              "cid": 1,
              "name": "Transit Tax",
              "exm": 10,
              "lns": 0,
              "min": 0,
              "pcd": 3775200,
              "rate": 0.01,
              "sur": false,
              "tax": 0.05,
              "lvl": 3,
              "tid": 33
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 5,
              "calc": 1,
              "cat": "SALES AND USE TAXES",
              "cid": 1,
              "name": "Sales Tax",
              "exm": 10,
              "lns": 0,
              "min": 0,
              "pcd": 3775200,
              "rate": 0.01,
              "sur": false,
              "tax": 0.05,
              "lvl": 3,
              "tid": 1
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 5,
              "calc": 1,
              "cat": "SALES AND USE TAXES",
              "cid": 1,
              "name": "Sales Tax",
              "exm": 10,
              "lns": 0,
              "min": 0,
              "pcd": 3775200,
              "rate": 0.0625,
              "sur": false,
              "tax": 0.3125,
              "lvl": 1,
              "tid": 1
            }
          ]
        }
      ],
      "summ": [
        {
          "max": 2147483647,
          "min": 0,
          "tchg": 5,
          "calc": 1,
          "cat": "SALES AND USE TAXES",
          "cid": 1,
          "name": "Transit Tax",
          "exm": 25,
          "lns": 0,
          "pcd": 3775200,
          "rate": 0.01,
          "sur": false,
          "tax": 0.05,
          "lvl": 3,
          "tid": 33
        },
        {
          "max": 2147483647,
          "min": 0,
          "tchg": 5,
          "calc": 1,
          "cat": "SALES AND USE TAXES",
          "cid": 1,
          "name": "Sales Tax",
          "exm": 25,
          "lns": 0,
          "pcd": 3775200,
          "rate": 0.01,
          "sur": false,
          "tax": 0.05,
          "lvl": 3,
          "tid": 1
        },
        {
          "max": 2147483647,
          "min": 0,
          "tchg": 5,
          "calc": 1,
          "cat": "SALES AND USE TAXES",
          "cid": 1,
          "name": "Sales Tax",
          "exm": 25,
          "lns": 0,
          "pcd": 3775200,
          "rate": 0.0625,
          "sur": false,
          "tax": 0.3125,
          "lvl": 1,
          "tid": 1
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
  <li class="previous"><a href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/simple-request/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/jurisdiction-determination/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>