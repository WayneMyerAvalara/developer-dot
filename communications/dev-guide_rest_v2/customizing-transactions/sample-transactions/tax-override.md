---
layout: page
title: Chapter 4.3.6 - Tax Override
product: communications
doctype: comms_rest_v2_dev_guide
chapter: customizing-transactions
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/inter-intrastate/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/safe-harbor-override/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

The Tax Override object (<code>ovr</code>) allows you to change the rate of a tax in the AFC tax engine within the context of the <code>CalcTaxes</code> request.  For more information, see <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/tax-override/">Tax Override</a>.

<h4 id="note">Note</h4>
Although the <code>CalcTaxes</code> request gives the user the flexibility to input Override information for each transaction, we recommend using a <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/client-profiles/">client profile</a> with a custom override file applied. This results in better performance from the Tax Engine because your override settings are cached <i>before</i> tax calculation begins.

<h3>Tax Override Example</h3>
This example shows the use of the Tax Override (<code>ovr</code>) object.  It contains the following 2 overrides:
<ol class="dev-guide-list">
  <li>Tax Type (<code>tid</code>) <b>162</b> is being overridden to a <b>0</b> rate for <b>all tax brackets</b> (<code>rate</code> and <code>max</code> within the tax bracket (<code>brkt</code>) object) for <b>all jurisdictions</b> within the USA (<code>ctry</code> within the location (<code>loc</code>) object)</li>
  <li>Tax Type (<code>tid</code>) <b>163</b> is being overridden to a <b>0.195</b> rate for <b>all tax brackets</b> (<code>rate</code> and <code>max</code> within the tax bracket (<code>brkt</code>) object) for <b>all jurisdictions</b> within the USA (<code>ctry</code> within the location (<code>loc</code>) object)</li>
</ol>

