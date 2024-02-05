#include <iostream>
using namespace std;
int main()
{
    int a = 10, b = 20, c = 30;
    if (a > b)
    {
        if (a > c)
        {
            cout << "a:" << a << endl;
        }
        else
        {
            cout << "c:" << c << endl;
        }
    }
    else
    {
        if (b > c)
        {
            cout << "b:" << b << endl;
        }
        else
        {
            cout << "c:" << c << endl;
        }
    }

    return 0;
}