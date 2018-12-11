---
layout: page
title: Chapter 4.3.19 - Displaying Tax Results
product: communications
doctype: comms_rest_v2_dev_guide
chapter: customizing-transactions
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/tax-inclusive/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/customizing-transactions/jurisdiction-determination-use-cases/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

REST v2 allows you to specify the level of detail returned as part of the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calc-taxes-response/">CalcTaxes response</a>.  

<h3>Setting the Flags</h3>
There are two available levels of detail set on the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/invoice/">Invoice</a>:
<ul class="dev-guide-list">
    <li><b>Detailed tax details</b> (<code>dtl</code>): displays the tax details per line item</li>
    <li><b>Summary tax details</b> (<code>summ</code>): displays a summary of all taxes returned.  InvoiceMode (<code>invm</code>) must be enabled</li>
</ul>

<b>ReturnDetail</b> and/or <b>ReturnSummary</b> must be set to <code>true</code>.

<h4>ReturnDetail</h4>
Setting the ReturnDetail flag (<code>dtl</code>) displays or hides the detailed taxes object (<code>txs</code>) for each LineItem in the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calc-taxes-response/">CalcTaxes response</a>.  InvoiceMode (<code>invm</code>) has no impact on the ReturnDetail flag.

<div class="mobile-table">
  <table class="styled-table">
    <thead>
      <tr>
        <th>InvoiceMode Value</th>
        <th>ReturnDetail Value</th>
        <th>CalcTaxes Response Result</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td rowspan="2"><code>true</code> or <code>false</code></td>
        <td><code>true</code> (<span class="t5">default</span>)</td>
        <td>Enables return of tax details <code>txs</code> object</td>
      </tr>
      <tr>
        <td><code>false</code></td>
        <td>Disables return of tax details <code>txs</code> object</td>
      </tr>
    </tbody>
  </table>
</div>

<h4>ReturnSummary</h4>
Setting the ReturnSummary flag (<code>summ</code>) displays or hides the summary taxes object (<code>summ</code>) for the entire Invoice in the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calc-taxes-response/">CalcTaxes response</a>.

<div class="mobile-table">
  <table class="styled-table">
    <thead>
      <tr>
        <th>InvoiceMode Value</th>
        <th>ReturnSummary Value</th>
        <th>CalcTaxes Response Result</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td rowspan="2"><code>true</code></td>
        <td><code>false</code> (<span class="t5">default</span>)</td>
        <td>Disables return of tax summary <code>summ</code> object</td>
      </tr>
      <tr>
        <td><code>true</code></td>
        <td>Enables return of tax summary <code>summ</code> object</td>
      </tr>
      <tr>
        <td><code>false</code></td>
        <td><code>true</code> or <code>false</code></td>
        <td>Tax summary <code>summ</code> object not returned</td>
      </tr>
    </tbody>
  </table>
</div>

<h3>Example 1 - Summary and Detailed taxes Returned</h3>
This example demonstrates both the Detail taxes (<code>txs</code>) and Summary taxes (<code>summ</code>) returned in the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calc-taxes-response/">CalcTaxes response</a>.

In this sample request:
<ul class="dev-guide-list">
  <li>InvoiceMode, ReturnDetail, and ReturnSummary fields are all set to <code>true</code></li>
</ul>

This is the only combination of fields to return both the Detail and Summary taxes together.

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
      "doc": "DISPLAYING TAX RESULTS",
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
          "ref": "Line Item 001",
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
          "ref": "Line Item 002",
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
          "ref": "Line Item 003",
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
      "summ": true
    }
  ]
}
{% endhighlight %}

<h4>Response</h4>
Detailed taxes (<code>txs</code>) and Summarized taxes (<code>summ</code>) are both returned.

<div class="panel-group">
  <a data-toggle="collapse" href="#collapse1">View the Response JSON</a>
  <div id="collapse1" class="panel-collapse collapse">
    <div class="panel-body">
{% highlight json %}
{
  "inv": [
    {
      "doc": "DISPLAYING TAX RESULTS",
      "itms": [
        {
          "ref": "Line Item 001",
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
          "ref": "Line Item 002",
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
          "ref": "Line Item 003",
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

<h3>Example 2 - Only Detail taxes Returned</h3>
This example demonstrates the Detail taxes (<code>txs</code>) returned in the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calc-taxes-response/">CalcTaxes response</a>, but the Summary taxes (<code>summ</code>) suppressed.

In this sample request:
<ul class="dev-guide-list">
  <li>ReturnDetail and ReturnSummary fields are both set to <code>true</code></li>
  <li>InvoiceMode is set to <code>false</code></li>
</ul>

The following additional scenarios return the same results:
<ul class="dev-guide-list">
  <li>InvoiceMode and ReturnDetail both set to <code>true</code> but ReturnSummary set to <code>false</code></li>
  <li>InvoiceMode and ReturnSummary both set to <code>false</code> but ReturnDetail set to <code>true</code></li>
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
      "doc": "DISPLAYING TAX RESULTS",
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
          "ref": "Line Item 001",
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
          "ref": "Line Item 002",
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
          "ref": "Line Item 003",
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
      "invm": false,
      "dtl": true,
      "summ": true
    }
  ]
}
{% endhighlight %}

<h4>Response</h4>
Only Detailed taxes (<code>txs</code>) are returned.

<div class="panel-group">
  <a data-toggle="collapse" href="#collapse2">View the Response JSON</a>
  <div id="collapse2" class="panel-collapse collapse">
    <div class="panel-body">
{% highlight json %}
{
  "inv": [
    {
      "doc": "DISPLAYING TAX RESULTS",
      "itms": [
        {
          "ref": "Line Item 001",
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
          "ref": "Line Item 002",
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
          "ref": "Line Item 003",
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
      ]
    }
  ]
}
{% endhighlight %}
    </div>
  </div>
</div>

<h3>Example 3 - Only Summary taxes Returned</h3>
This example demonstrates the Summary taxes (<code>summ</code>) returned in the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calc-taxes-response/">CalcTaxes response</a>, but the Detailed taxes (<code>txs</code>) suppressed.

In this sample request:
<ul class="dev-guide-list">
  <li>InvoiceMode and ReturnSummary set to <code>true</code> but ReturnDetail set to <code>false</code></li>
</ul>

This is the only combination of fields to return only Summary taxes.

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
      "doc": "DISPLAYING TAX RESULTS",
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
          "ref": "Line Item 001",
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
          "ref": "Line Item 002",
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
          "ref": "Line Item 003",
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
      "dtl": false,
      "summ": true
    }
  ]
}
{% endhighlight %}

<h4>Response</h4>
Only Summarized taxes (<code>summ</code>) are returned.

<div class="panel-group">
  <a data-toggle="collapse" href="#collapse3">View the Response JSON</a>
  <div id="collapse3" class="panel-collapse collapse">
    <div class="panel-body">
{% highlight json %}
{
  "inv": [
    {
      "doc": "DISPLAYING TAX RESULTS",
      "itms": [
        {
          "ref": "Line Item 001"
        },
        {
          "ref": "Line Item 002"
        },
        {
          "ref": "Line Item 003"
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

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/tax-inclusive/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/customizing-transactions/jurisdiction-determination-use-cases/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>