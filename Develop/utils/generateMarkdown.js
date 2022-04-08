// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (data.license) {
    return 
  } else {
    return '';
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseOption = `${data.license}`
  let licenseLink = '';
  if (licenseOption === 'APACHE 2.0') {
    licenseOption = 'APACHE 2.0';
    licenseLink = 'https://choosealicense.com/licenses/apache-2.0/';
  };
  if (licenseOption === 'MIT') {
    licenseOption = 'MIT';
    licenseLink = 'https://choosealicense.com/licenses/mit/';
  };
  if (licenseOption === 'GPL 3.0') {
    licenseOption = 'GPL 3.0';
    licenseLink = 'https://choosealicense.com/licenses/gpl-3.0/';
  };
  if (licenseOption === 'ISC') {
    licenseOption = 'ISC';
    licenseLink = 'https://choosealicense.com/licenses/isc/';
  };
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (data.license) {
    return `This application is licensed under the ${license} License.`;
  } else {
    return '';
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let markdownTemp =
  `# ${data.title}
  ## Description
  ${data.description}
  ## License
  ${ renderLicenseBadge(license) }
  ${ renderLicenseLink(license) }
  ${ renderLicenseSection(license) }
 
  `;
  let tableOfContents = 
  `## Table of Contents`;
    if (data.installation) {
      tableOfContents += ` * [Installation](#installation)`
    };
    if (data.usage) {
      tableOfContents += ` * [Usage](#usage)`
    };
    if (data.constributing) {
      tableOfContents += ` * [Contributing](#contributing)`
    };
    if (data.test) {
      tableOfContents += ` * [Testing](#testing)`
    };
    if (data.questions) {
      tableOfContents += ` * [Questions](#questions)`
    };

    markdownTemp += tableOfContents;
  
    return markdownTemp;    
}

module.exports = generateMarkdown;
