describe('getDataCompanies', () => {
    it('deberia ser una funcion', () => {
        assert.equal(typeof getDataCompanies, 'function');
    });
    it('deberia tener un arreglo con propiedad name', () => {
        assert.equal([0].name);
    });
    it('deberia tener un arreglo con propiedad company', () => {
        assert.equal([2].company);
    });
    it('deberia tener un arreglo con propiedad email', () => {
        assert.equal([5].email);
    });

    describe('data', () => {
        it('deberia exponer función getCompaniesNames en objeto global', () => {
            assert.isFunction(getCompaniesNames);
        });
    });
    describe('data', () => {
        it('deberia exponer función getCompaniesEmployees en objeto global', () => {
            assert.isFunction(getCompaniesEmployees);
        });
    });
});


