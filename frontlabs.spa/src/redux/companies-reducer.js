import {companiesAPI} from '../api/api';

const SET_COMPANIES = 'SET_COMPANIES';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const NEW_COMPANY_INPUT_CHANGE = 'NEW_COMPANY_INPUT_CHANGE';
const ADD_COMPANY = 'ADD_COMPANY';
const DELETE = 'DELETE';

const initialState = {
    id: 0,
    companies: [],
    isFetching: false,
    newCompanyInputText: '',
};

const companiesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COMPANIES:
            return {
                ...state,
                companies: action.companies
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };
        case NEW_COMPANY_INPUT_CHANGE:
            return {
                ...state,
                newCompanyInputText: action.newCompanyInputText
            };
        case ADD_COMPANY:
            const newCompany = {
                id: action.id,
                name: state.newCompanyInputText
            };
            return {
                ...state,
                companies: [...state.companies, newCompany],
                newCompanyInputText: ''
            };
        case DELETE:
            return {
                ...state,
                companies: state.companies.filter(el => el.id != action.id)
            };
        default:
            return state;
    }
};

export const onNewCompanyNameInputTextChange = name => ({
    type: NEW_COMPANY_INPUT_CHANGE,
    newCompanyInputText: name
});
const setCompanies = companies => ({type: SET_COMPANIES, companies});
const toggleIsFetching = isFetching => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
});
const addNewCompany = (id) => ({type: ADD_COMPANY, id});
const deleteCompanyAC = id => ({type: DELETE, id});
/*****************THUNK CREATOR*********************/
export const getCompanies = () => dispatch => {
    dispatch(toggleIsFetching(true));
    companiesAPI.getCompanies()
        .then(resp => {
                dispatch(toggleIsFetching(false));
                dispatch(setCompanies(resp.data));
            }
        );
}

export const addCompany = (name) => (dispatch) => {
    companiesAPI.addCompany(name)
        .then(resp => {
            console.log(resp.data)
            dispatch(addNewCompany(resp.data.id));
        })
}

export const deleteCompany = (id) => dispatch => {
    companiesAPI.deleteCompany(id)
        .then(() => dispatch(deleteCompanyAC(id)));
}

export default companiesReducer;
