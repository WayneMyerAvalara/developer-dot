---
layout: page
title: Chapter 4.2 - Account Customizations
product: communications
doctype: comms_rest_v2_dev_guide
chapter: customizing-transactions
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/customizing-transactions/client-profiles/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/customizing-transactions/transaction-use-cases/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

The components of client profile account customizations are:
<ul class="dev-guide-list">
  <li><a class="dev-guide-link" href="#cust_files">Customization files</a></li>
  <li><a class="dev-guide-link" href="#config_opt">Configuration options</a></li>
</ul>

<h3 id="cust_files">Customization Files</h3>
Customization files allow you to change how the AFC tax engine produces the results of your <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calc-taxes-request/"><code>CalcTaxes</code> request</a>.  

Customization files include:
<ul class="dev-guide-list">
  <li>Bundle file</li>
  <li>Exclusion file</li>
  <li>Exemption file</li>
  <li>Override file</li>
  <li>Nexus file (for use with Sales and Use transactions only)</li>
</ul>

<div class="mobile-table">
  <table class="styled-table">
    <thead>
      <tr>
        <th>Customization File</th>
        <th>Description</th>
        <th>File Extension</th>
        <th>How To Create</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Bundle</td>
        <td>Bundles enable you to:
        <ol class="dev-guide-list">
          <li>Associate a group of transaction/service pairs with an offering</li>
          <li>Specify the percentage of the sale amount to be applied to each transaction/service pair</li>
        </ol>
        <br/>
        When taxes are calculated for bundled transactions, the appropriate taxes are calculated for each transaction/service associated with the transaction/service type defined for the bundle</td>
        <td>.bdl</td>
        <td>AFC Manager (AFC Bundler component)</td>
      </tr>
      <tr>
        <td>Exclusion</td>
        <td>Removes a jurisdiction from consideration as the taxing jurisdiction</td>
        <td>.exc</td>
        <td>AFC Manager</td>
      </tr>
      <tr>
        <td>Exemption</td>
        <td>Removes the tax liability from the specified jurisdiction
        <br/><br/>
        Used when you have an exemption certification that allows you to be exempted from certain taxes for a given jurisdiction or group of jurisdictions
        </td>
        <td>.exc</td>
        <td>AFC Manager</td>
      </tr>
      <tr>
        <td>Override</td>
        <td>Used to modify tax rates for a specified jurisdiction, alter the tax logic for transaction/ services, and add or remove taxes from transaction/services</td>
        <td>.ovr</td>
        <td>AFC Manager (Rate and Logic Modifier (RLM) component)</td>
      </tr>
      <tr>
        <td>Nexus</td>
        <td>Indicates the jurisdictions that require you to calculate Sales and Use (SAU) taxes</td>
        <td>.nex</td>
        <td>AFC Manager - Sales and Use Viewer</td>
      </tr>
    </tbody>
  </table>
</div>

<h3 id="config_opt">Configuration Options</h3>
Configuration options are used to modify the operation of the AFC tax engine.
<div class="mobile-table">
  <table class="styled-table">
    <thead>
      <tr>
        <th>Configuration Option</th>
        <th>Settings</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Return Non-Billable</td>
        <td><ul class="dev-guide-list">
              <li>False</li>
              <li>True</li>
            </ul>
        </td>
        <td>Non-billable taxes are compliance-only taxes or fees that are used for filing and are not passed on to your user.  This option allows you to specify if non-billable items are included (Return Non-Billable is <code>true</code>) or excluded (Return Non-Billable is <code>false</code>) in the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calc-taxes-response/"><code>CalcTaxes</code> response</a></td>
      </tr>
      <tr>
        <td>Safe Harbor TAM Override(s)</td>
        <td><ul class="dev-guide-list">
              <li>Cellular</li>
              <li>VoIP</li>
              <li>Paging</li>
            </ul>
        </td>
        <td>Safe Harbor TAM Override configuration settings allow traffic study values to be applied to all transactions processed while using a client profile containing this configuration.  The TAM values for Cellular, VoIP, and Paging are adjusted to reflect the percentages calculated in a traffic study</td>
      </tr>
    </tbody>
  </table>
</div>


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


<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/customizing-transactions/client-profiles/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/customizing-transactions/transaction-use-cases/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>