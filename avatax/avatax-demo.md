---
layout: page
categories: [avatax, api]
product: avatax
doctype: use_cases
---


<script type='text/javascript'>
    var map;

    const infoboxTemplate = `
        <div class="demo-infobox">
            <h4 id="demo-infobox-header" style="display: inline;">Getting Started</h4>
            <i class="glyphicon glyphicon-remove" id="demo-infobox-icon" style="display: inline;float: right;padding-top:5px;" onClick="hideInfobox()"></i>
            <p id="demo-infobox-text" style="margin-bottom:0;">
                Calculating sales tax is time consuming and painful, but it doesn\'t have to be. Avalara\'s sales tax API automates the process for you! All you need to do to start making quick calculations is choose a product or service and where you\'re shipping from and to. Tinker with the options on the left, click "Submit" and watch the magic happen!
            </p>
            <div class="loading-pulse" style="display: none;margin-top:35px;"></div>
        </div>
    `;

    function displayToolTip(showInfobox) {
        if (showInfobox || showInfobox === undefined) {
            const topLeft = (map.getPageX(), map.getPageY());

            //Create an infobox that will render in the top left of the map.
            const infobox = new Microsoft.Maps.Infobox(topLeft, {
                htmlContent: infoboxTemplate,
            });

            //Assign the infobox to a map instance.
            infobox.setMap(map);
        }

        return;
    }

    function GetMapWithLine(destLat, destLong, srcLat, srcLong, usAddresses, showInfobox) {
        if(destLat == null || destLong == null) {
            // destLat = 33.6846603698176;
            // destLong = -117.850629887389;
            map = new Microsoft.Maps.Map('#myMap', {zoom: 3});
            displayToolTip(showInfobox);
            return;
        }  

        //Single location layer (pushpin)
        if(srcLat == null || srcLong == null) {

            var location  = new Microsoft.Maps.Location(destLat, destLong);         
            map = new Microsoft.Maps.Map('#myMap', {center: location});
            var layer = new Microsoft.Maps.Layer("MyPushpinLayer1");
            layer.add(new Microsoft.Maps.Pushpin(location));
            displayToolTip(showInfobox);
            map.layers.insert(layer);

            //Exit out since it is a single location.
            return;
        }

        //Source and destination layer (polyline)
        map = new Microsoft.Maps.Map('#myMap', {});
        center = map.getCenter();
        let srcLocation = new Microsoft.Maps.Location(srcLat, srcLong);
        let destLocation = new Microsoft.Maps.Location(destLat, destLong);
        var coords = [destLocation, srcLocation];
        var line = new Microsoft.Maps.Polyline(coords, {strokeColor: 'orange', strokeThickness: 3});
        displayToolTip(showInfobox);
        map.entities.push(line);
        map.setView({
            center: new Microsoft.Maps.Location(srcLat + 1, destLong + 1),
            zoom: usAddresses ? 4 : 2,
        });
    }
</script>
<script type='text/javascript' src='https://www.bing.com/api/maps/mapcontrol?callback=GetMapWithLine&key=Ahgp_E6MHtyMYBJPCllMKTwJk7Indytl8hVm-Boe6mbyWbcyZvVBUePMDP5OLeiH' async defer></script>

