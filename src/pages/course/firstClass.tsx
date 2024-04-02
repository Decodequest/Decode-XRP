import { useState } from 'react';

const questions = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["Paris", "Berlin", "London", "Rome"],
    correctAnswer: "Paris"
  },
  {
    id: 2,
    question: "What is the largest planet in our solar system?",
    options: ["Jupiter", "Saturn", "Mars", "Earth"],
    correctAnswer: "Jupiter"
  },
  {
    id: 3,
    question: "Who wrote 'To Kill a Mockingbird'?",
    options: ["J.K. Rowling", "Harper Lee", "Stephen King", "Charles Dickens"],
    correctAnswer: "Harper Lee"
  },
  {
    id: 4,
    question: "Which country is known as the 'Land of the Rising Sun'?",
    options: ["China", "Japan", "South Korea", "Vietnam"],
    correctAnswer: "Japan"
  },
  {
    id: 5,
    question: "What is the chemical symbol for water?",
    options: ["H2O", "CO2", "O2", "NaCl"],
    correctAnswer: "H2O"
  }
];

export default function Questionnaire() {
  const [answers, setAnswers] = useState<any>({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswer = (questionId: any, selectedOption: any) => {
    setAnswers((prevState: any) => ({
      ...prevState,
      [questionId]: selectedOption
    }));
  };

  const handleSubmit = () => {
    let currentScore = 0;
    for (const question of questions) {
      if (answers[question.id] === question.correctAnswer) {
        currentScore++;
      }
    }
    setScore(currentScore);
    setShowResults(true);
  };

  const handleReset = () => {
    setAnswers({});
    setShowResults(false);
    setScore(0);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Questionnaire</h1>
      {showResults ? (
        <div>
          <h2 className="text-xl font-bold mb-2">Results:</h2>
          <p>Your score: {score} out of {questions.length}</p>
          <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleReset}>Try Again</button>
        </div>
      ) : (
        <div>
          {questions.map(question => (
            <div key={question.id} className="mb-4">
              <h2 className="text-lg font-semibold mb-2">{question.question}</h2>
              <div>
                {question.options.map(option => (
                  <label key={option} className="inline-flex items-center">
                    <input 
                      type="radio"
                      name={`question-${question.id}`}
                      value={option}
                      onChange={() => handleAnswer(question.id, option)}
                      checked={answers[question.id] === option}
                      className="mr-2"
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>
          ))}
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleSubmit}>Submit</button>
        </div>
      )}
    </div>
  );
}
