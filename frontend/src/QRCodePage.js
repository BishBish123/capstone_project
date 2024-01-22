import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode.react';

const QRCodePage = () => {
  const [qrValue, setQrValue] = useState('Initial QR Code Value');
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isGenerating) {
      intervalId = setInterval(() => {
        setQrValue('QR Value ' + Math.random().toString().slice(2, 10));
        // Invalidate the old QR code as needed here
      }, 5000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isGenerating]);

  const handleButtonClick = () => {
    setIsGenerating((prevIsGenerating) => !prevIsGenerating);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-500">
      <div className="flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-lg">
        <QRCode value={qrValue} size={256} className="self-center" />
        <p className="text-center mt-4">Scan The QR Code To Be Marked Present</p>
        <button
          onClick={handleButtonClick}
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          {isGenerating ? 'Stop QR Generation' : 'Start QR Generation'}
        </button>
      </div>
    </div>
  );
};

export default QRCodePage;
