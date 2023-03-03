const open = require('open');

const { method, parameters } = JSON.parse(process.argv[2])


if (method === "query") {
    console.log(JSON.stringify(
        {
            "result": [{
                "Title": "Hello World Typescript",
                "Subtitle": "Showing your query parameters: " + parameters + ". Click to open Flow's website",
                // Here we use the method name "do_something_for_query" to call the method "do_something_for_query" in the plugin
                "JsonRPCAction": {
                    "method": "do_something_for_query",
                    "parameters": ["https://github.com/Flow-Launcher/Flow.Launcher"]
                },
                "IcoPath": "Images\\app.png",
                "score" : 0
            }]
        }
    ));
}

if (method === "do_something_for_query") {
    url = parameters[0]
    do_something_for_query(url)
}

function do_something_for_query(url) {
    open(url);
}