import $ from "jquery";

const $title = $("#title");
const $results = $("#results");

let lastQuery = null;
$title.on("keyup", (e) => {
    const title = e.target.value;
    if (title === lastQuery) {
        return;
    }

    lastQuery = title;

    getItems(title)
    .then(items => {
        $results.empty();

        const $items = items.map(item => $(`<li />`).text(item));
        $results.append($items);
    });
});

// --
// Library
const getItems = (title) => {
    console.log(`Querying ${title}`);
    return new Promise((resolve, reject) => {
        window.setTimeout(() => {
            resolve([title, "Item 2", `Another ${Math.random()}`]);
        }, 500 + (Math.random() * 200));
    });
};