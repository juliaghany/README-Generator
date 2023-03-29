// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "No License") {
    return ``
  }
  if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }

  if (license === "Apache License 2.0") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
  if (license === "GNU GPLv3") {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  if (license === "MIT") {
    return `https://opensource.org/license/mit/`
  } else if (license === "Apache License 2.0") {
    return `https://www.apache.org/licenses/LICENSE-2.0`
  } else if (license === "GNU GPLv3") {
    return `https://www.gnu.org/licenses/gpl-3.0.en.html`
  } else {
    return ``
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "No License") {
    return ``
  } else {
    return `## License 
  This application is covered under the ${license} license:`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description 
  
  ${data.description}

  ## Table of Contents 
  [Installation](#installation)<br>
  [Usage](#usage)<br>
  [License](#license)<br>
  [Contribute](#contribute)<br>
  [Tests](#tests)<br>
  [Questions](#questions)<br>

  ## Installation 
  
  ${data.installation}

  ## Usage
  
  ${data.usage}

  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}

  ## Contribute
  
  ${data.contribute}

  ## Tests

  ${data.tests}

  ## Questions

  Link to GitHub profile: [github.com/${data.username}](https://github.com/${data.username})

  You can reach me with any questions you may have at: ${data.email}


`;
}

module.exports = generateMarkdown;
