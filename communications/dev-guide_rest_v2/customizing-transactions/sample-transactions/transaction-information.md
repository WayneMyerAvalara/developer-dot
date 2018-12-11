---
layout: page
title: Chapter 4.3.11 - Transaction Information
product: communications
doctype: comms_rest_v2_dev_guide
chapter: customizing-transactions
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/proration/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/exclusion/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

Communications REST v2 takes the transaction as a whole and bases the returned taxes off of the information provided.  

Each transaction contains the following information:
<ul class="dev-guide-list">
    <li><a class="dev-guide-link" href="#company">Company (Seller) Data</a></li>
    <li><a class="dev-guide-link" href="#customer">Customer (Buyer) Data</a></li>
    <li><a class="dev-guide-link" href="#transaction">Transaction (Invoice and Line Item) Data</a></li>
</ul>

A product (defined by the transaction/service pair) can return different taxes, or no taxes, depending on the selections made.  For example, setting the following details on a transaction returns 0 taxes:
<ul class="dev-guide-list">
    <li><b>Customer Type</b> (<code>cust</code>): "Residential" (<code>0</code>)</li>
    <li><b>Jurisdiction</b> (<code>bill</code>): Richmond, OH</li>
    <li><b>Transaction/Service Pair</b> (<code>tran</code> and <code>serv</code>): Internet/WEB Hosting (5/29)</li>
</ul>

But by changing <b>Customer Type</b> to <b>Business</b> (<code>cust</code> to <code>1</code>), State and Country Sales Tax is returned.  It is <b>imperative</b> that the transaction information is set correctly in order to get the proper taxes back.

<h3 id="company">Company (Seller) Data</h3>
Company data defines the <b>company</b> or <b>seller</b>.  Set these keys in the <code>CompanyData</code> object.  See <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/company-data/"><code>CompanyData</code> Reference</a> for more information.

