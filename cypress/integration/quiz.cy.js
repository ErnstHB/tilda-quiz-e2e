import * as quiz from "./quiz.page";

describe("Quiz tests", () => {
  let quizID;
  beforeEach("Create Quiz", () => {
    // quizQuestions: [{text: "Question 1", options: "opt1,opt2,opt3", answer: "opt2"}, ...]
    cy.createQuiz(quiz.quizExampleName, quiz.quizExampleQuestion).then(
      (response) => {
        quizID = response;
        cy.log("Created new Quiz with id:", quizID);
      }
    );
  });

  afterEach("Delete Quiz", () => {
    cy.deleteQuiz(quizID).then((response) => {
      cy.log("Deleted Quiz with id:", response);
    });
  });

  it("Correctly answer all the questions of a quiz and check the Score.", () => {
    cy.visit(quiz.url);
    cy.get(quiz.QUIZ_BUTTON_NAME).contains(quiz.quizExampleName).click();
    // First Question
    cy.get(quiz.QUIZ_HEADER).should("contain", quiz.quizExampleName);
    cy.get(quiz.QUESTION_HEADER).should("contain", quiz.question1Text);
    cy.get(quiz.ANSWER_BUTTON).contains(quiz.option2Text).click();
    cy.get(quiz.NEXT_BUTTON).click();
    // Second Question
    cy.get(quiz.QUIZ_HEADER).should("contain", quiz.quizExampleName);
    cy.get(quiz.QUESTION_HEADER).should("contain", quiz.question2Text);
    cy.get(quiz.ANSWER_BUTTON).contains(quiz.option3Text).click();
    cy.get(quiz.NEXT_BUTTON).click();
    // Third Question
    cy.get(quiz.QUIZ_HEADER).should("contain", quiz.quizExampleName);
    cy.get(quiz.QUESTION_HEADER).should("contain", quiz.question3Text);
    cy.get(quiz.ANSWER_BUTTON).contains(quiz.option2Text).click();
    cy.get(quiz.NEXT_BUTTON).click();

    cy.get(quiz.QUIZ_BUTTON_NAME)
      .parent()
      .children(quiz.QUIZ_BUTTON_SCORE)
      .should("contain", "Score: 3/3");
  });

  it("Answer all questions regularly and checks the Score (1/3).", () => {
    cy.visit(quiz.url);
    cy.get(quiz.QUIZ_BUTTON_NAME).contains(quiz.quizExampleName).click();
    // First Question
    cy.get(quiz.QUIZ_HEADER).should("contain", quiz.quizExampleName);
    cy.get(quiz.QUESTION_HEADER).should("contain", quiz.question1Text);
    cy.get(quiz.ANSWER_BUTTON).contains(quiz.option1Text).click();
    cy.get(quiz.NEXT_BUTTON).click();
    // Second Question
    cy.get(quiz.QUIZ_HEADER).should("contain", quiz.quizExampleName);
    cy.get(quiz.QUESTION_HEADER).should("contain", quiz.question2Text);
    cy.get(quiz.ANSWER_BUTTON).contains(quiz.option1Text).click();
    cy.get(quiz.NEXT_BUTTON).click();
    // Third Question
    cy.get(quiz.QUIZ_HEADER).should("contain", quiz.quizExampleName);
    cy.get(quiz.QUESTION_HEADER).should("contain", quiz.question3Text);
    cy.get(quiz.ANSWER_BUTTON).contains(quiz.option2Text).click();
    cy.get(quiz.NEXT_BUTTON).click();

    cy.get(quiz.QUIZ_BUTTON_NAME)
      .parent()
      .children(quiz.QUIZ_BUTTON_SCORE)
      .should("contain", "Score: 1/3");
  });

  it("Navigate through the questions of a Quiz.", () => {
    cy.visit(quiz.url);
    cy.get(quiz.QUIZ_BUTTON_NAME).contains(quiz.quizExampleName).click();
    // First Question
    cy.get(quiz.QUIZ_HEADER).should("contain", quiz.quizExampleName);
    cy.get(quiz.QUESTION_HEADER).should("contain", quiz.question1Text);
    cy.get(quiz.ANSWER_BUTTON).contains(quiz.option1Text).click();
    cy.get(quiz.NEXT_BUTTON).click();
    // Second Question
    cy.get(quiz.QUIZ_HEADER).should("contain", quiz.quizExampleName);
    cy.get(quiz.QUESTION_HEADER).should("contain", quiz.question2Text);
    cy.get(quiz.NEXT_BUTTON).click();
    // Third Question
    cy.get(quiz.QUIZ_HEADER).should("contain", quiz.quizExampleName);
    cy.get(quiz.QUESTION_HEADER).should("contain", quiz.question3Text);
    cy.get(quiz.BACK_BUTTON).click();
    // Second Question Again
    cy.get(quiz.QUIZ_HEADER).should("contain", quiz.quizExampleName);
    cy.get(quiz.QUESTION_HEADER).should("contain", quiz.question2Text);
  });
});
