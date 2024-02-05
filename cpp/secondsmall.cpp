#include <iostream>
#include <bits/stdc++.h>
using namespace std;

int findSecondSmallest(int arr[], int size)
{
    if (size < 2)
    {
        cout << "Array should have at least two elements." << endl;
        return -1; // indicating error
    }

    int smallest = INT_MAX;
    int secondSmallest = INT_MAX;
    //8 5 12 3 7 5
    for (int i = 0; i < size; i++)
    {
        if (arr[i] < smallest)
        {
            secondSmallest = smallest;
            smallest = arr[i];
        }
        else if (arr[i] < secondSmallest && arr[i] != smallest)
        {
            secondSmallest = arr[i];
        }
    }

    return secondSmallest;
}

int main()
{
    int size;

    cout << "Enter the size of the array: ";
    cin >> size;

    int arr[size];

    cout << "Enter the elements of the array:\n";
    for (int i = 0; i < size; i++)
    {
        cin >> arr[i];
    }

    int secondSmallest = findSecondSmallest(arr, size);

    if (secondSmallest != -1)
    {
        cout << "The second smallest element in the array is: " << secondSmallest << endl;
    }

    return 0;
}
