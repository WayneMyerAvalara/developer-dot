---
layout: page
title: Chapter 4.4.2 - Geocode Jurisdiction Determination
product: communications
doctype: comms_rest_v2_dev_guide
chapter: customizing-transactions
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/pcode-jurisdiction-determination/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/reference/">Next Chapter<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

The <code>/api/v2/geo/Geocode</code> <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/getting-started/environments-endpoints/">Jurisdiction Determination endpoint</a> returns a list of geocoded results.

<h4>Note</h4>
The Geocode Jurisdiction Determination endpoint supports geocoding for US, Puerto Rico, and other US territories.  Addresses and coordinate pairs in foreign countries, including Canada and Mexico, are not supported and do not return results.

<h3>Geocode Jurisdiction Determination</h3>
The Geocode Jurisdiction Determination endpoint accepts a list of <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/geocode-requests/">Geocode Requests</a>.  Specify a list of <a class="dev-guide-link" href="#street">street addresses</a> or <a class="dev-guide-link" href="#lat_long">latitude/longitude coordinate pairs</a> to geocode.  Geocoded results are returned in the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/geocode-result/">Geocode Result</a>.

Either a <a class="dev-guide-link" href="#street">street address</a> or <a class="dev-guide-link" href="#lat_long">latitude/longitude pair</a> can be specified in each individual request, but a list of geocode requests can contain a mixture of both street address and latitude/longitude pairs.
<br/>
<h4>Reference ID</h4>
The Reference ID (<code>ref</code>) is used to tie the requested address or lat/long to the result.  The Reference ID is useful when a large list of geocoded results are requested.
<br/>
<h4>CASS</h4>
Use the CASS flag (<code>cass</code>) to indicate if the CASS validated address should be returned on a <a class="dev-guide-link" href="#street">street address</a> geocode request.  <code>cass</code> has no effect on a <a class="dev-guide-link" href="#lat_long">latitude/longitude</a> geocode request and is ignored if set.
<ul class="dev-guide-list">
  <li><code>true</code>: Returns the CASS validated address as part of the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/geocode-result/">Geocode Result</a></li>
  <li><code>false</code>: The CASS validated address is not included in the results</li>
</ul>

<h4 id="street">Street Address Data</h4>
Specify a street address using one or more of these fields:
<ul class="dev-guide-list">
  <li>Street address (<code>addr</code>)</li>
  <li>City (<code>city</code>)</li>
  <li>State (<code>st</code>)</li>
  <li>Postal Code (<code>zip</code>)</li>
</ul>
<br/>
Considerations when using street address:
<ul class="dev-guide-list">
  <li>One of the following is required when geocoding a street address:</li>
  <ul class="dev-guide-list">
    <li>City (<code>city</code>) and State (<code>st</code>)</li>
    <li>Postal Code (<code>zip</code>)</li>
  </ul>
  <li>Street address should normally begin with a numeric street number.  The exception is that there are certain states that allow a 1-letter prefix on the street, such as "G4386 S Saginaw St"</li>
  <li>Post Office (PO) Box addresses are not supported in geocoding because a PO Box does not accurately reflect a taxing jurisdiction</li>
</ul>

<h4 id="lat_long">Latitude/Longitude Data</h4>
Specify a latitude/longitude coordinate pair using Latitude (<code>lat</code>) and Longitude (<code>long</code>).

Considerations when using street address:
<ul class="dev-guide-list">
  <li>Both Latitude (<code>lat</code>) and Longitude (<code>long</code>) are required</li>
  <li>Latitude/Longitude geocoding does not return street address results</li>
</ul>

