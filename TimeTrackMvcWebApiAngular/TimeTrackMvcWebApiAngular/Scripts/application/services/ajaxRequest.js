angular.module('uiRouterAimApp.services')
    .factory('ajaxRequest', ajaxRequest);

ajaxRequest.$inject = ['$http'];

function ajaxRequest($http) {
    var self = this;

    self.get = function (url, data, accessToken) {
        var requestData = {
            url: url,
            data: data,
            token: accessToken
        };

        var settings = getSettings(requestData);
        settings.method = "GET";

        return $http(settings);
    };

    self.submit = function (url, data, accessToken) {
        var requestData = {
            url: url,
            data: data,
            token: accessToken
        };


        var settings = getSettings(requestData);
        settings.method = "POST";

        return $http(settings);
    };

    self.delete = function (url, data, accessToken, callBack) {
        var requestData = {
            url: url,
            data: data,
            token: accessToken,
            success: callBack
        };

        var settings = getSettings(requestData);
        settings.type = "DELETE";

        return $.ajax(settings);
    };

    self.request = function (requestData) {

        var settings = getSettings(requestData);

        settings.type = requestData.type || "GET";

        return $.ajax(settings);
    };

    function getSettings(requestData) {
        return {
            url: requestData.url,
            dataType: requestData.dataType || "json",
            data: requestData.data || {},
            headers: requestData.headers || {
                "accept": "application/json; charset=utf-8",
                'Authorization': 'Bearer ' + requestData.token
            },
            async: requestData.async || "false",
            cache: requestData.cache || "false",
            success: requestData.success || {},
            error: requestData.error || {},
            complete: requestData.complete || {},
            fail: requestData.fail || {}
        };
    }

    return self;
}