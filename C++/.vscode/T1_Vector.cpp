#include <iostream>
using namespace std;
#include <vector> // Don't forget to include <vector>

int main() {
    vector<char> vec = {'a', 'b', 'c'};//vector initialization
    vector <int> vec1 = {1,23,454};
    vector <int> vec2(4,7);//length 4, each index will be fill with 7
    cout<<vec1[0]<<endl;
    cout<<vec2[0]<<endl;
    cout<<"size is "<<vec1.size()<<endl;
    for (char value : vec) {
        cout << value << endl; // This line was corrected
    }
    cout<<"after pushback"<<endl;
    vec.push_back('n');
    for (char value : vec) {
        cout << value << endl; // This line was corrected
    }
    cout<<"after popback"<<endl;
    vec.pop_back();
    for (char value : vec) {
        cout << value << endl; // This line was corrected
    }
    return 0;
}


