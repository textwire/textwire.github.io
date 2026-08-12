# Textwire Documentation

VitePress documentation site for [Textwire](https://codeberg.org/textwire/textwire) templating engine for Go programming language. Uses [VitePress](https://vitepress.dev/).

## Directory Structure

- Theme files: `docs/.vitepress/theme/`
- Syntax highlighting: `docs/.vitepress/textwire.tmLanguage.json`
- VitePress config: `docs/.vitepress/config.mts`
- Versioned docs: `docs/versions/`
- Blog articles: `docs/.vitepress/blog/`
- Blog registry: `docs/.vitepress/theme/modules/blogPosts.ts`

## Development

- No tests needed
- Build: `npm run build`

## Important

- If you write inline code examples with `{{` and `}}` braces that Textwire uses, wrap them in <code v-pre></code> HTML tags instead. Intead of `{{ x = 5}}` Textwire example, you should write <code v-pre>{{ x = 5 }}</code>. It's because if you write it with backtics, Vue will execute them since `{{ }}` braces are also used in Vue.js.
- For all other inline code, use backticks `code`. Only use <code v-pre>code</code> when the code contains `{{` or `}}` braces to prevent Vue.js from executing it.

## Contribute

### Build an Image

To build an image, navigate to the root of the project and run this command.

With Podman:

```bash
podman-compose build
```

With Docker:

```bash
docker compose build
```

### Create `node_modules`

Run this command to install npm packages and generate a `node_modules` directory on your local machine.

With Podman:

```bash
podman-compose run --rm app npm i
```

With Docker:

```bash
docker compose run --rm app npm i
```

### Run the Container

To run a container, navigate to the root of the project and run this command.

With Podman:

```bash
podman-compose up
```

With Docker:

```bash
docker compose up
```

You can visit [localhost:3000](http://localhost:3000) to see your documentation.

### Enter the Container

To enter inside of the container, run this command.

With Podman:

```bash
podman-compose app sh
```

With Docker:

```bash
docker compose app sh
```

You'll be able to run NPM commands inside of the container.

### Remove the Container

After you are done working on a project, you can cleanup by removing running containers.

With Podman:

```bash
podman-compose down
```

With Docker:

```bash
docker compose down
```

## NPM Commands

### Install Dependencies

```bash
npm i
```

### Watch File Changes

```bash
npm run dev
```

Navigate to [localhost:5173](http://localhost:5173) to see your documentation if you run this project locally. With container engines it's going to be [localhost:3000](http://localhost:3000).
