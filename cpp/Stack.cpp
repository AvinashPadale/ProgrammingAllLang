// a stack is a linear data structure that follows the Last In, First Out (LIFO) principle.
// A stack has two primary operations:
// Push: Adds an element to the top of the stack.
// Pop: Removes the element from the top of the stack.
// peek: which allows you to look at the top element without removing it.

#include <iostream>
#include <vector>
using namespace std;

class Stack
{
private:
    vector<int> elements;

public:
    // Push operation
    void push(int value)
    {
        elements.push_back(value);
    }
    // Pop operation
    void pop()
    {
        if (!elements.empty())
        {
            elements.pop_back();
        }
    }
    // Peek operation
    int peek() const
    {
        if (!elements.empty())
        {
            return elements.back();
        }
        return -1; // or throw an exception indicating empty stack
    }
    // Check if the stack is empty
    bool isEmpty() const
    {
        return elements.empty();
    }
};

int main()
{
    Stack myStack;
    // Pushing elements onto the stack
    myStack.push(10);
    myStack.push(20);
    myStack.push(30);

    // Peeking at the top element
    cout << "Top element: " << myStack.peek() << endl;

    // Popping an element
    myStack.pop();

    // Checking if the stack is empty
    cout << "Is the stack empty? " << (myStack.isEmpty() ? "Yes" : "No") << endl;

    return 0;
}
