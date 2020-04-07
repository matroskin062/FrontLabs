import React from 'react';
import './Companies.css';
import {NavLink} from 'react-router-dom';

const Companies = props => {
    console.log(props);
    const onSubmit = () => {
        props.addCompany(props.inputText)
    };
    const onInputChange = (e) => {
        props.onChangeInput(e.currentTarget.value);
    }
    return (
        <div>
            <table class='table'>
                <thead class='thead-dark'>
                <tr>
                    <th scope='col'>Id</th>
                    <th scope='col'>Name</th>
                    <th scope='col'></th>
                    <th scope='col'></th>
                </tr>
                </thead>
                <tbody>
                {props.companies.map(el => {
                    return (
                        <tr>
                            <th scope='row'>{el.id}</th>
                            <td className='name-col'>{el.name}</td>
                            <td className='button-col'>
                                <NavLink
                                    to={`companies/update/${el.id}`}
                                    type='button'
                                    class='btn btn-warning float-right'
                                    onClick={() => {
                                        console.log('update:', el.id)
                                    }}
                                >
                                    Update
                                </NavLink>
                                <NavLink
                                    to={'/companies/'}
                                    type='button'
                                    class='btn btn-danger float-right'
                                    onClick={() => props.deleteCompany(el.id)}
                                >
                                    Delete
                                </NavLink>
                            </td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
            <form action='post'>
                <div class='form-group'>
                    <label for='exampleInputEmail1'>Company name</label>
                    <input
                        class='form-control'
                        id='exampleInputEmail1'
                        onChange={onInputChange}
                        value={props.inputText}
                    />
                </div>
                <NavLink
                    to='/companies'
                    class='btn btn-primary float-right'
                    onClick={onSubmit}
                >
                    Submit
                </NavLink>
            </form>
        </div>
    );
};

export default Companies;
