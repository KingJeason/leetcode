/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
    var array = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."]
    var map = {}
    var cnt = 0;
    for (var i = 0; i < words.length; i++) {
        var str = ''
        for (var j = 0; j < words[i].length; j++) {
            str += array[(words[i][j].charCodeAt(0)) - 97]
        }
        map[str] = true
    }
    for(key in map){
        cnt += 1
    }
    return cnt
};
console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]))