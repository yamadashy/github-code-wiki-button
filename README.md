<div align="center">
  <img src="app/images/icon.png" alt="GitHub Code Wiki Button" width="200" height="auto">
  <h2>GitHub Code Wiki Button</h2>
  <p>
    <b>A browser extension that adds a Code Wiki button to GitHub repositories</b>
  </p>
</div>

![](./promo/Screenshot_1280x800.png)

## 🚀 Get Started

### Install

> **Note**: This extension is not yet published to browser stores. You can install it manually by following the development instructions below.

### What is Code Wiki?

[Code Wiki](https://codewiki.google) is Google's AI-powered documentation platform that automatically generates comprehensive documentation for public repositories. It features:

- **Auto-updating documentation**: Scans your entire codebase and regenerates docs after changes
- **Gemini-powered chat**: Ask questions about the repository with full context
- **Interactive navigation**: Links from concepts to actual code files, classes, and functions
- **Auto-generated diagrams**: Automatically creates and updates architecture, class, and sequence diagrams

Just navigate to `https://codewiki.google/github.com/{owner}/{repo}` to access documentation for any public GitHub repository.

## 🔒 Privacy Policy

GitHub Code Wiki Button does not collect any data.

In the future, GitHub Code Wiki Button may add the ability to save user settings on your device, but that data will not be sent to the server.

In addition, the GitHub Code Wiki Button management account will not be transferred to a third party.

If you have any questions or inquiries regarding the privacy policy, please contact koukun0120@gmail.com.

Revised: November 14, 2025

## 💻 Development

Node.js 24 or higher is required for development.

### Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/yamadashy/github-code-wiki-button.git
   cd github-code-wiki-button
   ```
2. Install Node.js 24 or higher ([Node.js official site](https://nodejs.org/) or [nvm](https://github.com/nvm-sh/nvm) is recommended).
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm run dev chrome
   ```

### Main Commands

Development extension for each browser.

```sh
npm run dev chrome
npm run dev firefox
npm run dev edge
```

Build extension for each browser.

```sh
npm run build chrome
npm run build firefox
npm run build edge
```

Lint code.

```sh
npm run lint
```

## 📜 License

This project is licensed under the [MIT License](LICENSE).
