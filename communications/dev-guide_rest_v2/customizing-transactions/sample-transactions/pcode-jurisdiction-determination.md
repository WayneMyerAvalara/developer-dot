---
layout: page
title: Chapter 4.4.1 - PCode Jurisdiction Determination
product: communications
doctype: comms_rest_v2_dev_guide
chapter: customizing-transactions
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/customizing-transactions/jurisdiction-determination-use-cases/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/geocode-jurisdiction-determination/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

The <code>/api/v2/afc/PCode</code> <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/getting-started/environments-endpoints/">Jurisdiction Determination endpoint</a> returns a list of PCodes associated with a specified location.

<h3>PCode Jurisdiction Determination</h3>
The PCode Jurisdiction Determination endpoint accepts a <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/zip-lookup-request/">Zip Lookup Request</a>.  Specify a location, best match or exact match, and how many results you want to see.  Location data, including PCode, is returned along with additional details in the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/zip-lookup-result/">Zip Lookup Result</a> .


<h4>Location Data</h4>
Specify a location.
<ul class="dev-guide-list">
    <li>Include least one of the location fields:</li>
        <ul class="dev-guide-list">
            <li>Country (<code>CountryISO</code>)</li>
            <li>State (<code>State</code>)</li>
            <li>County (<code>County</code>)</li>
            <li>City (<code>City</code>)</li>
            <li>Postal Code (<code>ZipCode</code>)</li>
        </ul>
    <li>Country defaults to "USA" if not supplied</li>
</ul>
<br/>
<h4>Best Match</h4>
The Best Match flag (<code>BestMatch</code>) indicates the type of results.
<ul class="dev-guide-list">
    <li><code>true</code>: Best match is returned</li>
        <ul class="dev-guide-list">
            <li>An exact match is attempted first</li>
            <li>Best Match is applied if the exact match search fails</li>
        </ul>
    <li><code>false</code>: Only an exact match is returned</li>
    <li>Check the <code>MatchTypeApplied</code> <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/zip-lookup-result/">Zip Lookup Result</a> field to see which match type is used</li>
</ul>
<br/>
Considerations when using the Best Match flag:
<ul class="dev-guide-list">
    <li>Punctuation in a city names is ignored</li>
    <li>Whitespace in a city name is ignored</li>
    <li>For example, the city name "LAND O' LAKES" is returned as an exact match when "LAND O LAKES" or "LANDOLAKES" are supplied because both punctuation and white space is ignored</li>
</ul>
<br/>
<h4>Limit Results</h4>
The Limit Results field (<code>LimitResults</code>) is used to limit the number of matches returned in the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/zip-lookup-result/">Zip Lookup Result</a>.
<ul class="dev-guide-list">
    <li>Default is 100 results - passing <code>0</code> sets the limit to the default</li>
    <li>Maximum is 1,000 results - passing a value greater than the max sets the limit to the maximum</li>
</ul>

<h3>PCode Jurisdiction Determination Example 1 - Best Match</h3>
This example demonstrates a best match PCode Jurisdiction Determination request.

{% highlight json %}
{
  "CountryIso": "USA",
  "State": "MN",
  "County": "SAINT LOUIS",
  "City": "EVELETH",
  "ZipCode": "55734",
  "BestMatch": true,
  "LimitResults": 10
}
{% endhighlight %}

<h4>Response</h4>
One location (<code>LocationData</code>) is returned using a best match (<code>MatchTypeApplied</code>).

<div class="panel-group">
  <a data-toggle="collapse" href="#collapse1">View the Response JSON</a>
  <div id="collapse1" class="panel-collapse collapse">
    <div class="panel-body">
{% highlight json %}
{
  "LocationData": [
    {
      "CountryIso": "USA",
      "State": "MN",
      "County": "ST LOUIS",
      "Locality": "EVELETH",
      "PCode": 1956600
    }
  ],
  "MatchCount": 1,
  "InputMatchType": "Best",
  "MatchTypeApplied": "Best",
  "ResultsLimit": 10
}
{% endhighlight %}
    </div>
  </div>
</div>

