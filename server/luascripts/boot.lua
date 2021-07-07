function findPurpse()
    local currentStateTbl = {}

    local currentGuid = os.getComputerLabel()
    print(currentGuid)
    local cx, cy, cz = gps.locate()
    print(cx, cy, cz)
    currentStateTbl["guid"] = currentGuid
    currentStateTbl["cx"] = cx
    currentStateTbl["cy"] = cy
    currentStateTbl["cz"] = cz
    local purposeData = textutils.serialiseJSON(currentStateTbl)

    local purposeReq = http.post("https://armchair-io.herokuapp.com/boot/purpose", purposeData)
end
function bindHelperAPI() 
    local helperReq = http.get("https://armchair-io.herokuapp.com/boot/helpers")
    local helperFile = fs.open('helpers.lua','w')
    print(helper)
    local helper = helperReq.readAll()
    helperFile.write(helper)

    helperFile.close()
    local helpderIsLoaded = os.loadAPI("/helpers.lua")
end


function boot()
    print('booting....')
end

boot()
bindHelperAPI()
findPurpse()