# TaskMaster (React + Vite)

This repo contains source code for TaskMaster, a responsive and simple todo list web app.

<img src="/src/assets/images/tm-banner.PNG" alt="Banner Image" title="Banner Image" width="500px" height="450px">

## Table of Contents

- [Installation](#installation)
- [Folder Structure](#folderstructure)
- [Features](#features)

## Installation

If you haven't download Nodejs, please install first from https://nodejs.org/en/download

To install and set up your project:

```bash
cd path/to/your-desired-directory

git clone -b feature/react https://github.com/josephkohhh/TaskMaster.git

cd TaskMaster

npm install

```

## Folder Structure

```
TaskMaster
├─ .eslintrc.cjs
├─ .gitignore
├─ index.html
├─ package-lock.json
├─ package.json
├─ README.md
├─ src
│  ├─ App.css
│  ├─ App.jsx
│  ├─ main.jsx
│  ├─ assets
│  │  └─ images
│  │     ├─ component-diagram.png
│  │     ├─ tm-icon.svg
│  │     └─ tm-banner.PNG
│  ├─ components
│  │  ├─ containers
│  │  │  ├─ TaskList.jsx
│  │  │  └─ TaskMaster.jsx
│  │  ├─ form
│  │  │  └─ Form.jsx
│  │  └─ ui
│  │     ├─ AccordionDiagram.jsx
│  │     ├─ Counter.jsx
│  │     ├─ Diagram.jsx
│  │     ├─ FontTheme.js
│  │     ├─ Navbar.jsx
│  │     ├─ SubmitButton.jsx
│  │     ├─ TableDiagram.jsx
│  │     ├─ Task.jsx
│  │     └─ TextInput.jsx
│  ├─ data
│  │  └─ constants.js
│  ├─ fonts
│  │  ├─ Poppins-Regular.ttf
│  │  └─ ...
│  ├─ lib
│  │  ├─ ReactSyntaxHighligherComponent.jsx
│  │  └─ RouterComponent.jsx
│  ├─ pages
│  │  ├─ About.jsx
│  │  └─ Home.jsx
│  └─ services
│     └─ api
│        └─ localStorageService.js
└─ vite.config.js

```

## Features

- Add Todo Task
- Add/Delete/Clear Task(s)
- Toggle Task Completion
- Task Counter
- TaskList Saved in Web Local Storage
