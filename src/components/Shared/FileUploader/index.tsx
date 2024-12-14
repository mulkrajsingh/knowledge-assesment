'use client';

import { getFileExtension, isFileAccepted } from '@/utils/utils';
import clsx from 'clsx';
import { ChangeEvent, DragEvent, FC, useEffect, useState } from 'react';

const ACCEPTED_FILE_TYPE = '.pdf';

type TProps = {
  onFileSelection: (file: File) => void;
};

const FileUploader: FC<TProps> = ({ onFileSelection }) => {
  const [file, setFile] = useState<File | null>(null);
  const [isFileDragging, setIsFileDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (file) {
      onFileSelection(file);
    }
  }, [file]);

  //#region handle global drag
  /**
   * Prevent default behavior (Prevent file from being opened)
   * Changes BG when file dragged
   */
  useEffect(() => {
    const handleDragEnter = (e: globalThis.DragEvent) => {
      setIsFileDragging(true);
    };

    const handleDrop = (e: globalThis.DragEvent) => {
      e.preventDefault();
      setIsFileDragging(false);
    };

    const handleDragOver = (e: globalThis.DragEvent) => {
      e.preventDefault();
    };

    window.addEventListener('dragenter', handleDragEnter);

    window.addEventListener('drop', handleDrop);

    window.addEventListener('dragover', handleDragOver);

    return () => {
      window.removeEventListener('dragenter', handleDragEnter);
      window.removeEventListener('drop', handleDrop);
      window.removeEventListener('dragover', handleDragOver);
    };
  }, []);

  //#endregion

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      setFile(files[0]);
    }
  };

  const dropHandler = (ev: DragEvent<HTMLLabelElement>) => {
    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();
    ev.stopPropagation();

    setIsFileDragging(false);
    setError(null);

    const files = ev.dataTransfer.files;
    if (!files.length) {
      return;
    }

    const tempFile = files[0];
    if (isFileAccepted(getFileExtension(tempFile.name), [ACCEPTED_FILE_TYPE])) {
      setFile(tempFile);
    } else {
      setError(
        `File type not accepted. Please select any of the following: ${[ACCEPTED_FILE_TYPE].join(', ')}`,
      );
    }
  };

  const dragOverHandler = (ev: DragEvent<HTMLLabelElement>) => {
    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();
    ev.stopPropagation();
  };

  // Renders
  const renderFile = () => {
    return (
      <div className="border-[1px] bg-black border-white px-7 py-3 rounded-2xl absolute m-auto inset-0 h-fit w-fit flex items-center justify-center gap-6 select-none pointer-events-none">
        <span className="truncate w-[400px]">{file?.name}</span>
        <button
          onClick={() => setFile(null)}
          className="p-1 hover:bg-white/30 cursor-pointer rounded-xl aspect-square w-8 pointer-events-auto"
        >
          X
        </button>
      </div>
    );
  };

  return (
    <section className="w-1/2 m-auto mt-10">
      {/* Backdrop */}
      <div
        className={clsx(
          'absolute inset-0 z-0 bg-white/10 backdrop-blur transition-opacity',
          isFileDragging ? 'opacity-100 visible' : 'opacity-0 invisible',
        )}
      />
      {/* Input */}
      <div className="relative z-10 h-60 w-full">
        <input
          type="file"
          id="file-upload"
          className="hidden"
          accept={ACCEPTED_FILE_TYPE}
          onChange={handleFileChange}
        />
        <label
          htmlFor="file-upload"
          className={clsx(
            'grid size-full cursor-pointer content-center justify-center rounded-2xl border border-dashed bg-neutral-900',
            !file && 'hover:bg-neutral-800',
          )}
          onDrop={dropHandler}
          onDragOver={dragOverHandler}
        >
          {!file && 'Choose File To Upload'}
        </label>
        {file && renderFile()}
      </div>
      {/* Error */}
      {error && <span className="text-red-800 mt-2 block">{error}</span>}
    </section>
  );
};

export default FileUploader;
