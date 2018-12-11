---
layout: page
title:  Chapter 5.1.19 - Bridge Participant Result
product: communications
doctype: comms_rest_v2_dev_guide
chapter: reference
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/detailed-tax-result/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/reference/summarized-tax-result/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

<h3>Bridge Participant Result</h3>

The <code>BridgeParticipantResult</code> object contains the <b>conference bridge participant tax</b> calculation results generated for each <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/bridge-participant/">conference bridge participant</a>:

<h4>Note</h4>
The <code>BridgeParticipantResult</code> functionality is still in beta.  Contact <a class="dev-guide-link" href="mailto:CommunicationSupport@avalara.com">CommunicationSupport@avalara.com</a> for more information.

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
            <td><code>[string]</code> Reference ID for the participant</td>
        </tr>
        <tr>
            <td><code>tran</code></td>
            <td><code>[int]</code> Transaction Type
            <br/>
            Transaction Type ID used for the participant.  The transaction/service pair is determined automatically based on the Participant location, and other information specified in the transaction.
            </td>
        </tr>
        <tr>
            <td><code>serv</code></td>
            <td><code>[int]</code> Service Type
            <br/>
            Service Type ID used for the participant.  The transaction/service pair is determined automatically based on the Participant location, and other information specified in the transaction.
            </td>
        </tr>
        <tr>
            <td><code>txs</code></td>
            <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/detailed-tax-result/"><code>[Tax]</code></a> Detailed Tax Results
            <br>
            This object contains the <b>detailed tax results</b> generated for each <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/bridge-participant/">participant</a>
            </td>
        </tr>
        <tr>
            <td><code>err</code></td>
            <td><code>[string]</code> Error
            <br>
            Error message for the participant tax calculation (as applicable)
            </td>
        </tr>
    </tbody>
  </table>
</div>
<br>

<h3>Example</h3>

{% highlight json %}
"brdg": [
  {
    "ref": "Participant 1",
    "tran": 3,
    "serv": 608,
    "txs": [
      {
        // Detailed Tax
      }
    ],
    "err": "Error Message Text"
  }
]
{% endhighlight %}

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/detailed-tax-result/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/reference/summarized-tax-result/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>