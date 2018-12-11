---
layout: page
title:  Chapter 5.1.7 - Safe Harbor Override
product: communications
doctype: comms_rest_v2_dev_guide
chapter: reference
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/tax-override/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/reference/exclusion/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

<h3>Safe Harbor Override</h3>

The <code>SafeHarborOverride</code> object allows the user to change <b>safe harbor tax rates</b>:

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
        <td><code>sh</code></td>
        <td><code>[int]</code> <span class="t5">required</span> Safe Harbor Override Type
          <ul class="dev-guide-list">
            <li><code>1</code>: Cellular</li>
            <li><code>2</code>: VoIP</li>
            <li><code>4</code>: Paging</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td><code>old</code></td>
        <td><code>[double]</code> <span class="t5">required</span> Original Federal TAM
        <br/>
        Original Federal TAM value to override
        </td>
      </tr>
      <tr>
        <td><code>new</code></td>
        <td><code>[double]</code> <span class="t5">required</span> New Federal TAM
        <br/>
        New TAM value that will replace the original TAM value.
        </td>
      </tr>
    </tbody>
  </table>
</div>
<br>

<h3>Example</h3>

{% highlight json %}
"sovr": [
  {
    "sh": 1,
    "old": 0.649,
    "new": 0.371
  }
]
{% endhighlight %}

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/tax-override/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/reference/exclusion/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>