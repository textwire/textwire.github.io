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
If you use a container engine like [🦦 Podman](https://podman.io/) or [🐳 Docker](https://app.docker.com/), here are the steps that you can make:

#### Build an image
To build an image, navigate to the root of the project and run this command:

```bash
docker compose build
```

For Podman, use:

```bash
podman-compose build
```

#### Run the container
To run a container, navigate to the root of the project and run this command:

```bash
docker compose up -d
```

For Podman, use:

```bash
podman-compose up -d
```

You can visit `http://localhost:3000` to see your documentation. Your files will be auto-compiled to plain JavaScript as you change them.

#### Enter the container
To enter inside of the container, run this command:

```bash
docker compose exec app sh
```

For Podman, use:

```bash
podman-compose exec app sh
```

You'll be able to run NPM commands inside of the container.

> [!WARNING]
> You don't need to run `npm start` because it's already running after you created a container.

#### Delete the Container
After you are done working on a project, you can cleanup by stopping and removing all the running containers for this project.

```bash
docker compose down
```

For Podman, use:

```bash
podman-compose down
```