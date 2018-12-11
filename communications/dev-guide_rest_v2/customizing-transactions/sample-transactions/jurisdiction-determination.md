---
layout: page
title: Chapter 4.3.3 - Jurisdiction Determination
product: communications
doctype: comms_rest_v2_dev_guide
chapter: customizing-transactions
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/multi-line-request/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/exemption/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

Jurisdictions are set on the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/invoice/">invoice</a> and the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/line-item/">line item</a> for a <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calc-taxes-request/"><code>CalcTaxes</code> request</a>.

<div class="mobile-table">
  <table class="styled-table">
    <thead>
      <tr>
        <th>Key</th>
        <th>Location Name</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>bill</code></td>
            <td>BillTo</td>
            <td>Location used to specify where the transaction is to be billed
            <br/><br/>
            Required on the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/invoice/">invoice</a>, but can also be set on the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/line-item/">line item</a> (overrides BillTo set on the invoice)
            </td>
        </tr>
        <tr>
            <td><code>from</code></td>
            <td>From (Origination)</td>
            <td>Specifies the point of origin for the line item.  Defaults to the BillTo location if not set</td>
        </tr>
        <tr>
            <td><code>to</code></td>
            <td>From (Destination)</td>
            <td>Specifies the point of termination for the line item.  Defaults to the BillTo location if not set</td>
        </tr>
    </tbody>
  </table>
</div>

See <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/location/">Location</a> for more information.

A jurisdiction is set with one of these jurisdiction types:
<ul class="dev-guide-list">
    <li><b>PCode</b> (<code>pcd</code>): Persisted numeric identifer for a taxing jurisdiction</li>
    <li><b>Address</b>: Specify a Country (<code>ctry</code>), State (<code>st</code>), County (<code>cnty</code>), City (<code>city</code>), and/or Postal Code (<code>zip</code>).  Set the Street Address (<code>addr</code>) if you want to geocode the address (<code>geo</code> = <code>true</code>)</li>
    <ul class="dev-guide-list">
      <li>The more complete the address information provided, the more accurate the results are</li>
      <li>Country ISO is sufficient for taxation purposes for most foreign nations other than USA, Canada, and Brazil</li>
      <li>Country (<code>ctry</code>), State (<code>st</code>), and Postal Code (<code>zip</code>) are required for USA and Canada (at a minimum)</li>
    </ul>
    <li><b>FIPS</b> (<code>fips</code>): Standardized set of numeric or alphabetic codes issued by the National Institute of Standards and Technology (NIST) to ensure uniform identification of geographic entities through all federal government agencies</li>
    <li><b>NPANXX</b> (<code>npa</code>): 6-digit numbers consisting of the area code and second 3 digits of a North American dialing plan phone number</li>
</ul>

Keep these points in mind if using the Geocoding functionality (<code>geo</code> = <code>true</code>):
<ol class="dev-guide-list">
  <li>The geocoding is slower, but provides a more accurate jurisdiction</li>
  <li>If the geocoding process fails, the entire <code>CalcTaxes</code> request fails</li>
</ol>

<h4>Note</h4>
When specifying jurisdictions outside of the United States via country/state/county/city lookup, be sure to pass the Country ISO (<code>ctry</code>).  For example, use <code>CAN</code> for Canada or <code>IND</code> for India.  If the Country ISO is not set on a foreign country, errors are generated.

See <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/location/">Location</a> for more information.

<h3 id="us_geo">United States Tax Request using Geocoding Example</h3>
Geocoding functionality is being used in this example by setting <code>geo</code> to <code>true</code> and specifying an address (<code>addr</code>), city (<code>city</code>), state (<code>st</code>), postal code (<code>zip</code>), and country (<code>ctry</code>).

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
      "doc": "TEST-VOIP INVOICE 2018.01.15:12.02 AVA",
      "cmmt": false,
      "bill": {
        "geo": true,
        "ctry": "USA",
        "st": "CA",
        "city": "Santa Clara",
        "addr": "4900 Marie P DeBartolo Way",  // Levi Stadium
        "zip": "95054"
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
          "val": "Geo Lookup Sample Line Items Invoice ABC-ZZZ"
        }
      ]
    }
  ]
}
{% endhighlight %}