<h3>The Results</h3>
The <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/geocode-result/">Geocode Result</a> contains the following fields:
<div class="mobile-table">
  <table class="styled-table">
    <thead>
      <tr>
        <th>Key</th>
        <th>Name</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
            <td><code>ref</code></td>
            <td>Reference ID</td>
            <td>Reference ID from the geocode request used to tie the request to the result</td>
        </tr>
        <tr>
            <td><code>cass</code></td>
            <td>CASS Address Information</td>
            <td>CASS validated address information including:
            <br/>
            <ul class="dev-guide-list">
              <li>Street address (<code>addr</code>)</li>
              <li>City (<code>city</code>)</li>
              <li>State (<code>st</code>)</li>
              <li>Postal Code (<code>zip</code>)</li>
            </ul>
            <br/>
            CASS is not returned for latitude/longitude requests
            </td>
        </tr>
        <tr>
            <td><code>cBlk</code></td>
            <td>Census Block Group</td>
            <td>ID of the smallest area surrounded by streets, geocoded based on census data
            <br/>
            Census Block Group is always <code>0</code> for latitude/longitude requests
            </td>
        </tr>
        <tr>
            <td><code>cTrc</code></td>
            <td>Census Tract</td>
            <td>ID of the contiguous group of census block groups, geocoded based on census data
            <br/>
            Census Tract is always <code>0</code> for latitude/longitude requests
            </td>
        </tr>
        <tr>
            <td><code>cnty</code></td>
            <td>County</td>
            <td>County name of geocoded jurisdiction</td>
        </tr>
        <tr>
            <td><code>feat</code></td>
            <td>Feature ID</td>
            <td>The Geographic Names Information System (GNIS) feature id is a unique, permanent geographic feature identifier assigned by the U.S. Board on Geographic Names</td>
        </tr>
        <tr>
            <td><code>fips</code></td>
            <td>FIPS Code</td>
            <td>10-digit number in the format of SSCCCPPPPP where SS = State Code, CCC = County Code and PPPPP = Place Code.
            <br/>
            FIPS codes that start with a “99” in the state position are Avalara-defined codes for special tax jurisdictions
            </td>
        </tr>
        <tr>
            <td><code>inc</code></td>
            <td>Incorporated</td>
            <td>Indicates if the address is within city limits
            <ul class="dev-guide-list">
                <li><code>true</code>: The address is incorporated, meaning it is within city limits</li>
                <li><code>false</code>: The address in unincorporated (not in city limits)</li>
            </ul>
            </td>
        </tr>
        <tr>
            <td><code>jur</code></td>
            <td>Taxing jurisdiction name</td>
            <td>Name of the taxing jurisdiction related to the returned PCode</td>
        </tr>
        <tr>
            <td><code>lat</code></td>
            <td>Latitude</td>
            <td>Latitude of the matching jurisdiction</td>
        </tr>
        <tr>
            <td><code>long</code></td>
            <td>Longitude</td>
            <td>Longitude of the matching jurisdiction</td>
        </tr>
        <tr>
            <td><code>pcd</code></td>
            <td>PCode</td>
            <td>PCode for the taxing jurisdiction</td>
        </tr>
        <tr>
            <td><code>scr</code></td>
            <td>Score</td>
            <td>A percentage, represented as a decimal, indicating the accuracy of the address match in the mapping database</td>
        </tr>
    </tbody>
  </table>
</div>
<br/>

<h4>Fallback</h4>
The Fallback process is used when a match can't be found in the geocoding database and, instead, a match is found based on the Postal Code (<code>zip</code>) and city name (<code>city</code>).  

Characteristics of a Fallback response:
<ul class="dev-guide-list">
  <li>Score (<code>scr</code>) is <code>1.01</code></li>
  <li>Census Block Group (<code>cBlk</code>) and Census Tract (<code>cTrc</code>) are both <code>0</code></li>
  <li>Latitude (<code>lat</code>) and Longitude (<code>long</code>) are both <code>-1</code></li>
</ul>

<h3>Geocode Jurisdiction Determination Example 1 - Street Address</h3>
This example demonstrates a geocoding request for a street address.  The CASS validated address is being requested (<code>cass</code> is <code>true</code>).

{% highlight json %}
[
  {
    "ref": "Street Address Geocode",
    "cass": true,
    "addr": "255 South King St",
    "city": "Seattle",
    "st": "WA",
    "zip": "98104"
  }
]
{% endhighlight %}

<h4>Response</h4>
The street address is successfully geocoded with a score (<code>scr</code>) of 1.

