---
layout: page
title: Chapter 3.1 - Commit Request
product: communications
doctype: comms_rest_v2_dev_guide
chapter: commit-uncommit
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/commit-uncommit/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/customizing-transactions/">Next Chapter<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

Use these methods to commit and uncommit Document Codes:
<ul class="dev-guide-list">
  <li><a class="dev-guide-link" href="#endpoint">Commit API</a></li>
  <li><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/commit/">Commit flag</a> (<code>cmmt</code>) in the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/invoice/">invoice</a></li>
</ul>

<h3 id="endpoint">Commit Endpoint</h3>
<div class="mobile-table">
  <table class="styled-table">
    <thead>
      <tr>
        <th>Endpoint</th>
        <th>Method</th>
        <th>Description</th>
        <th>Request</th>
        <th>Response</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>/api/v2/afc/commit</code></td>
        <td><code>POST</code></td>
        <td>Commits and Uncommits transactions. See <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/commit-uncommit/">Commit/Uncommit</a> for more information.</td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/commit-request/">Commit Request</a></td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/commit-response/">Commit Response</a></td>
      </tr>
    </tbody>
  </table>
</div>

<h3>The Commit Request</h3>
The <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/commit-request/">Commit request</a> is used to change the Commit flag (<code>cmmt</code>) for a given Document Code (<code>doc</code>).  Let's send a simple <code>Commit</code> call using <a class="dev-guide-link" href="https://www.getpostman.com">Postman</a> and inspect the results.

<h3>Headers</h3>
Add these <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/getting-started/authentication/">mandatory headers</a> to your request:
<ul class="dev-guide-list">
  <li><code>api_key</code></li>
  <li><code>client_id</code></li>
  <li><code>Content-Type: application/json</code></li>
</ul>

Include the <code>client_profile_id</code> if you are using a <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/client-profiles/">client profile</a>.

<h4>Postman example</h4>
<img src="/public/images/comms/dev-guide_rest_v2/comms_dev_guide_3.png"/>

<h3>Body</h3>
For the body of the <code>POST</code> request, copy and paste this example:

{% highlight json %}
{
  "doc": "DocumentCode12345",
  "cmmt": true,
  "opt": [
    {
      "key": 1,
      "val": "Optional value"
    }
  ]
}
{% endhighlight %}

<h4>What are we sending?</h4>
<ol class="dev-guide-list">
  <li>Document Code (<code>doc</code>) "DocumentCode12345"</li>
  <li>A request to commit Document Code "DocumentCode12345" by setting the Commit flag (<code>cmmt</code>) to <code>true</code></li>
    <ul class="dev-guide-list">
      <li><code>true</code> commits all transactions with Document Code (<code>doc</code>) – “DocumentCode12345” in this example</li>
      <li><code>false</code> uncommits all transactions with Document Code (<code>doc</code>)</li>
    </ul>
  <li>Optional information about the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/commit-request/">Commit request</a> using the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/key-value-pair/">Key Value Pair</a> (<code>opt</code>) object</li>
</ol>

<h3>Response</h3>
The <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/commit-response/">Commit response</a> contains a confirmation of success or failure:

{% highlight json %}
{
  "ok": true
}
{% endhighlight %}

<ul class="dev-guide-list">
  <li><code>true</code> indicates that the Document Code (<code>doc</code>) has been committed or uncommitted successfully (depending on the value of the Commit flag (<code>cmmt</code>))</li>
  <li><code>false</code> indicates an error - details are contained in the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/error-response/">Error response</a> object</li>
</ul>

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/commit-uncommit/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/customizing-transactions/">Next Chapter<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>