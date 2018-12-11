---
layout: page
title:  Chapter 5.1.13 - Key Value Pair
product: communications
doctype: comms_rest_v2_dev_guide
chapter: reference
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/bridge-participant/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/reference/calc-taxes-response/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

<h3>Key Value Pair</h3>

The <code>KeyValuePair</code> object allows the user to specify a list of <b>key/value pair data</b>.

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
            <td><code>key</code></td>
            <td><code>[string]</code> Key
              <br/>
              An index for the key/value pair.  Numeric value between 1 and 10.
            </td>
        </tr>
        <tr>
        <td><code>val</code></td>
        <td><code>[string]</code> Value
          <br/>
          150-byte alpha-numeric value
        </td>
      </tr>
    </tbody>
  </table>
</div>
<br>

<h3>Example</h3>

{% highlight json %}
"opt": [
  {
    "key": "1",
    "val": "Sample value text"
  }
]
{% endhighlight %}

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/bridge-participant/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/reference/calc-taxes-response/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>