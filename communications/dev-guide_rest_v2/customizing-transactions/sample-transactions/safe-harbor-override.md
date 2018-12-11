---
layout: page
title: Chapter 4.3.7 - Safe Harbor Override
product: communications
doctype: comms_rest_v2_dev_guide
chapter: customizing-transactions
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/tax-override/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/sau/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

The Safe Harbor override (<code>sovr</code>) object allows you to apply traffic study TAM overrides to the <code>CalcTaxes</code> request.  See <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/safe-harbor-override/">Safe Harbor Override</a> for more information.

The Safe Harbor Override allows you to adjust Federal traffic study percentages for:
<ul class="dev-guide-list">
    <li>Cellular</li>
    <li>VoIP</li>
    <li>Paging</li>
</ul>

<h4 id="note">Note</h4>
Although the <code>CalcTaxes</code> request gives the user the flexibility to input Safe Harbor Override information for each transaction, we recommend using a <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/client-profiles/">client profile</a>. Using a client profile results in better performance from the Tax Engine because your override settings are cached <i>before</i> tax calculation begins.

Provide the following information for a Safe Harbor override:
<ul class="dev-guide-list">
    <li>Safe Harbor Type (<code>sh</code>)</li>
    <li>Original Federal TAM (<code>old</code>)</li>
    <li>New Federal TAM (<code>new</code>)</li>
</ul>

The Original and New Federal TAM values are passed as a decimal.  For example, a 64.9% Federal TAM value is entered as "0.649".  The <b>State</b> TAM is calculated automatically (State TAM = 1.0 - Federal TAM).

<h3>Safe Harbor Override Example</h3>
This example shows the use of the Safe Harbor Override (<code>sovr</code>) object.  The <b>VoIP</b> safe harbor type (<code>sh</code>) is being overridden from the <b>original</b> Federal TAM (<code>old</code>) of 0.649 (64.9%) to <b>your</b> calculated Federal TAM (<code>new</code>) of 0.250 (25%).

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
      "doc": "TEST-VOIP INVOICE 2018.04.13:12.02 AVA",
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
      "date": "2018-04-01T12:00:00Z",
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
          "val": "VoIP Sample Line Items with TAM Traffic Study Override Invoice ABC-ZZZ"
        }
      ]
    }
  ],
  "sovr": [	
    {
      "sh": 2,
      "old": 0.649,
      "new": 0.250
    }
  ]
}
{% endhighlight %}

<h4>Response</h4>
The result of the Safe Harbor override can be seen on Federal-level Tax Type IDs (<code>tid</code>) 162, 226:
<ul class="dev-guide-list">
  <li>Total Charge (<code>tchg</code>) is 25 based on the requested 100 charge (Total Charge is 64.90 without the Safe Harbor override)</li>
  <li>Exempt Sale Amount (<code>exm</code>) is 25 based on the requested 100 charge (Exempt Sale Amount is 35.10 without the Safe Harbor override)</li>
</ul>

State taxes are automatically updated based on the Federal override.  The State TAM is 75% (1.0 - new Federal TAM) and can be seen on Tax Type IDs (<code>tid</code>) 161, 217, 450, 452, 453, 454:
<ul class="dev-guide-list">
  <li>Total Charge (<code>tchg</code>) is 75 based on the requested 100 charge (Total Charge is 35.10 without the Safe Harbor override)</li>
  <li>Exempt Sale Amount (<code>exm</code>) is 25 based on the requested 100 charge (Exempt Sale Amount is 64.9 without the Safe Harbor override)</li>
