# Team Directory App

A React application for browsing team members, searching users, viewing profiles, and managing favorite members.

## Features

- Home, Users, User Details, About, and 404 pages
- React Router navigation without full page reloads
- Reusable Navbar, Button, UserCard, Loader, and ErrorMessage components
- Search team members by name
- Add and remove favorite members
- Dark/Light Mode toggle
- Loading indicator when users are loaded
- Dynamic browser page titles

## Technologies Used

- React
- Vite
- Tailwind CSS
- React Router
- JavaScript

## Components and Hooks

**Reusable Component — UserCard**

The UserCard component displays a team member's name, email, and company. It uses props to receive user information and favorite status, and provides buttons to manage favorites and view user details.

**useEffect Hook — Users Page**

The `useEffect` hook loads the local users data after a one-second delay when the Users page first renders. It displays a loading indicator while waiting. Another `useEffect` updates the browser tab title based on the number of users matching the search.

## How to Run

1. Install Node.js.
2. Clone or download this repository.
3. Open the project folder in a terminal.
4. Run `npm install`.
5. Run `npm run dev`.
6. Open the local URL displayed in the terminal.