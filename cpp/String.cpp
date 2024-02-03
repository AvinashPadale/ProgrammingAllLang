// string is a sequence of characters.Strings can include letters, numbers, symbols, and spaces.

#include <iostream>
#include <string>

using namespace std;

int main()
{
    // Declaring and initializing a string
    string myString = "Hello, World!";

    // Accessing characters in a string
    cout << myString[0] << endl; // Output: H
    cout << myString[7] << endl; // Output: W

    // Concatenating strings
    string anotherString = " How are you?";
    string combinedString = myString + anotherString;
    cout << combinedString << endl; // Output: Hello, World! How are you?

    // Finding the length of a string
    cout << myString.length() << endl; // Output: 13

    return 0;
}
