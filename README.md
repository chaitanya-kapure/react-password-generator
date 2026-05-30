# React Password Generator

A modern Password Generator built using React, Vite, and Tailwind CSS. This application allows users to generate secure and customizable passwords with support for numbers, special characters, adjustable password length, and one-click clipboard copying.

## Features

* Generate strong random passwords
* Customize password length (8–100 characters)
* Include or exclude numbers
* Include or exclude special characters
* One-click copy to clipboard
* Responsive and clean user interface
* Built using React Hooks

## Technologies Used

* React
* Vite
* Tailwind CSS
* JavaScript (ES6+)

## React Concepts Used

### useState

Used for managing:

* Password length
* Number inclusion toggle
* Special character inclusion toggle
* Generated password

### useEffect

Used to regenerate the password whenever user preferences change.

### useCallback

Used to memoize the password generation function and prevent unnecessary recreation.

### useRef

Used to access the password input field directly and select text for copying.

## How It Works

1. User selects password length.
2. User chooses whether to include numbers and special characters.
3. A random password is generated automatically.
4. The generated password is displayed in the input field.
5. Clicking the Copy button copies the password to the clipboard.

## Installation

Clone the repository:

```bash
git clone https://github.com/chaitanya-kapure/react-password-generator.git
```

Navigate to the project folder:

```bash
cd react-password-generator
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## Future Improvements

* Include uppercase/lowercase toggles
* Password strength indicator
* Password history
* Dark/Light theme switch
* Mobile-first enhancements

## Author

Chaitanya Kapure

Learning React through hands-on projects and building a strong foundation in modern web development.
