
function tableToJson(tableObj)
    local jsonStr = "{"
    for k, v in pairs(tableObj) do
         jsonStr = jsonStr .. k ":" .. v ","
    end
    jsonStr = jsonStr .. "}"
    print(jsonStr)
    return jsonStr
end
