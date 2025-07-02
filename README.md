# NCLLL-FRONTEND

A modern React frontend application built with internationalization support and modular architecture.

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v20.18.3 (Required)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd NCLLI-FRONTEND
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   npm install -f
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the application.

### Build for Production

```bash
npm run build
# or
yarn build
```

The build artifacts will be stored in the `build/` directory.

### Run Tests

```bash
npm test
# or
yarn test
```

## 📁 Project Structure

```
NCLLI-FRONTEND/
├── public/                 # Static assets
├── node_modules/          # Dependencies
├── build/                 # Production build output
├── src/                   # Source code
│   ├── api/              # API configuration and services
│   │   ├── httpClient.js
│   │   ├── publicRequest.js
│   │   └── URLs.js
│   ├── assets/           # Static assets (images, fonts, etc.)
│   ├── components/       # Reusable UI components
│   ├── config/           # Configuration files
│   │   └── api.js
│   ├── constants/        # Application constants
│   ├── global/           # Global utilities and configurations
│   ├── i18n/            # Internationalization
│   │   ├── locales/     # Translation files
│   │   │   ├── en/      # English translations
│   │   │   └── kh/      # Khmer translations
│   │   │       └── translations.json
│   │   ├── config.js
│   │   ├── LanguageProvider.js
│   │   └── MenuProvider.js
│   ├── layouts/         # Layout components
│   │   ├── DefaultLayout.js
│   │   ├── DetailsLayout.js
│   │   └── GuardLayout.js
│   ├── pages/           # Page components
│   └── utils/           # Utility functions
│       ├── Utils.js
│       ├── App.css
│       ├── App.js
│       ├── App.test.js
│       ├── index.css
│       ├── index.js
│       ├── logo.svg
│       ├── reportWebVitals.js
│       └── setupTests.js
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
└── tailwind.config.js
```

## 🏗️ Architecture Overview

### Core Features

- **React**: Modern React application with functional components
- **Internationalization (i18n)**: Multi-language support (English/Khmer)
- **Modular API Layer**: Centralized HTTP client and API management
- **Layout System**: Multiple layout components for different page types
- **Styling**: Tailwind CSS for utility-first styling

### Key Directories

#### `/src/api/`
Contains API-related configurations and services:
- `httpClient.js`: HTTP client setup and interceptors
- `publicRequest.js`: Public API requests handler
- `URLs.js`: API endpoint definitions

#### `/src/components/`
Reusable UI components that can be used across different pages.

#### `/src/i18n/`
Internationalization setup:
- **Language Provider**: Context for language management
- **Menu Provider**: Context for menu translations
- **Locales**: Translation files for supported languages

#### `/src/layouts/`
Layout components that provide consistent structure:
- `DefaultLayout.js`: Standard page layout
- `DetailsLayout.js`: Layout for detail pages
- `GuardLayout.js`: Protected route layout

#### `/src/pages/`
Individual page components representing different routes/views.

#### `/src/utils/`
Utility functions and helpers used throughout the application.

## 🌐 Internationalization

The application supports multiple languages:

- **English** (`en`)
- **Khmer** (`kh`)

Translation files are located in `/src/i18n/locales/` and the language context is managed through `LanguageProvider.js`.

## 🛠️ Configuration

- **Tailwind CSS**: Configuration in `tailwind.config.js`
- **API Config**: Centralized in `/src/config/api.js`
- **Environment Variables**: Configure in `.env` files (not tracked in git)

## 📝 Development Guidelines

1. **Component Structure**: Keep components small and focused
2. **API Calls**: Use the centralized HTTP client from `/src/api/`
3. **Styling**: Prefer Tailwind CSS utility classes
4. **Translations**: Add new strings to appropriate locale files
5. **Layouts**: Use existing layouts or create new ones for consistent structure

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## 🔄 Git Workflow & Rebasing

### Branch Management

#### Creating a New Feature Branch
```bash
# Create and switch to a new branch
git checkout -b feature/your-feature-name

# Or using newer syntax
git switch -c feature/your-feature-name
```

#### Rebasing Your Branch

**Before rebasing, ensure your changes are committed:**
```bash
# Stage your changes
git add .

# Commit your changes
git commit -m "Your commit message"
```

**Rebase with main/master branch:**
```bash
# Switch to main branch and pull latest changes
git checkout main
git pull origin main

# Switch back to your feature branch
git checkout feature/your-feature-name

# Rebase your branch onto main
git rebase main
```

**If conflicts occur during rebase:**
```bash
# Resolve conflicts in your editor
# Then add the resolved files
git add .

# Continue the rebase
git rebase --continue

# If you want to abort the rebase
git rebase --abort
```

### Interactive Rebase (Clean up commits)
```bash
# Interactive rebase to clean up last 3 commits
git rebase -i HEAD~3

# Common operations in interactive rebase:
# pick = keep commit as is
# squash = combine with previous commit
# reword = change commit message
# drop = remove commit
```

### Pushing Changes

#### First time pushing a new branch:
```bash
# Push and set upstream
git push -u origin feature/your-feature-name
```

#### After rebasing (force push required):
```bash
# Force push after rebase (be careful!)
git push --force-with-lease origin feature/your-feature-name

# Alternative (safer option)
git push --force-with-lease
```

#### Regular push (no rebase):
```bash
# Normal push
git push origin feature/your-feature-name

# Or if upstream is set
git push
```

### Complete Workflow Example

```bash
# 1. Start with latest main
git checkout main
git pull origin main

# 2. Create feature branch
git checkout -b feature/add-new-component

# 3. Make your changes and commit
git add .
git commit -m "Add new component with tests"

# 4. Before pushing, rebase with main (if main has new changes)
git checkout main
git pull origin main
git checkout feature/add-new-component
git rebase main

# 5. Push your branch
git push -u origin feature/add-new-component

# 6. Create pull request on GitHub
# 7. If more changes needed, commit and push normally
git add .
git commit -m "Address review comments"
git push

# 8. If main gets updated during review, rebase again
git checkout main
git pull origin main
git checkout feature/add-new-component
git rebase main
git push --force-with-lease
```

### Useful Git Commands

```bash
# Check current branch and status
git status
git branch

# View commit history
git log --oneline

# View remote repositories
git remote -v

# Fetch latest changes without merging
git fetch origin

# Reset to specific commit (careful!)
git reset --hard <commit-hash>

# Stash changes temporarily
git stash
git stash pop

# View differences
git diff
git diff --staged
```

### Best Practices

1. **Always rebase before pushing** to keep history clean
2. **Use `--force-with-lease`** instead of `--force` for safer force pushing
3. **Write descriptive commit messages** following conventional commits
4. **Test your code** before committing
5. **Keep commits atomic** - one logical change per commit
6. **Rebase feature branches** onto main regularly to avoid conflicts

## 📄 License

Created by students of IT STEP Academy.