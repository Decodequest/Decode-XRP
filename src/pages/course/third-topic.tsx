import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";

const McqDetails = [
  {
    id: 1,
    question: "Who manages the keys in a custodial wallet?",
    options: ["The user", "A third party", "The XRP Ledger", "No one"],
    correctAnswer: "A third party",
  },
  {
    id: 2,
    question: "What is a major benefit of using a non-custodial wallet?",
    options: [
      "Ease of recovery",
      "High convenience for daily use",
      "Full control over assets",
      "Managed by a professional team",
    ],
    correctAnswer: "Full control over assets",
  },
  {
    id: 3,
    question:
      "Which type of wallet is considered more secure but less convenient for frequent transactions?",
    options: [
      "Custodial wallet",
      "Software wallet",
      "Hardware wallet",
      "DIY wallet",
    ],
    correctAnswer: "Hardware wallet",
  },
  {
    id: 4,
    question:
      "For someone who frequently transacts with XRP, which wallet type is most suitable?",
    options: [
      "Hardware wallet",
      "Software wallet",
      "Custodial wallet",
      "Non-custodial wallet",
    ],
    correctAnswer: "Software wallet",
  },
  {
    id: 5,
    question:
      "Before creating your own wallet on the XRP Ledger, what is essential to understand?",
    options: [
      "Only the price of XRP",
      "How to buy XRP",
      "Accounts, transactions, and how the ledger works",
      "The history of Ripple",
    ],
    correctAnswer: "Accounts, transactions, and how the ledger works",
  },
];

const ThirdTopic = () => {
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
          <p className="text-lg inline ml-2">Wallets on XRP Ledger</p>
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
            <h1 className="pb-4">Wallets on XRP Ledger?</h1>
            <p>Custodial vs. Non-Custodial Wallets</p>
            {/* <p>
              The XRP Ledger is a special digital network that helps people send
              money quickly all over the world without needing a middleman, like
              a bank. It uses technology called blockchain, which is like a
              digital ledger that safely records all transactions.
            </p> */}
          </div>
          <div className="pb-8">
            <h1 className="pb-4">Custodial Wallets</h1>
            <ul className="list-disc pl-6">
              <li>Managed by others (third party).</li>
              <li>Easy to use and recover.</li>
              <li>Less control over keys.</li>
            </ul>
            <h1 className="pt-4">Non-Custodial Wallets</h1>
            <ul className="list-disc pl-6">
              <li>You manage your keys.</li>
              <li>Full control over assets.</li>
              <li>More secure and private.</li>
            </ul>
          </div>
          <div className="pb-8">
            <h1 className="pb-4">Hardware vs. Software Wallets</h1>

            <h1 className="pb-4">Hardware Wallets</h1>
            <ul className="list-disc pl-6">
              <li>Keys stored offline.</li>
              <li>Very secure, less convenient.</li>
              <li>Best for saving not spending.</li>
            </ul>
            <h1 className="pt-4">Software Wallets</h1>
            <ul className="list-disc pl-6">
              <li>Easy access for daily use.</li>
              <li>Keys stored online, less secure.</li>
              <li>Convenient for frequent transactions.</li>
            </ul>
          </div>
          <div className="pb-8">
            <p>Creating Your Own Wallet</p>
            <h1 className="py-2">DIY Wallets</h1>
            <ul className="list-disc pl-6">
              <li>The XRP Ledger allows you to make your own wallet..</li>
              <li>Requires good tech knowledge.</li>
              <li>Understand accounts, transactions, and ledger first.</li>
            </ul>

            {/* <li>
                Saves Energy: This method doesn't use a lot of electricity,
                making it better for the planet than some other systems.
              </li> */}
          </div>
          <div className="pb-8">
            <h1 className="pb-4">Key Takeaways</h1>
            <ul className="list-disc pl-6">
              <li>
                Choose Wisely: Your choice affects security and ease of use.
              </li>
              <li>Custodial: Easy, less control.</li>
              <li>Non-Custodial: More control, secure.</li>
              <li>Software: Convenient, good for spending.</li>
              <li>
                DIY Wallets: For tech-savvy users, offers maximum control.
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
                <button
                    className="bg-white text-black px-4 py-2 rounded-lg mx-4 disabled:cursor-not-allowed disabled:bg-opacity-40"
                    onClick={() => console.log("calling nft")}
                  >
                    Mint NFT
                  </button>
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

export default ThirdTopic;
