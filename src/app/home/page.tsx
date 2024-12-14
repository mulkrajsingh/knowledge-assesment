'use client';

import QuizView from '@/components/homePage/QuizView';
import UploadView from '@/components/homePage/UploadView';
import { FC, useState } from 'react';

const Home: FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [showQuizView, setShowQuizView] = useState(!false);

  const handleGenerateMcq = () => {
    if (!file) {
      return;
    }

    setShowQuizView(true);
  };

  // Render
  if (!showQuizView) {
    return (
      <UploadView
        onFileSelection={setFile}
        handleGenerateMcq={handleGenerateMcq}
      />
    );
  }

  return (
    <section>
      <QuizView />
    </section>
  );
};

export default Home;
