
function tableToJson(tableObj)
    local jsonStr = "{"

    for k, v in pairs(tableObj) do
        if  k != nil then
            jsonStr + k ":" + v ","
        end
    end
    jsonStr = jsonStr + "}"
    return jsonStr
end
