// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { 
	if (license==="NONE"){
		return ""
	} else {
		return `![license](https://img.shields.io/badge/license-${license}-red.svg)`
	}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
	if (license==="NONE"){
	return ""
} else {
	return `* [License](#license)`
}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { 
	if (license==="NONE"){
		return ""
	} else {
		return `## License
		This project is licensed by the ${license} license.`
	}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
	return `# ${data.Title}
${renderLicenseBadge(data.license)}

## Description
${data.Description}

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)

${renderLicenseLink(data.license)}

* [Contributing](#contributing)

* [Questions](#questions)

## Installation
${data.Installation}

## Usage
${data.Usage}

${renderLicenseSection(data.license)}

## Contributing
${data.Contributing}

## Tests
${data.Tests}

## Questions
If you have any questions, please contact me at: ${data.email} ${data.github}


`;
}

module.exports = generateMarkdown;
