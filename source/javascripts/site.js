// // This is where it all goes :)
// // You can comment this JS out and the app will still work.
// // (function() {
// //   var app = {
// //     'routes': {
// //       'mise_en_bouche': {
// //         'rendered': function() {
// //           console.log('view currently showing is "mise_en_bouche"');
// //           app.preventScroll();
// //         }
// //       },
// //       'projet': {
// //         'rendered': function() {
// //           console.log('view currently showing is "projet"');
// //           app.preventScroll();
// //         }
// //       },
// //       'fonctionnement': {
// //         'rendered': function() {
// //           console.log('view currently showing is "fonctionnement"');
// //           app.preventScroll();
// //         }
// //       },
// //       'infos': {
// //         'rendered': function() {
// //           console.log('view currently showing is "infos"');
// //           app.preventScroll();
// //         }
// //       },
// //       'on_sy_met': {
// //         'rendered': function() {
// //           console.log('view currently showing is "on_sy_met"');
// //           app.preventScroll();
// //         }
// //       },
// //       'a_propos': {
// //         'rendered': function() {
// //           console.log('view currently showing is "a_propos"');
// //           app.preventScroll();
// //         }
// //       },
// //     },
// //     'default': 'a_propos',
// //     'preventScroll': function() {
// //       document.querySelector('html').scrollTop = 0;
// //       document.querySelector('body').scrollTop = 0;
// //     },
// //     'routeChange': function() {
// //       app.routeID = location.hash.slice(1);
// //       app.route = app.routes[app.routeID];
// //       app.routeElem = document.getElementById(app.routeID);
// //       app.route.rendered();
// //     },
// //     'init': function() {
// //       window.addEventListener('hashchange', function() {
// //         app.routeChange();
// //       });
// //       if (!window.location.hash) {
// //         window.location.hash = app.default;
// //       } else {
// //         app.routeChange();
// //       }
// //     }
// //   };
// //   window.app = app;
// //
// // })();
//
// // app.init();
// //Yeah, I know this code is weird a bit, but it's kinda experimental :P
//
// const imgs_playback =
// {
//     img_1: {
//         subs: 'sub_1',
//         show: [
//             {
//                 host: 'sub_1',
//                 event: 'enter',
//                 direction: 'down',
//             },
//             {
//                 host: 'sub_2',
//                 event: 'entered',
//                 direction: 'up',
//             },
//             {
//                 host: 'sub_2',
//                 event: 'exited',
//                 direction: 'up',
//             },
//         ],
//         hide: [
//             {
//                 host: 'sub_2',
//                 event: 'enter',
//                 direction: 'down',
//             },
//             {
//                 host: 'sub_1',
//                 event: 'exited',
//                 direction: 'up',
//             },
//             {
//                 host: 'sub_1',
//                 event: 'exited',
//                 direction: 'down',
//             },
//         ]
//     },
//
//     img_2: {
//         subs: 'sub_2',
//         show: [
//             {
//                 host: 'sub_2',
//                 event: 'enter',
//                 direction: 'down',
//             },
//
//             {
//                 host: 'sub_3',
//                 event: 'exited',
//                 direction: 'up',
//             },
//             {
//                 host: 'sub_2',
//                 event: 'enter',
//                 direction: 'up',
//             },
//
//             {
//                 host: 'sub_1',
//                 event: 'exited',
//                 direction: 'down',
//             },
//         ],
//         hide: [
//             {
//                 host: 'sub_2',
//                 event: 'entered',
//                 direction: 'up',
//             },
//             {
//                 host: 'sub_3',
//                 event: 'enter',
//                 direction: 'down',
//             },
//             {
//                 host: 'sub_2',
//                 event: 'exited',
//                 direction: 'up',
//             },
//             {
//                 host: 'sub_2',
//                 event: 'exited',
//                 direction: 'down',
//             },
//         ]
//     },
//
//     img_3: {
//         subs: 'sub_3',
//         show: [
//             {
//                 host: 'sub_3',
//                 event: 'enter',
//                 direction: 'down',
//             },
//             {
//                 host: 'sub_3',
//                 event: 'enter',
//                 direction: 'up',
//             },
//             {
//                 host: 'sub_2',
//                 event: 'exited',
//                 direction: 'down',
//             },
//         ],
//         hide: [
//             {
//                 host: 'sub_3',
//                 event: 'exited',
//                 direction: 'up',
//             },
//             {
//                 host: 'sub_3',
//                 event: 'exited',
//                 direction: 'down',
//             },
//             {
//                 host: 'sub_2',
//                 event: 'enter',
//                 direction: 'up',
//             },
//         ]
//     },
// }
//
// const flattened_playback = flattenPlayback(imgs_playback);
//
// inviewControl(document.querySelector('#sub_1'));
// inviewControl(document.querySelector('#sub_2'));
// inviewControl(document.querySelector('#sub_3'));
//
// function showImgs(arr) {
//
//     arr.forEach((el) => {
//         document.getElementById(el.target).classList.remove('opacity-0')
//         document.getElementById(el.subs).classList.remove('opacity-0')
//     })
// }
//
// function hideImgs(arr) {
//     arr.forEach((el) => {
//         document.getElementById(el.target).classList.add('opacity-0')
//         document.getElementById(el.subs).classList.add('opacity-0')
//     })
// }
//
// function takeActions(element, event, direction) {
//     let elementActions = actionsOfHost(element);
//     let targets = {show: [], hide: []};
//
//     elementActions.forEach((action) => {
//         if (action.event == event && action.direction == direction) {
//             targets[action.action].push(action)
//         }
//     })
//
//     showImgs(targets.show);
//
//     hideImgs(targets.hide);
// }
//
// function actionsOfHost(host) {
//     return actions = flattened_playback.filter((action) => {
//         return action.host == host.id
//     })
// }
//
// function inviewControl(element) {
//
//     new Waypoint.Inview({
//         element: element,
//         enter: function(direction) {
//             takeActions(element, 'enter', direction);
//             console.log(element.id + ' enter on scroll ' + direction)
//         },
//         entered: function(direction) {
//             takeActions(element, 'entered', direction);
//             console.log(element.id + ' entered on scroll ' + direction)
//         },
//         exit: function(direction) {
//             takeActions(element, 'exit', direction);
//             console.log(element.id + ' exit on scroll ' + direction)
//         },
//         exited: function(direction) {
//             takeActions(element, 'exited', direction);
//             console.log(element.id + ' exited on scroll ' + direction)
//         }
//     })
// }
//
// function flattenPlayback(playback) {
//
//     let output = []
//
//     Object.keys(playback).forEach((img) => {
//         let target = img;
//         let actions = ['show', 'hide'];
//
//         actions.forEach((action) => {
//             playback[target][action].forEach((scrollEvent) => {
//                 let playbackPart = {
//                     target: target,
//                     action: action,
//                     host: scrollEvent.host,
//                     event: scrollEvent.event,
//                     direction: scrollEvent.direction,
//                     subs: playback[target].subs
//                 };
//                 output.push(playbackPart);
//             })
//         })
//     })
//
//     return output;
// }
