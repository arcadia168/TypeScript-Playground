function enumDemo() {
    var temperature;
    (function (temperature) {
        temperature[temperature["cold"] = 0] = "cold";
        temperature[temperature["hot"] = 1] = "hot";
    })(temperature || (temperature = {}));
    ;
    var temp = temperature.cold;
    switch (temp) {
        case temperature.cold:
            console.log("Brrrr....");
            break;
        case temperature.hot:
            console.log("yikes!");
            break;
    }
}
enumDemo();
//# sourceMappingURL=enumDemo.js.map