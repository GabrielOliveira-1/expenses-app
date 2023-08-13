# Expenses-App

The Expenses App is a React-based application designed to help you track and manage your previously input expenses for each month of the year. It provides a user-friendly interface to add expenses, view them in a chart format, and list all expenses for the selected year.

## Concepts Implemented

This app incorporates various React concepts to create a functional and interactive user experience:

1. React Basics: The foundation of the app is built on React, allowing for the efficient creation of user interfaces using components and a virtual DOM.

2. Components: The app is structured into modular components, each responsible for a specific UI element or functionality. This modular approach enhances code organization and reusability.
3. Props: Components are configured using props, allowing data to be passed from parent components to child components. This promotes component composition and helps manage dynamic content.

4. Component Composition: By combining smaller, reusable components, the app assembles a complex UI. This concept promotes code maintainability and separation of concerns.

5. Key Concepts Data: The app utilizes key financial concepts like expenses and years to model the core data structure. This data-driven approach forms the backbone of the application's functionality.

6. Reusable Component: The chart component is a prime example of reusability, as it dynamically renders a chart based on data. It can be utilized across different parts of the application.

7. State: The app employs state management to handle dynamic content and user interactions. State allows components to react to changes and update the UI accordingly.

8. Events: User interactions are managed through event handling. For instance, the form submission triggers an event that adds a new expense.

9. Rendering Lists: The list of expenses for a selected year is generated using a map function to render individual expense items based on the data.

10. Conditional Contents: The UI adjusts based on conditions such as whether there are expenses to display. If there are no expenses for a given year, a message is displayed indicating that no expenses are available.

## How to use it

1. Clone the repository:
   $ git clone <repository-url>
2. Navigate to the project directory: cd expenses-app
3. Install dependencies: npm install
4. Run the app: npm start
5. Open your browser and go to http://localhost:3000 to interact with the app.

## Summary

The Expenses App showcases a practical implementation of React concepts, offering an intuitive way to visualize expenses for different years. By employing the mentioned concepts, the app creates a seamless user experience while maintaining code modularity and reusability.
