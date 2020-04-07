import {companiesAPI} from '../api/api';

const GET_COMPANY_BY_ID = 'GET_COMPANY_BY_ID';
const UPDATE_COMPANY = 'UPDATE_COMPANY';
const COMPANY_NAME_UPDATE = 'COMPANY_NAME_UPDATE';

const initialState = {
    company: [],
    companyNameUpdateValue: ''
}
const updateCompanyReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COMPANY_BY_ID:
            return {
                ...state,
                company: action.company,
            }
        case COMPANY_NAME_UPDATE:
            return {
                ...state,
                companyNameUpdateValue: action.name,
            }
        case UPDATE_COMPANY:
            const upd = {
                id: action.id,
                name: action.name,
            }
            return {
                ...state,
                company: upd,
                companyNameUpdateValue: '',
            }
        default:
            return state;
    }
}

const setCompany = (company) => ({type: GET_COMPANY_BY_ID, company});

export const updateCompanyAC = (id, name) => ({type: UPDATE_COMPANY, id, name});

export const updateCompanyNameInput = name => ({type: COMPANY_NAME_UPDATE, name})
/*******THUNK CREATORS********/
export const getCompanyById = (id) => dispatch => {
    companiesAPI.getCompanyById(id)
        .then((resp) => dispatch(setCompany(resp.data)))
}

export const updateCompany = (id, name) => dispatch => {
    companiesAPI.updateCompany(id, name)
        .then((resp) => {
            console.log(resp.data)
            dispatch(updateCompanyAC(id, name))
        });
}

export default updateCompanyReducer;