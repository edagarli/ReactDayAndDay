/**
 * Created by edagarli on 16/3/21.
 * https://github.com/edagarli
 */

"use strict";

var API_URL = "https://api.dribbble.com/v1/",
    ACCESS_TOKEN = "1be322def8df29aa4dfd7bdfa1dbc2198ec36855a8262919d56d7b235dc89500";


function fetchData(URL) {
    return fetch(URL, {
        headers: {
            "Authorization": "Bearer " + ACCESS_TOKEN
        }
    }).then((response) => response.json())
}

module.exports = {
    getShotsByType: function(type: string, pageNumber: number): Object {
        var url = API_URL + "shots/?list=" + type ;
        if (pageNumber) {
            url += "&per_page=10&page=" + pageNumber;
        }
        return fetchData(url);
    },
    getResources: function(url: string): Object {
        return fetchData(url);
    }
};
