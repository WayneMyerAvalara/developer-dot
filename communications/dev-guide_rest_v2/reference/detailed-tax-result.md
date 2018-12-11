---
layout: page
title:  Chapter 5.1.18 - Detailed Tax Result
product: communications
doctype: comms_rest_v2_dev_guide
chapter: reference
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/line-item-result/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/reference/bridge-participant-result/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

<h3>Detailed Tax Result</h3>

The <code>Tax</code> object contains the <b>taxes</b> generated for each <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/line-item/">line item</a>:

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
            <td><code>bill</code></td>
            <td><code>[bool]</code> Billable
            <br/>
            Indicates if the tax is billable to <b>your</b> customer.
            <ul class="dev-guide-list">
                <li><code>true</code>: Standard billable tax</li>
                <li><code>false</code>: Non-billable tax that cannot be billed to the customer</li>
            </ul>
            </td>
        </tr>
        <tr>
            <td><code>cmpl</code></td>
            <td><code>[bool]</code> Compliance
            <br/>
            Indicates if the tax is to be reported to the jurisdiction.
            <ul class="dev-guide-list">
                <li><code>true</code>: Standard compliance tax</li>
                <li><code>false</code>: Non-compliance tax that should not be reported to the jurisdiction</li>
            </ul>
            </td>
        </tr>
        <tr>
            <td><code>tm</code></td>
            <td><code>[double]</code> Taxable Measure
            <br/>
            The basis for calculation of percentage-based taxes.  Simple transactions result in a taxable measure equal to the sale price.  However, tax-on-tax, caps, thresholds, tiers, and taxable amount modifiers can all result in taxable measures that are greater than or less than the sale price.
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
            <td><code>min</code></td>
            <td><code>[double]</code> Amount of minutes taxed</td>
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
            <td><code>[double]</code> Tax Amount</td>
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
  }
]
{% endhighlight %}

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/line-item-result/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/reference/bridge-participant-result/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>