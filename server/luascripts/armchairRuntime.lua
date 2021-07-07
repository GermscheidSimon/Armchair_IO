local StateModel = {
    Location = {
        x = 0,
        y = 0,
        z = 0
    },
    FuelLvl = 0,
    Purpse = "none",
    Label = "none",
    errorState = 0
}

local errorMap = {
    none = 0,             -- no errors, contiue to purpose script
    serverConnection = 1, -- unable to connect to server
    purpose = 2,          -- exception thrown in purpose
    gpsConnection = 3,    -- exception thrown in gps API
    webSocketState = 4    -- turtle state set to controlled from app server
}



local originStateBuilder = function()
    
    originx, originy, originy = gps.locate()
    originFuelLVl = turtle.getFuelLevel()
    originLavel = os.getComputerLabel()


    return {
        Location = {
            x = originx,
            y = originy,
            z = originz
        },
        FuelLvl = originFuelLvl,
        Purpose = "origin",
        Label = originLabel,
        errorState = 0
    }
end

local postState = function(stateModel)
    stateModelJson = helpers.tableToJson(tableToJson)

    return http.post("https://armchair-io.herokuapp.com/boot/initializeTurtle", stateModelJson)
end

local createOriginstateFile = function(state)
    orgiinFile = fs.open('originConfig.lua','w')
    originFile.write(state)
    originFile.close()
end


local runtime = function()

    print(originState)
    originState = originStateBuilder()
    createOriginstateFile(originState)
    originPostStats = postState(originState)

   -- if originPostStats ~= nil then
        nextState = textutils.unserialiseJSON(originPostStats)
        print(nextState)

        --StateModel = nextState
   -- end


end

runtime()