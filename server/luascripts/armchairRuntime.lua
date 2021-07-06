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
    none = 0,
    serverConnection = 1,
    purpose = 2,
    gpsConnection = 3
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


local runtime = function()

    originState = originStateBuilder()
    originPostStats = postState(originState)

    if originPostStats ~= nill then
        
    end

    
    if errorState == 0 then
        
    else

    end
end

runtime()