# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list


## My file structure

my-mern-blog-app/
├── client/              (Vite.js + React frontend)
│   ├── public/          (Static assets)
│   ├── src/             (Source code)
│   │   ├── components/  (Reusable React components)
│   │   ├── pages/       (Top-level route components)
│   │   ├── api/         (API-related code)
│   │   ├── styles/      (CSS or styles-related code)
│   │   ├── store/       (State management, using Redux or other)
│   │   └── main.tsx     (Entry point)
│   └── vite.config.js   (Vite.js config)
│
└── server/              (Node.js + Express backend)
    ├── controllers/     (Route controllers)
    ├── models/          (Mongoose models)
    ├── routes/          (Express route definitions)
    ├── utils/           (Utility functions)
    ├── app.ts           (Express app setup)
    └── server.ts        (Server entry point)
    