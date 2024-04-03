import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";

const McqDetails = [
  {
    id: 1,
    question: "What main problem does XRP aim to solve?",
    options: ["Video streaming", "Social networking", "International payments", "Online shopping"],
    correctAnswer: "International payments",
  },
  {
    id: 2,
    question:
    "Why is XRP considered secure?",
    options: ["It uses a single server", "It is backed by gold", "It's transactions are spread across many computers", "It is regulated by a central bank"],
    correctAnswer: "It's transactions are spread across many computers",
  },
  {
    id: 3,
    question: "What significant action did Ripple take in 2017 regarding XRP?",
    options: [
      "Sold all their XRP",
      "Locked 55 billion XRP in escrow",
      "Gave away XRP for free",
      "Bought back XRP from investors",
    ],
    correctAnswer: "Locked 55 billion XRP in escrow",
  },
  {
    id: 4,
    question: "How did XRP come into existence?",
    options: [
      "It was mined like Bitcoin.",
      "It was created in 2011 with a pre-set amount",
      "It is created every time a transaction is made",
      "It was airdropped to existing cryptocurrency holders",
    ],
    correctAnswer: "It was created in 2011 with a pre-set amount",
  },
  {
    id: 5,
    question: "What does the name 'XRP' signify?",
    options: ["A new type of experiment", "The sound of speed", "A compliance with international currency standards", "The creators' initials"],
    correctAnswer: "A compliance with international currency standards",
  },
];

const SecondTopic = () => {
  const [answers, setAnswers] = useState<any>({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [checkAnswers, setCheckAnswers] = useState<any>([]);
  const [notSubmitted, setnotSubmitted] = useState(true);

  const handleAnswer = (questionId: any, selectedOption: any) => {
    setAnswers((prevState: any) => ({
      ...prevState,
      [questionId]: selectedOption,
    }));
  };

  const handleSubmit = () => {
    let currentScore = 0;
    for (const question of McqDetails) {
      const condition = answers[question.id] === question.correctAnswer;
      if (condition) {
        console.log("condition", condition);
        
        checkAnswers.push(condition);
        currentScore++;
      }
    }
    setScore(currentScore * 20);
    setShowResults(true);
    setnotSubmitted(false);
  };

  const handleReset = () => {
    setAnswers({});
    setShowResults(false);
    setScore(0);
  };
  
  return (
    <div className="bg-[#070C14] pb-24">
      <div className="flex justify-between items-center px-12 py-4 bg-[#070C14] text-white shadow border border-black border-b-[#616069]">
        <div className="">
          <ArrowLeftIcon className="w-5 h-5 inline mb-2" />
          <p className="text-lg inline ml-2">What is XRP and why is it valuable?</p>
        </div>
        <div className="w-[50%] flex justify-center items-center gap-x-4">
          <div className="w-[40%] h-1.5 border border-[#616069] rounded-full">
            <div
              className="bg-loader h-1.5 rounded-full"
              style={{ width: `${score}%` }}
            ></div>
          </div>
          <p className="inline">{score / 10}/10 XP</p>
        </div>
        <div>
          <Link href="/course">
            <button className="px-4 py-2 font-semibold bg-[#9C9CA1] text-black rounded-sm">
              End Lesson
            </button>
          </Link>
        </div>
      </div>
      <div className="flex justify-around pt-12">
        <div className="bg-cover-bg bg-no-repeat text-white max-w-7xl pt-12 w-[45%] px-6">
          <div className="pb-8">
            <h1 className="pb-4">What is the XRP Ledger?</h1>
            {/* <p>
              The XRP Ledger is a special digital network that helps people send
              money quickly all over the world without needing a middleman, like
              a bank. It uses technology called blockchain, which is like a
              digital ledger that safely records all transactions.
            </p> */}
          </div>
          <div className="pb-8">
            <h1 className="pb-4">What Makes XRP Unique?</h1>
            <ul className="list-disc pl-6">
              <li>
                Fast and Global: It can send money anywhere in the world in just
                a few seconds.
              </li>
              <li>
              Secure: Protected by advanced cryptography, making it almost <br />
               impossible to hack or counterfeit.
              </li>
              <li>
              Decentralized: Not controlled by any government or bank, ensuring <br />
               freedom and security in transactions
              </li>
            </ul>
          </div>
          <div className="pb-8">
            <h1 className="pb-4">Why People Trust XRP?</h1>
         
            <ul className="list-disc pl-6">
              <li>
              Decentralized Security: Spread across many computers, its records are very secure.
              </li>
              <li>
              Predictable Supply: 55 billion XRP were locked up to control its release over time, ensuring stability.
              </li>
              {/* <li>
                Saves Energy: This method doesn't use a lot of electricity,
                making it better for the planet than some other systems.
              </li> */}
            </ul>
          </div>
          <div className="pb-8">
            <h1 className="pb-4">XRP's Background</h1>
            <ul className="list-disc pl-6">
              <li>
              Created in 2011, with 100 billion units.
              </li>
              <li>
              Ripple, the company, was given 80 billion XRP to promote and develop the XRP ecosystem.
              </li>
              {/* <li>
                Saves Energy: This method doesn't use a lot of electricity,
                making it better for the planet than some other systems.
              </li> */}
            </ul>
          </div>
          <div className="pb-8">
            <h1 className="pb-4">The Name "XRP"</h1>
            <ul className="list-disc pl-6">
              <li>
              Chosen to fit international currency standards.
              </li>
              <li>
              Helps avoid confusion with Ripple, the company.
              </li>
              {/* <li>
                Saves Energy: This method doesn't use a lot of electricity,
                making it better for the planet than some other systems.
              </li> */}
            </ul>
          </div>
        </div>
        <div className="bg-[#080714] border border-[#201F2B] rounded-md mx-6">
          <div className="text-white">
            {McqDetails.map((question) => (
              <div key={question.id} className="mb-4 p-6">
                <h2 className="text-lg font-semibold mb-2 text-[#C3C3C3] italic">
                  {question.question}
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {question.options.map((option) => (
                    <label
                      key={option}
                      className="w-[300px] items-center border border-1 border-gray-500 text-white p-4 "
                    >
                      <input
                        type="radio"
                        name={`question-${question.id}`}
                        value={option}
                        onChange={() => handleAnswer(question.id, option)}
                        checked={answers[question.id] === option}
                        className="mr-2 px-10"
                      />
                      {option}
                    </label>
                  ))}
                </div>
              </div>
            ))}
            <div className="pb-4 ml-6">
              <button
                  className="bg-white text-black px-4 py-2 rounded-lg ml-6"
                  onClick={handleSubmit}
              >
                  Submit
                </button>
                {score === 100 ? (
                <Link href="/course/third-topic">
                  <button
                    className="bg-white text-black px-4 py-2 rounded-lg mx-4 disabled:cursor-not-allowed disabled:bg-opacity-40"
                    onClick={handleReset}
                    disabled={notSubmitted}
                  >
                    Next
                  </button>
                </Link>
              ) : (
                <button
                  className="bg-white text-black px-4 py-2 rounded-lg mx-4 disabled:cursor-not-allowed disabled:bg-opacity-40"
                  onClick={handleReset}
                  disabled={notSubmitted}
                >
                  Try Again
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondTopic;
