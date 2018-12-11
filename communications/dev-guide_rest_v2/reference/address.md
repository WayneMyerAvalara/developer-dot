---
layout: page
title:  Chapter 5.3.6 - Address
product: communications
doctype: comms_rest_v2_dev_guide
chapter: reference
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/geocode-result/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/reference/service-info/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

<h3>Address</h3>

The <code>Address</code> object contains the <b>CASS address information</b> from the geocoding result:

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
"cass": {
  "addr": "255 S KING ST ",
  "city": "SEATTLE",
  "st": "WA",
  "zip": "98104-2832"
}
{% endhighlight %}

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/geocode-result/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/reference/service-info/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>