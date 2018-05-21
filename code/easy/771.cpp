//
//  main.cpp
//  leetcode
//
//  Created by 吴思远  on 2018/5/19.
//  Copyright © 2018年 吴思远 . All rights reserved.
//

#include <iostream>
#include <unordered_set>
using namespace std;
class Solution {
public:
    int numJewelsInStones(string J, string S) {
        int res = 0;
        unordered_set<char> setJ(J.begin(), J.end());
        for (char s : S) if (setJ.count(s)) res++;
        cout << res << endl;
        return res;
        
    }
};

int main(int argc, const char * argv[]) {
    Solution s;
    s.numJewelsInStones("zZ", "ZZ");
    return 0;
}
