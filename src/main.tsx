import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home, Books, BookEntry, Scanner } from "./components";
import Store from "./store";

const root = document.getElementById("root") as HTMLElement;

// TODO generic
// - save SearchContext to local storage so it can be rehydrated
// - add details to UI design, dark theme by default

// TODO Books- and BookEntry-specific
// - fetch annotations for BookEntry immediately after getting book information
// - finish styling Books list of results
// - finish styling BookEntry
// - add navigation to Books from BookEntry

// TODO annotation-specific
// - authenticate with Hypothesis so users can save their own annotations
// - use Hypothesis annotations as a way to populate Books? Use doi values from annotations to query Google Books API
// - look at OCR integration (tesseract-js)

// TODO Scanner-specific
// - hide camera selection while scanning
// - always default to back camera
// - repace Stop Scanning button with close button on top right corner

createRoot(root).render(
  <StrictMode>
    <Store>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/books/:isbn" element={<BookEntry />} />
          <Route path="/scanner" element={<Scanner />} />
        </Routes>
      </BrowserRouter>
    </Store>
  </StrictMode>
);
