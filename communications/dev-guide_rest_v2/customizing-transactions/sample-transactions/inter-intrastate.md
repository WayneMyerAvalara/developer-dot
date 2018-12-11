---
layout: page
title: Chapter 4.3.5 - Interstate/Intrastate Determination
product: communications
doctype: comms_rest_v2_dev_guide
chapter: customizing-transactions
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/tax-type-exemption/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/tax-override/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

The Interstate/Intrastate Determination feature provides you with the ability to apply interstate or intrastate charges appropriately when sending transaction messages to AFC REST v2 without specifying either the transaction type or the service type. To use this functionality:
<ul class="dev-guide-list">
    <li>Set the transaction type (<code>tran</code>) to "-1" and a valid service type (<code>serv</code>)</li>
    <li>Set the transaction type to a valid transaction type (<code>tran</code>) and the service type (<code>serv</code>) to "-1"</li>
</ul>

REST v2 will determine the appropriate interstate or intrastate transaction or service and return the appropriate taxes.  See the scenarios below for further details.

<h3>How to use Interstate/Intrastate Determination</h3>
Below are the two scenarios in which the Interstate/Intrastate Determination feature applies.

<h4>Transaction Type Determination</h4>
In this scenario, you already know one of the <b>service types</b> listed below but the <b>transaction type</b> needs to be determined.  Provide a service type (<code>serv</code>) from the table below and set the transaction type (<code>tran</code>) is to set to "-1".  

REST v2 automatically determines one of the following <b>transaction types</b> based on the jurisdiction information provided and the service type (<code>serv</code>) set in the <code>CalcTaxes</code> request:
<ul class="dev-guide-list">
    <li>Transaction Type 1 (INTERSTATE)</li>
    <li>Transaction Type 2 (INTRASTATE)</li>
</ul>

<div class="mobile-table">
  <table class="styled-table">
    <thead>
      <tr>
        <th>Service Type</th>
        <th>Service Type Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>TOLL</td>
      </tr>
      <tr>
        <td>2</td>
        <td>TOLL FREE</td>
      </tr>
      <tr>
        <td>3</td>
        <td>WATS</td>
      </tr>
      <tr>
        <td>4</td>
        <td>PRIVATE LINE</td>
      </tr>
      <tr>
        <td>14</td>
        <td>LATE CHARGE</td>
      </tr>
      <tr>
        <td>16</td>
        <td>900</td>
      </tr>
      <tr>
        <td>27</td>
        <td>DATA</td>
      </tr>
      <tr>
        <td>54</td>
        <td>DIRECTORY ASSISTANCE</td>
      </tr>
      <tr>
        <td>635</td>
        <td>TOLL FREE NUMBER</td>
      </tr>
    </tbody>
  </table>
</div>
<br/><br/>


<h4>Service Type Determination</h4>
In this scenario, you already know one of the <b>transaction types</b> listed below but the <b>service type</b> needs to be determined.  Provide a transaction type (<code>tran</code>) from the table below and set the service type (<code>serv</code>) is to set to "-1". 

REST v2 automatically determines one of the following <b>service types</b> based on the jurisdiction information provided and the transaction type (<code>tran</code>) set in the <code>CalcTaxes</code> request:
<ul class="dev-guide-list">
    <li>Service Type 585 (INTERSTATE MPLS)</li>
    <li>Service Type 586 (INTRASTATE MPLS)</li>
</ul>

<div class="mobile-table">
  <table class="styled-table">
    <thead>
      <tr>
        <th>Transaction Type</th>
        <th>Transaction Type Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>61</td>
        <td>VPN</td>
      </tr>
    </tbody>
  </table>
</div>
<br/><br/>


REST v2 automatically determines one of the following <b>service types</b> based on the jurisdiction information provided and the transaction type (<code>tran</code>) set in the <code>CalcTaxes</code> request:
<ul class="dev-guide-list">
    <li>Service Type 49 (INTERSTATE USAGE)</li>
    <li>Service Type 50 (INTRASTATE USAGE)</li>
