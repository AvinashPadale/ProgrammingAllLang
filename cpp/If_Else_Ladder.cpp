#include <iostream>
using namespace std;
int main()
{
    int a, b, ch;
    cout << "Enter Two Number: ";
    cin >> a >> b;
    cout << "Enter the choice 1.Add 2.Sub 3.Mul 4.div";
    cin >> ch;

    if (ch == 1)
    {
        int add = a + b;
        cout << "Add: " << add;
    }
    else if (ch == 2)
    {
        int sub = a - b;
        cout << "Sub: " << sub;
    }
    else if (ch == 3)
    {
        int mul = a * b;
        cout << "<Mul: " << mul;
    }
    else if (ch == 4)
    {
        int div = a / b;
        cout << "Division : " << div;
    }
    else
    {
        cout << "\nInvalid Input\n";
    }
    return 0;
}
