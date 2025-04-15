# Expense Tracker

An intuitive and user-friendly web application for tracking personal expenses.

![Expense Tracker](./img/bank.png)

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)

## Overview

Expense Tracker is a React-based web application designed to help users monitor and manage their personal finances. With a clean interface and simple functionality, users can track expenses across different categories, view spending patterns, and maintain a record of their financial activities.

## Features

- **Add Expenses**: Enter expense details including name, description, category, amount, and date
- **View Expenses**: Display all recorded expenses in a neatly organized table
- **Responsive Design**: Works seamlessly across desktop and mobile devices
- **Visual Feedback**: Smooth animations and visual cues enhance user experience

## Technology Stack

- **React**: Front-end UI library
- **CSS3**: Styling with custom animations and responsive design
- **JavaScript (ES6+)**: Core programming language

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Kipla1/expense-tracker.git
   cd expense-tracker
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

## Usage

### Adding an Expense
1. Fill in the "Add Expenses" form on the left side of the application
2. Enter the expense name, description, category, amount, and date
3. Click the "Submit" button to add the expense to your tracker

### Viewing Expenses
- All expenses are automatically displayed in the table on the right
- Amounts are formatted with proper number separators for readability

## Project Structure

```
expense-tracker/
├── public/
│   └── img/
│       └── bank.png
├── src/
│   ├── App.css
│   ├── App.jsx
│   ├── Icon.jsx
│   ├── Intro.jsx
│   ├── main.jsx
│   ├── Searchbar.jsx
│   ├── SubmissionForm.jsx
│   └── Table.jsx
├── index.html
├── package.json
└── README.md
```

### Component Breakdown

- **App.jsx**: Main component that orchestrates the application
- **Icon.jsx**: Renders the application logo
- **Intro.jsx**: Displays the welcome message and app description
- **Searchbar.jsx**: Provides search functionality for expenses
- **SubmissionForm.jsx**: Handles the input form for adding new expenses
- **Table.jsx**: Displays the expense data in a tabular format

## Future Enhancements

- Implement search functionality using the existing Searchbar component
- Add expense editing and deletion capabilities
- Implement data persistence with localStorage or a backend database
- Add expense categorization with visual indicators
- Include data visualization with charts and graphs
- Add budget setting and tracking features
- Implement user authentication for multi-user support

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request



Created with ❤️ by Oscar