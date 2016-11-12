"use strict";
var plugins = require("./gulp-typings.plugins");
var forEach = function (file, enc, cb) {
    plugins.typingsCore.install({ production: false, cwd: plugins.path.dirname(file.path) })
        .then(function () {
        cb(null, file);
    }, function () {
        console.error("something went wrong: Check if path is correct: " + file.path);
        cb(null, file);
    });
};
var atEnd = function (cb) {
    cb();
};
module.exports = function (optionsArg) {
    return plugins.through2.obj(forEach, atEnd);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBWSxPQUFPLFdBQU0sd0JBRXpCLENBQUMsQ0FGZ0Q7QUFFakQsSUFBSSxPQUFPLEdBQUcsVUFBUyxJQUFJLEVBQUMsR0FBRyxFQUFDLEVBQUU7SUFDOUIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsRUFBQyxVQUFVLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQztTQUNqRixJQUFJLENBQUM7UUFDRixFQUFFLENBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xCLENBQUMsRUFBQztRQUNFLE9BQU8sQ0FBQyxLQUFLLENBQUMsa0RBQWtELEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlFLEVBQUUsQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEIsQ0FBQyxDQUFDLENBQUM7QUFDWCxDQUFDLENBQUM7QUFFRixJQUFJLEtBQUssR0FBRyxVQUFTLEVBQUU7SUFDbkIsRUFBRSxFQUFFLENBQUM7QUFDVCxDQUFDLENBQUM7QUFFRixpQkFBUyxVQUFTLFVBQVc7SUFDekIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBQyxLQUFLLENBQUMsQ0FBQztBQUMvQyxDQUFDLENBQUMifQ==