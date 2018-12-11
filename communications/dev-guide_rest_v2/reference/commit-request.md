---
layout: page
title:  Chapter 5.2.1 - Commit Request
product: communications
doctype: comms_rest_v2_dev_guide
chapter: reference
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/summarized-tax-result/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/reference/commit-response/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

<h3>Commit Request</h3>

The <code>CommitRequest</code> object contains the <b>Document Code and optional field data</b> to override in reports:

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
            <td><code>doc</code></td>
            <td><code>[string]</code> Document Code
            <br/>
            The Document Code is a unique string that is used to Commit or Uncommit transactions
            </td>
        </tr>
        <tr>
            <td><code>cmmt</code></td>
            <td><code>[bool]</code> Commit
            <br/>
            Indicates if invoice should be committed as soon as it is processed.
            <ul class="dev-guide-list">
                <li><code>true</code>: The transaction should be <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/commit-uncommit/">committed</a></li>
                <li><code>false</code>: The transaction should be <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/commit-uncommit/">uncommitted</a></li>
            </ul>
            </td>
        </tr>
        <tr>
            <td><code>opt</code></td>
            <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/key-value-pair/"><code>[KeyValuePair]</code></a> Optional Fields
            <br/>
            A list of <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/key-value-pair/">Optional Fields</a> to apply to this invoice.
            </td>
        </tr>
    </tbody>
  </table>
</div>
<br>

<h3>Example</h3>

{% highlight json %}
{
  "doc": "DocumentCode12345",
  "cmmt": true,
  "opt": [
  {
      // Key Value Pair
    }
  ]
}
{% endhighlight %}

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/summarized-tax-result/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/reference/commit-response/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>