```markdown
# Rawsaa Development Patterns

> Auto-generated skill from repository analysis

## Overview
This skill teaches the core development patterns and conventions used in the Rawsaa repository, a JavaScript codebase built with Next.js. You'll learn how to write code that matches the project's style, structure your files, use imports/exports correctly, and follow commit and testing practices. This guide also provides suggested commands for common workflows.

## Coding Conventions

### File Naming
- **Pattern:** PascalCase  
  Example:  
  ```
  MyComponent.js
  UserProfilePage.jsx
  ```

### Import Style
- **Pattern:** Alias-based imports (not relative paths)  
  Example:  
  ```javascript
  import Button from '@/components/Button';
  import { fetchUser } from '@/lib/api';
  ```

### Export Style
- **Pattern:** Default exports  
  Example:  
  ```javascript
  // Good
  const MyComponent = () => { ... };
  export default MyComponent;

  // Avoid
  export { MyComponent };
  ```

### Commit Messages
- **Pattern:** Conventional commits with `feat` prefix  
  Example:  
  ```
  feat: add user authentication with JWT tokens
  feat: update dashboard layout for mobile responsiveness
  ```

## Workflows

### Creating a New Feature
**Trigger:** When adding a new feature to the codebase  
**Command:** `/new-feature`

1. Create a new file using PascalCase in the appropriate directory.
2. Use alias imports for dependencies.
3. Write your component or module and export it as default.
4. Commit your changes using the `feat:` prefix and a descriptive message.
5. (Optional) Add or update a corresponding test file.

### Refactoring Code
**Trigger:** When improving or restructuring existing code  
**Command:** `/refactor`

1. Identify the component or module to refactor.
2. Update file names to PascalCase if necessary.
3. Ensure all imports use aliases.
4. Refactor code, maintaining default exports.
5. Commit with a clear message, e.g., `feat: refactor UserProfilePage for performance`.

### Writing Tests
**Trigger:** When adding or updating tests  
**Command:** `/add-test`

1. Create a test file matching the pattern `*.test.*` (e.g., `MyComponent.test.js`).
2. Write tests for your component or module.
3. Commit with a message like `feat: add tests for MyComponent`.

## Testing Patterns

- **File Pattern:** Test files are named with the `.test.` infix (e.g., `Button.test.js`).
- **Framework:** Not specified; follow standard JavaScript/Next.js testing practices.
- **Placement:** Test files are typically placed alongside the component/module they test.

**Example:**
```javascript
// Button.test.js
import Button from '@/components/Button';

describe('Button', () => {
  it('renders correctly', () => {
    // test implementation
  });
});
```

## Commands

| Command        | Purpose                                      |
|----------------|----------------------------------------------|
| /new-feature   | Start a new feature with proper conventions  |
| /refactor      | Refactor code following project guidelines   |
| /add-test      | Add or update a test file                    |
```
