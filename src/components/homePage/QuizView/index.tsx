import { FC } from 'react';
import QuizCard from './QuizCard';

const quizData = [
  {
    question:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, dignissimos tempora. Sint odit expedita omnis asperiores iusto eos, minus et enim soluta cum ullam laudantium quia voluptate, accusantium natus at.',
    options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
    answer: 'Option 2',
  },
  {
    question:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ratione et est animi enim tempora earum sunt vero nisi. Velit quasi omnis molestias, praesentium tempora vero impedit magni voluptas distinctio?',
    options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
    answer: 'Option 1',
  },
  {
    question:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quasi dolorum et sit. Est iusto voluptate sint quod suscipit vel amet, iste repellat labore illo commodi saepe, aliquam quaerat blanditiis!',
    options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
    answer: 'Option 4',
  },
];

const QuizView: FC = () => {
  return (
    <section>
      {quizData.map((data, index) => (
        <QuizCard key={index} {...data} quizNumber={index + 1} />
      ))}
    </section>
  );
};

export default QuizView;
