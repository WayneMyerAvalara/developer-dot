---
layout: page
title: Chapter 4.3.4.1 - Category Exemptions
product: communications
doctype: comms_rest_v2_dev_guide
chapter: customizing-transactions
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/exemption/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/tax-type-exemption/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

A category <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/exemption/">exemption</a> allows you to exempt taxes based on a category ID (<code>cat</code>) for a <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/location/">jurisdiction</a> (<code>loc</code>).  The category exemption is set on the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/invoice/">invoice</a> and applies to all <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/line-item/">line items</a> included in the invoice.  

<h3>Categories</h3>
Use the category wildcard (set <code>cat</code> to <code>0</code>) to exempt all categories.

A list of tax types is available in the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/getting-started/environments-endpoints#lookups"><code>/api/v2/afc/taxtype/{taxType}</code> Lookup endpoint</a>.  Pass "*" in <code>{taxType}</code> to return all tax types.

<h4>Category List</h4>
<div class="mobile-table">
  <table class="styled-table">
    <thead>
      <tr>
        <th>Category ID</th>
        <th>Name</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
        <tr>
            <td>0</td>
            <td>Wildcard</td>
            <td>Value used to select all categories</td>
        </tr>
        <tr>
            <td>1</td>
            <td>Sales and Use Taxes</td>
            <td>Includes a variety of sales, district, transit, consumer use, vendor use, rental, e-waste, and special or improvement district taxes. Includes Canadian tax types</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Business Taxes</td>
            <td>Typically imposed for the right to do business within a jurisdiction. Includes license taxes, business & occupation taxes, and franchise taxes</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Gross Receipts Taxes</td>
            <td>Include Carrier and Statutory Gross Receipts taxes as well as several state specific surcharges and taxes</td>
        </tr>
        <tr>
            <td>4</td>
            <td>Excise Taxes</td>
            <td>Consumer or seller excise taxes, including those specific to communications services as well as those that apply broadly</td>
        </tr>
        <tr>
            <td>5</td>
            <td>Connectivity Charges</td>
            <td>Covers federal and state universal service funds, high cost funds, and telecommunications relay service and surcharges</td>
        </tr>
        <tr>
            <td>6</td>
            <td>Regulatory Charges</td>
            <td>Includes Public Utility Commission Fees and FCC Regulatory Fees. Typically funds the agencies that impose them</td>
        </tr>
        <tr>
            <td>7</td>
            <td>E-911 Charges</td>
            <td>Covers a variety of enhanced 911 and poison control funds</td>
        </tr>
        <tr>
            <td>8</td>
            <td>Utility User Taxes</td>
            <td>Taxes passed by states where utilities are believed to be intangible. Applied in place of sales taxes and often at higher rates</td>
        </tr>
        <tr>
            <td>9</td>
            <td>Right of Way Fees</td>
            <td>Covers taxes to maintain telecommunications infrastructure and municipal right of ways</td>
        </tr>
        <tr>
            <td>10</td>
            <td>Communications Services Tax</td>
            <td>Includes taxes related to satellite, wireless, cable, and non-facilities</td>
        </tr>
        <tr>
            <td>11</td>
            <td>Cable Regulatory Fees</td>
            <td>Includes FCC regulatory fees, franchise taxes, and public education and government (PEG) access fees remitted by cable providers</td>
        </tr>
        <tr>
            <td>12</td>
            <td>Reserved</td>
            <td>Reserved tax types are created for unique customer situations or are for AFC development use</td>
        </tr>
        <tr>
            <td>13</td>
            <td>Value Added Taxes</td>
            <td>Taxes payable on the consumption of goods and services, general in nature, neutral, and exactly proportional to the price of the goods and services on which they are computed</td>
        </tr>
    </tbody>
  </table>
</div>

<h3>Exemption fields</h3>
Exemption fields used for category exemptions and default values for the applicable fields:
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
            <td><code>cat</code></td>
            <td>Category ID</td>
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
            <td><code>scp</code></td>
            <td>Scope</td>
            <td><b>State + County + City</b> if State or lower jurisdiction
            <br/>
            <b>All</b> if Country level jurisdiction
            </td>
        </tr>
        <tr>
            <td><code>dom</code></td>
            <td>Domain</td>
            <td><b>State</b> if State or lower jurisdiction
            <br/>
            <b>Federal</b> if Country level jurisdiction</td>
        </tr>
    </tbody>
  </table>
