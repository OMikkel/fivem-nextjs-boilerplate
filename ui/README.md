# NextJS NUI Example

This is the ui for the nextjs fivem example

Use this as a starting point for your next FiveM NUI project.

## ⚠️ Important

If you choose to rename the folder `fivem-nextjs-example` to something else, make sure to update the `NEXT_PUBLIC_RESOURCE_NAME` in the [`.env`](/ui/.env) file. in the `ui` folder

If you are using vercel to deploy your ui, make sure to update the environment variables in the vercel dashboard

## Installation

### Deploy via Vercel

1. Create a new repository from the template button (upper right corner)
2. Create a new project on https://vercel.com/new
3. Connect your github repository to vercel
4. Add the environment variables from [`.env`](/ui/.env) in the vercel dashboard
5. Deploy your project
6. Update ui_page url in `fxmanifest.lua` to your ui deployment url
7. Start your server.

### Deploy manually

1. Clone this repository or download it as a zip file.
2. Extract the zip file (if you downloaded it as a zip file).
3. Go to the `ui` folder.
4. Run `npm install` or `yarn install` or `pnpm install` to install the dependencies.
5. Run `npm run build` or `yarn build` or `pnpm build` to build the project.
6. Run `npm run start` or `yarn start` or `pnpm start` to start the project.
7. Update ui_page url in `fxmanifest.lua` to your ui deployment url
8. Start your server.

## Usage

Join your server and press the hotkey (default: `H`) to open the menu.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
