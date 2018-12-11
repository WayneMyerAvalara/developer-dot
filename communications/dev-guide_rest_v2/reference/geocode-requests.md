---
layout: page
title:  Chapter 5.3.4 - Geocode Requests
product: communications
doctype: comms_rest_v2_dev_guide
chapter: reference
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/location-item/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/reference/geocode-result/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

<h3>Geocode Requests</h3>

The <code>geocodeRequests</code> object contains a list of <b>street addresses and/or latitude/longitude coordinate pairs</b> to geocode within the <code>GeocodeRequest</code> object.

<h3>Geocode Request</h3>
The <code>geocodeRequest</code> object contains the <b>input data</b> to geocode:

<h4>Note</h4>
Only address information <b>or</b> latitude/longitude coordinates should be provided in the request, but not both.

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
            <td><code>ref</code></td>
            <td><code>[string]</code> Reference ID
            <br>
            Optional Reference ID for the geocode request
            </td>
        </tr>
        <tr>
            <td><code>cass</code></td>
            <td><code>[bool]</code> CASS Validated Address
            <br/>
            Indicates if the CASS validated address is desired in the results.
            <ul class="dev-guide-list">
                <li><code>true</code>: Return the CASS validated address in the results</li>
                <li><code>false</code>: Do not return the CASS validated address</li>
            </ul>
            </td>
        </tr>
        <tr>
            <td><code>lat</code></td>
            <td><code>[double]</code> Latitude
            <br/>
            Latitude for geocoding based on lat/long coordinates
            </td>
        </tr>
        <tr>
            <td><code>long</code></td>
            <td><code>[double]</code> Longitude
            <br/>
            Longitude for geocoding based on lat/long coordinates
            </td>
        </tr>
        <tr>
            <td><code>addr</code></td>
            <td><code>[string]</code> Street address</td>
        </tr>
        <tr>
            <td><code>city</code></td>
            <td><code>[string]</code> City name</td>
        </tr>
        <tr>
            <td><code>st</code></td>
            <td><code>[string]</code> State name or abbreviation</td>
        </tr>
        <tr>
            <td><code>zip</code></td>
            <td><code>[string]</code> Postal Code</td>
        </tr>
    </tbody>
  </table>
</div>
<br>

<h3>Example</h3>

{% highlight json %}
[
  {
    "ref": "Address Request",
    "cass": true,
    "addr": "255 S. King St.",
    "city": "Seattle",
    "st": "WA",
    "zip": "98104"
  },
  {
    "ref": "Lat/Long Request",
    "lat": 35.991130741436415,
    "long": -78.90267307450108
  }
]
{% endhighlight %}

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/location-item/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/reference/geocode-result/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>