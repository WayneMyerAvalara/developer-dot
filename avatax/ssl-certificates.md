---
layout: default
title: SSL Certificates
product: avaTax
doctype: use_cases
nav: apis
disqus: 1
---
<h2>Downloading the SSL Certificates public keychain</h2>
Some web clients (such as cURL for Windows) will require you to download the Avalara AvaTax SSL public keychain and install it into your client's keychain repository. Refer back to the steps below only if you have problems establishing the HTTPS connection to the Avalara AvaTax REST API. Both development and production use a Verisign certificate.

<h4>Root Certificate (directly from the CA)</h4>
<ol>
	<li>Go to <a target="_blank" href="https://www.digicert.com/digicert-root-certificates.htm">Root Certificate CA</a>.</li>
	<li>Download the  "DigiCert Global Root G2" certificate.</li>
	<li>Save the file in your preferred directory named like "root-certs-ca-bundle.crt".</li>
	<li>Register that file following your standard certificate store process.</li>
</ol>

<h4>Intermediate Certificate (directly from the CA)</h4>
<ol>
	<li>Go to <a target="_blank" href="https://www.digicert.com/digicert-root-certificates.htm#intermediates">Intermediate Certificate CA</a>.</li>
	<li>Download the "GeoTrust TLS RSA CA G1" certificate.</li>
	<li>Save the file in your preferred directory named like "intermiediate-certs-ca-bundle.crt".</li>
	<li>Register that file following your standard certificate store process.</li>
</ol>

<h4>End-Entity Certificate (AvaTax SSL certificate)</h4>
<ol>
	<li>Download this file: <a href="../../public/data/AvaTaxCertificate.cer">AvaTaxCertificate.cer</a></li>
	<li>Save the file in your preferred directory named like "AvaTaxCertificate.cer".</li>
	<li>Register that file following your standard certificate store process.</li>
</ol>

<hr />
