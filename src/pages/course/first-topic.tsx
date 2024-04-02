import { ArrowLeftIcon } from "@heroicons/react/24/outline";

const McqDetails = [
  {
    id: 1,
    question: "What technology does the XRP ledger use to record transactions?",
    options: ["Internet", "Blockchain", "Satellite", "Radio waves"],
    correctAnswer: "Blockchain",
  },
  {
    id: 2,
    question:
      "How quickly does the XRP Ledger typically confirm a transaction?",
    options: ["24 hours", "4-6 seconds", "1 hour", "10 minutes"],
    correctAnswer: "4-6 seconds",
  },
  {
    id: 3,
    question: "What is unique about the XRP Ledger’s control mechanism?",
    options: [
      "Centralized control",
      "No control",
      "No central control",
      "Controlled by a single bank",
    ],
    correctAnswer: "No central control",
  },
  {
    id: 4,
    question: "Which consensus mechanism does the XRP Ledger use?",
    options: [
      "Proof of Work",
      "Federated Consensus",
      "Proof of Stake",
      "Proof of Authority",
    ],
    correctAnswer: "Federated Consensus",
  },
  {
    id: 5,
    question: "What ensures the safety of transactions on the XRP Ledger?",
    options: ["Passwords", "Cryptography", "Physical locks", "Security guards"],
    correctAnswer: "Cryptography",
  },
];

const FirstTopic = () => {
  return (
    <div className="bg-[#070C14] pb-24">
      <div className="flex justify-between items-center px-12 py-4 bg-[#070C14] text-white shadow border border-black border-b-[#616069]">
        <div className="">
          <ArrowLeftIcon className="w-5 h-5 inline mb-2" />
          <p className="text-lg inline ml-2">What is the XRP Ledger?</p>
        </div>
        <div className="w-[50%] flex justify-center items-center gap-x-4">
          <div className="w-[40%] h-1.5 border border-[#616069] rounded-full">
            <div
              className="bg-loader h-1.5 rounded-full"
              style={{ width: "10%" }}
            ></div>
          </div>
          <p className="inline">10/10 XP</p>
        </div>
        <div>
          <button className="px-4 py-2 font-semibold bg-[#9C9CA1] text-black rounded-sm">
            End Lesson
          </button>
        </div>
      </div>
      <div className="flex justify-around pt-12">
        <div className="bg-cover-bg bg-no-repeat text-white max-w-7xl pt-12 w-[45%] px-6">
          <div className="pb-8">
            <h1 className="pb-4">What is the XRP Ledger?</h1>
            <p>
              The XRP Ledger is a special digital network that helps people send
              money quickly all over the world without needing a middleman, like
              a bank. It uses technology called blockchain, which is like a
              digital ledger that safely records all transactions.
            </p>
          </div>
          <div className="pb-8">
            <h1 className="pb-4">What makes XRP ledger special?</h1>
            <ul className="list-disc pl-6">
              <li>
                Fast and Global: It can send money anywhere in the world in just
                a few seconds.
              </li>
              <li>
                No Central Control: Unlike banks, no single person or group
                controls the XRP Ledger. It's made by everyone who uses it.
              </li>
              <li>
                Safe: It keeps money transfers safe using complex math, so only
                the people involved can see or change their transactions.
              </li>
            </ul>
          </div>
          <div className="pb-8">
            <h1 className="pb-4">How does it work?</h1>
            <p>
              The XRP Ledger uses a unique method called "federated consensus"
              to agree on transactions:
            </p>
            <ul className="list-disc pl-6">
              <li>
                Validators: These are computers that check and agree on
                transactions.
              </li>
              <li>
                Quick Decisions: They make a new record of all transactions
                every 4 to 6 seconds, which is super fast.
              </li>
              <li>
                Saves Energy: This method doesn't use a lot of electricity,
                making it better for the planet than some other systems.
              </li>
            </ul>
          </div>
          <div className="pb-8">
            <h1 className="pb-4">Keeping transactions safe</h1>
            <p>
              The XRP Ledger uses advanced security to make sure no one can
              tamper with transactions. Once a transaction is recorded, it
              cannot be changed, ensuring that your money is always safe.
            </p>
          </div>
          <div className="pb-8">
            <h1 className="pb-4">In short</h1>
            <p>
              The XRP Ledger is a modern way to transfer money that is fast,
              reliable, and eco-friendly. It uses cutting-edge technology to
              make sure transactions are secure and works without the need for
              central banks, making it a promising tool for the future of money
              transfers.
            </p>
          </div>
        </div>
        <div className="bg-[#080714] border border-[#201F2B] rounded-md mx-6">
          <div className="text-white">
            {McqDetails.map((question) => (
              <div key={question.id} className="mb-4">
                <h2 className="text-lg font-semibold mb-2">
                  {question.question}
                </h2>
                <div>
                  {question.options.map((option) => (
                    <label key={option} className="inline-flex items-center">
                      <input
                        type="radio"
                        name={`question-${question.id}`}
                        value={option}
                        // onChange={() => handleAnswer(question.id, option)}
                        // checked={answers[question.id] === option}
                        className="mr-2"
                      />
                      {option}
                    </label>
                  ))}
                </div>
              </div>
            ))}
            <div>
                <button className="bg-white text-black px-4 py-2 rounded-lg mx-4">Try Again</button>
                <button className="bg-white text-black px-4 py-2 rounded-lg">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstTopic;
