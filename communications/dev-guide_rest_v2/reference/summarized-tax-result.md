---
layout: page
title:  Chapter 5.1.20 - Summarized Tax Result
product: communications
doctype: comms_rest_v2_dev_guide
chapter: reference
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/bridge-participant-result/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/reference/commit-request/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

<h3>Summarized Tax Result</h3>

The <code>SummarizedTax</code> object contains the <b>tax data</b> for summarized invoice taxes:

<div class="mobile-table">
  <table class="styled-table">
    <thead>
      <tr>
        <th>Key</th>
        <th>Value</th>
      </tr>
    </thead>
    <tbody>
      <tr>
            <td><code>max</code></td>
            <td><code>[double]</code> Max Base
            <br/>
            The maximum base for the tax bracket
            </td>
        </tr>
        <tr>
            <td><code>min</code></td>
            <td><code>[double]</code> Min Base
            <br/>
            The minimum base for the tax bracket
            </td>
        </tr>
        <tr>
            <td><code>tchg</code></td>
            <td><code>[double]</code> Total Charge
            <br/>
            The total charge amount for the invoice
            </td>
        </tr>
        <tr>
            <td><code>calc</code></td>
            <td><code>[int]</code> Calculation Type
            <br/>
            Indicates how the tax is calculated
            <ul class="dev-guide-list">
                <li><code>1</code> <b>Rate</b>: Taxable Measure is multiplied by Rate</li>
                <li><code>2</code> <b>Fixed</b>: Fixed taxes represent a fixed tax that applies to the product being taxed</li>
                <li><code>3</code> <b>PerMinute</b>: Number of Minutes is multiplied by Rate</li>
                <li><code>4</code> <b>PerLine</b>: Number of Lines is multiplied by Rate</li>
                <li><code>5</code> <b>SelfTaxingRate</b>: Taxable Measure is multiplied by Self-Taxing Rate</li>
                <li><code>6</code> <b>PerBracket</b>: Number of Lines is multiplied by Rate based on tax bracket for line count</li>
                <li><code>7</code> <b>FixedOnTier</b>: Sale Amount is multiplied by Rate based on tax tier for sale amount</li>
            </ul>
            </td>
        </tr>
        <tr>
            <td><code>cat</code></td>
            <td><code>[string]</code> Tax Category Name</td>
        </tr>
        <tr>
            <td><code>cid</code></td>
            <td><code>[int]</code> Tax Category ID</td>
        </tr>
        <tr>
            <td><code>name</code></td>
            <td><code>[string]</code> Tax Name</td>
        </tr>
        <tr>
            <td><code>exm</code></td>
            <td><code>[double]</code> Exempt Sale Amount</td>
        </tr>
        <tr>
            <td><code>lns</code></td>
            <td><code>[int]</code> Number of lines taxed</td>
        </tr>
        <tr>
            <td><code>pcd</code></td>
            <td><code>[int]</code> PCode representing reporting tax jurisdiction</td>
        </tr>
        <tr>
            <td><code>rate</code></td>
            <td><code>[double]</code> Applicable tax rate</td>
        </tr>
        <tr>
            <td><code>sur</code></td>
            <td><code>[bool]</code> Surcharge
            <br/>
            Indicates if this tax is a surcharge.
            <ul class="dev-guide-list">
                <li><code>true</code>: Surcharge rules apply to this tax</li>
                <li><code>false</code>: Tax is not a surcharge</li>
            </ul>
            </td>
        </tr>
        <tr>
            <td><code>tax</code></td>
            <td><code>[double]</code> Summarized Tax Amount</td>
        </tr>
        <tr>
            <td><code>lvl</code></td>
            <td><code>[int]</code> Tax Level
            <br/>
            Indicates the jurisdiction level of the tax
            <ul class="dev-guide-list">
                <li><code>0</code>: Federal</li>
                <li><code>1</code>: State</li>
                <li><code>2</code>: County</li>
                <li><code>3</code>: City</li>
                <li><code>4</code>: Unincorporated</li>
            </ul>
            </td>
        </tr>
        <tr>
            <td><code>tid</code></td>
            <td><code>[int]</code> Tax Type ID</td>
        </tr>
    </tbody>
  </table>
</div>
<br>

<h3>Example</h3>

{% highlight json %}
"summ": [
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
  }
]
{% endhighlight %}

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/bridge-participant-result/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/reference/commit-request/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>