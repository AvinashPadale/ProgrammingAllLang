// A queue is a data structure that follows the First In, First Out (FIFO) principle
// Key operations in a queue include:

// Enqueue: Adds an element to the rear of the queue.
// Dequeue: Removes the element from the front of the queue.
// Front: Retrieves the element at the front of the queue without removing it.
// Empty: Checks if the queue is empty.

#include <iostream>
#include <queue>
using namespace std;

int main()
{
    // Creating a queue of integers
    queue<int> myQueue;

    // Enqueue operation
    myQueue.push(10);
    myQueue.push(20);
    myQueue.push(30);

    // Front operation
    cout << "Front element: " << myQueue.front() << endl;

    // Dequeue operation
    myQueue.pop();

    // Front after dequeue
    cout << "Front element after dequeue: " << myQueue.front() << endl;

    // Checking if the queue is empty
    cout << "Is the queue empty? " << (myQueue.empty() ? "Yes" : "No") << endl;

    return 0;
}
