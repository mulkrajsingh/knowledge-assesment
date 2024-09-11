import { FC } from 'react';

type TProps = {
  question: string;
  options: string[];
  answer: string;
  quizNumber: number;
};

const QuizCard: FC<TProps> = ({ question, options, answer, quizNumber }) => {
  // Render
  return (
    <section className="mb-8">
      {/* Question */}
      <div className="mb-4">
        <b>
          <span>Q{quizNumber}. </span>
          <span>{question}</span>
        </b>
      </div>

      {/* Options */}
      <div>
        <ul>
          {options.map((option) => (
            <li key={option}>
              <input
                id={`${quizNumber}-${option}`}
                type="radio"
                name={`${quizNumber}-${question}`}
              />
              <label htmlFor={`${quizNumber}-${option}`} className="ml-2">
                {option}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default QuizCard;
