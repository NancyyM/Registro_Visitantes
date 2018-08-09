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
    const employeeName = Object.values(dataCompanies[companie].empleados);
    console.log(employeeCompanie);
    console.log(employeeName);
  }
};
