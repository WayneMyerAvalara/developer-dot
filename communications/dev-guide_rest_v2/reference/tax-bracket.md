---
layout: page
title:  Chapter 5.1.10 - Tax Bracket
product: communications
doctype: comms_rest_v2_dev_guide
chapter: reference
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/exemption/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/reference/bridge-data/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

<h3>Tax Bracket</h3>

The <code>TaxBracket</code> object allows the user to specify a list of <b>tax brackets</b> for an <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/tax-override/">override</a>:

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
        <td><code>rate</code></td>
        <td><code>[double]</code> <span class="t5">required</span> Tax Rate
          <br/>
          Tax rate for this tax bracket.  The value cannot be negative.  For rated taxes, the value must be between 0 and 1.  Otherwise, the value may be greater than 1.
        </td>
      </tr>
      <tr>
        <td><code>rate</code></td>
        <td><code>[double]</code> <span class="t5">required</span> Max Base
          <br/>
          The maximum base that this rate applies to.  Use <code>2147483647</code> for "unlimited".
        </td>
      </tr>
    </tbody>
  </table>
</div>
<br>

<h3>Example</h3>

{% highlight json %}
"brkt": [
  {
    "rate": 0.075,
    "max": 2147483647
  }
]
{% endhighlight %}

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/exemption/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/reference/bridge-data/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>