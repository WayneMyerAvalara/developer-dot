---
layout: page
title: Chapter 1.2 - Authentication
product: communications
doctype: comms_rest_v2_dev_guide
chapter: getting-started
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/getting-started/account-creation/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/getting-started/environments-endpoints/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

<h3>Required Headers</h3>

These items must appear in your request header:

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
        <td><code>api_key</code></td>
        <td>Base64 "username:password"</td>
      </tr>
      <tr>
        <td><code>client_id</code></td>
        <td>Unique identifier for your company. Avalara provides this during <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/getting-started/account-creation/">account creation</a>.  Your Client ID is the same across all environments.</td>
      </tr>
      <tr>
      <td><code>Content-Type</code></td>
      <td><code>application/json</code></td>
      </tr>
    </tbody>
  </table>
<div>

<h3>Encode your API Key</h3>

The <code>api_key</code> is your Customer Portal "username:password" encoded in Base64.  For example, if your username is <code>first.last@avalara.com</code> and your password is <code>secretpassword!</code>, your <code>api_key</code> is <code>Zmlyc3QubGFzdEBhdmFsYXJhLmNvbTpzZWNyZXRwYXNzd29yZCE=</code>.

The <a class="dev-guide-link" href="https://communications.avalara.net/API/AFCSaaSProTax">Communications REST v2 Swagger page</a> automatically generates your api_key for you.  To generate the api_key on the <a class="dev-guide-link" href="https://communications.avalara.net/API/AFCSaaSProTaxREST">Swagger</a> page:
<ol class="dev-guide-list">
  <li>Enter your username in the <code>email address</code> field.</li>
  <li>Enter your password in the <code>password</code> field.</li>
  <li>Click the <code>Generate api_key</code> button.</li>
</ol>
The encoded api_key is populated in the <code>api_key</code> field.  Copy and save this value for later use.

<img src="/public/images/comms/dev-guide_rest_v2/comms_rest_v2_swagger_api_key.png"/>

<br/>

You can also encode a plaintext string to Base64 in <b>Windows Powershell</b> using the following script:

{% highlight powershell %}
# Encode a string to Base64
[System.Convert]::ToBase64String(
  [System.Text.Encoding]::UTF8.GetBytes("first.last@avalara.com:secretpassword!"));
{% endhighlight %}



<h3>Optional Headers</h3>

Our tax engine allows for additional customization when calculating taxes through <b>client profiles</b>. For details about how client profiles work, see <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/">Customizing Transactions</a>.  For now, just know that you can pass an additional header to use a specific profile:

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
        <td><code>client_profile_id</code></td>
        <td>An integer that specifies which profile you want to use when calculating the taxes in this request</td>
      </tr>
    </tbody>
  </table>
<div>

<h4>Note</h4>
If a <code>client_profile_id</code> is left blank, REST v2 uses the System Default configuration.

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/getting-started/account-creation/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/getting-started/environments-endpoints/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>