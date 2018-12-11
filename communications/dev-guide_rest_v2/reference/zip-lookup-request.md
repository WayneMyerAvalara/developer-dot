---
layout: page
title:  Chapter 5.3.1 - Zip Lookup Request
product: communications
doctype: comms_rest_v2_dev_guide
chapter: reference
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/commit-response/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/reference/zip-lookup-result/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

<h3>Zip Lookup Request</h3>

The <code>zipLookupRequest</code> object contains the <b>location data</b> used as input for searching jurisdiction matches:

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
            <td><code>CountryISO</code></td>
            <td><code>[string]</code> Country ISO
            <br/>
            3-character country ISO code
            </td>
        </tr>
        <tr>
            <td><code>State</code></td>
            <td><code>[string]</code> State
            <br/>
            2-character state abbreviation
            </td>
        </tr>
        <tr>
            <td><code>County</code></td>
            <td><code>[string]</code> County</td>
        </tr>
        <tr>
            <td><code>City</code></td>
            <td><code>[string]</code> City</td>
        </tr>
        <tr>
            <td><code>ZipCode</code></td>
            <td><code>[string]</code> Postal Code
            <br/>
            5-digit Zip Code or full Postal Code for Canadian addresses
            </td>
        </tr>
        <tr>
            <td><code>BestMatch</code></td>
            <td><code>[bool]</code> Best Match
            <br/>
            Flag indicating whether to return the best matches or only exact matches
            <ul class="dev-guide-list">
                <li><code>true</code> (<span class="t5">default</span>): Return the best matches</li>
                <li><code>false</code>: Return only exact matches</li>
            </ul>
            </td>
        </tr>
        <tr>
            <td><code>LimitResults</code></td>
            <td><code>[int]</code> Limit Results
            <br/>
            Maximum number of results to return.  Default is 100.
            </td>
        </tr>
    </tbody>
  </table>
</div>
<br>

<h3>Example</h3>

{% highlight json %}
{
  "CountryISO": "USA",
  "State": "WA",
  "County": "King",
  "City": "Seattle",
  "ZipCode": "98104",
  "BestMatch": true,
  "LimitResults": 10
}
{% endhighlight %}

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/commit-response/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/reference/zip-lookup-result/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>