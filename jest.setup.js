import "@testing-library/jest-dom";

jest.mock("primereact/resources/themes/lara-light-indigo/theme.css", () => {});
jest.mock("primereact/resources/primereact.min.css", () => {});
jest.mock("primeicons/primeicons.css", () => {});

const originalConsoleError = console.error;
const jsDomCssError = "Error: Could not parse CSS stylesheet";
console.error = (...params) => {
  if (!params.find((p) => p.toString().includes(jsDomCssError))) {
    originalConsoleError(...params);
  }
};
