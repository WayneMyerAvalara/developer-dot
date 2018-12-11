---
layout: page
title: Chapter 4.1 - Client Profiles
product: communications
doctype: comms_rest_v2_dev_guide
chapter: customizing-transactions
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/customizing-transactions/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/customizing-transactions/account-customizations/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

<h3>What is a client profile?</h3>
A client profile allows you to customize how the AFC tax engine interprets a request and returns tax results.  <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/account-customizations/">Customizations</a> include: 
<ul class="dev-guide-list">
  <li>Bundle</li>
  <li>Exclusion</li>
  <li>Exemption</li>
  <li>Tax Override</li>
  <li>AFC Tax Engine configuration</li>
</ul>

<h3>Why use a client profile?</h3>
Reasons to use a client profile include:
<ul class="dev-guide-list">
  <li>Profiles are cached - this speeds up response times</li>
  <li>Using a client profile eliminates including the same customization, such as a <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/tax-override/">tax override</a>,  in each <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calc-taxes-request/">CalcTaxes request</a></li>
  <ol class="dev-guide-list">
    <li><a class="dev-guide-link" href="#request">Request</a> a client profile containing <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/account-customizations/">customization file(s) and configurations</a> be added to your client</li>
    <li>Specify the <code>client_profile_id</code> in the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/getting-started/authentication/">header</a> to apply the client profile to all requests run using that header</li>
  </ol>
  <li>Multiple profiles can be applied to your client ID.  Examples uses for multiple profiles include:
    <ul class="dev-guide-list">
      <li>Separate configurations for different different types of transactions</li>
      <li>Separate configurations for child companies</li>
      <li>Testing new configurations</li>
    </ul></li>

<h3>How to apply a client profile to a session</h3>
When <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/getting-started/authentication/">authenticating</a> to Communications REST v2, pass the client profile ID in the header using <code>client_profile_id</code>.

<h4>Postman example</h4>
Add these <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/getting-started/authentication/">headers</a> to your request:
<ul class="dev-guide-list">
  <li><code>api_key</code></li>
  <li><code>client_id</code></li>
  <li><code>Content-Type: application/json</code></li>
  <li><code>client_profile_id</code></li>
</ul>
<img src="/public/images/comms/dev-guide_rest_v2/comms_dev_guide_2.png"/>

<h3>How to run transactions without a profile</h3>
REST v2 uses the system default profile when a profile is not specified.

To send a transaction without a client profile, modify the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/getting-started/authentication/">header</a> using one of these options:
<ul class="dev-guide-list">
  <li>Do not include <code>client_profile_id</code></li> 
  <li>Set <code>client_profile_id</code> to "0"</li>
</ul> 
<h4>Note</h4>
<a class="dev-guide-link" href="/communications/dev-guide_rest_v2/getting-started/best-practices/#flexibility">We recommend</a> including <code>client_profile_id</code>, and setting the field to "0", in the header even if you are not using client profiles.

<h3 id="request">Requesting a new client profile or changes to an existing client profile</h3>
Contact <a class="dev-guide-link" href="mailto:CommunicationSupport@avalara.com">CommunicationSupport@avalara.com</a>:
<ol class="dev-guide-list">
  <li>Request the customization files and configurations.  Attach existing <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/account-customizations/">customization files</a> to the email</li>
  <li>Include the environment(s)</li>
  <ul class="dev-guide-list">
    <li><a class="dev-guide-link" href="https://communicationsua.avalara.net">Sandbox</a></li>
    <li><a class="dev-guide-link" href="https://communications.avalara.net">Production</a></li>
    <li>Both environments</li>
  </ul>
  <li>Include the <code>client_profile_id</code> to be updated if changes are needed to an existing client profile</li>
  <li>The client profiles could take up to 24 hours to become available once applied</li>
</ol>

<h4>Note</h4>
The system default profile is "0".  Custom client profiles are numbered in sequential order, starting with <code>client_profile_id</code> "1".  

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/customizing-transactions/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/customizing-transactions/account-customizations/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>