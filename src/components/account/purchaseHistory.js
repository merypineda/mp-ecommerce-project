import React, { Component } from 'react';

import PageTitle from '../pageTitle';
import Purchases from './purchases';
import PurchaseDetail  from './purchaseDetail';

class PurchaseHistory extends Component {
    render() {
        return (
            <div className='purchase-history'>
                <PageTitle className='purchase-history__page-title'  title='Purchase History' />
                <div className='purchase-history__content'>
                <Purchases className='purchase-history__purchases' />
                <PurchaseDetail className ="purchase-history__details" />
                </div>

                <div className='purchase-history__bottom-border'></div>
            </div>
        );
    }
} 

export default PurchaseHistory;