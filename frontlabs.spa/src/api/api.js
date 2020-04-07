import * as axios from 'axios'

const instance = axios.create({
    baseURL: 'https://localhost:44353/api/',
})

export const companiesAPI = {
    getCompanies: () => {
        return instance.get('Companies/');
    },
    addCompany: (nameParam) => {
        return instance
            .post('Companies', {name: nameParam})
    },
    deleteCompany: (id) => {
        return instance
            .delete(`Companies/${id}`);
    },
    updateCompany: (id, nameParam) => {
        return instance
            .put(`Companies/${id}`, {id: id, name: nameParam});
    },
    getCompanyById: id => {
      return instance
          .get(`Companies/${id}`);
    },
};