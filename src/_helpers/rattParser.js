
/* eslint-disable */
export default {
    tryParse(domData) {
        let it;
        var i = -1;
        var regExp = /<b>(?!Sosire)(?!Stația)(.+?)<\s?/g;
        var stations = [];

        var returnData = {};
        var linie = [];
        var vehicle = {};
        vehicle["stations0"] = [];
        vehicle["stations1"] = [];
        while (it = regExp.exec(domData) !== null) {
            if (it.index === regExp.lastIndex) {
                regExp.lastIndex++;
            }
            i++;
        }

        for (let index = 0; index <= i; index++) {
            stations.push(regExp.exec(domData));
        }

        i = 0

        for (let el = 0; el < stations.length; el++) {
            var element = stations[el];
            if (el + 1 <= stations.length)
                var nextElement = stations[el + 1]
            if (element["1"].indexOf("Linia") != -1) {
                vehicle["route" + i] = element["1"];
                i++;
            }
            else {
                if (isNaN(element["1"].charAt(0)) && element["1"].charAt(0) != '&' && element["1"].charAt(0) != '*') {

                    var station = [];
                    station["name"] = element["1"];
                    station["eta"] = nextElement["1"];
                    if (i == 1)
                        vehicle["stations0"].push(station);
                    if (i == 2)
                        vehicle["stations1"].push(station);

                }
            }

        }

        return (vehicle);

    }
}