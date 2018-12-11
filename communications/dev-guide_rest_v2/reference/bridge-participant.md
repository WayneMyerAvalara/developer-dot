---
layout: page
title:  Chapter 5.1.12 - Bridge Participant
product: communications
doctype: comms_rest_v2_dev_guide
chapter: reference
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/bridge-data/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/reference/key-value-pair/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

<h3>Bridge Participant</h3>

The <code>BridgeParticipant</code> object allows the user to specify a list of <b>conference bridge participants</b>.

<h4>Note</h4>
The <code>BridgeParticipant</code> functionality is still in beta.  Contact <a class="dev-guide-link" href="mailto:CommunicationSupport@avalara.com">CommunicationSupport@avalara.com</a> for more information.

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
        <td><code>[string]</code>Participant Reference code</td>
      </tr>
      <tr>
        <td><code>loc</code></td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/location/"><code>[Location]</code></a> <span class="t5">required</span> Location data used to determine taxing jurisdiction for a conference bridge participant
          <br>
          There are several ways to input location information. See the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/location/">Location</a> section for more details.
        </td>
      </tr>
    </tbody>
  </table>
</div>
<br>

<h3>Example</h3>

{% highlight json %}
"prts": [
  {
    "ref": "Participant 1",
    "loc": {
      // Location
    }
  }
]
{% endhighlight %}

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/bridge-data/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/reference/key-value-pair/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>