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

    err_runtime        - 3 - Failed
    err_pupose         - 4 - Exception Thrown in Purpose Script
    err_server         - 5 - Connection or server error exception
    err_gps            - 7 - unable to handle GPS location/vectoring
]]



local originStateBuilder = function()
    
    originx, originy, originy = gps.locate()
    originFuelLVl = turtle.getFuelLevel()
    originLavel = os.getComputerLabel()
    if 
        originx ~= 0 and
        originx ~= 0 and
        originx ~= 0 
    then
        StateModel = {
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
        print('origin state created')
        return true
    else
        print('failed to initialize origin state')
        return false
    end
end

local postState = function(stateModel)
    print('posting Origin to host')
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
        print('computer label assignment successful')
        return true
    else 
        print('computer label assignment failed')
        return false
    end
end


local runtime = function()

    

    if StateModel[errorState] == OrchestrationCodeMap[ready] then

        --build origin state
                print("initializing Runtime")
                print("building Turtle Origin State")
        --
        originStateIsCreated = originStateBuilder()
        computerLabelCreated = false
        if originStateIsCreated then
            createOriginstateFile()
            --
                print("origin file created")

            originPostStats = postState(originState)
        
            if originPostStats ~= nil then
                    print('purpose assigned')
                nextState = textutils.unserialiseJSON(originPostStats)
                    print(nextState)
                StateModel = nextState
                computerLabelCreated =  assignComputerLabel()
            end
        end

        if computerLabelCreated then
                print('initial runtime successful')
            runtime()
        else
                print('error in runtime')
            StateModel[errState] = OrchestrationCodeMap[err_runtime]
            runtime()
        end
        
    else if StateModel[errorState] == OrchestrationCodeMap[exe_Purpose] then
                print('executing purpose script')
        -- pCall() purpose script
        -- then runtime()

    else if StateModel[errorState] == OrchestrationCodeMap[exe_WebSocketState] then
                print('connecting to host websocket')
        -- pCall() websocketScript
        -- then runtime()
    else 
        -- Handle Error 
        --then runtime()
    end

end

runtime()