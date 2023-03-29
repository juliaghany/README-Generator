# README Generator

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description 

My motivation for this project was to learn how to create a command line application that dynamically generates a professional README.md file from user's input using the inquirer package. 
  
I built this project to expedite the process of creating a high-quality README file; this will allow developers more time to work on their application. Having a high-quality README file associated with an application's repository is a key component of a developer's profile, but it can be time-consuming to create one. This application solves that problem by dynamically generating a README.md file from the user's input. By using this application, the user will no longer have to create a README file from scratch. Instead, this application will ask them to include information that you'd expect a high-quality, professional README to contain and dynamically generate the file for them. 

This application will ask the user to include information such as: the project's title and description, which license they'd like to cover their project (unless they select 'No License'), installation instructions, usage information, contribution guidelines, and test instructions. It will also include a functioning Table of Contents and a section titled 'Questions' that will list the user's GitHub profile and email address.

## Table Of Contents 
- [Installation](#installation)<br>
- [Usage](#usage)<br>
- [License](#license)<br>
- [Credits](#credits)<br>


## Installation

In order to use this application, you must install the following programs on your computer: 

- [Visual Studio Code](https://code.visualstudio.com/) 
- [Node.js](https://nodejs.org/en) 
- [Git Bash](https://gitforwindows.org/)


Once you've completed installing the above programs onto your computer, initialize the application following these steps:

1. Follow the instructions on this webpage to [clone the repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository).
   
2. Once you've cloned this repository and are in the correct directory, in the command line use the command "code ."; this will open Visual Studio Code, which is where you will view your README file once it is created.
   
3. In the command line, use the command "npm init -y" to install Node Package Manager.
   
4. In the command line, use the command "npm i inquirer@8.2.4" to install the inquirer package.

## Usage

Now that you've installed the necessary programs and Node.js packages, follow these steps to use this application: 

1. In the command line, make sure that you are in the correct directory and use the command "node index" to initialize the application. 
   
2. The application will begin asking for your input; this is the information that the application will add to the README file it creates for you. If you need guidance on how to fill in a particular section, please refer to this [Professional READEME Guide](https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide) for help.
   
3. Once you've gone through every prompt, go back to Visual Studio Code and navigate to the "yourREADME" folder. There, you will find a README.md file that will contain your dynamically generated README file. If you right click the READEME.md tab and move down the options to "Open Preview", you can see what your README will look like when it's viewed on GitHub. 

4. If you'd like to modify your README after going through the prompts, you can do so in Visual Studio Code.
   
5. Once you're ready to save your README file, go to the top left corner in Visual Studio Code and select the option "Save as" and save the file to the folder of your choice.

## License 

This application is covered under the [MIT License](https://opensource.org/license/mit/).

## Credits

- I referred to Activity 09-Ins_Template-Literals for generateMarkdown function in generateMarkdown.js 
  
- I referred to Activity 15-Ins_Modularization to link generateMarkdown.js to index.js using require
  
- I referred to Activity 20-Stu_Inquirer-Users for writeToFile function as well as how to set up questions

- I referred to this webpage for license badges: https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba 
  
- I referred to this webpage for how to create line breaks: https://www.markdownguide.org/basic-syntax/#:~:text=To%20create%20a%20line%20break,spaces%2C%20and%20then%20type%20return.
  
- I referred to this webpage to help me with init function: https://www.npmjs.com/package/inquirer

- I referred this webpage for how to word my prompts and set up a professional README: https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide

