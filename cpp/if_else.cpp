// IF ELSE statement

#include <iostream>
using namespace std;
int main()
{
    int a, b;
    cout << "Enter A and B values";
    cin >> a >> b;
    // if (a>b)
    // {
    //     cout << a <<"is greater than"<<b;
    // }
    // else{
    //     cout << b <<"is greater than"<<a;
    // }

    int max = (a > b) ? a : b;
    cout << max;
    return 0;
}