<!-- demo container -->
<div class="row">
    <!-- shortcuts container -->
    <div class="col-md-3">
        <!-- page header -->
        <h1 style="margin-top:0;">Sales Tax API Demo</h1>
        <div id="demo-shortcuts">
            <!-- steps to submit -->
            <div class="row">
                <!-- step 1 / ship to -->
                <button class="accordion active" id='step-one-btn'>Step 1: Where are you shipping to?</button>
                <div class="panel" style="display:block;">
                    <p>Choose a pre-selected address</p>
                    <form id="dropdown-dest-addresses" onChange="fillWithSampleData();" class="demo-form">
                        <!-- loop thru addresses -->
                        {% for address in site.data.demo_page.addresses %}
                            <label class="demo-label-container">
                                <input name="address" type="radio" value="{{ address.value }}" lat="{{ address.lat }}" long="{{ address.long }}" class="demo-radio" addressType="{{ address.type }}" country="{{ address.country }}"/>
                                <span class="demo-label"> {{ address.city }}</span>
                                <br>
                                <i class="glyphicon glyphicon-map-marker demo-city-marker"></i> 
                                {{ address.street }}
                                <br>
                                {% if address.region %}
                                    <span class="demo-city-zip">{{ address.region }}</span>
                                    <br>
                                {% endif %}
                                <span class="demo-city-zip">{{ address.countryZip }}</span>
                            </label>
                            <br>
                        {% endfor %}
                    </form>
                    <button class="btn btn-primary" type="button" onClick="accordionTrigger('step-one-btn', 'step-two-btn');" style="display:block;">
                        Next
                    </button>
                </div>
                <!-- step 2 / products -->
                <button class="accordion" id='step-two-btn'>Step 2: What's being taxed?</button>
                <div class="panel">
                    <p>Choose a common product or service to calculate tax</p>
                    <form id="dropdown-products" onChange="fillWithSampleData();" class="demo-form">
                        <!-- loop thru products -->
                        {% for product in site.data.demo_page.products %}
                            <label class="demo-label demo-label-container">
                                <input value="{{ product.taxCode }}" name="product" id="{{ product.inputId }}" type="checkbox" description="{{ product.name }}" hsCodeToUs="{{ product.hsCodeToUs }}" hsCodeToUk="{{ product.hsCodeToUk }}" hsCodeToBr="{{ product.hsCodeToBr }}" hsCodeToIn="{{ product.hsCodeToIn }}" mass="{{ product.mass }}" unit="{{ product.unit }}"  class="demo-radio" {{ product.checked }}/>
                                <input value="{{ product.value }}" type="text" id="{{ product.inputId }}-amount"  style="width: 50px;">
                                <span class="demo-label"> {{ product.name }} 
                                {% if product.subLabel %}
                                    <i>{{ product.subLabel }}</i>
                                {% endif %}
                                </span>
                            </label>
                            <br>
                        {% endfor %}
                    </form>
                    <button class="btn btn-primary" type="button" onClick="accordionTrigger('step-two-btn','step-three-btn');" style="display:block;">
                        Next
                    </button>
                </div>
                <!-- step 3 / ship from -->
                <button class="accordion" id='step-three-btn'>Step 3: Where are you shipping from? (optional) </button>
                <div class="panel">
                    <p>Choose a pre-selected address</p>
                    <form id="dropdown-src-addresses" onChange="fillWithSampleData();" class="demo-form">
                        <!-- loop thru addresses -->
                        {% for address in site.data.demo_page.addresses %}
                            <label class="demo-label-container">
                                <input name="srcAddress" type="radio" value="{{ address.value }}" lat="{{ address.lat }}" long="{{ address.long }}" class="demo-radio" addressType="{{ address.type }}" country="{{ address.country }}"/>
                                <span class="demo-label"> {{ address.city }}</span>
                                <br>
                                <i class="glyphicon glyphicon-map-marker demo-city-marker"></i> 
                                {{ address.street }}
                                <br>
                                {% if address.region %}
                                    <span class="demo-city-zip">{{ address.region }}</span>
                                    <br>
                                {% endif %}
                                <span class="demo-city-zip">{{ address.countryZip }}</span>
                            </label>
                            <br>
                        {% endfor %}
                    </form>
                    <button class="btn btn-primary" type="button" onClick="ApiRequest();" style="display:block;">
                        Submit
                    </button>
                </div>
            </div>
        </div>
        <!-- end shortcuts -->
    </div>
    <!-- map and api details container -->
    <div class="col-md-9">
        <!-- map row -->
        <div class="row">
            <div id="myMap"></div>
        </div>
        <!-- api details row -->
        <div class="row" id="demo-api-details">
            <!-- request output -->
            <div class="console-req-container api-console-output col-md-6" id="demo-console-req" >
                <div class="row" style="margin-top:15px;margin-left:10px;margin-right:10px;">
                    <h5 class="console-output-header" style="display:inline-block;margin-left:0px;">
                        Request
                    </h5>
                    <div class="form-group" style="display: inline;" onChange="fillWithSampleData();">
                        <select class="form-control" id="req-type" style="display: inline;width: 100px;">
                            <option value="JSON">JSON</option>
                            <option value="cURL">cURL</option>
                            <option value="C#">C# SDK</option>
                            <option value="PHP">PHP SDK</option>
                            <option value="Python">Python SDK</option>
                            <option value="Ruby">Ruby SDK</option>
                            <option value="Java">Java SDK</option>
                            <option value="JS">JS SDK</option>
                        </select>
                    </div>
                    <div style="display:inline-block;float:right;" class="btn-group">
                        <button class="btn btn-link" type="submit" onClick="copyToClipboard('#demo-console-input');" style="color:#000000;margin-right:5px;display:inline;">
                            <i class="glyphicon glyphicon-copy"></i>Copy
                        </button>
                        <button class="btn btn-link" style="display:inline;color:#000000;margin-right:5px;">
                            <a href="https://developer.avalara.com/api-reference/avatax/rest/v2/models/CreateTransactionModel/" style="color:#000000;" target="_blank">
                                <i class="glyphicon glyphicon-list-alt"></i>Docs
                            </a>
                        </button>
                    </div>
                </div>
                <div class="code-snippet reqScroll" id="demo-console-req" style="height:400px;">
                    <pre id="demo-console-input">{ }</pre>
                </div>
            </div>
            <!-- response output -->
            <div class="col-md-6 console-res-container api-console-output" id="demo-console-res">
                <div class="row" style="margin-top:15px;margin-left:10px;margin-right:10px;">
                    <h5 class="console-output-header" style="display:inline-block;margin-left:0px;">
                        Response
                    </h5>
                    <div style="display:inline-block;float:right;" class="btn-group">
                        <button class="btn btn-link" type="submit" onClick="copyToClipboard('#demo-console-output');" style="color:#000000;margin-right:5px;display:inline;">
                            <i class="glyphicon glyphicon-copy"></i>Copy
                        </button>
                        <button class="btn btn-link" style="display:inline;color:#000000;margin-right:5px;">
                            <a href="https://developer.avalara.com/api-reference/avatax/rest/v2/models/TransactionModel/" style="color:#000000;" target="_blank">
                                <i class="glyphicon glyphicon-list-alt"></i>Docs
                            </a>
                        </button>
                    </div>
                </div>
                <div class="code-snippet respScroll" style="height:400px;">
                    <div class="loading-pulse" style="display: none;"></div>
                    <pre id="demo-console-output">{ }</pre>
                </div>
            </div>
            <!-- end response output -->
        </div>
        <!-- end api details row-->
    </div>
    <!-- end map & api details container-->
</div>
<!-- end demo container -->