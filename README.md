# NxReactMicroFe

## Overview

This project is an e-commerce micro frontend application built using ReactJS and Nx. It demonstrates how to structure a complex application as a set of independent, deployable micro frontends, enhancing scalability and maintainability.

### Features:
- **Login Page:** User authentication and session management.
- **Home Page:** Landing page for the e-commerce site.
- **Product List/Detail:** Browse products with detailed views.
- **Cart Functionality:** Basic cart with the ability to add to cart and display total items.
- **Shared State Management:** Global state management to share states across all micro frontends.

### Technologies:
- **ReactJS:** Component-based UI.
- **React Router Dom:** For application navigation.
- **Module Federation:** For micro frontend architecture, enabling independent deployments.
- **Zustand:** For shared state management.
- **CSS Modules:** For component-level styling.
- **TailwindCSS:** A utility-first CSS framework that enables rapid UI development with pre-defined styles, offering a highly customizable design system.
- **Vite:** A fast build tool and development server optimized for modern JavaScript frameworks, providing instant server startup and lightning-fast builds.
---

## Running the Project

### Serve Applications:
To serve an application:
```sh
npx nx serve <app-name>
```

For example, to serve the `shell` application:
```sh
npx nx serve shell --open
```

### Build Applications:
To build an application for production:
```sh
npx nx build <app-name>
```

For example:
```sh
npx nx build shell
```

---

## Adding New Remote Applications

To add a new remote app to the workspace, use the following command:
```sh
npx nx g @nx/react:remote <remote-name> --host=shell
```

Replace `<remote-name>` with the name of the new remote app. For example:
```sh
npx nx g @nx/react:remote cart --host=shell
```

This command will:
- Create a new remote app under the `apps/` directory.
- Configure the `shell` application to consume the remote.

For more details, refer to the [official Nx documentation](https://nx.dev/recipes/module-federation/create-a-remote).

---

## Folder Structure

The workspace is organized as follows:

```plaintext
my-ecommerce/
├── apps/
│   ├── shell/       # Host application
│   ├── login/       # Remote application
│   ├── cart/        # Remote application
│   ├── home/        # Remote application
│   ├── products/    # Remote application
├── libs/
│   └── shared/      # Shared libraries
├── nx.json          # Nx workspace configuration
├── package.json     # Workspace dependencies
├── tsconfig.json    # TypeScript configuration
└── yarn.lock        # Dependency lock file
```

---

## CI/CD Integration

### Step 1: Connect Nx Cloud
To enable remote caching and task distribution:
```sh
npx nx connect
```

### Step 2: Set Up CI Workflow
Generate a CI configuration file:
```sh
npx nx g ci-workflow
```

---

## Creating Libraries

To create a new shared library:
```sh
npx nx g @nx/react:lib <lib-name>
```

For example:
```sh
npx nx g @nx/react:lib shared-ui
```

Libraries can be reused across applications and are located in the `libs/` directory.

---

## Useful Commands

### Show Dependency Graph:
```sh
npx nx graph
```

### Run Tasks for Affected Projects:
```sh
npx nx affected --target=<task>
```

Example (build affected projects):
```sh
npx nx affected --target=build
```

For more Nx commands, refer to the [Nx documentation](https://nx.dev).

---

## Contributing
Feel free to contribute to this project by adding new features, fixing bugs, or improving documentation. Fork the repository and submit a pull request.

---

## License
This project is licensed under the MIT License.
