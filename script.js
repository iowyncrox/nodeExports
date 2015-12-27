"use strict";
const Employee = require("./js/Employee");

var ron = new Employee(10, "Ron", "Mars");

ron.on("customEvent", function () {
    console.log(this.id + " " + this.name + " " + this.city);
});

ron.emit("customEvent");
