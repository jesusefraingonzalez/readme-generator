// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Introduction
  ${data.intro}
  
  ## Table of Contents
  1. [Installation](#Installation)
  2. [Usage](#Usage)
  3. [License](#License)
  4. [Contributing](#Contributing)
  5. [Tests](#Tests)
  6. [Contact Information](#Questions)
  
  ## Installation

  ## Usage
  
  ## License

  ## Contributing

  ## Tests

  ## Questions
  ${data.username}
  ${data.email}
  
  ## Link
  [Link to Live Website](https://jesusefraingonzalez.github.io/repo-name)
  
  ## ScreenShots
  ![Caption](link/to/image.png)
  
`;
}

module.exports = generateMarkdown;