<div class="mobile-table">
  <table class="styled-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Key</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Business Class</td>
        <td><code>bscl</code></td>
        <td>Specifies whether the business making the transaction is an Incumbent Local Exchange Company (ILEC) or not an ILEC.  Only impacts Communications transactions in certain jurisdictions, such as Oregon.
            <br/>
            <br/>
            <div class="mobile-table">
              <table class="styled-table">
                <thead>
                  <tr>
                    <th>Value</th>
                    <th>Option</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>0</code></td>
                    <td>ILEC</td>
                    <td>Engaged in selling services over company-owned lines and equipment</td>
                  </tr>
                  <tr>
                    <td><code>1</code></td>
                    <td>Not an ILEC</td>
                    <td>Engaged in selling services competing with an incumbent provider
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <br/>
            Use <b>Not an ILEC</b> if neither class applies
          </td>
      </tr>
      <tr>
        <td>Service Class</td>
        <td><code>svcl</code></td>
        <td>Delineates the primary activity of an organization as Local Service or Long Distance.   Only impacts Communications transactions in certain jurisdictions, such as New York.
          <br/>
          <br/>
          <div class="mobile-table">
            <table class="styled-table">
              <thead>
                <tr>
                  <th>Value</th>
                  <th>Option</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>0</code></td>
                  <td>Primary Local</td>
                  <td>Carriers vending their services with over 50% of the gross business activities in Local Service revenue</td>
                </tr>
                <tr>
                  <td><code>1</code></td>
                  <td>Primary Long Distance</td>
                  <td>Carriers vending their services with over 50% of the gross business activities in Long Distance revenue</td>
                </tr>
              </tbody>
            </table>
          </div>
        </td>
      </tr>
      <tr>
        <td>Facilities</td>
        <td><code>fclt</code></td>
        <td>Specifies whether the transaction is sold over tangible facilities controlled by the seller.  In some jurisdictions, tax outcomes vary depending on whether the service is delivered over infrastructure controlled by the seller.
          <br/>
          <br/>  
          <div class="mobile-table">
            <table class="styled-table">
              <thead>
                <tr>
                  <th>Value</th>
                  <th>Option</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>true</code></td>
                  <td>Facilities Based</td>
                  <td>Seller delivering the service owns or controls the facilities used to provide the service</td>
                </tr>
                <tr>
                  <td><code>false</code></td>
                  <td>Non-Facilities Based</td>
                  <td>Carrier does not own the facilities</td>
                </tr>
              </tbody>
            </table>
          </div>
        </td>
      </tr>
      <tr>
        <td>Franchise</td>
        <td><code>frch</code></td>
        <td>Indicates that the seller provides services sold pursuant to a franchise agreement between the carrier and the jurisdiction
          <br/>
          <br/>  
          <div class="mobile-table">
            <table class="styled-table">
              <thead>
                <tr>
                  <th>Value</th>
                  <th>Option</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>true</code></td>
                  <td>Franchise</td>
                  <td>Seller has a franchise agreement with the jurisdiction</td>
                </tr>
                <tr>
                  <td><code>false</code></td>
                  <td>Not a Franchise</td>
                  <td>Franchise fees and taxes do not apply to seller</td>
                </tr>
              </tbody>
            </table>
          </div>
        </td>
      </tr>
      <tr>
        <td>Regulated</td>
        <td><code>reg</code></td>
        <td>Specifies if the company and its services are regulated by the regulatory commission in the state of the service
          <br/>
          <br/>  
          <div class="mobile-table">
            <table class="styled-table">
              <thead>
                <tr>
                  <th>Value</th>
                  <th>Option</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>true</code></td>
                  <td>Regulated</td>
                  <td>Company is rate-regulated</td>
                </tr>
                <tr>
                  <td><code>false</code></td>
                  <td>Not Regulated</td>
                  <td>Company is not rate-regulated</td>
                </tr>
              </tbody>
            </table>
          </div>
          <br/>
          All transactions should be set to <code>false</code> unless the seller is registered with the state regulatory commission as a rate-regulated, incumbent provider 
        </td>
      </tr>
      <tr>
        <td>Company Identifier</td>
        <td><code>idnt</code></td>
        <td>Used for reporting purposes and does not impact taxation.  
        <br/>
        The typical use for this field is to distinguish transactions for different companies or other delineations</td>
      </tr>
      <tr>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/exclusion/">Exclusions</a></td>
        <td><code>excl</code></td>
        <td>The <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/exclusion/">Exclusions</a> object allows you to specify the exclusions that apply to the transaction</td>
      </tr>
    </tbody>
  </table>
</div>


<h3 id="customer">Customer (Buyer) Data</h3>
Customer data defines the <b>customer</b> or <b>buyer</b>.  Set these keys in the <code>Invoice</code>, <code>Location</code>, or <code>LineItem</code> objects.  
See <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/invoice/"><code>Invoice</code></a>, <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/location/"><code>Location</code></a>, and <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/line-item/"><code>LineItem</code></a> for more information.

