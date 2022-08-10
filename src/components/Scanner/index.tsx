import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ISBNContext } from "../../store";
import { getScannerInstance } from "./utils";

import type { Html5QrcodeScanner } from "html5-qrcode";

/**
 * @name Scanner
 * @returns JSX.Element
 */

const Scanner = () => {
  const { ISBN, setISBN } = useContext(ISBNContext);
  const navigate = useNavigate();

  const [scannerInstance, setScannerInstance] = useState<Html5QrcodeScanner>();
  const scannerId = "scanner";
  const scannerRef = useRef(null);

  useEffect(() => {
    // wait for node to be available
    if (scannerRef.current) {
      setScannerInstance(getScannerInstance(scannerId));

      // start scanner instance
      if (scannerInstance) {
        scannerInstance.render(
          // on successful scan
          (decodedText) => {
            setISBN(decodedText);
            navigate("/");
          },
          (error) => {
            console.warn(`Code scan error = ${error}`);
          }
        );
        // clean up after scanning
        return () => {
          scannerInstance.clear();
        };
      }
    }
  }, [scannerRef.current]);

  return <div id={scannerId} ref={scannerRef} />;
};

export default Scanner;
