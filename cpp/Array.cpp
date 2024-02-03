// Array is collection of similer datatype and contigous memory allocation

#include <iostream>
using namespace std;
int main()
{
    // Declaring an array of integers with size 5
    int myArray[5] = {1, 2, 3, 4, 5};

    // Accessing elements by index
    cout << myArray[0] << endl; // Output: 1
    cout << myArray[2] << endl; // Output: 3

    // Modifying elements
    myArray[1] = 10;
    cout << myArray[1] << endl; // Output: 10

    // Finding the length of the array
    int length = sizeof(myArray);
    cout << length << std::endl; // Output: 5

    return 0;
}
