---
layout: page
title:  Chapter 5.3.2 - Zip Lookup Result
product: communications
doctype: comms_rest_v2_dev_guide
chapter: reference
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/zip-lookup-request/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/reference/location-item/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

<h3>Zip Lookup Result</h3>

The <code>zipLookupResult</code> object contains the <b>jurisdiction information</b> returned when searching location matches:

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
            <td><code>LocationData</code></td>
            <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/location-item/"><code>[LocationItem]</code></a> Location Item
            <br>
            This object contains a list of location matches for the address being searched
            </td>
        </tr>
        <tr>
            <td><code>MatchCount</code></td>
            <td><code>[int]</code> Match Count
            <br/>
            Number of matches returned
            </td>
        </tr>
        <tr>
            <td><code>InputMatchType</code></td>
            <td><code>[string]</code> Input Match Type
            <br/>
            Match type from user input
            <ul class="dev-guide-list">
                <li>Exact match</li>
                <li>Best match</li>
            </ul>
            </td>
        </tr>
        <tr>
            <td><code>MatchTypeApplied</code></td>
            <td><code>[string]</code> Match Type Applied
            <br/>
            Indicates whether the matches returned are based on an <b>Exact</b> match or <b>Best</b> match
            </td>
        </tr>
        <tr>
            <td><code>ResultsLimit</code></td>
            <td><code>[int]</code> Results Limit
            <br/>
            Maximum number of results applied to the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/zip-lookup-request/">Zip Lookup Request</a>
            </td>
        </tr>
    </tbody>
  </table>
</div>
<br>

<h3>Example</h3>

{% highlight json %}
{
  {
  "LocationData": [
    {
      // Location Item
    }
  ],
  "MatchCount": 1,
  "InputMatchType": "Best",
  "MatchTypeApplied": "Exact",
  "ResultsLimit": 10
}
{% endhighlight %}

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/zip-lookup-request/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/reference/location-item/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>