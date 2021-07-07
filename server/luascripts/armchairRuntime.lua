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

local OrchestrationCodeMap = {
    ready = 0,             
    exe_Purpose = 1,
    exe_WebSocketState = 2,  
    err_runtime = 3
    err_purpose = 4,  
    err_server = 5,
    err_gps = 6,    
}
--[[
    ready              - 0 - no errors, contiue to purpose script
    exe_Puprose        - 1 - Executing Purpose
    exe_WebSocketState - 2 - Controlled from Server via WebSocket

    err_runtime        - 3 - Failed to Execute Runtime operation
    err_pupose         - 4 - Exception Thrown in Purpose Script
    err_server         - 5 - Connection or server error exception
    err_gps            - 7 - unable to handle GPS location/vectoring
]]



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

local assignComputerLabel = function(state)
    if state.Label ~= nil && os.getComputerLabel ~= nil then
       os.setComputerLabel(state.Label)
    end
    if os.getComputerLabel == state.Label then
        return true
    else 
        return false
    end
end


local runtime = function()

    print(originState)
    originState = originStateBuilder()
    createOriginstateFile(originState)
    originPostStats = postState(originState)
    

    if originPostStats ~= nil then
        nextState = textutils.unserialiseJSON(originPostStats)
        print(nextState)

        StateModel = nextState




    end
end

runtime()