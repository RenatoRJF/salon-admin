# Salon Admin

Salon Admin is a modern, responsive web application designed to streamline salon management tasks. Built using the latest web technologies like Next.js, React, and TailwindCSS, it provides an efficient and scalable platform for managing appointments, staff, clients, and more.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Scripts](#scripts)
- [Development](#development)
  - [Testing](#testing)
- [Folder Structure](#folder-structure)
- [License](#license)

## Features

- **Admin Dashboard**: Manage appointments, clients, and staff with an intuitive interface.
- **Responsive Design**: Fully responsive UI built with TailwindCSS.
- **Calendar Integration**: Seamlessly manage schedules using `react-big-calendar` and `dayjs`.
- **Dark/Light Mode**: Enhance user experience with customizable themes.
- **State Management**: Lightweight and efficient state management with Zustand.
- **Unit Testing**: Comprehensive tests with Jest and React Testing Library.

## Technologies Used

- **Framework**: [Next.js](https://nextjs.org/) (v15.1.6)
- **Frontend**:
  - [React](https://reactjs.org/) (v19)
  - [TailwindCSS](https://tailwindcss.com/) (v3.4.1)
  - [PrimeReact](https://www.primereact.org/) (v10.9.1)
  - [SASS](https://sass-lang.com/) (v1.83.4)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand) (v5.0.3)
- **Date Handling**: [Day.js](https://day.js.org/) (v1.11.13)
- **Calendar**: [React Big Calendar](https://github.com/jquense/react-big-calendar) (v1.17.1)
- **Linting**: [ESLint](https://eslint.org/) (v9)
- **Unit Testing**:
  - [Jest](https://jestjs.io/) (v29.7.0)
  - [React Testing Library](https://testing-library.com/) (v16.2.0)
  - [TypeScript](https://www.typescriptlang.org/) (v5)

## Getting Started

Follow these steps to set up and run the application locally.

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or later)
- [Yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repo/salon-admin.git
   cd salon-admin
   ```

2. Install dependencies:
   ```bash
   yarn install
   ```

### Scripts

Here are the available yarn scripts:

- **Start Development Server**:

  ```bash
  yarn dev
  ```

  Starts the development server using Next.js with Turbopack.

- **Build for Production**:

  ```bash
  yarn build
  ```

  Creates an optimized production build.

- **Start Production Server**:

  ```bash
  yarn start
  ```

  Starts the server in production mode.

- **Lint Code**:

  ```bash
  yarn lint
  ```

  Runs ESLint to check for code style and quality issues.

- **Run Tests**:

  ```bash
  yarn test
  ```

  Runs the unit tests with Jest.

- **Watch Tests**:

  ```bash
  yarn test:watch
  ```

  Runs the tests in watch mode.

- **Test Coverage**:
  ```bash
  yarn test:coverage
  ```
  Runs the tests and generates a coverage report.

### Testing

The project uses Jest and React Testing Library for unit tests. Test files are located alongside their respective components or in a `__tests__` folder.

Example test command:

```bash
yarn test
```

### Folder Structure

The project follows a standard Next.js structure:

```
.
├── public          # Static assets (images, fonts, etc.)
├── src             # Source code
│   ├── components  # Reusable components
│   ├── app         # Next.js pages
│   ├── styles      # Global and component-level styles
│   ├── hooks       # Application hooks
│   ├── constants   # Constants
├── __tests__       # Unit tests
├── jest.config.js  # Jest configuration
├── jest.setup.js   # Jest setup file
├── tailwind.config.js  # TailwindCSS configuration
├── tsconfig.json   # TypeScript configuration
├── package.json    # Project metadata and dependencies
```

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
