import React, { RefObject, FormEvent, ReactEventHandler } from 'react';

interface ReviewFormProps {
  handleSubmit: ReactEventHandler<HTMLButtonElement>;
  revText: RefObject<HTMLTextAreaElement>;
  labelText: string;
  defaultValue: string;
}

const ReviewForm = ({ handleSubmit, revText, labelText, defaultValue }: ReviewFormProps) => {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="controlTextarea1" className="block text-sm font-medium text-gray-400">
          {labelText}
        </label>
        <textarea
          ref={revText}
          id="controlTextarea1"
          rows={3}
          defaultValue={defaultValue}
          className="mt-1 p-2 block w-full border text-black border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <button
       
        onClick={handleSubmit}
        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Submit
      </button>
    </form>
  );
};

export default ReviewForm;
