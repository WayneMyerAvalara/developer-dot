---
layout: page
title:  Chapter 5.1.9 - Exemption
product: communications
doctype: comms_rest_v2_dev_guide
chapter: reference
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/exclusion/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/reference/tax-bracket/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

<h3>Exemption</h3>

The <code>Exemption</code> object allows you to specify <b>exemptions</b> for the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/invoice/">Invoice</a>:

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
        <td><code>frc</code></td>
        <td><code>[bool]</code> Force
          <br/>
          Override level exempt flag on tax type wildcard exemptions
          <ul class="dev-guide-list">
            <li><code>true</code>: Tax Type wildcard exemptions exempt taxes tagged as not level exemptible</li>
            <li><code>false</code>: Tax Type wildcard exemptions exclude taxes tagged as not level exemptible from consideration</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td><code>loc</code></td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/location/"><code>[Location]</code></a> <span class="t5">required</span> Location for the exemption to be applied. Match is at the level specified by domain.
        <br>
        There are several ways to input location information. See <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/location/">Location</a> for more information</td>
      </tr>
      <tr>
        <td><code>tpe</code></td>
        <td><code>[int]</code> Tax Type ID
          <br/>
          Tax Type to exempt.  <b>Tax type</b> exemptions and <b>Category</b> exemptions are mutually exclusive within a single exemption but can occur simultaneously on the same invoice
        </td>
      </tr>
      <tr>
        <td><code>lvl</code></td>
        <td><code>[int]</code> Tax Level ID
          <br/>
          <b>Obsolete</b> - provided for legacy support only.  Use <b>Domain</b> (<code>dom</code>) and <b>Scope</b> (<code>scp</code>) instead
        </td>
      </tr>
      <tr>
        <td><code>cat</code></td>
        <td><code>[int]</code> Tax Category ID
        <br/>
        Tax Category to exempt.  <b>Tax type</b> exemptions and <b>Category</b> exemptions are mutually exclusive within a single exemption but can occur simultaneously on the same invoice
        <ul class="dev-guide-list">
            <li><code>0</code>: No Category Description</li>
            <li><code>1</code>: Sales and Use Taxes</li>
            <li><code>2</code>: Business Taxes</li>
            <li><code>3</code>: Gross Receipts Taxes</li>
            <li><code>4</code>: Excise Taxes</li>
            <li><code>5</code>: Connectivity Charges</li>
            <li><code>6</code>: Regulatory Charges</li>
            <li><code>7</code>: E-911 Charges</li>
            <li><code>8</code>: Utility User Taxes</li>
            <li><code>9</code>: Right of Way Fees</li>
            <li><code>10</code>: Communications Services Tax</li>
            <li><code>11</code>: Cable Regulatory Fees</li>
            <li><code>12</code>: Reserved</li>
            <li><code>13</code>: Value Added Taxes</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td><code>dom</code></td>
        <td><code>[int]</code> Exemption Domain
          <br/>
          The jurisdiction level in which the exemption jurisdiction must match the taxing jurisdiction
          <ul class="dev-guide-list">
            <li><code>0</code>: Federal</li>
            <li><code>1</code>: State</li>
            <li><code>2</code>: County</li>
            <li><code>3</code>: City</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td><code>scp</code></td>
        <td><code>[int]</code> Exemption Scope
          <br/>
          Defines the tax levels in which the taxes will be considered as candidates for exemption.
          <br/>
          <br/>
          Combination of one or more of these values (add the appropriate values together):
          <ul class="dev-guide-list">
            <li><code>128</code>: Federal</li>
            <li><code>256</code>: State</li>
            <li><code>512</code>: County</li>
            <li><code>1024</code>: Local</li>
          </ul>
          For example: To exempt all, use <code>1920</code> (Federal + State + County + Local)
        </td>
      </tr>
      <tr>
        <td><code>exnb</code></td>
        <td><code>[bool]</code> Exempt Non-billable
          <br/>
          Determines if non-billable taxes are to be considered as candidates for exemption
          <ul class="dev-guide-list">
            <li><code>true</code>: Non-billable taxes can be exempted</li>
            <li><code>false</code>: Non-billable taxes cannot be exempted</li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
</div>
<br>

<h3>Example</h3>

{% highlight json %}
"exms": [
  {
    "frc": true,
    "loc": {
      // Location
    },
    "tpe": 1,
    "lvl": 0,
    "cat": 0,
    "dom": 3,
    "scp": 1792,
    "exnb": false,
  }
]
{% endhighlight %}

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/exclusion/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/reference/tax-bracket/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>