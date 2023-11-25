RegisterServerEvent(cfg.resourceName..":getPlayerCount")
AddEventHandler(cfg.resourceName..":getPlayerCount", function()
    TriggerClientEvent(cfg.resourceName..":getPlayerCount", source, GetNumPlayerIndices())
end)