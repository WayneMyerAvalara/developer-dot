---
layout: page
title:  Chapter 5.4.4 - TS Pair Data
product: communications
doctype: comms_rest_v2_dev_guide
chapter: reference
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/tax-type-data/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
</ul>

<h3>TS Pair Data</h3>

The <code>TSPairData</code> object contains a list of <b>transaction/service pair</b> (T/S Pair) information:

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
          <td><code>TransactionType</code></td>
          <td><code>[int]</code> Transaction Type ID</td>
        </tr>
        <tr>
          <td><code>ServiceType</code></td>
          <td><code>[int]</code> Service Type ID</td>
        </tr>
        <tr>
          <td><code>MarketType</code></td>
          <td><code>[int]</code> Market Type ID
          <br/>
          <ul class="dev-guide-list">
            <li><code>1</code>: Long Distance</li>
            <li><code>2</code>: Wireless</li>
            <li><code>3</code>: Local</li>
            <li><code>4</code>: Sales & Use</li>
            <li><code>5</code>: International</li>
            <li><code>6</code>: Core</li>
            <li><code>7</code>: VoIP</li>
            <li><code>8</code>: TV</li>
            <li><code>9</code>: Natural Gas</li>
            <li><code>10</code>: Satellite</li>
          </ul> 
          </td>
        </tr>
        <tr>
          <td><code>InterfaceType</code></td>
          <td><code>[int]</code> Interface ID
          <ul class="dev-guide-list">
            <li><code>1</code>: Telecom</li>
            <li><code>2</code>: SAU</li>
            <li><code>3</code>: Both (Telecom and SAU)</li>
          </ul>
          </td>
        </tr>
        <tr>
          <td><code>InputType</code></td>
          <td><code>[int]</code> Input Type ID
          <br/>
          The Input Type ID defines the input fields (charge, lines, locations, and minutes) required when using the transaction/service pair.
          <ul class="dev-guide-list">
            <li><code>0</code>: None.  Tax is based per invoice per account per billing cycle.  Taxable amount or numbers of lines are irrelevant for the transaction/service pair.</li>
            <li><code>1</code>: Charge (<code>chg</code>)</li>
            <li><code>2</code>: Lines (<code>line</code>)</li>
            <li><code>4</code>: Locations (<code>loc</code>)</li>
            <li><code>8</code>: Minutes (<code>min</code>)</li>
            <li><code>9</code>: Charge and Minutes (<code>chg</code> and <code>min</code>)</li>
            <li><code>11</code>: Charge, Lines, and Minutes (<code>chg</code>, <code>line</code>, and <code>min</code>)</li>
            <li><code>15</code>: Charge, Lines, Locations, and Minutes (<code>chg</code>, <code>line</code>, <code>loc</code>, and <code>min</code>)</li>
          </ul>
          </td>
        </tr>
        <tr>
          <td><code>IsBundle</code></td>
          <td><code>[bool]</code> Bundled Transaction/Service Pair
          <br/>
          Indicates if the transaction/service pair is part of a <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/account-customizations/">bundle file</a>
          <ul class="dev-guide-list">
            <li><code>true</code>: T/S Pair is included in the client profile <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/account-customizations/">bundle file</a></li>
            <li><code>false</code>: T/S Pair is not a bundled T/S Pair</li>
          </ul>
          </td>
        </tr>
        <tr>
          <td><code>TransactionDescription</code></td>
          <td><code>[string]</code> Transaction Type Description</td>
        </tr>
        <tr>
          <td><code>ServiceDescription</code></td>
          <td><code>[string]</code> Service Type Description</td>
        </tr>
        <tr>
          <td><code>TSPairDescription</code></td>
          <td><code>[string]</code> Transaction/Service Type Description</td>
        </tr>
    </tbody>
  </table>
</div>
<br>

<h3>Example</h3>

{% highlight json %}
[
  {
    "TransactionType": 1,
    "ServiceType": 1,
    "MarketType": 1,
    "InterfaceType": 1,
    "InputType": 9,
    "IsBundle": false,
    "TransactionDescription": "Interstate",
    "ServiceDescription": "Toll",
    "TSPairDescription": "Interstate/Toll"
  }
]
{% endhighlight %}

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/tax-type-data/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
</ul>