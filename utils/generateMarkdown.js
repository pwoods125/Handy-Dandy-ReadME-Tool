// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseString = ''

  if (license === 'Apache 2.0 License'){
    licenseString = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else if (license === 'ISC License') {
    licenseString = `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
  } else if (license === 'The MIT License'){
    licenseString = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  return licenseString;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ## Title
  # ${data.title}
  ## Description
  # ${data.description}
  ## Installation
  # ${data.installation}
  ## Usage
  # ${data.usage}
  ## Contributions
  # ${data.contributions}
  ## Testing
  # ${data.test}
  ## Licences
  # ${data.license}
  ## 'GitHub Username'
  # ${data.username}
  ## Email Address
  # ${data.email}
`;
}

module.exports = generateMarkdown;