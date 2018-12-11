---
layout: page
title:  Chapter 5.1.17 - Line Item Result
product: communications
doctype: comms_rest_v2_dev_guide
chapter: reference
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/error-response/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/reference/detailed-tax-result/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

<h3>Line Item Result</h3>

The <code>LineItemResult</code> object contains the <b>individual tax calculation results</b> for each <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/line-item/">line item</a>:

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
            <td><code>ref</code></td>
            <td><code>[string]</code> Reference ID for the line item</td>
        </tr>
        <tr>
            <td><code>base</code></td>
            <td><code>[double]</code> Base sale amount for tax inclusive line items</td>
        </tr>
        <tr>
            <td><code>txs</code></td>
            <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/detailed-tax-result/"><code>[Tax]</code></a> Detailed Tax Results
            <br>
            This object contains the <b>detailed tax results</b> generated for each <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/line-item/">line item</a>
            </td>
      </tr>
            <tr>
            <td><code>brdg</code></td>
            <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/detailed-tax-result/"><code>[BridgeParticipantResult]</code></a> Bridge Participant Results
            <br>
            This object contains the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/bridge-participant/">conference bridge participant</a> tax calculation results
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
"itms": [
  {
    "ref": "Line Item 001",
    "base": 87.64509,
    "txs": [
      {
        // Detailed Tax
      }
    ],
    "brdg": [
      {
        // Bridge Participant Result
      }
    ],
    "err": [
      {
        // Error
      }
    ]
  }
]
{% endhighlight %}

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/error-response/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/reference/detailed-tax-result/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>