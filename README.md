# code-scanning-checks

> A GitHub App built with [Probot](https://github.com/probot/probot) that demo application for codescanning checks in PR

## Setup

```sh
# Install dependencies
npm install

# Run the bot
npm start
```

## Docker

```sh
# 1. Build container
docker build -t code-scanning-checks .

# 2. Start container
docker run -e APP_ID=<app-id> -e PRIVATE_KEY=<pem-value> code-scanning-checks
```

## Contributing

If you have suggestions for how code-scanning-checks could be improved, or want to report a bug, open an issue! We'd love all and any contributions.

For more, check out the [Contributing Guide](CONTRIBUTING.md).

## License

[ISC](LICENSE) © 2022 amitgupta7 <amitgupta7@github.com>
