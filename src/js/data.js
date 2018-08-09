window.data = {
  obtainCompanies: (dataCompanies) => {
    const companies = Object.getOwnPropertyNames(dataCompanies);
    console.log(companies);
  },
};

window.uploadData = (visitorData) => {
  console.log(visitorData);
};
