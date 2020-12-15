// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

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
  ${data.license}
  ## Contributing
  ${data.contributing}
  ## Tests
  ${data.tests}
  ## Questions
  [Github](github.com/${data.github})
  ${data.email}
  
  ## Link
  [Link to Live Website](https://jesusefraingonzalez.github.io/repo-name)
  
  ## ScreenShots
  ![Caption](link/to/image.png)
  
`;
}

module.exports = generateMarkdown;
