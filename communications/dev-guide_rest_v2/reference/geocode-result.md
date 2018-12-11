---
layout: page
title:  Chapter 5.3.5 - Geocode Result
product: communications
doctype: comms_rest_v2_dev_guide
chapter: reference
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/geocode-requests/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/reference/address/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

<h3>Geocode Result</h3>

The <code>geocodeResult</code> object contains a list of <b>geocoding results</b>:

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
            Reference ID from the geocode request
            </td>
        </tr>
        <tr>
            <td><code>cass</code></td>
            <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/address/"><code>[Address]</code></a> CASS Address Information</td>
        </tr>
        <tr>
            <td><code>cBlk</code></td>
            <td><code>[int]</code> Census Block Group</td>
        </tr>
        <tr>
            <td><code>cTrc</code></td>
            <td><code>[int]</code> Census Tract</td>
        </tr>
        <tr>
            <td><code>cnty</code></td>
            <td><code>[string]</code> County</td>
        </tr>
        <tr>
            <td><code>feat</code></td>
            <td><code>[int]</code> Feature ID</td>
        </tr>
        <tr>
            <td><code>fips</code></td>
            <td><code>[string]</code> FIPS Code</td>
        </tr>
        <tr>
            <td><code>inc</code></td>
            <td><code>[bool]</code> Incorporated
            <br/>
            Indicates if the address is within city limits
            <ul class="dev-guide-list">
                <li><code>true</code>: The address is incorporated, meaning it is within city limits</li>
                <li><code>false</code>: The address in unincorporated (not in city limits)</li>
            </ul>
            </td>
        </tr>
        <tr>
            <td><code>jur</code></td>
            <td><code>[string]</code> Taxing jurisdiction name</td>
        </tr>
        <tr>
            <td><code>lat</code></td>
            <td><code>[double]</code> Latitude</td>
        </tr>
        <tr>
            <td><code>long</code></td>
            <td><code>[double]</code> Longitude</td>
        </tr>
        <tr>
            <td><code>pcd</code></td>
            <td><code>[int]</code> PCode for the taxing jurisdiction</td>
        </tr>
        <tr>
            <td><code>scr</code></td>
            <td><code>[double]</code> Score
            <br/>
            A percentage, represented as a decimal, indicating the accuracy of the address match in the mapping database
            </td>
        </tr>
        <tr>
            <td><code>err</code></td>
            <td><code>[string]</code> Error message (if applicable)</td>
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
    "cass": {
      // Address
    },
    "cBlk": 2016,
    "cTrc": 9300,
    "cnty": "KING",
    "feat": 2411856,
    "fips": "5303363000",
    "inc": true,
    "jur": "SEATTLE",
    "lat": 47.59826893144039,
    "long": -122.33089769285252,
    "pcd": 4133800,
    "scr": 1
  },
  {
    "ref": "Lat/Long Request",
    "cBlk": 0,
    "cTrc": 0,
    "cnty": "DURHAM",
    "feat": 2403521,
    "fips": "3706319000",
    "inc": true,
    "jur": "DURHAM",
    "lat": 35.991130741436415,
    "long": -78.90267307450108,
    "pcd": 2757800,
    "scr": 0.9999689324056225
  }
]
{% endhighlight %}

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/geocode-requests/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/reference/address/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>