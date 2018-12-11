---
layout: page
title: Chapter 1.4 - Demo Application
product: communications
doctype: comms_rest_v2_dev_guide
chapter: getting-started
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/getting-started/environments-endpoints/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/getting-started/best-practices/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

Use the C# <a class="dev-guide-link" href="https://github.com/Avalara/Communications-Developer-Content/tree/master/afc_saaspro_tax/afc_rest_apis/AfcRestDemoApp">Communications REST v2 Demo Application</a> to see how to integrate with and call the REST v2 API.

<h3>Download the Demo Application</h3>
<ol class="dev-guide-list">
    <li>Navigate to the <a class="dev-guide-link" href="https://github.com/Avalara/Communications-Developer-Content">Avalara/Communications-Developer-Content</a> repo on <a class="dev-guide-link" href="https://github.com/">GitHub</a></li>
    <li>Clone the master branch of the Avalara/Communications-Developer-Content repository locally</li>
    <li>Extract the ZIP file contents and open the destination location
    <ol class="dev-gide-list">
        <li>Navigate to ..\Communications-Developer-Content-master\afc_saaspro_tax\afc_rest_apis\AfcRestDemoApp in the extracted folder</li>
        <li>Launch <b>RestDemoApplication.exe</b></li>
    </ol>
    </li>
</ol>

<h3>Run a Sample Transaction</h3>
<ol class="dev-guide-list">
    <li>Enter your REST v2 Username, Password, and Client ID</li>
    <li>In <b>Profile ID</b>, enter:</li>
    <ul class="dev-guide-list">
        <li><code>client_profile_id</code> to use an existing client profile (if applicable)</li>
        <li><code>0</code> to use the default profile</li>
    </ul>
    <li>Modify the <b>Request </b>or simply use the transaction provided</li>
    <ul class="dev-guide-list">
        <li>See <a  class="dev-guide-link" href="https://developer.avalara.com/communications/dev-guide_rest_v2/customizing-transactions/">Customizing Transactions</a> for sample transactions</li>
    </ul>
    <li>Click <b>Process </b>to run the transaction</li>
</ol>

<img src="/public/images/comms/dev-guide_rest_v2/rest_demo_app_simple_request.png"/>

<h3>Run a Performance Test</h3>
<ol class="dev-guide-list">
    <li>Navigate to the <b>Performance </b>tab</li>
    <li>Set <b>Max Threads</b> and <b>Max Run Time</b></li>
    <li>Click <b>Start </b>to start a performance test</li>
</ol>
The results of the test are displayed within the <b>Performance </b>tab

<img src="/public/images/comms/dev-guide_rest_v2/rest_demo_app_performance.png"/>

<h3>Review the Source Code</h3>    
Review the REST v2 Demo Application C# source code to prepare for integration</li>
<ol class="dev-guide-list">
    <li>Open the Communications-Developer-Content-master folder</li>
    <li>Navigate to ..\Communications-Developer-Content-master\afc_saaspro_tax\afc_rest_apis\AfcRestDemoSource</li>
    <li>Open <b>RestDemoApplication.sln</b> in Microsoft Visual Studio</li>
</ol>

<h4>What if I don't use C#?</h4>
Additional samples for more languages are available in the Communications-Developer-Content repo.  
<ol class="dev-guide-list">
    <li>Open the Communications-Developer-Content-master folder</li>
    <li>Navigate to ..\Communications-Developer-Content-master\afc_saaspro_tax\afc_rest_apis</li>
    <li>Check out the samples in the folder for the language you need</li>
</ol>

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/getting-started/environments-endpoints/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/getting-started/best-practices/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>