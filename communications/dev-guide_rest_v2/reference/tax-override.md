---
layout: page
title:  Chapter 5.1.6 - Tax Override
product: communications
doctype: comms_rest_v2_dev_guide
chapter: reference
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/line-item/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/reference/safe-harbor-override/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

<h3>Tax Override</h3>

The <code>TaxOverride</code> object allows the user to change <b>tax rates</b>:

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
        <td><code>loc</code></td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/location/"><code>[Location]</code></a> <span class="t5">required</span> Override location information
          <br>
          There are several ways to input location information. See the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/location/">Location</a> section for more details.
        </td>
      </tr>
      <tr>
        <td><code>scp</code></td>
        <td>
          <code>[int]</code> <span class="t5">required</span> Scope
          <br/>
          Scope to which the override is applied:  Country, State, County, or City
          <ul class="dev-guide-list">
            <li><code>0</code>: Country</li>
            <li><code>1</code>: State</li>
            <li><code>2</code>: County</li>
            <li><code>3</code>: City</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td><code>tid</code></td>
        <td>
          <code>[int]</code> <span class="t5">required</span> Tax Type ID
          <br/>
          Tax Type to override.  For a list of Tax Type IDs, see the <a class ="dev-guide-link" href="/communications/dev-guide_rest_v2/getting-started/environments-endpoints/"><code>/api/v2/afc/taxtype/{taxType}</code> endpoint.</a>
        </td>
      </tr>
      <tr>
        <td><code>lvl</code></td>
        <td>
          <code>[int]</code> <span class="t5">required</span> Tax Level ID
          <br/>
          Tax Level to override.
          <ul class="dev-guide-list">
            <li><code>0</code>: Federal</li>
            <li><code>1</code>: State</li>
            <li><code>2</code>: County</li>
            <li><code>3</code>: City</li>
          </ul> 
        </td>
      </tr>
      <tr>
        <td><code>lvlExm</code></td>
        <td>
          <code>[bool]</code> Level Exemptible
          <br/>
          Indicates if the tax can be exempted using level exemptions.
          <ul class="dev-guide-list">
            <li><code>true</code>: Level Exemptible</li>
            <li><code>false</code>: Not Level Exemptible</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td><code>brkt</code></td>
        <td>
          <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/tax-bracket/"><code>[TaxBracket]</code></a> <span class="t5">required</span> List of <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/tax-bracket/">tax brackets</a> for the override
        </td>
      </tr>
    </tbody>
  </table>
</div>
<br>

<h3>Example</h3>

{% highlight json %}
"ovr": [
  {
    "loc": {
      // Location
    },
    "scp": 1,
    "tid": 25,
    "lvl": 2,
    "lvlExm": true,
    "brkt": [
      {
        // Tax Bracket
      }
    ]
  }
]
{% endhighlight %}

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/line-item/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/reference/safe-harbor-override/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>