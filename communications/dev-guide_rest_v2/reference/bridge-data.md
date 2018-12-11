---
layout: page
title:  Chapter 5.1.11 - Bridge Data
product: communications
doctype: comms_rest_v2_dev_guide
chapter: reference
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/tax-bracket/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/reference/bridge-participant/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

<h3>Bridge Data</h3>

The <code>BridgeData</code> object allows the user to specify <b>conference bridge</b> settings.

<h4>Note</h4>
The <code>BridgeData</code> functionality is still in beta.  Contact <a class="dev-guide-link" href="mailto:CommunicationSupport@avalara.com">CommunicationSupport@avalara.com</a> for more information.

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
        <td><code>proc</code></td>
        <td><code>[bool]</code> Process Invalid Participant
          <br/>
          Indicates if invalid participants should fail the transaction or continue processing.
          <ul class="dev-guide-list">
            <li><code>true</code>: Continue processing the transaction on an invalid participant</li>
            <li><code>false</code>: Abort transaction processing on an invalid participant</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td><code>rtrn</code></td>
        <td><code>[bool]</code> Return Participant Taxes 
          <br/>
          Indicates if the individual participant taxes should be included in the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calc-taxes-response/">response</a>.
          <ul class="dev-guide-list">
            <li><code>true</code>: Return an array of individual participant taxes</li>
            <li><code>false</code>: Individual participant taxes should not be included in the returned tax data</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td><code>prts</code></td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/bridge-participant/"><code>[BridgeParticipant]</code></a> Conference Bridge Participant information</td>
      </tr>
    </tbody>
  </table>
</div>
<br>

<h3>Example</h3>

{% highlight json %}
"brdg": {
  "proc": true,
  "rtrn": true,
  "prts": [
    {
      // Bridge Participant
    }
  ]
}
{% endhighlight %}

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/tax-bracket/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/reference/bridge-participant/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>