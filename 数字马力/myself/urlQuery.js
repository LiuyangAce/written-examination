const queryString = "https://99.in-road.com/vweb/#/IframePage/index?angular=%2FWeb%2FConfig%2FDeviceBaseNew%3Fpure%3D1"

// const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
console.log(urlParams);
const query = Object.fromEntries(urlParams.entries());
// console.log(query);

