---
layout: page
title: Chapter 4.3.4.2 - Tax Type Exemptions
product: communications
doctype: comms_rest_v2_dev_guide
chapter: customizing-transactions
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/category-exemption/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/inter-intrastate/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

A tax type <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/exemption/">exemption</a> allows you to exempt taxes based on a tax type (<code>tpe</code>) and domain (<code>dom</code>) for a <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/location/">jurisdiction</a> (<code>loc</code>).  The tax type exemption is set on the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/invoice/">invoice</a> and applies to all <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/line-item/">line items</a> included in the invoice.  

<h3>Tax Types</h3>
Use the tax type wildcard (set both <code>tpe</code> and <code>dom</code> to <code>0</code>) to exempt all taxes types.

A list of tax types is available in the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/getting-started/environments-endpoints#lookups"><code>/api/v2/afc/taxtype/{taxType}</code> Lookup endpoint</a>.  Pass "*" in <code>{taxType}</code> to return all tax types.

<h3>Exemption fields</h3>
Exemption fields used for tax type exemptions and default values for the applicable fields:
<div class="mobile-table">
  <table class="styled-table">
    <thead>
      <tr>
        <th>Key</th>
        <th>Name</th>
        <th>Default if Not Set</th>
      </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>tpe</code></td>
            <td>Tax Type ID</td>
            <td>No default - must be set</td>
        </tr>
        <tr>
            <td><code>loc</code></td>
            <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/location/">Jurisdiction</a></td>
            <td>No default - must be set</td>
        </tr>
        <tr>
            <td><code>exnb</code></td>
            <td>Exempt Non-Billable</td>
            <td><code>false</code></td>
        </tr>
        <tr>
            <td><code>dom</code></td>
            <td>Domain</td>
            <td>No default - must be set</td>
        </tr>
        <tr>
            <td><code>scp</code></td>
            <td>Scope</td>
            <td>Domain level</td>
        </tr>
        <tr>
            <td><code>frc</code></td>
            <td>Force Level Exemptible</td>
            <td><code>true</code> when the tax type wildcard is used</td>
        </tr>
    </tbody>
  </table>
</div>

For more information about fields, see <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/exemption/">Exemptions</a>.

<h3>Tax Type Exemption Example 1 - Scope amd Domain</h3>
This example demonstrates the use of domain (<code>dom</code>) and scope, unique for each exemption.

{% highlight json %}
{
  "cmpn": {
    "bscl": 1,
    "svcl": 0,
    "fclt": true,
    "frch": true,
    "reg": false
  },
  "inv": [
    {
      "bill": {
        "ctry": "USA",
        "st": "PR",
        "city": "Adjuntas",
        "zip": "00601",
        "int": true
      },
      "cust": 1,
      "lfln": false,
      "date": "2018-02-01T12:00:00Z",
      "exms": [
        {
          "loc": {
            "pcd": 5116000
          },
          "tpe": 35,
          "dom": 1,
          "scp": 256
        },
        {
          "loc": {
            "pcd": 5116000
          },
          "tpe": 1,
          "dom": 3,
          "scp": 1792
        },
        {
          "loc": {
            "pcd": 5116000
          },
          "tpe": 170,
          "dom": 0,
          "scp": 128
        },
        {
          "loc": {
            "pcd": 2604100
          },
          "tpe": 232,
          "dom": 1,
          "scp": 1920
        }
      ],
      "itms": [
        {
          "ref": "1.03.dom",
          "chg": 100,
          "line": 0,
          "sale": 1,
          "incl": false,
          "tran": 13,
          "serv": 6,
          "dbt": false,
          "adj": false
        }
      ],
      "invm": true,
      "dtl": true,
      "summ": false
    }
  ]
}
{% endhighlight %}