</ul>

 <div class="panel-group">
  <a data-toggle="collapse" href="#collapse1">View the Response JSON</a>
  <div id="collapse1" class="panel-collapse collapse">
    <div class="panel-body">
{% highlight json %}
{
  "inv": [
    {
      "doc": "TEST-VOIP INVOICE 2018.04.13:12.02 AVA",
      "itms": [
        {
          "ref": "Line Item 001 - VoIP/Access Charge",
          "txs": [
            {
              "bill": true,
              "cmpl": true,
              "tm": 75,
              "calc": 1,
              "cat": "CONNECTIVITY CHARGES",
              "cid": 5,
              "name": "Universal Lifeline Telephone Service Charge (VoIP)",
              "exm": 25,
              "lns": 0,
              "min": 0,
              "pcd": 253500,
              "rate": 0.0475,
              "sur": true,
              "tax": 3.5625,
              "lvl": 1,
              "tid": 454
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 75,
              "calc": 1,
              "cat": "CONNECTIVITY CHARGES",
              "cid": 5,
              "name": "CASF (VoIP)",
              "exm": 25,
              "lns": 0,
              "min": 0,
              "pcd": 253500,
              "rate": 0.0056,
              "sur": true,
              "tax": 0.42,
              "lvl": 1,
              "tid": 453
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 75,
              "calc": 1,
              "cat": "CONNECTIVITY CHARGES",
              "cid": 5,
              "name": "CA Teleconnect Fund (VoIP)",
              "exm": 25,
              "lns": 0,
              "min": 0,
              "pcd": 253500,
              "rate": 0.0108,
              "sur": true,
              "tax": 0.81,
              "lvl": 1,
              "tid": 452
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 75,
              "calc": 1,
              "cat": "CONNECTIVITY CHARGES",
              "cid": 5,
              "name": "CA High Cost Fund A (VoIP)",
              "exm": 25,
              "lns": 0,
              "min": 0,
              "pcd": 253500,
              "rate": 0.0035,
              "sur": true,
              "tax": 0.2625,
              "lvl": 1,
              "tid": 450
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 75,
              "calc": 1,
              "cat": "CONNECTIVITY CHARGES",
              "cid": 5,
              "name": "TRS (VoIP)",
              "exm": 25,
              "lns": 0,
              "min": 0,
              "pcd": 253500,
              "rate": 0.005,
              "sur": true,
              "tax": 0.375,
              "lvl": 1,
              "tid": 217
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 75,
              "calc": 1,
              "cat": "E-911 CHARGES",
              "cid": 7,
              "name": "E911 (VoIP)",
              "exm": 25,
              "lns": 0,
              "min": 0,
              "pcd": 253500,
              "rate": 0.0075,
              "sur": false,
              "tax": 0.5625,
              "lvl": 1,
              "tid": 161
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 25,
              "calc": 1,
              "cat": "CONNECTIVITY CHARGES",
              "cid": 5,
              "name": "FUSF (VoIP)",
              "exm": 75,
              "lns": 0,
              "min": 0,
              "pcd": 0,
              "rate": 0.184,
              "sur": false,
              "tax": 4.6,
              "lvl": 0,
              "tid": 162
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 25,
              "calc": 1,
              "cat": "REGULATORY CHARGES",
              "cid": 6,
              "name": "FCC Regulatory Fee (VoIP)",
              "exm": 75,
              "lns": 0,
              "min": 0,
              "pcd": 0,
              "rate": 0.00302,
              "sur": false,
              "tax": 0.0755,
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
              "rate": 3.39,
              "sur": false,
              "tax": 33.9,
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
          "tchg": 75,
          "calc": 1,
          "cat": "CONNECTIVITY CHARGES",
          "cid": 5,
          "name": "Universal Lifeline Telephone Service Charge (VoIP)",
          "exm": 25,
          "lns": 0,
          "pcd": 253500,
          "rate": 0.0475,
          "sur": true,
          "tax": 3.5625,
          "lvl": 1,
          "tid": 454
        },
        {
          "max": 2147483647,
          "min": 0,
          "tchg": 75,
          "calc": 1,
          "cat": "CONNECTIVITY CHARGES",
          "cid": 5,
          "name": "CASF (VoIP)",
          "exm": 25,
          "lns": 0,
          "pcd": 253500,
          "rate": 0.0056,
          "sur": true,
          "tax": 0.42,
          "lvl": 1,
          "tid": 453
        },
        {
          "max": 2147483647,
          "min": 0,
          "tchg": 75,
          "calc": 1,
          "cat": "CONNECTIVITY CHARGES",
          "cid": 5,
          "name": "CA Teleconnect Fund (VoIP)",
          "exm": 25,
          "lns": 0,
          "pcd": 253500,
          "rate": 0.0108,
          "sur": true,
          "tax": 0.81,
          "lvl": 1,
          "tid": 452
        },
        {
          "max": 2147483647,
          "min": 0,
          "tchg": 75,
          "calc": 1,
          "cat": "CONNECTIVITY CHARGES",
          "cid": 5,
          "name": "CA High Cost Fund A (VoIP)",
          "exm": 25,
          "lns": 0,
          "pcd": 253500,
          "rate": 0.0035,
          "sur": true,
          "tax": 0.2625,
          "lvl": 1,
          "tid": 450
        },
        {
          "max": 2147483647,
          "min": 0,
          "tchg": 75,
          "calc": 1,
          "cat": "CONNECTIVITY CHARGES",
          "cid": 5,
          "name": "TRS (VoIP)",
          "exm": 25,
          "lns": 0,
          "pcd": 253500,
          "rate": 0.005,
          "sur": true,
          "tax": 0.375,
          "lvl": 1,
          "tid": 217
        },
        {
          "max": 2147483647,
          "min": 0,
          "tchg": 75,
          "calc": 1,
          "cat": "E-911 CHARGES",
          "cid": 7,
          "name": "E911 (VoIP)",
          "exm": 25,
          "lns": 0,
          "pcd": 253500,
          "rate": 0.0075,
          "sur": false,
          "tax": 0.5625,
          "lvl": 1,
          "tid": 161
        },
        {
          "max": 2147483647,
          "min": 0,
          "tchg": 25,
          "calc": 1,
          "cat": "CONNECTIVITY CHARGES",
          "cid": 5,
          "name": "FUSF (VoIP)",
          "exm": 75,
          "lns": 0,
          "pcd": 0,
          "rate": 0.184,
          "sur": false,
          "tax": 4.6,
          "lvl": 0,
          "tid": 162
        },
        {
          "max": 2147483647,
          "min": 0,
          "tchg": 25,
          "calc": 1,
          "cat": "REGULATORY CHARGES",
          "cid": 6,
          "name": "FCC Regulatory Fee (VoIP)",
          "exm": 75,
          "lns": 0,
          "pcd": 0,
          "rate": 0.00302,
          "sur": false,
          "tax": 0.0755,
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
          "rate": 3.39,
          "sur": false,
          "tax": 33.9,
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
  <li class="previous"><a href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/tax-override/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/sau/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>