</div>

For more information about fields, see <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/exemption/">Exemptions</a>.

<h3>Category Exemption Example 1 - Scope</h3>
This example demonstrates the use of scope (<code>scp</code>), set to a different combination for each exemption.

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
          "cat": 7,
          "scp": 256
        },
        {
          "loc": {
            "pcd": 5116000
          },
          "cat": 1,
          "scp": 1792
        },
        {
          "loc": {
            "pcd": 5116000
          },
          "cat": 5,
          "scp": 128
        },
        {
          "loc": {
            "pcd": 5116000
          },
          "cat": 6,
          "scp": 1792
        }
      ],
      "itms": [
        {
          "ref": "2.02.scope",
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
The effects of scope are apparent based the category ID (<code>cid</code>) and tax level (<code>lvl</code>)

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
          "ref": "2.02.scope",
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
              "tm": 100,
              "calc": 2,
              "cat": "REGULATORY CHARGES",
              "cid": 6,
              "name": "FCC Regulatory Fee (Wireless)",
              "exm": 0,
              "lns": 0,
              "min": 0,
              "pcd": 0,
              "rate": 0.016667,
              "sur": false,
              "tax": 0.016667,
              "lvl": 0,
              "tid": 170
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

<h3>Category Exemption Example 2 - Domain</h3>
This example demonstrates the use of domain (<code>dom</code>), set to a different domain - in combination with scope - for each exemption.

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
          "cat": 7,
          "dom": 0
        },
        {
          "loc": {
            "pcd": 5116000
          },
          "cat": 1,
          "dom": 1,
          "scp": 1792
        },
        {
          "loc": {
            "pcd": 0
          },
          "cat": 5,
          "dom": 3,
          "scp": 128
        },
        {
          "loc": {
            "pcd": 2604100
          },
          "cat": 6,
          "dom": 1,
          "scp": 128
        }
      ],
      "itms": [
        {
          "ref": "2.03.dom",
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
The effects of domain are apparent based the category ID (<code>cid</code>) and tax level (<code>lvl</code>).

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
          "ref": "2.03.dom",
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
              "tm": 100,
              "calc": 2,
              "cat": "REGULATORY CHARGES",
              "cid": 6,
              "name": "FCC Regulatory Fee (Wireless)",
              "exm": 0,
              "lns": 0,
              "min": 0,
              "pcd": 0,
              "rate": 0.016667,
              "sur": false,
              "tax": 0.016667,
              "lvl": 0,
              "tid": 170
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

<h3>Category Exemption Example 3 - Wildcard Category with Scope All</h3>
This example demonstrates the use of the wildcard category (<code>cat</code> is 0) to exempt all categories at all levels (<code>scp</code> is 1920).  Update the scope (<code>scp</code>) or include a domain (<code>dom</code>) to limit where the wildcard category is applied.

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
          "cat": 0,
          "dom": 0,
          "scp": 1920
        }
      ],
      "itms": [
        {
          "ref": "2.04.wild",
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
  <a data-toggle="collapse" href="#collapse3">View the Response JSON</a>
  <div id="collapse3" class="panel-collapse collapse">
    <div class="panel-body">
{% highlight json %}
{
  "inv": [
    {
      "itms": [
        {
          "ref": "2.04.wild",
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

<h3>Category Exemption Example 4 - Wildcard Category with Exclude Non-Billable</h3>
This example sets the wildcard category (<code>cat</code> is 0) to exempt all categories at all levels (<code>scp</code> is 1920), with the additional Exclude Non-Billable flag (<code>exnb</code>) set to <code>true</code>.  Update the scope (<code>scp</code>) or the domain (<code>dom</code>) to limit where the wildcard category is applied.

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
          "cat": 0,
          "dom": 0,
          "scp": 1920,
          "exnb": true
        }
      ],
      "itms": [
        {
          "ref": "2.05.wild.nba",
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
  <a data-toggle="collapse" href="#collapse4">View the Response JSON</a>
  <div id="collapse4" class="panel-collapse collapse">
    <div class="panel-body">
{% highlight json %}
{
  "inv": [
    {
      "itms": [
        {
          "ref": "2.05.wild.nba",
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

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/exemption/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/tax-type-exemption/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>