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