<div class="mobile-table">
  <table class="styled-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Key</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Customer Type</td>
        <td><code>cust</code></td>
        <td>Specifies the type of customer involved in the transaction.  Customer Type is set on the invoice but can be overridden on the line item.
          <br/>
          <br/>  
          <div class="mobile-table">
            <table class="styled-table">
              <thead>
                <tr>
                  <th>Value</th>
                  <th>Option</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>0</code></td>
                  <td>Residential</td>
                  <td>Transactions made by the customer for home use</td>
                </tr>
                <tr>
                  <td><code>1</code></td>
                  <td>Business</td>
                  <td>Transactions made at a place of business</td>
                </tr>
                <tr>
                  <td><code>2</code></td>
                  <td>Senior Citizen</td>
                  <td>Transactions made by the customer who meets the jurisdiction requirements to be considered a senior citizen and qualify for senior citizen tax breaks</td>
                </tr>
                <tr>
                  <td><code>3</code></td>
                  <td>Industrial</td>
                  <td>Transactions made at an industrial business</td>
                </tr>
              </tbody>
            </table>
          </div>
        </td>
      </tr>
      <tr>
        <td>Lifeline</td>
        <td><code>lfln</code></td>
        <td>Indicates if the customer is a Lifeline participant.  Lifeline is set on the invoice but can be overridden on the line item.
          <br/>
          <br/>  
          <div class="mobile-table">
            <table class="styled-table">
              <thead>
                <tr>
                  <th>Value</th>
                  <th>Option</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>true</code></td>
                  <td>Lifeline Participant</td>
                  <td>Turns off the calculation of taxes that are not collected from Lifeline recipients</td>
                </tr>
                <tr>
                  <td><code>false</code></td>
                  <td>Not a Lifeline Participant</td>
                  <td>Collects all taxes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </td>
      </tr>
      <tr>
        <td>Incorporated</td>
        <td><code>int</code></td>
        <td>Specifies whether the customer is involved in this transaction inside or outside of the Local level of the jurisdiction.
          <br/>
          <br/>  
          <div class="mobile-table">
            <table class="styled-table">
              <thead>
                <tr>
                  <th>Value</th>
                  <th>Option</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>true</code></td>
                  <td>Incorporated</td>
                  <td>Jurisdiction is inside an incorporated location</td>
                </tr>
                <tr>
                  <td><code>false</code></td>
                  <td>Unincorporated</td>
                  <td>Jurisdiction is outside an incorporated location.  This option usually results in no local taxes returned</td>
                </tr>
              </tbody>
            </table>
          </div>
          <br/>
          Use <code>true</code> if unsure
        </td>
      </tr>
      <tr>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/exemption/">Exemptions</a></td>
        <td><code>exms</code></td>
        <td>The <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/exemption/">Exemptions</a> object allows you to specify the exemptions that apply to the transaction</td>
      </tr>
    </tbody>
  </table>
</div>


<h3 id="transaction">Transaction Data</h3>
Transaction data defines the <b>transaction</b> in terms of where the transaction takes place, what is being be taxed, and other details.  Set these keys in the <a class="dev-guide-link" href="#invoice"><code>Invoice</code></a> or <a class="dev-guide-link" href="#lineitem"><code>LineItem</code></a> objects.  

Transactions can also be customized through <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/tax-override/">Tax Overrides</a> and <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/safe-harbor-override/">Safe Harbor Overrides</a>.

<h4 id="invoice">Invoice Keys</h4>
See <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/invoice/"><code>Invoice</code> Reference</a> for more information.

