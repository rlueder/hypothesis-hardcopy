import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Header } from "../../components";

import { SearchContext } from "../../store";
import { getBook } from "../../utils";

import { getScannerInstance } from "./utils";

import type { Html5QrcodeScanner } from "html5-qrcode";

import "./styles.scss";

/**
 * @name Scanner
 * @returns JSX.Element
 */

const Scanner = () => {
  const { results, setResults } = useContext(SearchContext);
  const navigateTo = useNavigate();

  const [scannerInstance, setScannerInstance] = useState<Html5QrcodeScanner>();
  const scannerId = "scanner";
  const scannerRef = useRef(null);

  useEffect(() => {
    // wait for node to be available
    if (scannerRef.current) {
      // assign scanner instance
      setScannerInstance(getScannerInstance(scannerId));

      if (scannerInstance) {
        // start scanning
        scannerInstance.render(
          // on successful scan
          async (isbn) => {
            try {
              const response = await getBook(isbn);
              setResults([...results, response]);
              navigateTo(`/books/${isbn}`);
            } catch (err) {
              console.error(err);
            }
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

  return (
    <div className="Scanner">
      <Header />
      <div id={scannerId} ref={scannerRef} />
    </div>
  );
};

export default Scanner;
