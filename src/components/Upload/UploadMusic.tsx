import React, { useRef } from "react";

const UploadMusic: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleBrowseClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div>
      <div className="flex flex-col items-center m-8 rounded-2xl w-[368px] h-[307px] bg-white">
        <h2 className="text-sm font-bold mb-4 pt-8">Upload Music CSV File</h2>
        <div className="relative bg-green-100 rounded-lg w-[304px] px-8 border-2 border-dashed border-gray-300 flex flex-col items-center">
          <div className="flex flex-col items-center pt-4">
            <div className="text-red-500 rounded-full flex justify-center items-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="green"
                className="w-[70px] h-[60px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                />
              </svg>
            </div>
            <div className="flex">
              <p className="text-black font-medium text-sm mb-">
                Drag & drop files or
              </p>
              <a
                onClick={handleBrowseClick}
                className="text-red-600 font-medium text-sm hover:underline pl-1"
              >
                Browse
              </a>
            </div>
          </div>
          <p className="text-gray-500 text-xs pb-4 mt-4">
            Supported formates: CSV files
          </p>
          <input
            type="file"
            accept=".csv"
            ref={fileInputRef}
            className="hidden"
          />
        </div>
        <button className="bg-black text-white w-[304px] py-2 px-8 rounded-md mt-4">
          Upload file
        </button>
      </div>
    </div>
  );
};

export default UploadMusic;
