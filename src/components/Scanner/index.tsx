import { useContext, useEffect } from "react";
import { Html5QrcodeScanner, Html5QrcodeScanType } from "html5-qrcode";
import { useNavigate } from "react-router-dom";

import { ISBNContext } from "../../store";

/**
 * @name Scanner
 * @returns JSX.Element
 */

const Scanner = () => {
  const scannerId = "scanner";

  const { setISBN } = useContext(ISBNContext);

  const navigate = useNavigate();

  useEffect(() => {
    const scannerInstance = new Html5QrcodeScanner(
      scannerId,
      {
        fps: 10,
        qrbox: { width: 250, height: 250 },
        supportedScanTypes: [Html5QrcodeScanType.SCAN_TYPE_CAMERA],
      },
      true
    );
    scannerInstance.render(
      (decodedText, decodedResult) => {
        setISBN(decodedText);
        scannerInstance.clear();
        navigate("/");
      },
      (error) => {
        console.warn(`Code scan error = ${error}`);
      }
    );
  });

  return <div id={scannerId} />;
};

export default Scanner;
