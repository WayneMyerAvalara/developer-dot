---
layout: page
title:  Chapter 5.1.16 - Error Response
product: communications
doctype: comms_rest_v2_dev_guide
chapter: reference
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/invoice-result/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/reference/line-item-result/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

<h3>Error</h3>

The <code>Error</code> object contains the <b>error description</b> as applicable:

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
        <td><code>code</code></td>
        <td><code>[int]</code> Error Code
        <br>
        The numeric code associated with the error
        </td>
      </tr>
      <tr>
        <td><code>msg</code></td>
        <td><code>[string]</code> Error Message</td>
      </tr>
    </tbody>
  </table>
</div>
<br>

<h3>Example</h3>

{% highlight json %}
"err": [
  {
    "code": -2000,
    "msg": "Request body cannot be empty."
  }
]
{% endhighlight %}

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/invoice-result/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/reference/line-item-result/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>