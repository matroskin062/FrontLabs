import React, {Component} from 'react';
import {connect} from 'react-redux';
import Companies from './Companies';
import {addCompany, deleteCompany, getCompanies} from '../../redux/companies-reducer';
import {onNewCompanyNameInputTextChange} from './../../redux/companies-reducer';
import {withRouter} from 'react-router-dom';
import Preloader from '../common/Preloader';

class CompaniesContainer extends Component {
    componentDidMount() {
        this.props.getCompanies();
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> :
                    <Companies
                        {...this.props}
                        companies={this.props.companies}
                        onChangeInput={this.props.onNewCompanyNameInputTextChange}
                        inputText={this.props.newCompanyInputText}
                        addCompany={this.props.addCompany}
                        deleteCompany={this.props.deleteCompany}
                        updateCompany={this.props.updateCompany}
                    />}
            </>
        );
    }
}

const mapStateToProps = state => ({
    companies: state.companiesPage.companies,
    isFetching: state.companiesPage.isFetching,
    newCompanyInputText: state.companiesPage.newCompanyInputText
});

const mapDispatchToProps = dispatch => ({
    getCompanies: () => dispatch(getCompanies()),
    onNewCompanyNameInputTextChange: name =>
        dispatch(onNewCompanyNameInputTextChange(name)),
    addCompany: (text) => dispatch(addCompany(text)),
    deleteCompany: (id, name) => dispatch(deleteCompany(id, name)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(CompaniesContainer));
