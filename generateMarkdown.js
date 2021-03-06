// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ![License](https://img.shields.io/badge/LICENSE-${data.license}-blue)

  ## Description
  ${data.description}
  
  ## Table of Contents
  1. [Installation](#Installation)
  2. [Usage](#Usage)
  3. [License](#License)
  4. [Contributing](#Contributing)
  5. [Tests](#Tests)
  6. [Contact Information](#Questions)
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  This project is licensed under the ${data.license} license.

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  **Github:** [${data.github}](https://github.com/${data.github})
  
  Contact me at ${data.email} with any additional questions. 
  
`;
}

module.exports = generateMarkdown;
