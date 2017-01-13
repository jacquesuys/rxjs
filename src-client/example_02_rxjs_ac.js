import $ from "jquery";
import Rx from "rxjs/Rx";

const $title = $("#title");
const $results = $("#results");

// const keyUps$ = Rx.Observable.fromEvent($title, "keyup");
// const queries$ = keyUps$
//     .map(e => e.target.value)
//     .distinctUntilChanged()
//     .debounceTime(250)
//     .switchMap(query => getItems(query)); // flatMap / SelectMany

// queries$.subscribe(query => {
//     $results.empty();
//     $results.append(query.map(r => $(`<li/>`).text(r)));
// });

 Rx.Observable.fromEvent($title, "keyup")
    .map(e => e.target.value)
    .distinctUntilChanged()
    .debounceTime(250)
    .switchMap(query => getItems(query))
    .subscribe(items => {
        $results.empty();
        $results.append(items.map(i => $('<li/>').text(i)));
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