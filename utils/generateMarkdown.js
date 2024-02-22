// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseString = ''

  if (license === 'Apache 2.0 License'){
    licenseString = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/blog/license/apache-2-0)`
  } else if (license === 'ISC License') {
    licenseString = `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/blog/license/isc-license-txt)`
  } else if (license === 'The MIT License'){
    licenseString = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/blog/license/mit)`
  } else (licenseString === 'No License');

  return licenseString;
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# Title 
${data.projectTitle}

## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Licence](#licence)
  - [Contributions](#contributions)
  - [Tests](#tests)
  - [Questions](#questions)

## Description 
${data.projectDescription}

## Installation
${data.projectInstallation}

## Usage
${data.projectUsage}

## Licence
${renderLicenseBadge(data.projectLicences)}

## Contributions
${data.projectContributions}

## Tests
${data.projectTest}

## Questions
https://github.com/${data.githubUsername}

For more questions, contact ${data.emailAddress}
`;
}

module.exports = generateMarkdown;
