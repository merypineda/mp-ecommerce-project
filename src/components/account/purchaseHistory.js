import React, { Component } from 'react';

import PageTitle from '../pageTitle';
import Purchases from './purchases';
import PurchaseDetails  from './purchaseDetails'

class PurchaseHistory extends Component {
    render() {
        return (
            <div className='purchase-history'>
                <PageTitle className='purchase-history__page-title'  title='Purchase History' />
                <Purchases className='purchase-history__purchases' />
                <PurchaseDetails className ="purchase-history__details" />
                <div className='purchase-history__bottom-border'></div>
            </div>
        );
    }
} 

export default PurchaseHistory;