// Selectors
export const QUIZ_BUTTON = ".css-ffld1q";
export const QUIZ_BUTTON_NAME = `${QUIZ_BUTTON} .css-gxdag`;
export const QUIZ_BUTTON_SCORE = 'span[data-testid="quiz-score"]';
export const QUIZ_HEADER = ".css-eo8fjx";
export const QUESTION_HEADER = ".css-d85ps1";
export const ANSWER_BUTTON = ".css-1kn7z7o";
export const NEXT_BUTTON = 'button[data-testid="question-next"]';
export const BACK_BUTTON = 'button[data-testid="question-back"]';

// String Constants
export const question1Text = "Question 1";
export const question2Text = "Question 2";
export const question3Text = "Question 3";
export const option1Text = "opt1";
export const option2Text = "opt2";
export const option3Text = "opt3";
export const quizExampleQuestion = `[
  {text: "${question1Text}", options: "${option1Text},${option2Text},${option3Text}", answer: "${option2Text}"}, 
  {text: "${question2Text}", options: "${option1Text},${option2Text},${option3Text}", answer: "${option3Text}"}, 
  {text: "${question3Text}", options: "${option1Text},${option2Text},${option3Text}", answer: "${option2Text}"} 
]`;
export const url = "https://tilda-quiz.vercel.app";
export const quizExampleName = "Example Question";
