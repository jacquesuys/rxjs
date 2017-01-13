"use strict";

var _jquery = require("jquery");

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $title = (0, _jquery2.default)("#title");
var $results = (0, _jquery2.default)("#results");

var lastQuery = null;
$title.on("keyup", function (e) {
    var title = e.target.value;
    if (title === lastQuery) {
        return;
    }

    lastQuery = title;

    getItems(title).then(function (items) {
        $results.empty();

        var $items = items.map(function (item) {
            return (0, _jquery2.default)("<li />").text(item);
        });
        $results.append($items);
    });
});

//--
// Library
var getItems = function getItems(title) {
    console.log("Querying " + title);
    return new Promise(function (resolve, reject) {
        window.setTimeout(function () {
            resolve([title, "Item 2", "Another " + Math.random()]);
        }, 500 + Math.random() * 200);
    });
};