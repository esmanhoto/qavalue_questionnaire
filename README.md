# Cloning this project

First step to run this app in your machine, is cloning the project from github. To clone it, you should open your terminal, go to the folder you wish to install the App, and type:

$ git clone git@github.com:esmanhoto/qavalue_questionnaire.git

This cloning method is using SSH, which requires a previous setup of an SSH keypair. If you don't have it done already, you can clone the project with the command:

$ git clone https://github.com/esmanhoto/qavalue_questionnaire.git

This second command uses HTTPS. It requires you to enter your GitHub credentials when cloning, but does not require additional setup.

# Installing dependencies

It is a best practice that node_modules folders (which contain all the package dependencies for the project) NOT be included in the project repository. Because of this, it is needed to install dependencies using either NPM or yarn. In your terminal, type one of the two options:

$ npm install
$ yarn install

Now you will be able to run a development version of the project on your computer.

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in the interactive watch mode.\

# Heroku deploy

In order to facilitate running this application, it was also deployed on heroku. It is available on the link [https://qavalue-questionnaire.herokuapp.com/].
