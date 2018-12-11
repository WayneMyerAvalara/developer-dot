---
layout: page
title:  Chapter 5.3.3 - Location Item
product: communications
doctype: comms_rest_v2_dev_guide
chapter: reference
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/zip-lookup-result/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/reference/geocode-requests/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

<h3>Location Item</h3>

The <code>LocationItem</code> object contains the <b>location information</b>, including the name and jurisdiction PCode:

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
            <td><code>IsAlternate</code></td>
            <td><code>[bool]</code> Is Alternate
            <br>
            Flag indicating whether the location is an alternate or a primary
            <ul class="dev-guide-list">
                <li><code>true</code>: Location is an alternate to a primary location</li>
                <li><code>false</code>: Location is a primary location</li>
            </ul>
            </td>
        </tr>
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
            <td><code>[string]</code> County name</td>
        </tr>
        <tr>
            <td><code>Locality</code></td>
            <td><code>[string]</code> Locality name</td>
        </tr>
        <tr>
            <td><code>PCode</code></td>
            <td><code>[int]</code> Jurisdiction PCode</td>
        </tr>
    </tbody>
  </table>
</div>
<br>

<h3>Example</h3>

{% highlight json %}
"LocationData": [
  {
    "CountryIso": "USA",
    "State": "WA",
    "County": "KING",
    "Locality": "SEATTLE",
    "PCode": 4133800
    }
]
{% endhighlight %}

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/zip-lookup-result/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/reference/geocode-requests/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>