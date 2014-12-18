app.service('localStorageService', function () {

    this.getItem = function (key) {
        var data = localStorage.getItem(key);
        if (data) {
            return JSON.parse(data);
        }
        return null;
    };

    this.setItem = function (key, data) {
        if (data) {
            localStorage.setItem(key, JSON.stringify(data));
        } else {
            localStorage.removeItem(key);
        }
    };

    this.removeItem = function (key) {
        localStorage.removeItem(key);
    };

});
