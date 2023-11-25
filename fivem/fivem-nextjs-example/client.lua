local function displayNUI(display)
    SendNUIMessage({
        type = "app/setDisplay",
        data = display
    })
    SetNuiFocus(display, display)
end


RegisterKeyMapping("+"..cfg.cmd, "Open "..cfg.resourceName.." NUI", "keyboard", cfg.hotkey)
RegisterCommand("+"..cfg.cmd, function()
    displayNUI(true)
end)

RegisterCommand(cfg.cmd, function(source, args, raw)
    displayNUI(true)
end)
RegisterCommand(cfg.cmd.."_close", function(source, args, raw)
    displayNUI(false)
end)

AddEventHandler("onResourceStop", function(resource)
    if resource == cfg.resourceName then
        displayNUI(false)
    end
end)

RegisterNUICallback("close", function(data, cb)
    displayNUI(false)
    cb(true)
end)

RegisterNUICallback("getPlayerCount", function(data, cb)
    TriggerServerEvent(cfg.resourceName..":getPlayerCount")
    RegisterNetEvent(cfg.resourceName..":getPlayerCount")
    AddEventHandler(cfg.resourceName..":getPlayerCount", function(count)
        cb(count)
    end)
end)


