---
layout: page
title: Chapter 4.3.4 - Exemptions
product: communications
doctype: comms_rest_v2_dev_guide
chapter: customizing-transactions
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/jurisdiction-determination/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/category-exemption/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

<a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/exemption/">Exemptions</a> remove tax liability from a jurisdiction.  An exemption should be used when you have an exemption certificate that allows you to be exempted from certain taxes for a given jurisdiction or group of jurisdictions.

Communications REST v2 provides different types of exemptions:
<div class="mobile-table">
  <table class="styled-table">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/category-exemption/">Category Exemption</a></td>
        <td>Exemptions applied by tax category
        <br/>
        Provide the Category ID (<code>cat</code>) and the location (<code>loc</code>)</td>
      </tr>
      <tr>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/tax-type-exemption/">Tax Type Exemption</a></td>
        <td>Exemptions applied to a specific tax type, tax level, and jurisdiction (if needed)
        <br/>
        Provide the tax type (<code>tpe</code>) and tax level (<code>lvl</code>).  Specify the location (<code>loc</code>) if applicable to a specific jurisdiction.</td>
      </tr>
    </tbody>
  </table>
</div>
<br/>
<a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/category-exemption/">Category exemptions</a> and <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/tax-type-exemption/">tax type exemptions</a> can’t both be included within the same single exemption, but can be applied simultaneously within a list of exemptions.

For more information, see <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/exemption/">Exemptions</a>.

<h3>Exemption fields</h3>
Exemption fields by exemption type:
<div class="mobile-table">
  <table class="styled-table">
    <thead>
      <tr>
        <th>Field</th>
        <th>Category Exemption</th>
        <th>Tax Type Exemption</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td>Tax Type (<code>tpe</code>)</td>
          <td></td>
          <td>X</td>
        </tr>
        <tr>
            <td>Category ID (<code>cat</code>)</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr>
            <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/location/">Jurisdiction</a> (<code>loc</code>)</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr>
            <td><a class="dev-guide-link" href="#non-bill">Exempt Non-Billable</a> (<code>exnb</code>)</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr>
            <td><a class="dev-guide-link" href="#scope">Scope</a> (<code>scp</code>)</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr>
            <td><a class="dev-guide-link" href="#domain">Domain</a> (<code>dom</code>)</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr>
          <td><a class="dev-guide-link" href="#frc">Force Level Exemptible</a> (<code>frc</code>)</td>
          <td></td>
          <td>X</td>
        </tr>
    </tbody>
  </table>
</div>

For more information, see <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/exemption/">Exemptions</a>.
<br/>
<h4 id="scope">Scope</h4>
Scope (<code>scp</code>) defines the tax levels in which the taxes will be considered as candidates for exemption.  The field is a combination of one or more of these values (add the appropriate values together):
<ul class="dev-guide-list">
    <li><code>128</code>: Federal</li>
    <li><code>256</code>: State</li>
    <li><code>512</code>: County</li>
    <li><code>1024</code>: Local</li>
</ul>
For example: 
<div class="mobile-table">
  <table class="styled-table">
    <thead>
      <tr>
        <th>Scope</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
        <tr>
            <td>1920</td>
            <td>All (Federal + State + County + Local)</td>
        </tr>
        <tr>
            <td>1792</td>
            <td>State + County + Local</td>
        </tr>
        <tr>
            <td>384</td>
            <td>Federal + State</td>
        </tr>
        <tr>
            <td>128</td>
            <td>Federal</td>
        </tr>
    </tbody>
  </table>
</div>
<br/>
<h4 id="domain">Domain</h4>
Domain (<code>dom</code>) defines the level at which the taxing jurisdiction much match the exemption jurisdiction.  The domain does not need to correlate to the tax level of the tax being exempted.

The domain is set to one of these values:
<ul class="dev-guide-list">
    <li><code>0</code>: Federal</li>
    <li><code>1</code>: State</li>
    <li><code>2</code>: County</li>
    <li><code>3</code>: City</li>
</ul>

