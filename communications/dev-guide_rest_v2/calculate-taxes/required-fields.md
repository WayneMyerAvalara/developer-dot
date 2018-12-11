---
layout: page
title: Chapter 2.1 - Required Fields
product: communications
doctype: comms_rest_v2_dev_guide
chapter: calculate-taxes
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/calculate-taxes/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/commit-uncommit/">Next Chapter<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

The <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calc-taxes-request/">CalcTaxes request</a> has numerous fields, but only a handful of the objects and fields are required by Communications REST v2.  

<h3>CompanyData</h3>
The <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/company-data/">Company Data</a> object (<code>cmpn</code>) is required.  These fields are required in CompanyData:

<div class="mobile-table">
  <table class="styled-table">
    <thead>
      <tr>
        <th>Key</th>
        <th>Name</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>bscl</code></td>
        <td>Business Class</td>
      </tr>
      <tr>
        <td><code>svcl</code></td>
        <td>Service Class</td>
      </tr>
      <tr>
        <td><code>fclt</code></td>
        <td>Facilities</td>
      </tr>
      <tr>
        <td><code>reg</code></td>
        <td>Regulated</td>
      </tr>
    </tbody>
  </table>
</div>
<br>
For more information, see <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/company-data/">Company Data</a>.
<br/>
<br/>
<h4>Exclusion</h4>
The <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/exclusion/">Exclusion</a> object (<code>excl</code>) is <i>not</i> required.  If you do use the Exclusion object, these fields are required:

<div class="mobile-table">
  <table class="styled-table">
    <thead>
      <tr>
        <th>Key</th>
        <th>Name</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>ctry</code></td>
        <td>Country</td>
      </tr>
      <tr>
        <td><code>excl</code></td>
        <td>Exclusion On</td>
      </tr>
    </tbody>
  </table>
</div>
<br/>
For more information, see <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/exclusion/">Exclusion</a>.
<br/>
<br/>
<h3>Invoice</h3>
At least 1 instance of the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/invoice/">Invoice</a> object (<code>inv</code>) is required.  These fields are required in Invoice:

<div class="mobile-table">
  <table class="styled-table">
    <thead>
      <tr>
        <th>Key</th>
        <th>Name</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>bill</code></td>
        <td>Bill To <a class="dev-guide-link" href="#location">Location</a></td>
      </tr>
      <tr>
        <td><code>cust</code></td>
        <td>Customer Type</td>
      </tr>
      <tr>
        <td><code>date</code></td>
        <td>Invoice Date</td>
      </tr>
      <tr>
        <td><code>doc</code></td>
        <td>Document Code
        <br/>
        Required only if Commit (<code>cmmt</code>) is set to <code>true</code>
        </td>
      </tr>
      <tr>
        <td><code>itms</code></td>
        <td><a class="dev-guide-link" href="#line-item">LineItem object</a></td>
      </tr>
    </tbody>
  </table>
</div>
<br/>
For more information, see <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/invoice/">Invoice</a>.
<br/>
<br/>
<h4 id="line-item">Line Item</h4>
At least 1 instance of the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/line-item/">LineItem</a> object (<code>itms</code>) is required in each <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/invoice/">Invoice</a> object (<code>inv</code>).  These fields are required in LineItem:

<div class="mobile-table">
  <table class="styled-table">
    <thead>
      <tr>
        <th>Key</th>
        <th>Name</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>sale</code></td>
        <td>Sale</td>
      </tr>
      <tr>
        <td><code>tran</code></td>
        <td>Transaction Type</td>
      </tr>
      <tr>
        <td><code>serv</code></td>
        <td>Service Type</td>
      </tr>
    </tbody>
  </table>
</div>
<br>
For more information, see <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/line-item/">Line Item</a>.
<br/>
<br/>
<h4>Exemption</h4>
The <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/exemption/">Exemption</a> object (<code>exms</code>) is <i>not</i> required.  If you do use the Exemption object, these fields are required:

<div class="mobile-table">
  <table class="styled-table">
    <thead>
      <tr>
        <th>Key</th>
        <th>Name</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>loc</code></td>
        <td><a class="dev-guide-link" href="#location">Location</a></td>
      </tr>
      <tr>
        <td><code>tpe</code> or <code>cat</code></td>
        <td>Tax Type or Tax Category (choose one)
        <br/>
        <br/>
        If Tax Type, one of these is required:
        <div class="mobile-table">
          <table class="styled-table">
            <thead>
              <tr>
                <th>Key</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>lvl</code></td>
                <td>Tax Level</td>
              </tr>
              <tr>
                <td><code>dom</code></td>
                <td>Domain</td>
              </tr>
            </tbody>
          </table>
        </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>
