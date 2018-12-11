---
layout: page
title:  Chapter 5.1.14 - CalcTaxes Response
product: communications
doctype: comms_rest_v2_dev_guide
chapter: reference
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/key-value-pair/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/reference/invoice-result/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

<h3>The CalcTaxes Response</h3>

At the highest level, a <code>CalcTaxes</code> response is a JSON object comprised of the following:

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
        <td><code>inv</code></td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/invoice-result/"><code>[InvoiceResult]</code></a> Invoice Result
        <br>
        This object contains information about the tax calculation results for each invoice submitted in the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calc-taxes-request/">CalcTaxes request</a>.
        </td>
      </tr>
      <tr>
        <td><code>err</code></td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/error-response/"><code>[Error]</code></a> Error
        <br>
        This object contains information about any <b>errors</b> returned (as applicable)
        </td>
      </tr>
    </tbody>
  </table>
</div>
<br>

<h3>Example</h3>

{% highlight json %}
{
  "inv": [
    {
      // Invoice Result
    }
  ],
  "err": [
    {
      // Error
    }
  ]
}
{% endhighlight %}

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/key-value-pair/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/reference/invoice-result/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>
