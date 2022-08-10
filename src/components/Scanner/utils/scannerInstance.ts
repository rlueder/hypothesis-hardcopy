import {
  Html5QrcodeScanner,
  Html5QrcodeScanType,
  Html5QrcodeSupportedFormats,
} from "html5-qrcode";

/**
 * @name getScannerInstance
 * @param {string} scannerId
 * @returns Html5QrcodeScanner
 */

const getScannerInstance = (scannerId: string) =>
  new Html5QrcodeScanner(
    scannerId,
    {
      experimentalFeatures: {
        useBarCodeDetectorIfSupported: true,
      },
      formatsToSupport: [Html5QrcodeSupportedFormats.EAN_13],
      fps: 10,
      qrbox: { width: 250, height: 250 },
      supportedScanTypes: [Html5QrcodeScanType.SCAN_TYPE_CAMERA],
    },
    false
  );

export default getScannerInstance;