<br/>
For more information, see <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/exemption/">Exemption</a>.
<br/>
<br/>
<h3>Tax Override</h3>
The <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/tax-override/">TaxOverride</a> object (<code>ovr</code>) is <i>not</i> required.  If you do use the Tax Override object, these fields are required:

<div class="mobile-table">
  <table class="styled-table">
    <thead>
      <tr>
        <th>Key</th>
        <th>Name</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>loc</code></td>
        <td><a class="dev-guide-link" href="#location">Location</a></td>
      </tr>
      <tr>
        <td><code>scp</code></td>
        <td>Scope</td>
      </tr>
      <tr>
        <td><code>tid</code></td>
        <td>Tax Type ID</td>
      </tr>
      <tr>
        <td><code>lvl</code></td>
        <td>Tax Level ID</td>
      </tr>
      <tr>
        <td><code>brkt</code></td>
        <td><a class="dev-guide-link" href="#tax_bracket">Tax Bracket object</a></td>
      </tr>
    </tbody>
  </table>
</div>
<br/>
For more information, see <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/tax-override/">Tax Override</a>.
<br/>
<br/>
<h4 id="tax_bracket">Tax Bracket</h4>
These fields are required in the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/tax-bracket/">TaxBracket</a> object (<code>brkt</code>):

<div class="mobile-table">
  <table class="styled-table">
    <thead>
      <tr>
        <th>Key</th>
        <th>Name</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>rate</code></td>
        <td>Rate</td>
      </tr>
      <tr>
        <td><code>max</code></td>
        <td>Max Base</td>
      </tr>
    </tbody>
  </table>
</div>
<br/>
For more information, see <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/tax-bracket/">Tax Bracket</a>.
<br/>
<br/>
<h3>Safe Harbor Override</h3>
The <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/safe-harbor-override/">SafeHarborOverride</a> object (<code>sovr</code>) is <i>not</i> required.  If you do use the Safe Harbor Override object, these fields are required:

<div class="mobile-table">
  <table class="styled-table">
    <thead>
      <tr>
        <th>Key</th>
        <th>Name</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>sh</code></td>
        <td>Safe Harbor Type</td>
      </tr>
      <tr>
        <td><code>old</code></td>
        <td>Original Federal TAM</td>
      </tr>
      <tr>
        <td><code>new</code></td>
        <td>New Federal TAM</td>
      </tr>
    </tbody>
  </table>
</div>
<br/>
For more information, see <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/safe-harbor-override/">Safe Harbor Override</a>.
<br/>
<br/>

<h3 id="location">Location</h3>
<a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/location/">Location</a> is used by the following objects:
<ul class="dev-guide-list">
  <li>BillTo (<code>bill</code>) in <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/company-data/">Company Data</a></li>
  <li>Location (<code>loc</code>) in <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/exemption/">Exemptions</a></li>
  <li>From (<code>from</code>) and To (<code>to</code>) in <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/line-item/">Line Item</a></li>
  <li>Location (<code>loc</code>) in <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/bridge-participant/">Bridge Participant</a></li>
  <li>Location (<code>loc</code>) in <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/tax-override/">Tax Override</a></li>
</ul>

<br/>

Only <b>one</b> of these fields is required in a <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/location/">Location</a> object:

<div class="mobile-table">
  <table class="styled-table">
    <thead>
      <tr>
        <th>Key</th>
        <th>Name</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>pcd</code></td>
        <td>PCode</td>
      </tr>
      <tr>
        <td><code>fips</code></td>
        <td>FIPS</td>
      </tr>
      <tr>
        <td><code>npa</code></td>
        <td>NPANXX</td>
      </tr>
      <tr>
        <td><code>geo</code></td>
        <td>Geocoded Street Address
        <br/>
        <br/>
        These fields are required when <code>geo</code> is <code>true</code>:
        <div class="mobile-table">
          <table class="styled-table">
            <thead>
              <tr>
                <th>Key</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>addr</code></td>
                <td>Street Address</td>
              </tr>
              <tr>
                <td><code>city</code></td>
                <td>City</td>
              </tr>
              <tr>
                <td><code>st</code></td>
                <td>State</td>
              </tr>
              <tr>
                <td><code>zip</code></td>
                <td>Postal Code</td>
              </tr>
            </tbody>
          </table>
        </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>
<br/>
For more information, see <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/location/">Location</a>.

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/calculate-taxes/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/commit-uncommit/">Next Chapter<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>