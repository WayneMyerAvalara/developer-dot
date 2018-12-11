---
layout: page
title:  Chapter 5.1.8 - Exclusion
product: communications
doctype: comms_rest_v2_dev_guide
chapter: reference
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/safe-harbor-override/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/reference/exemption/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

<h3>Exclusion</h3>

The <code>Exclusion</code> object allows the user to specify <b>exclusions</b> for the transaction:

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
        <td><code>ctry</code></td>
        <td><code>[string]</code> <span class="t5">required</span> Country for exclusion
        <br/>
        Use the Country ISO code
        </td>
      </tr>
      <tr>
        <td><code>st</code></td>
        <td><code>[string]</code> State for exclusion
        <br/>
        Use the State abbreviation
        </td>
      </tr>
      <tr>
        <td><code>excl</code></td>
        <td><code>[bool]</code> <span class="t5">required</span> Exclusion On
          <br/>
          Indicates if exclusion applies to the specified state or country
          <ul class="dev-guide-list">
            <li><code>true</code>: Enable the exclusion</li>
            <li><code>false</code>: Disable the exclusion</li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
</div>
<br>

<h3>Example</h3>

{% highlight json %}
"excl": [
  {
    "ctry": "USA",
    "st": "WA",
    "excl": true
  }
]
{% endhighlight %}

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/safe-harbor-override/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/reference/exemption/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>