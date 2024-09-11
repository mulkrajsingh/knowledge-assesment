import { FC } from 'react';
import FileUploader from '../../Shared/FileUploader';
import Button from '../../Shared/Button';

type TProps = {
  onFileSelection: (file: File) => void;
  handleGenerateMcq: () => void;
};

const UploadView: FC<TProps> = ({ onFileSelection, handleGenerateMcq }) => {
  return (
    <>
      <FileUploader onFileSelection={onFileSelection} />

      <div className="m-auto w-fit mt-4">
        <Button onClick={handleGenerateMcq}>Generate Quiz</Button>
      </div>
    </>
  );
};

export default UploadView;
