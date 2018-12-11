---
layout: page
title:  Chapter 5.4.3 - Tax Type Data
product: communications
doctype: comms_rest_v2_dev_guide
chapter: reference
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/version-info/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/reference/ts-pair-data/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

<h3>Tax Type Data</h3>

The <code>TaxTypeData</code> object contains a list of <b>tax type</b> information for the requested tax type:

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
            <td><code>TaxType</code></td>
            <td><code>[int]</code> Tax Type ID</td>
        </tr>
        <tr>
            <td><code>CategoryType</code></td>
            <td><code>[int]</code> Category ID</td>
        </tr>
        <tr>
            <td><code>TaxDescription</code></td>
            <td><code>[string]</code> Tax Type Description</td>
        </tr>
        <tr>
            <td><code>CategoryDescription</code></td>
            <td><code>[string]</code> Category Description</td>
        </tr>
    </tbody>
  </table>
</div>
<br>

<h3>Example</h3>

{% highlight json %}
[
  {
    "TaxType": 1,
    "CategoryType": 1,
    "TaxDescription": "Sales Tax",
    "CategoryDescription": "SALES AND USE TAXES"
  }
]
{% endhighlight %}

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/version-info/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/reference/ts-pair-data/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>