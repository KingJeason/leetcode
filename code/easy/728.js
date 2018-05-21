/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
    var map = {
        1: true,
        11: true,
        111: true,
        1111: true,
        1112: true,
        1113: true,
        1115: true,
        1116: true,
        112: true,
        1122: true,
        1124: true,
        1128: true,
        1131: true,
        1144: true,
        115: true,
        1155: true,
        1164: true,
        1176: true,
        1184: true,
        1197: true,
        12: true,
        1212: true,
        122: true,
        1222: true,
        1224: true,
        1236: true,
        124: true,
        1244: true,
        1248: true,
        126: true,
        1266: true,
        128: true,
        1288: true,
        1296: true,
        1311: true,
        132: true,
        1326: true,
        1332: true,
        1335: true,
        1344: true,
        135: true,
        1362: true,
        1368: true,
        1395: true,
        1412: true,
        1416: true,
        1424: true,
        144: true,
        1444: true,
        1448: true,
        1464: true,
        1488: true,
        15: true,
        1515: true,
        155: true,
        1555: true,
        1575: true,
        162: true,
        1626: true,
        1632: true,
        1644: true,
        1662: true,
        168: true,
        1692: true,
        1715: true,
        1722: true,
        175: true,
        1764: true,
        1771: true,
        1824: true,
        184: true,
        1848: true,
        1888: true,
        1926: true,
        1935: true,
        1944: true,
        1962: true,
        2: true,
        2112: true,
        212: true,
        2122: true,
        2124: true,
        2128: true,
        2136: true,
        2144: true,
        216: true,
        2166: true,
        2184: true,
        2196: true,
        22: true,
        2212: true,
        222: true,
        2222: true,
        2224: true,
        2226: true,
        2232: true,
        224: true,
        2244: true,
        2248: true,
        2262: true,
        2288: true,
        2316: true,
        2322: true,
        2328: true,
        2364: true,
        24: true,
        2412: true,
        2424: true,
        2436: true,
        244: true,
        2444: true,
        2448: true,
        248: true,
        2488: true,
        2616: true,
        2622: true,
        264: true,
        2664: true,
        2688: true,
        2744: true,
        2772: true,
        2824: true,
        2832: true,
        2848: true,
        288: true,
        2888: true,
        2916: true,
        3: true,
        3111: true,
        312: true,
        3126: true,
        3132: true,
        3135: true,
        3144: true,
        315: true,
        3162: true,
        3168: true,
        3171: true,
        3195: true,
        3216: true,
        3222: true,
        324: true,
        3264: true,
        3276: true,
        3288: true,
        33: true,
        3312: true,
        3315: true,
        3324: true,
        333: true,
        3333: true,
        3336: true,
        3339: true,
        336: true,
        3366: true,
        3384: true,
        3393: true,
        3432: true,
        3444: true,
        3492: true,
        3555: true,
        36: true,
        3612: true,
        3624: true,
        3636: true,
        3648: true,
        366: true,
        3666: true,
        3717: true,
        3816: true,
        384: true,
        3864: true,
        3888: true,
        3915: true,
        3924: true,
        3933: true,
        396: true,
        3996: true,
        4: true,
        4112: true,
        4116: true,
        412: true,
        4124: true,
        4128: true,
        4144: true,
        4164: true,
        4172: true,
        4184: true,
        4212: true,
        4224: true,
        4236: true,
        424: true,
        4244: true,
        4248: true,
        4288: true,
        432: true,
        4332: true,
        4344: true,
        4368: true,
        4392: true,
        44: true,
        4412: true,
        4416: true,
        4424: true,
        444: true,
        4444: true,
        4448: true,
        4464: true,
        448: true,
        4488: true,
        4632: true,
        4644: true,
        48: true,
        4824: true,
        4848: true,
        4872: true,
        488: true,
        4888: true,
        4896: true,
        4932: true,
        4968: true,
        5: true,
        5115: true,
        515: true,
        5155: true,
        5355: true,
        55: true,
        5515: true,
        5535: true,
        555: true,
        5555: true,
        5775: true,
        6: true,
        612: true,
        6126: true,
        6132: true,
        6144: true,
        6162: true,
        6168: true,
        6192: true,
        6216: true,
        6222: true,
        624: true,
        6264: true,
        6288: true,
        6312: true,
        6324: true,
        6336: true,
        636: true,
        6366: true,
        6384: true,
        6432: true,
        6444: true,
        648: true,
        66: true,
        6612: true,
        6624: true,
        6636: true,
        6648: true,
        666: true,
        6666: true,
        6696: true,
        672: true,
        6762: true,
        6816: true,
        6864: true,
        6888: true,
        6912: true,
        6966: true,
        6984: true,
        7: true,
        7112: true,
        7119: true,
        7175: true,
        7224: true,
        7266: true,
        728: true,
        735: true,
        7371: true,
        7448: true,
        7476: true,
        7644: true,
        77: true,
        7728: true,
        777: true,
        7777: true,
        7784: true,
        784: true,
        8: true,
        8112: true,
        8128: true,
        8136: true,
        8144: true,
        816: true,
        8184: true,
        8224: true,
        8232: true,
        824: true,
        8248: true,
        8288: true,
        8328: true,
        8424: true,
        8448: true,
        848: true,
        8488: true,
        8496: true,
        8616: true,
        864: true,
        8664: true,
        8688: true,
        8736: true,
        88: true,
        8824: true,
        8832: true,
        8848: true,
        888: true,
        8888: true,
        8928: true,
        9: true,
        9126: true,
        9135: true,
        9144: true,
        9162: true,
        9216: true,
        9288: true,
        9315: true,
        9324: true,
        9333: true,
        936: true,
        9396: true,
        9432: true,
        9612: true,
        9648: true,
        9666: true,
        9864: true,
        99: true,
        9936: true,
        999: true,
        9999: true 
    }
    var array = []
    for(var i = left; i <= right; i++){
        if(map[i]){
            array.push(i)
        }
    }
    return array
};
function isSelfDividingNumbers () {
    var map = {}
    for (var i = 1; i <= 10000; i++) {
        var str = i.toString()
        var array = str.split('');
        console.log(array)
        for (var j = 0; j < array.length; j++) {
            console.log(i, array[j])
            if (i % (~~array[j]) !== 0) break;
            if (j === array.length - 1) {
                map[str] = true
            }
        }
    }
    return map
}
console.log(selfDividingNumbers(1, 22))