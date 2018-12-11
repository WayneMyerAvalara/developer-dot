---
layout: page
title:  Chapter 5.1.5 - Line Item
product: communications
doctype: comms_rest_v2_dev_guide
chapter: reference
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/location/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/reference/tax-override/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

<h3>Line Item</h3>

The <code>LineItem</code> object contains <b>detailed</b> information about a <b>single transaction</b>:

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
            <td><code>[string]</code>Reference code
            <br/>
            Reference ID for line item.
            </td>
        </tr>
        <tr>
            <td><code>from</code></td>
            <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/location/"><code>[Location]</code></a> The point of origin for the line item
            <br>
            There are several ways to input location information. See the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/location/">Location</a> section for more details.
            </td>
        </tr>
        <tr>
            <td><code>to</code></td>
            <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/location/"><code>[Location]</code></a> The destination of the line item
            <br>
            There are several ways to input location information. See the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/location/">Location</a> section for more details.
            </td>
        </tr>
        <tr>
            <td><code>chg</code></td>
            <td><code>[double]</code> Charge Amount
            </td>
        </tr>
        <tr>
            <td><code>line</code></td>
            <td><code>[int]</code> Number of lines
            </td>
        </tr>
        <tr>
            <td><code>loc</code></td>
            <td><code>[int]</code> Number of locations
            </td>
        </tr>
        <tr>
            <td><code>min</code></td>
            <td><code>[double]</code> Number of minutes
            </td>
        </tr>
        <tr>
            <td><code>sale</code></td>
            <td><code>[int]</code> <span class="t5">required</span> Sale Type
                <br>
                Indicates the type transaction, such as retail or wholesale.
                <ul class="dev-guide-list">
                    <li><code>0</code> Wholesale</li>
                    <li><code>1</code> Retail</li>
                    <li><code>2</code> Consumed (Sales and Use Only)</li>
                    <li><code>3</code> Vendor Use (Sales and Use Only)</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td><code>plsp</code></td>
            <td><code>[double]</code> Private Line Split
                <br>
                A percentage used to split a transaction charge between two points. For example:
                <br>
                <ul class="dev-guide-list">
                    <li>A transaction has two points: Point 'A' and Point 'Z'</li>
                    <li>A <code>plsp</code> of <code>0.25</code> means 25% of the taxes are attributed to Point 'A', the remaining 75% to Point 'Z'</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td><code>incl</code></td>
            <td><code>[bool]</code> Tax Inclusive
                <br/>
                Indicates if the charge for this line item is tax inclusive.
                <ul class="dev-guide-list">
                    <li><code>true</code> Tax is included in the charge</li>
                    <li><code>false</code> Tax is exclusive to the charge</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td><code>pror</code></td>
            <td><code>[double]</code> Pro-rated Percentage
            <br>
            A percentage used for the pro-rated calculation of fixed taxes.
            </td>
        </tr>
        <tr>
            <td><code>brdg</code></td>
            <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/bridge-data/"><code>[BridgeData]</code></a> Bridge Data
            <br>
            A list of <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/bridge-data/">Bridge Conference</a> specific settings to apply to the line item.
            </td>
        </tr>
        <tr>
            <td><code>tran</code></td>
            <td><code>[int]</code> <span class="t5">required</span> Transaction Type ID
            <br>
            The first part of the T/S Pair that defines the product to be taxed.
            <br>
            For a list of transaction/service types, check out the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/getting-started/environments-endpoints/"><code>/api/v2/afc/tspairs</code> endpoint</a>.
            </td>
        </tr>
        <tr>
            <td><code>serv</code></td>
            <td><code>[int]</code> <span class="t5">required</span> Service Type ID
            <br>
            The second part of the T/S Pair that defines the product to be taxed.
            <br>
            For a list of transaction/service types, check out the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/getting-started/environments-endpoints/"><code>/api/v2/afc/tspairs</code> endpoint</a>.
            </td>
        </tr>
        <tr>
            <td><code>dbt</code></td>
            <td><code>[bool]</code> Debit
                <br>
                Indicates if this line item is a debit card transaction.
                <ul class="dev-guide-list">
                    <li><code>true</code> Apply debit card logic to the transaction</li>
                    <li><code>false</code> Not a debit card transaction</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td><code>adj</code></td>
            <td><code>[bool]</code> IsAdjustment
                <br>
                Indicates if this line item is an adjustment.
                <ul class="dev-guide-list">
                    <li><code>true</code> The transaction represents a credit or adjustment</li>
                    <li><code>false</code> The transaction does not represent a credit or adjustment</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td><code>adjm</code></td>
            <td><code>[int]</code> Adjustment Method
                <br>
                Always set to <code>0</code>.  The use of this field has been <b>deprecated</b>
            </td>
        </tr>
        <tr>
            <td><code>disc</code></td>
            <td><code>[int]</code> Discount Type for adjustments
                <br>
                <ul class="dev-guide-list">
                    <li><code>0</code> <b>None</b></li>
                    <li><code>1</code> <b>Retail Product</b>: An amount subtracted from the original price to arrive at a lower price.</li>
                    <li><code>2</code> <b>Manufacturer Product</b>: A discount of the total amount reimbursed to either the retailer or the customer by the manufacturer.</li>
                    <li><code>3</code> <b>Account Level</b>: A stand-alone discount that is not applied against any service but instead as a stand-alone product.</li>
                    <li><code>4</code> <b>Subsidized</b>: A discount caused exclusively in telephone service where the telephone provider provides a service to a lifeline eligible customer. The discount will be on the local exchange service.</li>
                    <li><code>5</code> <b>Goodwill</b>: The total discount of a service that is recorded for accounting purposes but never billed to a customer.</li>
                </ul>
            </td>
        </tr>
        <tr>
        <td><code>opt</code></td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/key-value-pair/"><code>[KeyValuePair]</code></a> Optional Fields
          <br>
          A list of <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/key-value-pair/">Optional Fields</a> to apply to the line item.
        </td>
      </tr>
      <tr>
        <td><code>prop</code></td>
        <td><code>[int]</code> Attribute Property
            <br>
            The Attribute property used for supported Sales and Use Transaction/Service pairs.
        </td>
      </tr>
      <tr>
        <td><code>bill</code></td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/location/"><code>[Location]</code></a> Bill To Location
          <br>
          There are several ways to input location information. See the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/location/">Location</a> section for more details.
        </td>
      </tr>
      <tr>
        <td><code>cust</code></td>
        <td><code>[int]</code> Customer Type
          <br>
          <ul class="dev-guide-list">
            <li><code>0</code>: Residential</li>
            <li><code>1</code>: Business</li>
            <li><code>2</code>: Senior Citizen</li>
            <li><code>3</code>: Industrial</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td><code>lfln</code></td>
        <td><code>[bool]</code> Lifeline
          <ul class="dev-guide-list">
            <li><code>true</code>: The customer is a Lifeline participant</li>
            <li><code>false</code>: The customer is not a Lifeline participant</li>
          </ul>
          Lifeline is a federal program that subsidizes the cost of phone and internet for eligible customers.
        </td>
      </tr>
      <tr>
        <td><code>date</code></td>
        <td><code>[timestamp]</code> Invoice Date
          <br>
          <i>ex.</i><code> 2009-12-01T03:00:00</code>
          <br>
          The date when the transaction took place. <b>An accurate timestamp in this field is important!</b> This will affect the rules our tax engine applies when calculating taxes. 
          <br>
          <br>
          For example, if you submit a CalcTaxes request with a <code>date</code> of <code>7/1/2018</code>, our tax engine will use the rules that apply for your jurisdiction on <code>7/1/2018</code>. If the transaction <i>actually</i> occurred on <code>7/25/2018</code>, and the tax rate for this transaction changed after <code>7/1/2018</code>, you may receive incorrect tax information.
        </td>
      </tr>
    </tbody>
  </table>
</div>

<h4>Note</h4>
These fields override the same fields set on the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/invoice/">Invoice</a>:
<ul class="dev-guide-list">
    <li>Bill To (<code>bill</code>)</li>
    <li>Customer Type (<code>cust</code>)</li>
    <li>Lifeline (<code>lfln</code>)</li>
    <li>Invoice Date (<code>date</code>)</li>
</ul>

<h3>Example</h3>

{% highlight json %}
"itms": [
  {
    "ref": "Reference Code for Line Item",
    "from": {
      // Location
    },
    "to": {
      // Location
    },
    "chg": 100,
    "line": 0,
    "loc": 0,
    "min": 0,
    "sale": 1,
    "plsp": 0,
    "incl": false,
    "pror": 0,
    "brdg": {
      // Bridge Data
    },
    "tran": 19,
    "serv": 6,
    "dbt": false,
    "adj": false,
    "adjm": 0,
    "disc": 0,
    "opt": [
      {
        // Key Value Pair
      }
    ],
    "prop": 0,
    "bill": {
      // Location
    },
    "cust": 0,
    "lfln": false,
    "date": "2018-09-23T20:31:53.452Z"
  }
]
{% endhighlight %}

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/location/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/reference/tax-override/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>