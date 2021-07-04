
function tableToJson(tableObj)
    local jsonStr = "{"

    for k, v in pairs(tableObj) do
        if  k ~= nil then
            jsonStr = jsonStr + k ":" + v ","
        end
    end
    jsonStr = jsonStr + "}"
    print(jsonStr)
    return jsonStr
end