</ul>

<div class="mobile-table">
  <table class="styled-table">
    <thead>
      <tr>
        <th>Transaction Type</th>
        <th>Transaction Type Description</th>
      </tr>
    </thead>
    <tbody> 
      <tr>
        <td>19</td>
        <td>VoIP</td>
      </tr>
      <tr>
        <td>20</td>
        <td>VoIPA</td>
      </tr>
      <tr>
        <td>21</td>
        <td>PAYPHONE</td>
      </tr>
      <tr>
        <td>59</td>
        <td>VoIP NOMADIC</td>
      </tr>
    </tbody>
  </table>
</div>


<h3>Transaction Type Determination Example</h3>
In this example, the Transaction Type (<code>tran</code>) is set to <code>-1</code>.  The transaction type will be automatically determined based on the jurisdiction provided.  In this case, since San Francisco is the only jurisdiction, an <b>Intrastate</b> transaction type is expected to be used.
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
          "ref": "Line Item 001 : -1/4 Intra/Inter for Transaction (Intrastate Test)",
          "chg": 100,
          "line": 0,
          "sale": 1,
          "incl": false,
          "tran": -1,
          "serv": 4,
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
Taxes are returned based upon the determined transaction type.

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
          "ref": "Line Item 001 : -1/4 Intra/Inter for Transaction (Intrastate Test)",
          "txs": [
            {
              "bill": true,
              "cmpl": true,
              "tm": 100,
              "calc": 1,
              "cat": "REGULATORY CHARGES",
              "cid": 6,
              "name": "CA PUC Fee",
              "exm": 0,
              "lns": 0,
              "min": 0,
              "pcd": 253500,
              "rate": 0.003,
              "sur": true,
              "tax": 0.3,
              "lvl": 1,
              "tid": 468
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 100,
              "calc": 1,
              "cat": "CONNECTIVITY CHARGES",
              "cid": 5,
              "name": "CA TRS",
              "exm": 0,
              "lns": 0,
              "min": 0,
              "pcd": 253500,
              "rate": 0.005,
              "sur": true,
              "tax": 0.5,
              "lvl": 1,
              "tid": 466
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 100,
              "calc": 1,
              "cat": "CONNECTIVITY CHARGES",
              "cid": 5,
              "name": "CA High Cost Fund A",
              "exm": 0,
              "lns": 0,
              "min": 0,
              "pcd": 253500,
              "rate": 0.0035,
              "sur": true,
              "tax": 0.35000000000000003,
              "lvl": 1,
              "tid": 60
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 100,
              "calc": 1,
              "cat": "CONNECTIVITY CHARGES",
              "cid": 5,
              "name": "Universal Lifeline Telephone Service Charge",
              "exm": 0,
              "lns": 0,
              "min": 0,
              "pcd": 253500,
              "rate": 0.0475,
              "sur": true,
              "tax": 4.75,
              "lvl": 1,
              "tid": 22
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 100,
              "calc": 1,
              "cat": "CONNECTIVITY CHARGES",
              "cid": 5,
              "name": "CA Teleconnect Fund",
              "exm": 0,
              "lns": 0,
              "min": 0,
              "pcd": 253500,
              "rate": 0.0108,
              "sur": true,
              "tax": 1.08,
              "lvl": 1,
              "tid": 21
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 106.98,
              "calc": 1,
              "cat": "UTILITY USER TAXES",
              "cid": 8,
              "name": "Utility Users Tax",
              "exm": 0,
              "lns": 0,
              "min": 0,
              "pcd": 377300,
              "rate": 0.075,
              "sur": false,
              "tax": 8.0235,
              "lvl": 3,
              "tid": 16
            }
          ]
        }
      ],
      "summ": [
        {
          "max": 2147483647,
          "min": 0,
          "tchg": 100,
          "calc": 1,
          "cat": "REGULATORY CHARGES",
          "cid": 6,
          "name": "CA PUC Fee",
          "exm": 0,
          "lns": 0,
          "pcd": 253500,
          "rate": 0.003,
          "sur": true,
          "tax": 0.3,
          "lvl": 1,
          "tid": 468
        },
        {
          "max": 2147483647,
          "min": 0,
          "tchg": 100,
          "calc": 1,
          "cat": "CONNECTIVITY CHARGES",
          "cid": 5,
          "name": "CA TRS",
          "exm": 0,
          "lns": 0,
          "pcd": 253500,
          "rate": 0.005,
          "sur": true,
          "tax": 0.5,
          "lvl": 1,
          "tid": 466
        },
        {
          "max": 2147483647,
          "min": 0,
          "tchg": 100,
          "calc": 1,
          "cat": "CONNECTIVITY CHARGES",
          "cid": 5,
          "name": "CA High Cost Fund A",
          "exm": 0,
          "lns": 0,
          "pcd": 253500,
          "rate": 0.0035,
          "sur": true,
          "tax": 0.35000000000000003,
          "lvl": 1,
          "tid": 60
        },
        {
          "max": 2147483647,
          "min": 0,
          "tchg": 100,
          "calc": 1,
          "cat": "CONNECTIVITY CHARGES",
          "cid": 5,
          "name": "Universal Lifeline Telephone Service Charge",
          "exm": 0,
          "lns": 0,
          "pcd": 253500,
          "rate": 0.0475,
          "sur": true,
          "tax": 4.75,
          "lvl": 1,
          "tid": 22
        },
        {
          "max": 2147483647,
          "min": 0,
          "tchg": 100,
          "calc": 1,
          "cat": "CONNECTIVITY CHARGES",
          "cid": 5,
          "name": "CA Teleconnect Fund",
          "exm": 0,
          "lns": 0,
          "pcd": 253500,
          "rate": 0.0108,
          "sur": true,
          "tax": 1.08,
          "lvl": 1,
          "tid": 21
        },
        {
          "max": 2147483647,
          "min": 0,
          "tchg": 106.98,
          "calc": 1,
          "cat": "UTILITY USER TAXES",
          "cid": 8,
          "name": "Utility Users Tax",
          "exm": 0,
          "lns": 0,
          "pcd": 377300,
          "rate": 0.075,
          "sur": false,
          "tax": 8.0235,
          "lvl": 3,
          "tid": 16
        }
      ]
    }
  ]
}
{% endhighlight %}
    </div>
  </div>
</div>

<h3>Service Type Determination Example</h3>
In this example, the Service Type (<code>serv</code>) is set to <code>-1</code>.  The service type will be automatically determined based on the jurisdiction provided.  In this case, since San Francisco is the only jurisdiction, an <b>Intrastate</b> service type is expected to be used.
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
          "ref": "Line Item 002 : 19/-1 Intra/Inter for Service (Intrastate Test)",
          "chg": 100,
          "line": 10,
          "sale": 1,
          "incl": false,
          "tran": 19,
          "serv": -1,
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
Taxes are returned based upon the determined service type.

<div class="panel-group">
  <a data-toggle="collapse" href="#collapse2">View the Response JSON</a>
  <div id="collapse2" class="panel-collapse collapse">
    <div class="panel-body">
{% highlight json%}
{
  "inv": [
    {
      "doc": "TEST-VOIP INVOICE 2017.12.26:12.02 AVA",
      "itms": [
        {
          "ref": "Line Item 002 : 19/-1 Intra/Inter for Service (Intrastate Test)",
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
              "lns": 10,
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
          "lns": 10,
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
          "lns": 10,
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
{% endhighlight %}
    </div>
  </div>
</div>


<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/tax-type-exemption/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/tax-override/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>