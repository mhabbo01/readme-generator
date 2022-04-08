// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {
//   if (data.license) {
//     return 
//   } else {
//     return '';
//   }
// };

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {
//   let licenseOption = `${data.license}`
//   let licenseLink = '';
//   if (licenseOption === 'APACHE 2.0') {
//     licenseOption = 'APACHE 2.0';
//     licenseLink = 'https://choosealicense.com/licenses/apache-2.0/';
//   };
//   if (licenseOption === 'MIT') {
//     licenseOption = 'MIT';
//     licenseLink = 'https://choosealicense.com/licenses/mit/';
//   };
//   if (licenseOption === 'GPL 3.0') {
//     licenseOption = 'GPL 3.0';
//     licenseLink = 'https://choosealicense.com/licenses/gpl-3.0/';
//   };
//   if (licenseOption === 'ISC') {
//     licenseOption = 'ISC';
//     licenseLink = 'https://choosealicense.com/licenses/isc/';
//   };
// };

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {
//   if (data.license) {
//     return `This application is licensed under the ${license} License.`;
//   } else {
//     return '';
//   }
// };

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ## Description
  ${data.description}
  ## License 
  ![badge](https://img.shields.io/badge/license-${data.license}-important)
  

  ## Table of Contents
  -[Description](#description)
  -[Installation](#installation)
  -[Usage](#usage)
  -[License](#license)
  -[Contributing](#contributing)
  -[Testing](#testing)
  -[Screenshot](#screenshot)
  -[Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  Permission to use this application is granted under the ${data.license} license. <https://opensource.org/licenses/${data.license}>
  
  ## Contributing
  ${data.contributing}

  ## Testing
  ${data.test}

  ## Screenshot
  ${data.screenShotlink}

  ## Questions
  If you have any questiosn, feel free to reach me at ${data.questions}
  GitHub Link: ${data.github}
  
  `  

       
}

module.exports = generateMarkdown;
