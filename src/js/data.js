window.getCompaniesNames = (dataCompanies) => {
  const companies = Object.getOwnPropertyNames(dataCompanies);
  console.log(companies);
  return companies;
};

window.getCompaniesEmployees = (dataCompanies) => {
  let employeesArray = [];
  let employeeName;
  let employeeEmail;

  for (const companie in dataCompanies) {
    let employeeCompanie = companie;
    // console.log(employeeCompanie);
    const employeesNames = Object.values(dataCompanies[companie].empleados);
    employeesNames.forEach(employee => {
      let employeeName = employee.nombre;
      let employeeEmail = employee.correo;
      employeesArray.push({
        name: employeeName,
        companie: employeeCompanie,
        email: employeeEmail
      });
    });
  }
  // console.log(employeesArray);
  return employeesArray;
};