<h3>PCode Jurisdiction Determination Example 2 - Zip Code</h3>
This example demonstrates a best match request using only a zip code (<code>ZipCode</code>).

{% highlight json %}
{
  "ZipCode": "10001",
  "BestMatch": true,
  "LimitResults": 25
}
{% endhighlight %}

<h4>Response</h4>
Five locations (<code>LocationData</code>) are returned using an exact match (<code>MatchTypeApplied</code>).

<div class="panel-group">
  <a data-toggle="collapse" href="#collapse2">View the Response JSON</a>
  <div id="collapse2" class="panel-collapse collapse">
    <div class="panel-body">
{% highlight json %}
{
  "LocationData": [
    {
      "IsAlternate": true,
      "CountryIso": "USA",
      "State": "NY",
      "County": "NEW YORK",
      "Locality": "EMPIRE STATE",
      "PCode": 2604100
    },
    {
      "IsAlternate": true,
      "CountryIso": "USA",
      "State": "NY",
      "County": "NEW YORK",
      "Locality": "GREELEY SQUARE",
      "PCode": 2604100
    },
    {
      "IsAlternate": true,
      "CountryIso": "USA",
      "State": "NY",
      "County": "NEW YORK",
      "Locality": "ONE HUNDRED THIRTY EIGHTH",
      "PCode": 2604100
    },
    {
      "IsAlternate": true,
      "CountryIso": "USA",
      "State": "NY",
      "County": "NEW YORK",
      "Locality": "MANHATTAN",
      "PCode": 2604100
    },
    {
      "CountryIso": "USA",
      "State": "NY",
      "County": "NEW YORK",
      "Locality": "NEW YORK",
      "PCode": 2604100
    }
  ],
  "MatchCount": 5,
  "InputMatchType": "Best",
  "MatchTypeApplied": "Exact",
  "ResultsLimit": 25
}
{% endhighlight %}
    </div>
  </div>
</div>

<h3 id="example3">PCode Jurisdiction Determination Example 3 - India Best Match</h3>
This example demonstrates a PCode lookup in India (<code>CountryISO</code> is set to "IND").

{% highlight json %}
{
  "CountryIso": "IND",
  "State": "AP",
  "City": "Tirumala",
  "BestMatch": true,
  "LimitResults": 1
}
{% endhighlight %}

<h4>Response</h4>
The country of India (<code>CountyISO</code>) is returned even though a local jurisdiction is requested.

<div class="panel-group">
  <a data-toggle="collapse" href="#collapse3">View the Response JSON</a>
  <div id="collapse3" class="panel-collapse collapse">
    <div class="panel-body">
{% highlight json %}
{
  "LocationData": [
    {
      "CountryIso": "IND",
      "State": "",
      "County": "",
      "Locality": "",
      "PCode": 5148400
    }
  ],
  "MatchCount": 1,
  "InputMatchType": "Best",
  "MatchTypeApplied": "Best",
  "ResultsLimit": 1
}
{% endhighlight %}
    </div>
  </div>
</div>

<h3>PCode Jurisdiction Determination Example 4 - India Exact Match</h3>
Similar to <a class="dev-guide-link" href="#example3">Example 3</a>, but with an exact match requested (<code>BestMatch</code> set to <code>false</code>).

{% highlight json %}
{
  "CountryIso": "IND",
  "State": "AP",
  "City": "Tirumala",
  "BestMatch": false,
  "LimitResults": 1
}
{% endhighlight %}

<h4>Response</h4>
No results are returned because an exact match for the requested jurisdiction can't be found.

<div class="panel-group">
  <a data-toggle="collapse" href="#collapse4">View the Response JSON</a>
  <div id="collapse4" class="panel-collapse collapse">
    <div class="panel-body">
{% highlight json %}
{
  "LocationData": null,
  "MatchCount": 0,
  "InputMatchType": "Exact",
  "MatchTypeApplied": "Exact",
  "ResultsLimit": 1
}
{% endhighlight %}
    </div>
  </div>
</div>

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/customizing-transactions/jurisdiction-determination-use-cases/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/geocode-jurisdiction-determination/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>