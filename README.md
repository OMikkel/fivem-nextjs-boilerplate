# FiveM NUI NextJS Boilerplate - Get started quickly with the right tools

Click this button to create a new repository based on this template.

[![Use this template](https://img.shields.io/badge/-Use%20this%20template-blue?style=for-the-badge)](https://github.com/new?template_name=fivem-nextjs-boilerplate&template_owner=OMikkel)

Contact me: https://omikkel.com/discord

## Features

- Typescript - <https://www.typescriptlang.org/>
- NextJS 14 - <https://nextjs.org/>
- Next-themes - <https://www.npmjs.com/package/next-themes>
- Tailwindcss - <https://tailwindcss.com/>
- Redux Toolkit - <https://redux-toolkit.js.org/>
- FiveM Integration

## ⚠️ Important 

If you choose to rename the folder `fivem-nextjs-example` to something else, make sure to update the `NEXT_PUBLIC_RESOURCE_NAME` in the [`.env`](/ui/.env) file. in the `ui` folder

If you are using vercel to deploy your ui, make sure to update the environment variables in the vercel dashboard

## Getting Started

### FiveM Resource

1. Clone this repository or download it as a zip file.
2. Extract the zip file (if you downloaded it as a zip file).
3. Move the folder `fivem-nextjs-example` to your resources folder.
4. Add `ensure fivem-nextjs-example` to your `server.cfg` file.
5. Update ui_page url in `fxmanifest.lua` to your ui deployment url
6. Edit `config.lua` to your liking.
7. Start your server.

### NextJS UI

#### Deploy via Vercel

1. Create a new repository from the template button (upper right corner)
2. Create a new project on https://vercel.com/new
3. Connect your github repository to vercel
4. Add the environment variables from [`.env`](/ui/.env) in the vercel dashboard
5. Deploy your project
6. Update ui_page url in `fxmanifest.lua` to your ui deployment url
7. Start your server.

#### Deploy manually

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

## Learn More about NextJS

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## How does it work?

### Send data to the UI from FiveM Client

#### FiveM Client

```lua
-- client.lua
SendNUIMessage({
    type = "app/setDisplay", -- Redux type sliceName/reducer
    data = true/false, -- Redux payload
})
```

#### UI

```js
// state/reducers/app.ts
const appSlice = createSlice({
    name: "app", // sliceName
    initialState,
    reducers: {
        // reducer
        setDisplay: (state, action: PayloadAction<boolean>) => {
             state.display = action.payload; // action.payload is the data from the FiveM client
        },
    },
});
```

### Get data from the FiveM Client

#### UI

```js
// app/page.tsx
const getPlayerCount = () => {
    // Call FiveM client
    nuiCallback("/getPlayerCount", {}, (result: number) => {
        setPlayerCount(result); // Set React state
    });
};
```

#### FiveM Client

```lua
-- client.lua
RegisterNUICallback("getPlayerCount", function(data, cb)
    TriggerServerEvent(cfg.resourceName..":getPlayerCount") -- Ask server for data
    RegisterNetEvent(cfg.resourceName..":getPlayerCount")
    AddEventHandler(cfg.resourceName..":getPlayerCount", function(count)
        cb(count) -- Send server response back to ui
    end)
end)
```

```lua
-- server.lua
RegisterServerEvent(cfg.resourceName..":getPlayerCount")
AddEventHandler(cfg.resourceName..":getPlayerCount", function()
    TriggerClientEvent(cfg.resourceName..":getPlayerCount", source, GetNumPlayerIndices()) -- Respond to client with player count
end)
```
