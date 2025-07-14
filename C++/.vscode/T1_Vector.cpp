#include <iostream>
using namespace std;
#include <vector> // Don't forget to include <vector>

int main() {
    vector<char> vec = {'a', 'b', 'c'};
    for (char value : vec) {
        cout << value << endl; // This line was corrected
    }
    return 0;
}


