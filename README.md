# ScholarAIze web-app!

## Pre-rquisites to run
always a good idea to
```bash
sudo apt update
sudo apt upgrade
```
then you want to make sure that you have NVM (Node Version Manager), you can install it via this link. You must have `curl`
[Link to install NVM](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating)

Then run `nvm install node` to get the latest LTS node

Then get `pnpm` by running this
```bash
npm install -g pnpm@latest-10
```
and 
```bash
pnpm install
```

Then you should be good to go.


## Running Dev
```bash
pnpm dev
```

## Running Linter and formatter
```bash
pnpm lint
pnpm format
```