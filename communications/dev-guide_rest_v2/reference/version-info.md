---
layout: page
title:  Chapter 5.4.2 - Version Info
product: communications
doctype: comms_rest_v2_dev_guide
chapter: reference
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/service-info/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/reference/tax-type-data/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

<h3>Version Info</h3>

The <code>ServiceInfo</code> object contains the <b>version specific results</b> for a Service Info request:

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
            <td><code>AfcEngineVersion</code></td>
            <td><code>[string]</code> AFC Engine Version</td>
        </tr>
        <tr>
            <td><code>BuildVersion</code></td>
            <td><code>[string]</code> Service Build Version</td>
        </tr>
    </tbody>
  </table>
</div>
<br>

<h3>Example</h3>

{% highlight json %}
"Versions": {
  "AfcEngineVersion": "20.1811.1",
  "BuildVersion": "5.26.0-393"
}
{% endhighlight %}

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/service-info/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/reference/tax-type-data/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>