<h4>Response</h4>
Federal, State, and County taxes are returned based upon the geocoding request.

<div class="panel-group">
  <a data-toggle="collapse" href="#collapse1">View the Response JSON</a>
  <div id="collapse1" class="panel-collapse collapse">
    <div class="panel-body">

{% highlight json %}
{
  "inv": [
    {
      "doc": "TEST-VOIP INVOICE 2018.01.15:12.02 AVA",
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
          "ref": "Line Item 002 - VoIP/Lines"
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
              "pcd": 390800,
              "rate": 0.0175,
              "sur": false,
              "tax": 0.43750000000000006,
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
              "pcd": 390800,
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
              "pcd": 390800,
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
          "tchg": 25,
          "calc": 1,
          "cat": "SALES AND USE TAXES",
          "cid": 1,
          "name": "District Tax",
          "exm": 0,
          "lns": 0,
          "pcd": 390800,
          "rate": 0.0175,
          "sur": false,
          "tax": 0.43750000000000006,
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
          "pcd": 390800,
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
          "pcd": 390800,
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

<h3>Canadian Tax Request Example</h3>
This example sets the BillTo <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/location/">location</a> (<code>bill</code>) to Montreal, QC.
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
        "ctry": "CAN",
        "int": true,
        "geo": false,
        "city": "Montreal",
        "st": "PQ",
        "zip": "H1A-0A1"
      },
      "cust": 0,
      "lfln": false,
      "date": "2018-06-01T12:00:00Z",
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
          "val": "Canada VoIP Sample Line Items Invoice ABC-ZZZ"
        }
      ]
    }
  ]
}
{% endhighlight %}

<h4>Response</h4>
Taxes returned are for Quebec (tax level <code>lvl</code> 1) and Canada (tax level <code>lvl</code> 0).

