import React from 'react';

const UpdateCompany = ({company, updateCompany, updateCompanyNameInput, inputText}) => {
    const onSubmit = () => {
        updateCompany(company.id, inputText);
    }
    const onInputChange = (e) => {
        updateCompanyNameInput(e.currentTarget.value);
    }
    console.log(company);
    return (
        <div className={'text-center'}>
            <p>Id: {company.id}</p>
            <p>Name: {company.name}</p>
            {/*<label htmlFor="name">New Name: </label>*/}
            {/*<input type="text" className={'form-control'} id="name" name="name" value={inputText} onChange={onInputChange}/>*/}
            {/*<button className={'btn btn-warning'} onClick={onSubmit}>Update</button>*/}
            <div className="form-inline d-flex justify-content-center">
                <div className="form-group mx-sm-3 mb-2">
                    <label htmlFor="staticEmail2" className="sr-only">New Name</label>
                    <input type="text" className="form-control" onChange={onInputChange} id="staticEmail2" placeholder="Input new name" value={inputText}/>
                </div>
                <button type="submit" onClick={onSubmit} className="btn btn-warning mb-2">Update</button>
            </div>
        </div>
    )
}

export default UpdateCompany;