<div class="mobile-table">
  <table class="styled-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Key</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/commit/">Document Code</a></td>
        <td><code>doc</code></td>
        <td>Identifies a single or group of transactions, quotes, or invoices in the calling system. This is a user-defined field limited to 150 characters
            <br/>
            Document Code must be set if <b>Commit</b> is <code>true</code>
        </td>
      </tr>
      <tr>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/commit/">Commit</a></td>
        <td><code>cmmt</code></td>
        <td>Specifies if the Document Code should be committed as soon as the tax calculation is processed
            <ul class="dev-guide-list">
                <li>If <b>Document Code</b> is provided but <b>Commit</b> is <code>null</code>, <b>Commit</b> is set to <code>false</code></li>
                <li>If <b>Commit</b> is <code>true</code>, <b>Document Code</b> must be set</li>
            </ul>
          <br/>
          <div class="mobile-table">
            <table class="styled-table">
              <thead>
                <tr>
                  <th>Value</th>
                  <th>Option</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>true</code></td>
                  <td>Committed</td>
                  <td>Document Code is committed</td>
                </tr>
                <tr>
                  <td><code>false</code></td>
                  <td>Uncommitted</td>
                  <td>Document Code is not committed or is uncommitted if previously committed and still within the current reporting period</td>
                </tr>
              </tbody>
            </table>
          </div>
        </td>
      </tr>
      <tr>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/jurisdiction-determination/">Bill To Jurisdiction</a></td>
        <td><code>bill</code></td>
        <td>Identifies the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/location/">location</a> to be billed.  BillTo is set on the invoice but can be overridden on the line item.</td>
      </tr>
      <tr>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/invoice-date/">Invoice Date</a></td>
        <td><code>date</code></td>
        <td>Date to be applied to the transaction or invoice.  Normally set to the bill date, invoice date, or call date (as applicable).  Invoice Date is set on the invoice but can be overridden on the line item.</td>
      </tr>
      <tr>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/invoice-mode/">Invoice Mode</a></td>
        <td><code>invm</code></td>
        <td>Indicates if all line items within an invoice should be processed individually or as one invoice
          <br/>
          <br/>  
          <div class="mobile-table">
            <table class="styled-table">
              <thead>
                <tr>
                  <th>Value</th>
                  <th>Option</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>true</code></td>
                  <td>Invoice Mode</td>
                  <td>Line items are part of a single invoice</td>
                </tr>
                <tr>
                  <td><code>false</code></td>
                  <td>Not Invoice Mode</td>
                  <td>Line items are unrelated</td>
                </tr>
              </tbody>
            </table>
          </div>
        </td>
      </tr>
      <tr>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/displaying-tax-results/">Return Detail</a></td>
        <td><code>dtl</code></td>
        <td>Indicates if individual line item taxes should be included in response
          <br/>
          <br/>  
          <div class="mobile-table">
            <table class="styled-table">
              <thead>
                <tr>
                  <th>Value</th>
                  <th>Option</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>true</code></td>
                  <td>Return Detailed Taxes</td>
                  <td>Return line item level tax results</td>
                </tr>
                <tr>
                  <td><code>false</code></td>
                  <td>Don't Return Detailed Taxes</td>
                  <td>Don't return line item level tax results</td>
                </tr>
              </tbody>
            </table>
          </div>
          <br/>
          ReturnDetail, ReturnSummary, or both must be set to <code>true</code>
        </td>
      </tr>
      <tr>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/displaying-tax-results/">Return Summary</a></td>
        <td><code>summ</code></td>
        <td>Indicates if the summarized taxes for the invoice should be included in the response
          <br/>
          <br/>  
          <div class="mobile-table">
            <table class="styled-table">
              <thead>
                <tr>
                  <th>Value</th>
                  <th>Option</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>true</code></td>
                  <td>Return Summary Taxes</td>
                  <td>Return summarized tax results when InvoiceMode (<code>invm</code> is <code>true</code></td>
                </tr>
                <tr>
                  <td><code>false</code></td>
                  <td>Don't Return Summary Taxes</td>
                  <td>Don't return summarized tax results</td>
                </tr>
              </tbody>
            </table>
          </div>
          <br/>
          ReturnDetail, ReturnSummary, or both must be set to <code>true</code>
        </td>
      </tr>
      <tr>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/optional-fields/">Optional Fields</a></td>
        <td><code>opt</code></td>
        <td>Optional reporting fields useful in reporting.  <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/optional-fields/">Optional Fields</a> do not impact taxation</td>
      </tr>
    </tbody>
  </table>
</div>

<h4 id="lineitem">LineItem Keys</h4>
See <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/line-item/"><code>LineItem</code> Reference</a> for more information.

<div class="mobile-table">
  <table class="styled-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Key</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Reference Code</td>
        <td><code>ref</code></td>
        <td>Reference ID for the line item</td>
      </tr>
      <tr>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/jurisdiction-determination/">Origination/Ship From Jurisdiction</a></td>
        <td><code>from</code></td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/location/">Location</a> for the origination point. If <code>null</code>, the BillTo location is used</td>
      </tr>
      <tr>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/jurisdiction-determination/">Termination/Ship To Jurisdiction</a></td>
        <td><code>to</code></td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/location/">Location</a> for the destination point. If <code>null</code>, the BillTo location is used</td>
      </tr>
      <tr>
        <td>Charge</td>
        <td><code>chg</code></td>
        <td>Specifies the amount of the transaction to be taxed.  For <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/tax-inclusive/">Tax Inclusive</a> transactions, Charge specifies the desired total (base charge + taxes)
            <br/>
            Defaults to <code>0</code> if not set
        </td>
      </tr>
      <tr>
        <td>Lines</td>
        <td><code>line</code></td>
        <td>Specifies the line count.  Defaults to <code>0</code> if not set
            <br/>
            When local service is provided, a transaction should be generated with Lines populated with the number of lines the customer subscribes to.  This information is used to generate per line taxes usually associated with local E911 charges and local telecommunications relay service taxes and other assorted taxes.
        </td>
      </tr>
      <tr>
        <td>Locations</td>
        <td><code>loc</code></td>
        <td>Specifies the number of customer locations
            <br/>
            Defaults to <code>0</code> if not set</td>
      </tr>
      <tr>
        <td>Minutes</td>
        <td><code>min</code></td>
        <td>Specifies the length of a phone call.  Defaults to <code>0</code> if not set
            <br/>
            Used in the generation of taxes that are specified as per minute flat fees in some taxing jurisdictions. The number is a double so any seconds added should be in decimal format.  For example, use <code>20.5</code> for 20 minutes and 30 seconds.
        </td>
      </tr>
      <tr>
        <td>Sale Type</td>
        <td><code>sale</code></td>
        <td>Indicates if the transaction retail or wholesale
          <br/>
          <br/>  
          <div class="mobile-table">
            <table class="styled-table">
              <thead>
                <tr>
                  <th>Value</th>
                  <th>Option</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>0</code></td>
                  <td>wholesale</td>
                  <td>Specifies that the transaction is a sale to another company that will resell the product or service to a consumer</td>
                </tr>
                <tr>
                  <td><code>1</code></td>
                  <td>Retail</td>
                  <td>Specifies that the transaction is a sale to an end user</td>
                </tr>
                <tr>
                  <td><code>2</code></td>
                  <td>Consumed</td>
                  <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/sau/">Sales and Use</a> only  
                  <br/>
                  Specifies that the transaction is for an item that is consumed directly</td>
                </tr>
                <tr>
                  <td><code>3</code></td>
                  <td>Vendor Use</td>
                  <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/sau/">Sales and Use</a> only
                  <br/>
                  Specifies that the transaction is for an item that is subject to vendor use tax</td>
                </tr>
              </tbody>
            </table>
          </div>
        </td>
      </tr>
      <tr>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/private-line/">Private Line Split</a></td>
        <td><code>plsp</code></td>
        <td>Percentage split for a private line transaction.  Set as a decimal and defaults to <code>0</code> if not set</td>
      </tr>
      <tr>
        <td>Tax Inclusive</td>
        <td><code>incl</code></td>
        <td>Indicates if the charge for the line item includes tax
          <br/>
          <br/>  
          <div class="mobile-table">
            <table class="styled-table">
              <thead>
                <tr>
                  <th>Value</th>
                  <th>Option</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>true</code></td>
                  <td>Tax Inclusive</td>
                  <td>Taxes are included in the Line Item charge</td>
                </tr>
                <tr>
                  <td><code>false</code></td>
                  <td>Not Tax Inclusive</td>
                  <td>Taxes not included in the Line Item charge</td>
                </tr>
              </tbody>
            </table>
          </div>
        </td>
      </tr>
      <tr>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/proration/">Proration</a></td>
        <td><code>pror</code></td>
        <td>Percentage allocation for a pro-rated calculation of fixed taxes.  Set as a decimal and defaults to <code>0</code> if not set</td>
      </tr>
      <tr>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/bridge-conferencing/">Bridge Conferencing</a></td>
        <td><code>brdg</code></td>
        <td>Data for conference bridge transactions</td>
      </tr>
      <tr>
        <td>Transaction Type</td>
        <td><code>tran</code></td>
        <td>Transaction Type ID of the service being taxed.  Use the <code>/api/v2/afc/tspairs</code> <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/getting-started/environments-endpoints/#lookups">endpoint</a> for a list of transaction type IDs.</td>
      </tr>
      <tr>
        <td>Service Type</td>
        <td><code>serv</code></td>
        <td>Service Type ID of the service being taxed.  Use the <code>/api/v2/afc/tspairs</code> <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/getting-started/environments-endpoints/#lookups">endpoint</a> for a list of service type IDs.</td>
      </tr>
      <tr>
        <td>Debit</td>
        <td><code>dbt</code></td>
        <td>Indicates if the transaction is prepaid
          <br/>
          <br/>  
          <div class="mobile-table">
            <table class="styled-table">
              <thead>
                <tr>
                  <th>Value</th>
                  <th>Option</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>true</code></td>
                  <td>Debit</td>
                  <td>Perform a debit call tax calculation</td>
                </tr>
                <tr>
                  <td><code>false</code></td>
                  <td>Not Debit</td>
                  <td>Debit does not apply</td>
                </tr>
              </tbody>
            </table>
          </div>
          <br/>
          Set Debit to <code>true</code> <i>only</i> if you are a prepaid seller
        </td>
      </tr>
      <tr>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/adjustment/">Adjustment</a></td>
        <td><code>adj</code></td>
        <td>Indicates if this line item is a credit or adjustment
          <br/>
          <br/>  
          <div class="mobile-table">
            <table class="styled-table">
              <thead>
                <tr>
                  <th>Value</th>
                  <th>Option</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>true</code></td>
                  <td>Adjustment</td>
                  <td>Is a credit/adjustment</td>
                </tr>
                <tr>
                  <td><code>false</code></td>
                  <td>Not an Adjustment</td>
                  <td>Not a credit or adjustment</td>
                </tr>
              </tbody>
            </table>
          </div>
        </td>
      </tr>
      <tr>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/adjustment/">Adjustment Method</a></td>
        <td><code>adjm</code></td>
        <td>Always set to <code>0</code>.  The use of this field has been <b>deprecated</b></td>
      </tr>
      <tr>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/adjustment/">Discount Type</a></td>
        <td><code>disc</code></td>
        <td>Identifies the discount type for an adjustment
          <br/>
          <br/>  
          <div class="mobile-table">
            <table class="styled-table">
              <thead>
                <tr>
                  <th>Value</th>
                  <th>Option</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>0</code></td>
                  <td>None</td>
                  <td>Discount Type not applicable</td>
                </tr>
                <tr>
                  <td><code>1</code></td>
                  <td>Retail Product</td>
                  <td>An amount subtracted from the original price to arrive at a lower price</td>
                </tr>
                <tr>
                  <td><code>2</code></td>
                  <td>Manufacturer Product</td>
                  <td>A credit applied to the total amount reimbursed to either the retailer or the customer by the manufacturer</td>
                </tr>
                <tr>
                  <td><code>3</code></td>
                  <td>Account Level</td>
                  <td>A stand-alone discount that is not applied against any service but instead as a stand-alone product</td>
                </tr>
                <tr>
                  <td><code>4</code></td>
                  <td>Subsidized</td>
                  <td>A credit for telephone service where the telephone provider provides a service to a lifeline eligible customer. The credit is applied to the subscriber line charge</td>
                </tr>
                <tr>
                  <td><code>5</code></td>
                  <td>Goodwill</td>
                  <td>A credit applied to customer invoices for the purpose of engendering customer goodwill. For example, compensation for a service outage</td>
                </tr>
              </tbody>
            </table>
          </div>
        </td>
      </tr>
      <tr>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/optional-fields/">Optional Fields</a></td>
        <td><code>opt</code></td>
        <td>Optional reporting fields useful in reporting.  Optional fields do not impact taxation</td>
      </tr>
      <tr>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/sau/">Attribute Property</a></td>
        <td><code>prop</code></td>
        <td>Attribute/property value for sales and use transaction/service pairs</td>
      </tr>
    </tbody>
  </table>
</div>


<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/proration/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/exclusion/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>