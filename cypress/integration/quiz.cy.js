import { deleteQuiz } from "../queries";

describe('Quiz tests', () => {
    const url = 'https://tilda-quiz.vercel.app';
    const quizName = 'My Automatic Quiz';
    const quizQuestions = '[{text: "Question 1", options: "opt1,opt2,opt3", answer: "opt2"}]';
    let quizID;
    beforeEach('Create Quiz', () => {
        // quizQuestions: [{text: "Question 1", options: "opt1,opt2,opt3", answer: "opt2"}, ...]
        cy.createQuiz(quizName, quizQuestions).then((response) => {
            quizID = response;
            cy.log('Created new Quiz with id:', quizID);
        });

    });

    afterEach('Delete Quiz', () => {
        cy.deleteQuiz(quizID).then((response) => {
            cy.log('Deleted Quiz with id:', response);
        });
    });

    it('tests something in the Quizz', () => {
        cy.log('In the first testcase');
        cy.visit(url);
    });
    
});