<div class="panel-group">
  <a data-toggle="collapse" href="#collapse2">View the Response JSON</a>
  <div id="collapse2" class="panel-collapse collapse">
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
              "tm": 100,
              "calc": 1,
              "cat": "SALES AND USE TAXES",
              "cid": 1,
              "name": "Quebec Sales Tax (QST)",
              "exm": 0,
              "lns": 0,
              "min": 0,
              "pcd": 4882600,
              "rate": 0.09975,
              "sur": false,
              "tax": 9.975000000000001,
              "lvl": 1,
              "tid": 69
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 100,
              "calc": 1,
              "cat": "SALES AND USE TAXES",
              "cid": 1,
              "name": "Goods and Service Tax (GST)",
              "exm": 0,
              "lns": 0,
              "min": 0,
              "pcd": 4482200,
              "rate": 0.05,
              "sur": false,
              "tax": 5,
              "lvl": 0,
              "tid": 66
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
              "name": "E-911",
              "exm": 0,
              "lns": 10,
              "min": 0,
              "pcd": 4945800,
              "rate": 0.46,
              "sur": false,
              "tax": 4.6000000000000005,
              "lvl": 1,
              "tid": 10
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 4.140000000000001,
              "calc": 1,
              "cat": "SALES AND USE TAXES",
              "cid": 1,
              "name": "Quebec Sales Tax (QST)",
              "exm": 0.45999999999999996,
              "lns": 0,
              "min": 0,
              "pcd": 4882600,
              "rate": 0.09975,
              "sur": false,
              "tax": 0.4129650000000001,
              "lvl": 1,
              "tid": 69
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 4.140000000000001,
              "calc": 1,
              "cat": "SALES AND USE TAXES",
              "cid": 1,
              "name": "Goods and Service Tax (GST)",
              "exm": 0.45999999999999996,
              "lns": 0,
              "min": 0,
              "pcd": 4482200,
              "rate": 0.05,
              "sur": false,
              "tax": 0.20700000000000005,
              "lvl": 0,
              "tid": 66
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
              "name": "Quebec Sales Tax (QST)",
              "exm": 0,
              "lns": 0,
              "min": 0,
              "pcd": 4882600,
              "rate": 0.09975,
              "sur": false,
              "tax": 2.4937500000000004,
              "lvl": 1,
              "tid": 69
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 25,
              "calc": 1,
              "cat": "SALES AND USE TAXES",
              "cid": 1,
              "name": "Goods and Service Tax (GST)",
              "exm": 0,
              "lns": 0,
              "min": 0,
              "pcd": 4482200,
              "rate": 0.05,
              "sur": false,
              "tax": 1.25,
              "lvl": 0,
              "tid": 66
            }
          ]
        }
      ],
      "summ": [
        {
          "max": 2147483647,
          "min": 0,
          "tchg": 125,
          "calc": 1,
          "cat": "SALES AND USE TAXES",
          "cid": 1,
          "name": "Quebec Sales Tax (QST)",
          "exm": 0,
          "lns": 0,
          "pcd": 4882600,
          "rate": 0.09975,
          "sur": false,
          "tax": 12.468750000000002,
          "lvl": 1,
          "tid": 69
        },
        {
          "max": 2147483647,
          "min": 0,
          "tchg": 125,
          "calc": 1,
          "cat": "SALES AND USE TAXES",
          "cid": 1,
          "name": "Goods and Service Tax (GST)",
          "exm": 0,
          "lns": 0,
          "pcd": 4482200,
          "rate": 0.05,
          "sur": false,
          "tax": 6.25,
          "lvl": 0,
          "tid": 66
        },
        {
          "max": 2147483647,
          "min": 0,
          "tchg": 0,
          "calc": 4,
          "cat": "E-911 CHARGES",
          "cid": 7,
          "name": "E-911",
          "exm": 0,
          "lns": 10,
          "pcd": 4945800,
          "rate": 0.46,
          "sur": false,
          "tax": 4.6000000000000005,
          "lvl": 1,
          "tid": 10
        },
        {
          "max": 2147483647,
          "min": 0,
          "tchg": 4.140000000000001,
          "calc": 1,
          "cat": "SALES AND USE TAXES",
          "cid": 1,
          "name": "Quebec Sales Tax (QST)",
          "exm": 0.45999999999999996,
          "lns": 0,
          "pcd": 4882600,
          "rate": 0.09975,
          "sur": false,
          "tax": 0.4129650000000001,
          "lvl": 1,
          "tid": 69
        },
        {
          "max": 2147483647,
          "min": 0,
          "tchg": 4.140000000000001,
          "calc": 1,
          "cat": "SALES AND USE TAXES",
          "cid": 1,
          "name": "Goods and Service Tax (GST)",
          "exm": 0.45999999999999996,
          "lns": 0,
          "pcd": 4482200,
          "rate": 0.05,
          "sur": false,
          "tax": 0.20700000000000005,
          "lvl": 0,
          "tid": 66
        }
      ]
    }
  ]
}
{% endhighlight %}
    </div>
  </div>
</div>

<h3>Jurisdiction Determination using PCode, NPANXX, or FIPS</h3>
If you have a PCode (<code>pcd</code>), NPANXX (<code>npa</code>), or FIPS (<code>fips</code>) instead of an address, set these fields in BillTo (<code>bill</code>), From (<code>from</code>), or To (<code>to</code>) (these examples demonstrate BillTo, but the same applies to From and To):

<h4>PCode</h4>
{% highlight json %}
"bill": {
  "pcd": 390800
}
{% endhighlight %}

<h4>NPANXX</h4>
{% highlight json %}
"bill": {
  "npa": 415226
}
{% endhighlight %}

<h4>FIPS</h4>
{% highlight json %}
"bill": {
  "fips": "0608500380"
}
{% endhighlight %}


<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/multi-line-request/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/exemption/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>