<h4>Response</h4>
The effects of domain and scope are seen in the tax type (<code>tid</code>) and tax level (<code>lvl</code>).

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
          "ref": "1.03.dom",
          "txs": [
            {
              "bill": true,
              "cmpl": true,
              "tm": 0,
              "calc": 2,
              "cat": "E-911 CHARGES",
              "cid": 7,
              "name": "E911 (Business)",
              "exm": 0,
              "lns": 0,
              "min": 0,
              "pcd": 5115900,
              "rate": 1,
              "sur": false,
              "tax": 0,
              "lvl": 1,
              "tid": 35
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 62.9,
              "calc": 1,
              "cat": "CONNECTIVITY CHARGES",
              "cid": 5,
              "name": "State Universal Service Fund",
              "exm": 37.1,
              "lns": 0,
              "min": 0,
              "pcd": 5115900,
              "rate": 0.0139,
              "sur": false,
              "tax": 0.8743099999999999,
              "lvl": 1,
              "tid": 13
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 0,
              "calc": 1,
              "cat": "SALES AND USE TAXES",
              "cid": 1,
              "name": "Sales Tax",
              "exm": 100,
              "lns": 0,
              "min": 0,
              "pcd": 5116000,
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
              "exm": 100,
              "lns": 0,
              "min": 0,
              "pcd": 5116000,
              "rate": 0.105,
              "sur": false,
              "tax": 0,
              "lvl": 1,
              "tid": 1
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 37.1,
              "calc": 1,
              "cat": "CONNECTIVITY CHARGES",
              "cid": 5,
              "name": "Fed USF Cellular",
              "exm": 62.9,
              "lns": 0,
              "min": 0,
              "pcd": 0,
              "rate": 0.195,
              "sur": false,
              "tax": 7.234500000000001,
              "lvl": 0,
              "tid": 55
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 0,
              "calc": 2,
              "cat": "REGULATORY CHARGES",
              "cid": 6,
              "name": "FCC Regulatory Fee (Wireless)",
              "exm": 100,
              "lns": 0,
              "min": 0,
              "pcd": 0,
              "rate": 0.0175,
              "sur": false,
              "tax": 0,
              "lvl": 0,
              "tid": 170
            },
            {
              "bill": false,
              "cmpl": true,
              "tm": 37.1,
              "calc": 1,
              "cat": "CONNECTIVITY CHARGES",
              "cid": 5,
              "name": "Telecommunications Relay Surcharge (Cellular)",
              "exm": 62.9,
              "lns": 0,
              "min": 0,
              "pcd": 0,
              "rate": 0.02289,
              "sur": false,
              "tax": 0.8492190000000001,
              "lvl": 0,
              "tid": 232
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

<h3>Tax Type Exemption Example 2 - Wildcard Tax Type with Scope All</h3>
This example demonstrates the use of the wildcard tax type (<code>tpe</code> and <code>dom</code> both are 0) to exempt all tax types at all levels (<code>scp</code> is 1920).  Update the scope (<code>scp</code>) to limit where the wildcard tax type is applied.

{% highlight json %}
{
  "cmpn": {
    "bscl": 1,
    "svcl": 0,
    "fclt": true,
    "frch": true,
    "reg": false
  },
  "inv": [
    {
      "bill": {
        "ctry": "USA",
        "st": "PR",
        "city": "Adjuntas",
        "zip": "00601",
        "int": true
      },
      "cust": 1,
      "lfln": false,
      "date": "2018-02-01T12:00:00Z",
      "exms": [
        {
          "loc": {
            "pcd": 5116000
          },
          "tpe": 0,
          "dom": 0,
          "scp": 1920
        }
      ],
      "itms": [
        {
          "ref": "1.04.wild",
          "chg": 100,
          "line": 0,
          "sale": 1,
          "incl": false,
          "tran": 13,
          "serv": 6,
          "dbt": false,
          "adj": false
        }
      ],
      "invm": true,
      "dtl": true,
      "summ": false
    }
  ]
}
{% endhighlight %}

<h4>Response</h4>
All taxes are exempt except for the non-billable tax (<code>bill</code> is <code>false</code>).

<div class="panel-group">
  <a data-toggle="collapse" href="#collapse2">View the Response JSON</a>
  <div id="collapse2" class="panel-collapse collapse">
    <div class="panel-body">
{% highlight json %}
{
  "inv": [
    {
      "itms": [
        {
          "ref": "1.04.wild",
          "txs": [
            {
              "bill": true,
              "cmpl": true,
              "tm": 0,
              "calc": 2,
              "cat": "E-911 CHARGES",
              "cid": 7,
              "name": "E911 (Business)",
              "exm": 0,
              "lns": 0,
              "min": 0,
              "pcd": 5115900,
              "rate": 1,
              "sur": false,
              "tax": 0,
              "lvl": 1,
              "tid": 35
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 0,
              "calc": 1,
              "cat": "CONNECTIVITY CHARGES",
              "cid": 5,
              "name": "State Universal Service Fund",
              "exm": 100,
              "lns": 0,
              "min": 0,
              "pcd": 5115900,
              "rate": 0.0139,
              "sur": false,
              "tax": 0,
              "lvl": 1,
              "tid": 13
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 0,
              "calc": 1,
              "cat": "SALES AND USE TAXES",
              "cid": 1,
              "name": "Sales Tax",
              "exm": 100,
              "lns": 0,
              "min": 0,
              "pcd": 5116000,
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
              "exm": 100,
              "lns": 0,
              "min": 0,
              "pcd": 5116000,
              "rate": 0.105,
              "sur": false,
              "tax": 0,
              "lvl": 1,
              "tid": 1              
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 0,
              "calc": 1,
              "cat": "CONNECTIVITY CHARGES",
              "cid": 5,
              "name": "Fed USF Cellular",
              "exm": 100,
              "lns": 0,
              "min": 0,
              "pcd": 0,
              "rate": 0.195,
              "sur": false,
              "tax": 0,
              "lvl": 0,
              "tid": 55
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 0,
              "calc": 2,
              "cat": "REGULATORY CHARGES",
              "cid": 6,
              "name": "FCC Regulatory Fee (Wireless)",
              "exm": 100,
              "lns": 0,
              "min": 0,
              "pcd": 0,
              "rate": 0.0175,
              "sur": false,
              "tax": 0,
              "lvl": 0,
              "tid": 170
            },
            {
              "bill": false,
              "cmpl": true,
              "tm": 37.1,
              "calc": 1,
              "cat": "CONNECTIVITY CHARGES",
              "cid": 5,
              "name": "Telecommunications Relay Surcharge (Cellular)",
              "exm": 62.9,
              "lns": 0,
              "min": 0,
              "pcd": 0,
              "rate": 0.02289,
              "sur": false,
              "tax": 0.8492190000000001,
              "lvl": 0,
              "tid": 232
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

<h3>Tax Type Exemption Example 3 - Wildcard Tax Type with Exclude Non-Billable</h3>
This example sets the wildcard tax type (<code>tep</code> and <code>dom</code> both 0) to exempt all tax types at all levels (<code>scp</code> is 1920), with the additional Exclude Non-Billable flag (<code>exnb</code>) set to <code>true</code>.  Update the scope (<code>scp</code>) to limit where the wildcard tax type is applied.

{% highlight json %}
{
  "cmpn": {
    "bscl": 1,
    "svcl": 0,
    "fclt": true,
    "frch": true,
    "reg": false
  },
  "inv": [
    {
      "bill": {
        "ctry": "USA",
        "st": "PR",
        "city": "Adjuntas",
        "zip": "00601",
        "int": true
      },
      "cust": 1,
      "lfln": false,
      "date": "2018-02-01T12:00:00Z",
      "exms": [
        {
          "loc": {
            "pcd": 5116000
          },
          "tpe": 0,
          "dom": 0,
          "scp": 1920,
          "exnb": true
        }
      ],
      "itms": [
        {
          "ref": "1.05.wild.nba",
          "chg": 100,
          "line": 0,
          "sale": 1,
          "incl": false,
          "tran": 13,
          "serv": 6,
          "dbt": false,
          "adj": false
        }
      ],
      "invm": true,
      "dtl": true,
      "summ": false
    }
  ]
}
{% endhighlight %}

<h4>Response</h4>
All taxes are exempt, including the non-billable tax (<code>bill</code> is <code>false</code>).

<div class="panel-group">
  <a data-toggle="collapse" href="#collapse3">View the Response JSON</a>
  <div id="collapse3" class="panel-collapse collapse">
    <div class="panel-body">
{% highlight json %}
{
  "inv": [
    {
      "itms": [
        {
          "ref": "1.05.wild.nba",
          "txs": [
            {
              "bill": true,
              "cmpl": true,
              "tm": 0,
              "calc": 2,
              "cat": "E-911 CHARGES",
              "cid": 7,
              "name": "E911 (Business)",
              "exm": 0,
              "lns": 0,
              "min": 0,
              "pcd": 5115900,
              "rate": 1,
              "sur": false,
              "tax": 0,
              "lvl": 1,
              "tid": 35
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 0,
              "calc": 1,
              "cat": "CONNECTIVITY CHARGES",
              "cid": 5,
              "name": "State Universal Service Fund",
              "exm": 100,
              "lns": 0,
              "min": 0,
              "pcd": 5115900,
              "rate": 0.0139,
              "sur": false,
              "tax": 0,
              "lvl": 1,
              "tid": 13
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 0,
              "calc": 1,
              "cat": "SALES AND USE TAXES",
              "cid": 1,
              "name": "Sales Tax",
              "exm": 100,
              "lns": 0,
              "min": 0,
              "pcd": 5116000,
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
              "exm": 100,
              "lns": 0,
              "min": 0,
              "pcd": 5116000,
              "rate": 0.105,
              "sur": false,
              "tax": 0,
              "lvl": 1,
              "tid": 1
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 0,
              "calc": 1,
              "cat": "CONNECTIVITY CHARGES",
              "cid": 5,
              "name": "Fed USF Cellular",
              "exm": 100,
              "lns": 0,
              "min": 0,
              "pcd": 0,
              "rate": 0.195,
              "sur": false,
              "tax": 0,
              "lvl": 0,
              "tid": 55
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 0,
              "calc": 2,
              "cat": "REGULATORY CHARGES",
              "cid": 6,
              "name": "FCC Regulatory Fee (Wireless)",
              "exm": 100,
              "lns": 0,
              "min": 0,
              "pcd": 0,
              "rate": 0.0175,
              "sur": false,
              "tax": 0,
              "lvl": 0,
              "tid": 170
            },
            {
              "bill": false,
              "cmpl": true,
              "tm": 0,
              "calc": 1,
              "cat": "CONNECTIVITY CHARGES",
              "cid": 5,
              "name": "Telecommunications Relay Surcharge (Cellular)",
              "exm": 100,
              "lns": 0,
              "min": 0,
              "pcd": 0,
              "rate": 0.02289,
              "sur": false,
              "tax": 0,
              "lvl": 0,
              "tid": 232
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

<h3>Tax Type Exemption Example 4 - Wildcard Tax Type with Exclude Non-Billable and No Force Level Exemptible</h3>
This example sets the wildcard tax type (<code>tep</code> and <code>dom</code> both 0) to exempt all tax types at all levels (<code>scp</code> is 1920), with the additional Exclude Non-Billable flag (<code>exnb</code>) set to <code>true</code>.  In addition, the Force Level Exemptible flag (<code>frc</code>) is set to <code>false</code>.  Update the scope (<code>scp</code>) to limit where the wildcard tax type is applied.

{% highlight json %}
{
  "cmpn": {
    "bscl": 1,
    "svcl": 0,
    "fclt": true,
    "frch": true,
    "reg": false
  },
  "inv": [
    {
      "bill": {
        "ctry": "USA",
        "st": "PR",
        "city": "Adjuntas",
        "zip": "00601",
        "int": true
      },
      "cust": 1,
      "lfln": false,
      "date": "2018-02-01T12:00:00Z",
      "exms": [
        {
          "frc": false,
          "loc": {
            "pcd": 5116000
          },
          "tpe": 0,
          "dom": 0,
          "scp": 1920,
          "exnb": true
        }
      ],
      "itms": [
        {
          "ref": "1.06.wild.nba.nofrc",
          "chg": 100,
          "line": 0,
          "sale": 1,
          "incl": false,
          "tran": 13,
          "serv": 6,
          "dbt": false,
          "adj": false
        }
      ],
      "invm": true,
      "dtl": true,
      "summ": false
    }
  ]
}
{% endhighlight %}

<h4>Response</h4>
All taxes are exempt with the exception of the taxes that are not level exemptible (in this example, all of the Federal level taxes (<code>lvl</code> is 0)).

<div class="panel-group">
  <a data-toggle="collapse" href="#collapse4">View the Response JSON</a>
  <div id="collapse4" class="panel-collapse collapse">
    <div class="panel-body">
{% highlight json %}
{
  "inv": [
    {
      "itms": [
        {
          "ref": "1.06.wild.nba.nofrc",
          "txs": [
            {
              "bill": true,
              "cmpl": true,
              "tm": 0,
              "calc": 2,
              "cat": "E-911 CHARGES",
              "cid": 7,
              "name": "E911 (Business)",
              "exm": 0,
              "lns": 0,
              "min": 0,
              "pcd": 5115900,
              "rate": 1,
              "sur": false,
              "tax": 0,
              "lvl": 1,
              "tid": 35
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 0,
              "calc": 1,
              "cat": "CONNECTIVITY CHARGES",
              "cid": 5,
              "name": "State Universal Service Fund",
              "exm": 100,
              "lns": 0,
              "min": 0,
              "pcd": 5115900,
              "rate": 0.0139,
              "sur": false,
              "tax": 0,
              "lvl": 1,
              "tid": 13
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 0,
              "calc": 1,
              "cat": "SALES AND USE TAXES",
              "cid": 1,
              "name": "Sales Tax",
              "exm": 100,
              "lns": 0,
              "min": 0,
              "pcd": 5116000,
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
              "exm": 100,
              "lns": 0,
              "min": 0,
              "pcd": 5116000,
              "rate": 0.105,
              "sur": false,
              "tax": 0,
              "lvl": 1,
              "tid": 1
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 37.1,
              "calc": 1,
              "cat": "CONNECTIVITY CHARGES",
              "cid": 5,
              "name": "Fed USF Cellular",
              "exm": 62.9,
              "lns": 0,
              "min": 0,
              "pcd": 0,
              "rate": 0.195,
              "sur": false,
              "tax": 7.234500000000001,
              "lvl": 0,
              "tid": 55
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 100,
              "calc": 2,
              "cat": "REGULATORY CHARGES",
              "cid": 6,
              "name": "FCC Regulatory Fee (Wireless)",
              "exm": 0,
              "lns": 0,
              "min": 0,
              "pcd": 0,
              "rate": 0.0175,
              "sur": false,
              "tax": 0.0175,
              "lvl": 0,
              "tid": 170
            },
            {
              "bill": false,
              "cmpl": true,
              "tm": 37.1,
              "calc": 1,
              "cat": "CONNECTIVITY CHARGES",
              "cid": 5,
              "name": "Telecommunications Relay Surcharge (Cellular)",
              "exm": 62.9,
              "lns": 0,
              "min": 0,
              "pcd": 0,
              "rate": 0.02289,
              "sur": false,
              "tax": 0.8492190000000001,
              "lvl": 0,
              "tid": 232
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
  <li class="previous"><a href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/category-exemption/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/inter-intrastate/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>