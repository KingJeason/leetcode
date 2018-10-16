

var canConstruct = function (ransomNote, magazine) {
    var magLen = magazine.length;
    var ranArr = ransomNote.split('');
    ranArr.forEach((item) => {
        magazine = magazine.replace(item, '');
    });
    return magLen == magazine.length + ranArr.length
};