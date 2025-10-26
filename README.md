# 🌸 Bhagavad Gita Web App

> A simple and elegant **Bhagavad Gita** web application built using **Vite + React**, showcasing verses, chapters, and teachings of the Gita in a modern responsive UI.

🌐 **Live Demo:** [BhagavadGitaWeb](https://deepakchaurasia30.github.io/BhagavadGitaWeb/)  
📦 **Repository:** [GitHub Repo](https://github.com/DeepakChaurasia30/BhagavadGitaWeb)

---

## ⚙️ Tech Stack

- ⚛️ **React 18** (via Vite)
- 🌀 **React Router v6** — for smooth navigation between chapters
- 🪝 **React Hooks** — `useState`, `useEffect`, `useParams`
- 🧩 **Props & Components** — reusable UI sections
- 📁 **JSON Data** — to store verses and chapter details
- 🎨 **CSS Modules / External Styles** — clean UI and mobile responsiveness
- 🚀 **GitHub Pages** — deployment using [`gh-pages`](https://github.com/gitname/react-gh-pages)

---

## 🧭 Features

- 📜 Browse all **18 chapters** of the Bhagavad Gita  
- 🔍 View **individual shlokas** with translations  
- ⚡ **Fast Vite dev server** and optimized production build  
- 📱 Fully **responsive design** for mobile and desktop  
- 🌗 Simple & clean layout for distraction-free reading  

---

## 🧑‍💻 React Concepts Used

| Concept | Description |
|----------|-------------|
| 🧩 **Components & Props** | Modular UI and data passing |
| 🪝 **Hooks (`useState`, `useEffect`)** | State & lifecycle management |
| 🗺️ **React Router** | Page navigation with `useParams` |
| 📦 **JSON Objects** | Data-driven rendering of chapters and verses |

---

## 🚀 Deployment (GitHub Pages)

### 1️⃣ Install Dependencies `gh-pages` npm package

1. Install the [`gh-pages`](https://github.com/tschaub/gh-pages) npm package and designate it as a [development dependency](https://docs.npmjs.com/specifying-dependencies-and-devdependencies-in-a-package-json-file):
 
    ```shell
    $ npm install gh-pages --save-dev
    ```

At this point, the `gh-pages` npm package is installed on your computer and the React app's dependence upon it is documented in the React app's `package.json` file.

### 4. Add a `homepage` property to the `package.json` file

1. Open the `package.json` file in a text editor.
   
    ```shell
    $ vi package.json
    ```

    > In this tutorial, the text editor I'll be using is [vi](https://www.vim.org/). You can use any text editor you want; for example, [Visual Studio Code](https://code.visualstudio.com/).

2. Add a `homepage` property in this format\*: `https://{username}.github.io/{repo-name}`

    > \* For a [project site](https://pages.github.com/#project-site), that's the format. For a [user site](https://pages.github.com/#user-site), the format is: `https://{username}.github.io`. You can read more about the `homepage` property in the ["GitHub Pages" section](https://create-react-app.dev/docs/deployment/#github-pages) of the `create-react-app` documentation.

    ```diff
    {
      "name": "my-app",
      "version": "0.1.0",
    + "homepage": "https://deepakchaurasia30.github.io/BhagavadGitaWeb/",
      "private": true,
    ```
At this point, the React app's `package.json` file includes a property named `homepage`.

### 5. Add deployment scripts to the `package.json` file

1. Open the `package.json` file in a text editor (if it isn't already open in one).
   
    ```shell
    $ vi package.json
    ```

2. Add a `predeploy` property and a `deploy` property to the `scripts` object:

    ```diff
    "scripts": {
    +   "predeploy": "npm run build",
    +    "deploy": "gh-pages -d dist"
         For React
    +   "deploy": "gh-pages -d build",
        "start": "react-scripts start",
        "build": "react-scripts build",
        
    ```

At this point, the  React app's `package.json` file includes deployment scripts.

### 6. Add a "remote" that points to the GitHub repository

1. Add a "[remote](https://git-scm.com/docs/git-remote)" to the local Git repository.

    You can do that by issuing a command in this format: 
    
    ```shell
    $ git remote add origin https://github.com/{username}/{repo-name}.git
    ```
    
    To customize that command for your situation, replace `{username}` with your GitHub username and replace `{repo-name}` with the name of the GitHub repository you created in Step 1.

    In my case, I'll run:

    ```shell
    $ git remote add origin https://github.com/DeepakChaurasia30/BhagavadGitaWeb.git
    ```

    > That command tells Git where I want it to push things whenever I—or the `gh-pages` npm package acting on my behalf—issue the `$ git push` command from within this local Git repository.

At this point, the local repository has a "remote" whose URL points to the GitHub repository you created in Step 1.

### 7. Push the React app to the GitHub repository

1. Push the React app to the GitHub repository

    ```shell
    $ npm run deploy
    ```

    > That will cause the `predeploy` and `deploy` scripts defined in `package.json` to run.
    >
    > Under the hood, the `predeploy` script will build a distributable version of the React app and store it in a folder named `build`. Then, the `deploy` script will push the contents of that folder to a new commit on the `gh-pages` branch of the GitHub repository, creating that branch if it doesn't already exist.

    > By default, the new commit on the `gh-pages` branch will have a commit message of "Updates". You can [specify a custom commit message](https://github.com/DeepakChaurasia30/BhagavadGitaWeb/issues/80#issuecomment-1042449820) via the `-m` option, like this:
    > ```shell
    > $ npm run deploy -- -m "Deploy React app to GitHub Pages"
    > ```

At this point, the GitHub repository contains a branch named `gh-pages`, which contains the files that make up the distributable version of the React app. However, we haven't configured GitHub Pages to _serve_ those files yet.
