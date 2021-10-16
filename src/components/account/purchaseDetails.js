import React, { Component } from 'react';

class PurchaseDetails extends Component {
    render() {
        const { className } = this.props;

        return (
            <div className={`${className} purchase-details`}>
                purchase details goes here
            </div>
        );
    }
}

export default PurchaseDetails;