<div class="panel-group">
  <a data-toggle="collapse" href="#collapse1">View the Response JSON</a>
  <div id="collapse1" class="panel-collapse collapse">
    <div class="panel-body">
{% highlight json %}
[
  {
    "ref": "Street Address Geocode",
    "cass": {
      "addr": "255 S KING ST ",
      "city": "SEATTLE",
      "st": "WA",
      "zip": "98104-2832"
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
  }
]
{% endhighlight %}
    </div>
  </div>
</div>

<h3>Geocode Jurisdiction Determination Example 2 - Latitude/Longitude Pair</h3>
This example geocodes a latitude/longitude coordinate pair.

{% highlight json %}
[
  {
    "ref": "Lat/Long Geocode",
    "lat": 35.991130741436415,
    "long": -78.90267307450108,    
  }
]
{% endhighlight %}

<h4>Response</h4>
The latitude/longitude coordinate pair is successfully geocoded with a score (<code>scr</code>) of 0.9999.

<div class="panel-group">
  <a data-toggle="collapse" href="#collapse2">View the Response JSON</a>
  <div id="collapse2" class="panel-collapse collapse">
    <div class="panel-body">
{% highlight json %}
[
  {
    "ref": "Lat/Long Geocode",
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
    </div>
  </div>
</div>

<h3>Geocode Jurisdiction Determination Example 3 - Street Address and Latitude/Longitude Pair</h3>
This example shows how to send multiple geocode requests.  One request is a street address while the other is a latitude/longitude coordinate pair.

{% highlight json %}
[
  {
    "ref": "Street Address Geocode",
    "cass": true,
    "addr": "255 South King St",
    "city": "Seattle",
    "st": "WA",
    "zip": "98104"
  },
  {
    "ref": "Lat/Long Geocode",
    "lat": 35.991130741436415,
    "long": -78.90267307450108,    
  }
]
{% endhighlight %}

<h4>Response</h4>
Two geocoded results are returned.  Use the Reference ID (<code>ref</code>) to match the result to the request. 

<div class="panel-group">
  <a data-toggle="collapse" href="#collapse3">View the Response JSON</a>
  <div id="collapse3" class="panel-collapse collapse">
    <div class="panel-body">
{% highlight json %}
[
  {
    "ref": "Street Address Geocode",
    "cass": {
      "addr": "255 S KING ST ",
      "city": "SEATTLE",
      "st": "WA",
      "zip": "98104-2832"
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
    "ref": "Lat/Long Geocode",
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
    </div>
  </div>
</div>

<h3>Geocode Jurisdiction Determination Example 4 - Street Address with Fallback</h3>
This example demonstrates the Fallback process.  A valid city (<code>city</code>), state (<code>st</code>), and Postal Code (<code>zip</code>) are used, but the street address (<code>addr</code>) is invalid.

{% highlight json %}
[
  {
    "ref": "Fallback Request",
    "cass": true,
    "addr": "123 Fake St",
    "city": "New York",
    "st": "NY",
    "zip": "10003"
  }
]
{% endhighlight %}

<h4>Response</h4>
A Fallback result is returned, indicated by the score (<code>scr</code>) being 1.01.

<div class="panel-group">
  <a data-toggle="collapse" href="#collapse4">View the Response JSON</a>
  <div id="collapse4" class="panel-collapse collapse">
    <div class="panel-body">
{% highlight json %}
[
  {
    "ref": "Fallback Request",
    "cBlk": 0,
    "cTrc": 0,
    "cnty": "NEW YORK",
    "feat": 2083394,
    "fips": "3606102275",
    "inc": true,
    "jur": "NEW YORK",
    "lat": -1,
    "long": -1,
    "pcd": 2604100,
    "scr": 1.01
  }
]
{% endhighlight %}
    </div>
  </div>
</div>

<h3>Geocode Jurisdiction Determination Example 5 - Unincorporated Street Address</h3>
This request contains a geocode request for an unincorporated address.

{% highlight json %}
[
  {
    "ref": "Unincorporated  Street Address",
    "cass": true,
    "addr": "24210 E 19th Ave",
    "city": "Aurora",
    "st": "CO",
    "zip": "80019"
  }
]
{% endhighlight %}

<h4>Response</h4>
The returned geocoded address is unincorporated (<code>inc</code> is <code>false</code>)

<div class="panel-group">
  <a data-toggle="collapse" href="#collapse5">View the Response JSON</a>
  <div id="collapse5" class="panel-collapse collapse">
    <div class="panel-body">
{% highlight json %}
[
  {
    "ref": "Unincorporated  Street Address",
    "cass": {
      "addr": "24210 E 19TH AVE ",
      "city": "AURORA",
      "st": "CO",
      "zip": "80019-3706"
    },
    "cBlk": 1143,
    "cTrc": 8353,
    "cnty": "ADAMS",
    "feat": 198116,
    "fips": "9900429801",
    "inc": false,
    "jur": "AURORA RTD",
    "lat": 39.743492290111995,
    "long": -104.70495125456084,
    "pcd": 429801,
    "scr": 0.98
  }
]
{% endhighlight %}
    </div>
  </div>
</div>

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/pcode-jurisdiction-determination/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/reference/">Next Chapter<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>