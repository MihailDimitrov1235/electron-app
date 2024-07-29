# Electron app

[![Build Status][github-actions-status]][github-actions-url]

<p>Desktop anilist client build using <a href="https://github.com/electron-react-boilerplate/electron-react-boilerplate">Electron React Boilerplate</a></p>

## Development

### Installing dependancies

```bash
npm install
```

### Starting

```bash
npm start
```

### Testing

```bash
npm run test
```

### Generating graphql hooks

<p>After changing or adding a new .graphql file generating a new types_and_hooks.tsx file happens with this command. Use the newly generated file to fetch data from anilist</p>

```bash
npm run generate
```

### Building

```bash
npm run package
```

[github-actions-status]: https://github.com/MihailDimitrov1235/electron-app/workflows/Test/badge.svg
[github-actions-url]: https://github.com/MihailDimitrov1235/electron-app/actions
