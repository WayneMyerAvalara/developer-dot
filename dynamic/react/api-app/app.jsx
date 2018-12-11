import React from 'react';
import PropTypes from 'prop-types';

import AllEndpointsContainer from './containers/allEndpointsContainer';
import DownloadPostmanCollection from './containers/downloadPostmanCollection';
import ApiDescription from './components/apiDescription';
import {connect} from 'react-redux';

const App = ({isEmpty}) => (
    <div>

        {isEmpty ?
            <div>
                <ApiDescription />
                    <h2>Top 10 EndPoints</h2>


<ul>
    <li><h2><a href='https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Utilities/Ping/' target='_blank'>Ping</a></h2></li>
    <li>This API helps diagnose connectivity problems between your application and AvaTax; you may call this API even if you do not have verified connection credentials. The results of this API call will help you determine whether your computer can contact AvaTax via the network, whether your authentication credentials are recognized, and the roundtrip time it takes to communicate with AvaTax.</li>
    <li><h2><a href='https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Transactions/CreateTransaction/' target='_blank'>CreateTransaction</a></h2></li>
    <li>Records a new transaction in AvaTax. A transaction represents a unique potentially taxable action that your company has recorded, and transactions include actions like sales, purchases, inventory transfer, and returns (also called refunds). </li>
    <li><h2><a href='https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Addresses/ResolveAddress/' target='_blank'>ResolveAddress</a></h2></li>
    <li>Resolve an address against Avalara's address-validation system. </li>
    <li><h2><a href='https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Transactions/CommitTransaction/' target='_blank'>CommitTransaction</a></h2></li>
    <li>Marks a transaction by changing its status to Committed.</li>
    <li><h2><a href='https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Transactions/VoidTransaction/' target='_blank'>VoidTransation</a></h2></li>
    <li>Voids the current transaction uniquely identified by this URL.</li>
    <li><h2><a href='https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Transactions/AdjustTransaction/' target='_blank'>AdjustTransactions</a></h2></li>
    <li>Replaces the current transaction uniquely identified by this URL with a new transaction.</li>
    <li><h2><a href='https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Transactions/AuditTransaction/' target='_blank'>AuditTransaction</a></h2></li>
    <li>Retrieve audit information about a transaction stored in AvaTax.</li>
    <li><h2><a href='https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Transactions/RefundTransaction/' target='_blank'>RefundTransaction</a></h2></li>
    <li>Create a refund for a transaction.</li>
    <li><h2><a href='https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Customers/CreateCustomers/' target='_blank'>CreateCustomers</a></h2></li>
    <li>Create one or more customers for this company.</li>
    <li><h2><a href='https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Certificates/CreateCertificates/' target='_blank'>CreateCertificates</a></h2></li>
    <li>Record one or more certificates document for this company.</li>
</ul>
                <DownloadPostmanCollection />
            </div> :
            <AllEndpointsContainer />
        }
        <br />
    </div>
);

const mapStateToProps = (state) => {
    return {
        tagName: state.tagName,
        endpoint: state.apiEndpoint || null,
        isEmpty: state.apiEndpoints.length === 0
    };
};

App.displayName = 'App';
App.propTypes = {
    isEmpty: PropTypes.bool
};

export default connect(mapStateToProps)(App);
