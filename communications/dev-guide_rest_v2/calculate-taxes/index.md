---
layout: page
title: Chapter 2 - Calculate Taxes
product: communications
doctype: comms_rest_v2_dev_guide
chapter: calculate-taxes
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/getting-started"><i class="glyphicon glyphicon-chevron-left"></i>Previous Chapter</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/calculate-taxes/required-fields/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

<h3>Your First CalcTaxes Request</h3>

Let's dive in. We're going to send a simple <code>CalcTaxes</code> call using <a class="dev-guide-link" href="https://www.getpostman.com">Postman</a> and then inspect the results.

<h3>Headers</h3>

Add these <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/getting-started/authentication/">mandatory headers</a> to your request:
<ul class="dev-guide-list">
  <li><code>api_key</code></li>
  <li><code>client_id</code></li>
  <li><code>Content-Type: application/json</code></li>
</ul>

<h4>Postman example</h4>
<img src="/public/images/comms/dev-guide_rest_v2/comms_dev_guide_1.png"/>

<h3>Body</h3>
For the body of the <code>POST</code> request, copy and paste this example:

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
      "doc": "DocumentCode12345",
      "bill": {
        "ctry": "USA",
        "st": "NC",
        "city": "Durham",
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
      "cmmt": false
    }
  ]
}
{% endhighlight %}

<h4>What are we sending?</h4>

<ol class="dev-guide-list">
  <li>Your <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/company-data/">company</a> details (<code>cmpn</code>)</li>
  <li><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/invoice/">Invoice</a> (<code>inv</code>) details</li>
    <ul class="dev-guide-list">
      <li>Document Code (<code>doc</code>) is included so we can <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/commit-uncommit/commit-request/">commit</a> this transaction later</li>
      <li>The Commit flag (<code>cmmt</code>) is set to <code>false</code>.  If you want to <a class="dev-guide-link"  href="/communications/dev-guide_rest_v2/commit-uncommit/">commit</a> immediately, set the Commit flag to <code>true</code> in the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/invoice/">invoice</a>.</li>
      <li>BillTo (<code>bill</code>) is a <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/location/">Location</a> object and is specified in different ways. We pass a combination of Country (<code>ctry</code>), City(<code>city</code>), State (<code>st</code>), and Postal Code (<code>zip</code>), but we can also pass a single PCode (<code>pcd</code>), FIPS (<code>fips</code>), or NPANXX (<code>npa</code>) value.</li>
    </ul>
  <li>The value you assign to the <code>date</code> key is important because it affects which rules are used by our tax engine to calculate taxes. Tax rules change frequently, and our Content Team continuously updates our tax engine to reflect these changes.</li>
  <li>The <a class="dev-guide-link"  href="/communications/dev-guide_rest_v2/reference/line-item/">LineItem</a> (<code>itms</code>) is contained within the <code>Invoice</code>. This is where you enter information such as Charge (<code>chg</code>), Transaction/Service Pair (<code>tran</code> and <code>serv</code>), and number of Lines (<code>line</code>).</li>
</ol>


<h3>Response</h3>
The <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calc-taxes-response/">CalcTaxes response</a> contains a list of <a class="dev-guide-link"  href="/communications/dev-guide_rest_v2/reference/detailed-tax-result/">detailed tax amounts</a> (<code>txs</code>):

{% highlight json %}
{
    "inv": [
        {
            "doc": "DocumentCode12345",
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
                            "tax": 7.8269168600000008,
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

Each detailed tax record returned contains additional information including:
<ul class="dev-guide-list">
  <li><code>bill</code>: Is the tax <i>billable</i>? Or, can this tax be passed on to the end-customer?</li>
  <li><code>cmpl</code>: Will this tax be included in <i>compliance</i> reporting?</li>
  <li><code>tm</code>: Taxable Measure</li>
  <li><code>cat</code>: Tax Category</li>
  <li><code>rate</code>: Tax Rate</li>
  <li><code>lvl</code>: Tax Level (Federal, State, County, Local)</li>
  <li><code>tax</code>: Tax Amount</li>
</ul>

For more information, see <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calc-taxes-response/">CalcTaxes Response</a>.

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/getting-started"><i class="glyphicon glyphicon-chevron-left"></i>Previous Chapter</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/calculate-taxes/required-fields/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>