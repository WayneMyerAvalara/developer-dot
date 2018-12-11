---
layout: page
title:  Chapter 5.4.1 - Service Info
product: communications
doctype: comms_rest_v2_dev_guide
chapter: reference
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/address/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/reference/version-info/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

<h3>Service Info</h3>

The <code>ServiceInfo</code> object contains the results of the <b>ServiceInfo endpoint</b>:

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
            <td><code>ServerTime</code></td>
            <td><code>[timestamp]</code> Server Time</td>
        </tr>
        <tr>
            <td><code>Versions</code></td>
            <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/version-info/"><code>[VersionInfo]</code></a> Version Information
            <br>
            This object contains information about versions for the Service Info request
            </td>
        </tr>
        <tr>
            <td><code>Error</code></td>
            <td><code>[string]</code> Error information (as applicable)</td>
        </tr>
    </tbody>
  </table>
</div>
<br>

<h3>Example</h3>

{% highlight json %}
{
  "ServerTime": "2018-11-07T22:24:19.2749005Z",
  "Versions": {
    // Version Info
  },
  "Error": "Error Message Text"
}
{% endhighlight %}

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/address/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/reference/version-info/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>