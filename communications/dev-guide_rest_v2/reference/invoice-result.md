---
layout: page
title:  Chapter 5.1.15 - Invoice Result
product: communications
doctype: comms_rest_v2_dev_guide
chapter: reference
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/calc-taxes-response/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/reference/error-response/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

<h3>Invoice Result</h3>

The <code>InvoiceResult</code> object contains the <b>tax calculation results</b> for each invoice submitted in the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calc-taxes-request/">CalcTaxes request</a>:

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
        <br>
        The Document Code for the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/invoice/">invoice</a>.
        </td>
      </tr>
      <tr>
        <td><code>itms</code></td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/line-item-result/"><code>[LineItemResult]</code></a> Line Item Results
        <br>
        This object contains the <b>tax calculation results</b> for each <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/line-item/">line item</a>.
        </td>
      </tr>
      <tr>
        <td><code>summ</code></td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/summarized-tax-result/"><code>[SummarizedTax]</code></a> Summarized Taxes
        <br>
        This object contains the <b>summarized taxes</b> for the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/invoice/">invoice</a>.
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
"inv": [
  {
    "doc": "DocumentCode12345",
    "itms": [
      {
        // Line Item Result
      }
    ],
    "summ": [
      {
        // Summarized Tax
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
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/calc-taxes-response/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/reference/error-response/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>