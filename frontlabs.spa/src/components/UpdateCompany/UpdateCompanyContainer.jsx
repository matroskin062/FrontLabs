import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import UpdateCompany from './UpdateCompany';
import {
    getCompanyById,
    updateCompany,
    updateCompanyNameInput
} from '../../redux/update-company-reducer';

class UpdateCompanyContainer extends Component {
    componentDidMount() {
        this.props.getCompanyById(this.props.match.params.id);
    }

    render() {
        return (
            <UpdateCompany {...this.props}/>
        )
    }
};

const mapStateToProps = (state) => ({
    company: state.updateCompany.company,
    inputText: state.updateCompany.companyNameUpdateValue,
})
export default connect(mapStateToProps, {
    getCompanyById,
    updateCompany,
    updateCompanyNameInput,
})(withRouter(UpdateCompanyContainer));