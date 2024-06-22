// License badge (image) selector
function renderLicenseBadge(license) {
    const licenseBadges = {
        'MIT': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]',
        'Apache 2.0': '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]',
        'GPL 3.0': '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]',
        'BSD 3': '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]',
        'None': ''
    };
return licenseBadges[license] || '';
}

// License Links

function renderLicenseLink(license) {
    const licenseLinks = {
        'MIT': '[MIT](https://opensource.org/licenses/MIT)',
        'Apache 2.0': '[Apache 2.0](https://opensource.org/licenses/Apache-2.0)',
        'GPL 3.0': '[GPL 3.0](https://www.gnu.org/licenses/gpl-3.0)',
        'BSD 3': '[BSD 3](https://opensource.org/licenses/BSD-3-Clause)',
        'None': ''
    };

    return licenseLinks[license] || '';

}


// License section called on the Markdown function, if empty return: "This project did not required a license".
function renderLicenseSection(license) {
    const licenseLinks = {
        'MIT': '[MIT](https://opensource.org/licenses/MIT)',
        'Apache 2.0': '[Apache 2.0](https://opensource.org/licenses/Apache-2.0)',
        'GPL 3.0': '[GPL 3.0](https://www.gnu.org/licenses/gpl-3.0)',
        'BSD 3': '[BSD 3](https://opensource.org/licenses/BSD-3-Clause)',
        'None': ''
    };
    // Conditional to the none license required, show This project did not required a license 
    //on the License section of the README file
    if (!license || license.toLowerCase() === 'none') {
        return `
## License 
        
This project did not required a license.`;
    }
//Const licenseLink equals to LinceseLinks parameter license to call the selected license for the user
    const licenseLink = licenseLinks[license];

    return `
## License

This project is licensed under the ${licenseLink} license.
`;
}

// Markdown of README
function generateMarkdown(data) {
    const licenseBadge = renderLicenseBadge(data.license);
    const licenseSection = renderLicenseSection(data.license);

   return `# ${data.title}
  ${licenseBadge}

  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)

  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ${licenseSection}
  
  ## Questions
  If you have any questions, you can reach me at ${data.email} or visit my GitHub profile at https://github.com/${data.username}.
  `;
  }

  // Export the markdown of README
  module.exports = generateMarkdown;