The overrides are being applied to all tax brackets by setting the <code>max</code> field within the tax bracket (<code>brkt</code>) to the "unlimited" value - <code>2147483647</code>.

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
      "doc": "TEST-VOIP RATE OVERRIDE INVOICE 2018.05.01:12.00 AVA",
      "cmmt": false,
      "bill": {
        "cnty": "New York",
        "ctry": "USA",
        "int": true,
        "geo": false,
        "city": "New York",
        "st": "NY",
        "zip": "10001"
      },
      "cust": 0,
      "lfln": false,
      "date": "2018-05-01T12:00:00Z",
      "itms": [
        {
          "ref": "Line Item 001 - VoIP/Interstate Usage",
          "chg": 100,
          "line": 0,
          "sale": 1,
          "incl": false,
          "tran": 19,
          "serv": 49,
          "dbt": false,
          "adj": false
        },
        {
          "ref": "Line Item 002 - VoIP/International Usage",
          "chg": 100,
          "line": 0,
          "sale": 1,
          "incl": false,
          "tran": 19,
          "serv": 51,
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
          "val": "VoIP Sample Rate Override - Remove 162 and add 163"
        }
      ]
    }
  ],
  "ovr": [
    {
      "loc": {
        "ctry": "USA"
      },
      "scp": 0,
      "tid": 162,
      "lvl": 0,
      "lvlExm": true,
      "brkt": [
        {
          "rate": 0,
          "max": 2147483647
        }
      ]
    },
    {
      "loc": {
        "ctry": "USA"
      },
      "scp": 0,
      "tid": 163,
      "lvl": 0,
      "lvlExm": true,
      "brkt": [
        {
          "rate": 0.195,
          "max": 2147483647
        }
      ]
    }
  ]
 }
 {% endhighlight %}

 <h4>Response</h4>
 In the response, you can see that Tax Type (<code>tid</code>) 163 uses the overridden rate (<code>rate</code>) of 0.195 for all line items (<code>txs</code>) and the summarized taxes (<code>summ</code>).  Additionally, Tax Type 162 is not returned as a tax for this transaction since the rate has been overridden to 0.

 <div class="panel-group">
  <a data-toggle="collapse" href="#collapse1">View the Response JSON</a>
  <div id="collapse1" class="panel-collapse collapse">
    <div class="panel-body">
 {% highlight json %}
 {
  "inv": [
    {
      "doc": "TEST-VOIP RATE OVERRIDE INVOICE 2018.05.01:12.00 AVA",
      "itms": [
        {
          "ref": "Line Item 001 - VoIP/Interstate Usage",
          "txs": [
            {
              "bill": true,
              "cmpl": true,
              "tm": 123.55782948940758,
              "calc": 1,
              "cat": "EXCISE TAXES",
              "cid": 4,
              "name": "NY MCTD 186c",
              "exm": 0,
              "lns": 0,
              "min": 0,
              "pcd": 2604000,
              "rate": 0.00595,
              "sur": true,
              "tax": 0.7351690854619752,
              "lvl": 2,
              "tid": 27
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 123.55794753937319,
              "calc": 1,
              "cat": "EXCISE TAXES",
              "cid": 4,
              "name": "Excise Tax",
              "exm": 0,
              "lns": 0,
              "min": 0,
              "pcd": 2502500,
              "rate": 0.025,
              "sur": true,
              "tax": 3.08894868848433,
              "lvl": 1,
              "tid": 5
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 100.195998,
              "calc": 1,
              "cat": "CONNECTIVITY CHARGES",
              "cid": 5,
              "name": "FUSF",
              "exm": 0,
              "lns": 0,
              "min": 0,
              "pcd": 0,
              "rate": 0.195,
              "sur": false,
              "tax": 19.53821961,
              "lvl": 0,
              "tid": 163
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
          "ref": "Line Item 002 - VoIP/International Usage",
          "txs": [
            {
              "bill": true,
              "cmpl": true,
              "tm": 123.68852798255152,
              "calc": 1,
              "cat": "EXCISE TAXES",
              "cid": 4,
              "name": "NY MCTD 186c",
              "exm": 0,
              "lns": 0,
              "min": 0,
              "pcd": 2604000,
              "rate": 0.00595,
              "sur": true,
              "tax": 0.7359467414961818,
              "lvl": 2,
              "tid": 27
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 123.68865037347913,
              "calc": 1,
              "cat": "EXCISE TAXES",
              "cid": 4,
              "name": "Excise Tax",
              "exm": 0,
              "lns": 0,
              "min": 0,
              "pcd": 2502500,
              "rate": 0.025,
              "sur": true,
              "tax": 3.0922162593369786,
              "lvl": 1,
              "tid": 5
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 100.302,
              "calc": 1,
              "cat": "CONNECTIVITY CHARGES",
              "cid": 5,
              "name": "FUSF",
              "exm": 0,
              "lns": 0,
              "min": 0,
              "pcd": 0,
              "rate": 0.195,
              "sur": false,
              "tax": 19.55889,
              "lvl": 0,
              "tid": 163
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 100,
              "calc": 1,
              "cat": "REGULATORY CHARGES",
              "cid": 6,
              "name": "FCC Regulatory Fee (VoIP)",
              "exm": 0,
              "lns": 0,
              "min": 0,
              "pcd": 0,
              "rate": 0.00302,
              "sur": false,
              "tax": 0.302,
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
          "tchg": 247.2463574719591,
          "calc": 1,
          "cat": "EXCISE TAXES",
          "cid": 4,
          "name": "NY MCTD 186c",
          "exm": 0,
          "lns": 0,
          "pcd": 2604000,
          "rate": 0.00595,
          "sur": true,
          "tax": 1.471115826958157,
          "lvl": 2,
          "tid": 27
        },
        {
          "max": 2147483647,
          "min": 0,
          "tchg": 247.24659791285234,
          "calc": 1,
          "cat": "EXCISE TAXES",
          "cid": 4,
          "name": "Excise Tax",
          "exm": 0,
          "lns": 0,
          "pcd": 2502500,
          "rate": 0.025,
          "sur": true,
          "tax": 6.181164947821308,
          "lvl": 1,
          "tid": 5
        },
        {
          "max": 2147483647,
          "min": 0,
          "tchg": 200.497998,
          "calc": 1,
          "cat": "CONNECTIVITY CHARGES",
          "cid": 5,
          "name": "FUSF",
          "exm": 0,
          "lns": 0,
          "pcd": 0,
          "rate": 0.195,
          "sur": false,
          "tax": 39.097109610000004,
          "lvl": 0,
          "tid": 163
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
          "tchg": 100,
          "calc": 1,
          "cat": "REGULATORY CHARGES",
          "cid": 6,
          "name": "FCC Regulatory Fee (VoIP)",
          "exm": 0,
          "lns": 0,
          "pcd": 0,
          "rate": 0.00302,
          "sur": false,
          "tax": 0.302,
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
  <li class="previous"><a href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/inter-intrastate/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/safe-harbor-override/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>