For example:
<div class="mobile-table">
  <table class="styled-table">
    <thead>
      <tr>
        <th>Domain</th>
        <th>Exemption Location</th>
        <th>Taxing Jurisdiction</th>
        <th>Result</th>
      </tr>
    </thead>
    <tbody>
        <tr>
            <td>Federal (<code>0</code>)</td>
            <td>New York, NY, USA</td>
            <td>San Francisco, CA, USA</td>
            <td>Exemption applied 
            <br/>
            New York and San Francisco are in the same country so they match at the federal level</td>
        </tr>
        <tr>
            <td>Federal (<code>0</code>)</td>
            <td>New York, NY, USA</td>
            <td>Toronto, ON, Canada</td>
            <td>Exemption not applied
            <br/>
            New York and Toronto are in different countries so they don't match at the federal level</td>
        </tr>
        <tr>
            <td>State (<code>1</code>)</td>
            <td>New York, NY</td>
            <td>Ithaca, NY</td>
            <td>Exemption applied
            <br/>
            New York and Ithaca are in the same state so they match at the state level</td>
        </tr>
        <tr>
            <td>State (<code>1</code>)</td>
            <td>New York, NY</td>
            <td>San Francisco, CA, USA</td>
            <td>Exemption not applied
            <br/>
            New York and San Francisco are in different states so they don't match at the state level</td>
        </tr>
        <tr>
            <td>County (<code>2</code>)</td>
            <td>Fort Lauderdale, Broward County, FL</td>
            <td>Hollywood, Broward County, FL</td>
            <td>Exemption applied
            <br/>
            Fort Lauderdale and Hollywood are in the same county so they match at the county level</td>
        </tr>
        <tr>
            <td>County (<code>2</code>)</td>
            <td>Fort Lauderdale, Broward County, FL</td>
            <td>Miami, Dade County, FL</td>
            <td>Exemption not applied
            <br/>
            Fort Lauderdale and Miami are in different counties so they don't match at the county level</td>
        </tr>
        <tr>
            <td>Local (<code>3</code>)</td>
            <td>Fort Lauderdale, Broward County, FL</td>
            <td>Port Everglades, Broward County, FL</td>
            <td>Exemption applied
            <br/>
            Port Everglades is part of Fort Lauderdale and they have the same PCode so they match at the local level</td>
        </tr>
        <tr>
            <td>Local (<code>3</code>)</td>
            <td>Fort Lauderdale, Broward County, FL</td>
            <td>Hollywood, Broward County, FL</td>
            <td>Exemption not applied
            <br/>
            Fort Lauderdale and Hollywood are different local jurisdictions so they don't match at the local level</td>
        </tr>
    </tbody>
  </table>
</div>
<br/>
<h4 id="non-bill">Exempt Non-Billable</h4>
Exempt Non-Billable (<code>exnb</code>) defines if non-billable taxes can be exempted.
<ul class="dev-guide-list">
    <li><code>true</code>: Non-billable taxes can be exempted</li>
    <li><code>false</code>: Non-billable taxes cannot be exempted</li>
</ul>

<h4 id="frc">Force Level Exemptible</h4>
The Force Level Exemptible flag (<code>frc</code>) override level exempt flag on wildcard exemptions
<ul class="dev-guide-list">
  <li><code>true</code>: Wildcard exemptions exempt taxes tagged as not level exemptible</li>
  <li><code>false</code>: Wildcard exemptions exclude taxes tagged as not level exemptible from consideration</li>
</ul>

<h3 id="cat">Exemption Example</h3>
This example demonstrates:
<ul class="dev-guide-list">
  <li>"Sales and Use" category (<code>cat</code> is 1) exemption within North Carolina</li>
  <li>Tax type 44 (<code>tpe</code> is 44) exempted with a domain of State(<code>dom</code> is 1)</li>
</ul>

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
        "st": "NC",
        "city": "Durham",
        "zip": "27701",
        "int": true
      },
      "cust": 1,
      "lfln": false,
      "date": "2018-02-01T12:00:00Z",
      "exms": [
        {
          "loc": {
            "ctry": "USA",
            "st": "NC"
          },
          "cat": 1
        },
        {
          "loc": {
            "pcd": 2757800
          },
          "tpe": 44,
          "dom": 1
        }
      ],
      "itms": [
        {
          "ref": "Exemption Example",
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
Tax Type (<code>tid</code>) 231 is exempted because of the category exemption.  Tax Type (<code>tid</code>) 44 is exempted because of the tax type exemption.

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
          "ref": "Exemption Example",
          "txs": [
            {
              "bill": true,
              "cmpl": true,
              "tm": 0,
              "calc": 1,
              "cat": "SALES AND USE TAXES",
              "cid": 1,
              "name": "North Carolina Telecommunications Sales Tax",
              "exm": 100,
              "lns": 0,
              "min": 0,
              "pcd": 2716900,
              "rate": 0.07,
              "sur": false,
              "tax": 0,
              "lvl": 1,
              "tid": 231
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 0,
              "calc": 2,
              "cat": "CONNECTIVITY CHARGES",
              "cid": 5,
              "name": "Telecom Relay Surcharge (Wireless)",
              "exm": 0,
              "lns": 0,
              "min": 0,
              "pcd": 2716900,
              "rate": 0.1,
              "sur": true,
              "tax": 0.1,
              "lvl": 1,
              "tid": 175
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 0,
              "calc": 2,
              "cat": "E-911 CHARGES",
              "cid": 7,
              "name": "E911 (Wireless)",
              "exm": 0,
              "lns": 0,
              "min": 0,
              "pcd": 2716900,
              "rate": 0.6,
              "sur": false,
              "tax": 0,
              "lvl": 1,
              "tid": 44
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

See <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/category-exemption/">Category Exemptions</a> and <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/tax-type-exemption/">Tax Type Exemptions</a> for more examples.

<h4>Note</h4>
We recommend using a <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/client-profiles/">client profile</a> with an exemption file included were possible.  Using a client profile results in better performance from the Tax Engine because your exemption settings are cached <i>before</i> tax calculation begins.

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/jurisdiction-determination/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/category-exemption/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>