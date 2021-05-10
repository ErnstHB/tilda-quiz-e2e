import {createQuiz, deleteQuiz} from '../queries';
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// createQuiz function
Cypress.Commands.add('createQuiz', (quizName, quizQuestions) =>
  createQuiz(quizName, quizQuestions).then((response) => 
    Cypress._.get(response, 'body.data.insert_quizzes_one.id')
  )
);

// deleteQuiz function
Cypress.Commands.add('deleteQuiz', (quizID) =>
  deleteQuiz(quizID).then((response) => 
    Cypress._.get(response, 'body.data.delete_quizzes_by_pk.id')
  )
);
