// A linked list is a data structure that consists of a sequence of elements,
// where each element points to the next one in the sequence. Unlike arrays,
// linked lists do not require contiguous memory locations, allowing for dynamic memory allocation and
// efficient insertion or removal of elements at any position in the list.

// The basic building block of a linked list is a node, which contains two parts:

// Data: Holds the actual data or value of the element.
// Next (or Pointer/Link): Points to the next node in the sequence.

// Singly Linked List: Each node has a data field and a next pointer pointing to the next node in the sequence.
#include <iostream>

using namespace std;

// Node structure for a singly linked list
struct Node
{
    int data;
    Node *next;
};

int main()
{
    // Creating nodes
    Node *firstNode = new Node{10, nullptr};
    Node *secondNode = new Node{20, nullptr};
    Node *thirdNode = new Node{30, nullptr};

    // Linking nodes
    firstNode->next = secondNode;
    secondNode->next = thirdNode;

    // Traversing the linked list
    Node *current = firstNode;
    while (current != nullptr)
    {
        cout << current->data << " ";
        current = current->next;
    }

    // Don't forget to deallocate memory to avoid memory leaks
    delete firstNode;
    delete secondNode;
    delete thirdNode;

    return 0;
}
