# Textwire Documentation
Docs build with [Docusaurus](https://docusaurus.io/).

## Contribute
### NPM Commands
#### Install Dependencies
```bash
npm install
```

#### Watch File Changes
```bash
npm start
```

Navigate to `http://localhost:3000` to see your documentation.

### With Container Engine
> [!NOTE]
> If you use [🐳 Docker](https://app.docker.com/) instead of [🦦 Podman](https://podman.io/), just replace `podman-compose` with `docker compose`, and `podman` with `docker` in code examples below.

#### Build an Image
To build an image, navigate to the root of the project and run this command:
```bash
podman-compose build
```

#### Copy `node_modules` Locally
If you need to copy `node_modules` directory from the container to your local machine, run this command:
```bash
podman cp textwire-docs:/app/node_modules .
```

> [!NOTE]
> `node_modules` is excluded from using volume in [compose.yml](compose.yml) file, that's why you need to copy it manually. It's done to prevent your local modules to be copied to Linux container, since it can create incompatibility issues between operating systems if you don't use Linux.

#### Run the Container
To run a container, navigate to the root of the project and run this command:
```bash
podman-compose up -d
```

You can visit `http://localhost:3000` to see your documentation. Your files will be auto-compiled to plain JavaScript as you change them.

#### Enter the Container
To enter inside of the container, run this command:
```bash
podman-compose exec app sh
```

You'll be able to run NPM commands inside of the container.

> [!WARNING]
> You don't need to run `npm start` because it's already running after you created a container.

#### Delete the Container
After you are done working on a project, you can cleanup by stopping and removing all the running containers for this project.
```bash
podman-compose down
```
