---
layout: page
title: Chapter 1.5 - Best Practices
product: communications
doctype: comms_rest_v2_dev_guide
chapter: getting-started
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/getting-started/demo-app/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/calculate-taxes/">Next Chapter<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>


<h3>Testing</h3>
Use <a class="dev-guide-link" href="https://communicationsua.avalara.net">Customer Portal Sandbox</a> to test:
<ul class="dev-guide-list">
    <li>Changes to your Communications REST v2 integration</li>
    <li><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/transaction-use-cases">Transaction customizations</a></li>
    <li>New <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/client-profiles">client profiles</a></li>
    <li>Upcoming bill runs</li>
</ul>

<h3>Jurisdiction Determination</h3>
Picking the correct jurisdiction is critical because taxes are location-specific.  REST v2 provides different ways to determine the jurisdiction:
<ul class="dev-guide-list">
    <li>Populate a location on the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/invoice">Invoice</a> and <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/line-item">Line Item</a></li>
        <ul class="dev-guide-list">
            <li>Set <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/location">BillTo</a> (<code>bill</code>)</li>
            <li>If applicable, set the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/location">Origination</a> (<code>from</code>) and <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/location">Termination</a> (<code>to</code>) locations</li>
            <li>See <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/jurisdiction-determination/">Jurisdiction Determination</a> for more information</li>
        </ul>
    <li>Use the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/getting-started/environments-endpoints#jur_determine/">Geocode</a> Lookup endpoint</li>
        <ul class="dev-guide-list">
            <li>Perform lookups separately on a monthly or quarterly basis</li>
            <li>Store the PCode (<code>pcd</code>) and Incorporated flag (<code>inc</code>) returned in the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/geocode-result/">Geocode Result</a> for the address or latitude/longitude requested</li>
            <li>Up to 1,000 addresses are supported in a single geocode request</li>
            <li>Communications PCodes are updated monthly</li>
            <li>Communications geocoded addresses are updated quarterly</li>
            <li>Only supports addresses in the United States and US Territories</li>
            <li>Supports street-level lookup</li>
        </ul>
    <li>Embed a geocode request within the transaction by setting <code>geo</code> = <code>true</code> within a <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/location">Location </a>
        <ul class="dev-guide-list">
            <li>Usage of the embedded <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/jurisdiction-determination/">geocode lookup</a> is only to be used if you have very low transaction counts</li>
            <li>Only supports addresses in the United States and US Territories</li>
            <li>Supports street-level lookup</li>
            <li>Adds a considerable amount of time to the calculation throughput</li>
        </ul>
    </li>
    <li>Use <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/getting-started/environments-endpoints#jur_determine/">PCode</a> Lookup endpoint</li>
        <ul class="dev-guide-list">
            <li>Perform lookups separately on a monthly or quarterly basis</li>
            <li>Store the PCode (<code>pcd</code>) returned in the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/zip-lookup-result/">Zip Lookup Result</a> for the location requested</li>
            <li>Doesn't support street-level lookup</li>
            <li>Communications PCodes are updated monthly</li>
        </ul>
</ul>

<h3>Customizing Transactions</h3>
See <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/">Customizing Transactions</a>:
<ul class="dev-guide-list">
    <li>Use <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/client-profiles">client profiles</a> to define <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/account-customizations/">account customizations</a></li>
    <li><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/transaction-use-cases">Modify transactions</a> to meet your business needs</li>
</ul>

<h3>Increase Your Throughput</h3>
<ul class="dev-guide-list">
    <li>Limit your <b>Line Item count</b> per transaction</li>
        <ul class="dev-guide-list">
            <li>Make more <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/calculate-taxes/"><code>CalcTaxes</code> requests</a> with fewer line items in each request to increase performance throughput</li>
            <li>It is better to send 300 <code>CalcTaxes</code> requests containing 1,000 line items in each call than to send 30 <code>CalcTaxes</code> requests with 10,000 line items</li>
            <li>Use <a class="dev-guide-link" href="https://communicationsua.avalara.net">Customer Portal Sandbox</a> to try out different scenarios and find your ideal line item count</li>
        </ul>
    <li>Use <b>multi-threading</b> to perform multiple tax calculations asynchronously</li> 
        <ul class="dev-guide-list">
            <li>Use multiple threads instead of a single thread</li>
            <li>Consider the performance of your application servers when determining the number of threads to use</li>
            <li>Use <a class="dev-guide-link" href="https://communicationsua.avalara.net">Customer Portal Sandbox</a> to identify your ideal thread count</li>
        </ul>
    <li><b>Summarize</b> Call Detail Record (CDR) data</li>
        <ul class="dev-guide-list">
            <li>Consider summarizing CDR data over a period of time when volume is extremely high</li>
            <li>Submit the summarized CDR data for taxation</li>
        </ul>
</ul>

<h3>Using Commit and Uncommit</h3>
The <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/commit-uncommit/">Commit</a> process groups transactions by a Document Code (<code>doc</code>) and indicates if the transaction group should be included in compliance reporting (<code>cmmt</code>).
<ul class="dev-guide-list">
    <li>Group transactions by bill run or invoice</li>
    <li>Use a unique Document Code (<code>doc</code>) for each group of transactions (for example, a GUID)</li> 
    <li>Use a generic Document Code (<code>doc</code>), such as "QUOTE", for transactions not intended to be be committed</li>
    <li>The Commit flag (<code>cmmt</code>) can be set <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/commit">for each transaction</a></li>
    <li>Use the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/commit-uncommit/commit-request">Commit endpoint</a> (<code>/api/v2/afc/commit</code>) to commit or uncommit a Document Code once the transaction has been submitted</li>
    <li>All committed transactions are locked at the end of the month and can't be uncommitted or changed</li>
</ul>

<h3 id="flexibility">Flexibility for the Future</h3>
Pass the <code>client_id</code> and <code>client_profile_id</code> in the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/calculate-taxes/">header</a>.
<ul class="dev-guide-list">
    <li>Passing the <code>client_id</code> and <code>client_profile_id</code> fields allows for future support of multiple profiles and clients</li>
    <li>It is much easier to include these fields early in your development effort than add the fields later when it becomes necessary</li>
    <li>Use <code>0</code> for (the default System profile) for <code>client_profile_id</code> if you don't have a customized <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/client-profiles/">client profile</a></li>
</ul>


<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/getting-started/demo-app/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/calculate-taxes/">Next Chapter<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>