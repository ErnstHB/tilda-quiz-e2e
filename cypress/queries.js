export function createQuiz(quizName, quizQuestions){
    
    // quizQuestions: [{text: "Question 1", options: "opt1,opt2,opt3", answer: "opt2"}, ...]

    return cy.request({
        method: 'POST',
        url: 'https://tilda-quiz.hasura.app/v1/graphql',
        body: {
            query: `mutation insertQuiz {insert_quizzes_one(object: {name: "${quizName}", questions: {data: ${quizQuestions}}}) {id}}`,
        }
    });
}

export function deleteQuiz(quizID){
    return cy.request({
        method: 'POST',
        url: 'https://tilda-quiz.hasura.app/v1/graphql',
        body: {
            query: `mutation deleteQuiz { delete_quizzes_by_pk(id: \"${quizID}\") { id } }`,
        }
    });
}
