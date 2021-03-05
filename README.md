
# OpnBnk Password manager


## Prerequisites

- node<sub><sup>`v10.19.0+`</sup></sub>
- npm<sub><sup>`v6.14.4+`</sup></sub>

## Install

1. Clone this repository.
2. Run `npm install`.

## Running the application

1. Run `npm start` to start the client.
2. Check it out under:  `http://localhost:3000/`.

### General Approach

* On initial load user sees notification screen about the util.
* User can either `Cancel` the process or move to the `Next` screen - Form View.
* User is presented with the `Form` to create a common password and an optional memorable word.
* After clicking `Next`, user receives a feedback about the process.

### Testing

**Unit testing** `npm run test:unit`  completed with  `Jest` and  `@testing-library/react`.

**e2e testing** `npm run ci` (*service must be running at `http://localhost:3000/` prior with `npm start`*) user interface, and the business logic testing is completed with  `Cypress`.

### Responsive Approach
This application uses media queries. In order to see the mobile view, the user can open the application with a mobile device (or devtools mobile).

### Libs/tools used

* [Typescript](https://www.typescriptlang.org/)
* [ES2019](https://262.ecma-international.org/10.0/)
* [React](https://facebook.github.io/react/)
* [Jest](https://jestjs.io/)
* [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
* [Cypress](https://www.cypress.io/)
* [Chakra UI](https://chakra-ui.com/)
* [ESLint](http://eslint.org/)

## License

The MIT License (MIT)
