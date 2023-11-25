# FiveM NUI NextJS Boilerplate - Get started quickly with the right tools

## Features

- ### Typescript - <https://www.typescriptlang.org/>
- ### NextJS 13 - <https://nextjs.org/>
- ### Next-themes - <https://www.npmjs.com/package/next-themes>
- ### Tailwindcss - <https://tailwindcss.com/>
- ### FiveM Integration

## FiveM Integration

### Send data to the UI from FiveM Client

```lua
SendNUIMessage({
    type = "app/setState", -- Redux type sliceName/reducer
    data = {
        valueOne = "FiveM",
        valueTwo = 10,
        buttonClicked = true
    }
})
```

### Get data from the FiveM Client

**UI**

```js
sendNuiCallback(
	"/callbackToClient",
	{
		valueOne: "TEST",
	},
	(response) => {
		console.log(response); // OUTPUT: TEST 1
	}
);
```

**FiveM Client**

```lua
RegisterNUICallback("callbackToClient", function(data, cb)
    cb(data.valueOne.." 1")
end)
```
