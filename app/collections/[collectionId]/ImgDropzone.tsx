"use client";

import React from "react";

export default function ImgDropzone({
  selectedFile,
  setSelectedFile,
}: {
  selectedFile: File | null;
  setSelectedFile: (file: File) => void;
}) {
  const handleFileChange = (e: any) => {
    setSelectedFile(e.target.files[0]);
  };

  return (
    <div className="flex justify-center items-center w-full">
      <label
        htmlFor="dropzone"
        className="border-2 border-dashed border-gray-300 rounded-md p-6 pb-0 w-full max-w-xl cursor-pointer hover:border-gray-500"
      >
        <div className="flex flex-col justify-center items-center pt-5 pb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 12l8-8 8 8M12 4v12m-8 4h16"
            />
          </svg>
          <p className="mb-2 text-sm text-gray-500">
            <span className="font-semibold">Click to upload an image</span>
          </p>
          <p className="text-xs text-gray-500 mb-2">PNG, JPEG, JPG, WEBP</p>
          {selectedFile && (
            <p className="max-w-[280px] break-words text-center">
              {selectedFile.name}
            </p>
          )}
        </div>
        <input
          id="dropzone"
          type="file"
          className="opacity-0 absolute hidden"
          onChange={handleFileChange}
          accept="image/png, image/jpeg, image/jpg, image/webp"
        />
      </label>
    </div>
  );
}
