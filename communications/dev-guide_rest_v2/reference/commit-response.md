---
layout: page
title:  Chapter 5.2.2 - Commit Response
product: communications
doctype: comms_rest_v2_dev_guide
chapter: reference
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/commit-request/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/reference/zip-lookup-request/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

<h3>Commit Response</h3>

The <code>CommitResponse</code> object contains the commit request <b>status</b>:

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
            <td><code>ok</code></td>
            <td><code>[bool]</code> OK
            <br/>
            Indicates if the Document Code's commit status has been updated successfully.
            <ul class="dev-guide-list">
                <li><code>true</code>: Commit status successfully updated</li>
                <li><code>false</code>: Commit status update failed</li>
            </ul>
            </td>
        </tr>
        <tr>
            <td><code>err</code></td>
            <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/error-response/"><code>[Error]</code></a> Error
            <br>
            This object contains information about any errors returned (as applicable)
            </td>
        </tr>
    </tbody>
  </table>
</div>
<br>

<h3>Example</h3>

{% highlight json %}
{
  "ok": true,
  "err": [
    {
      // Error
    }
  ]
}
{% endhighlight %}

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/commit-request/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/reference/zip-lookup-request/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>