// C++ program to check if a
// number is Palindrome or not
#include <iostream>
using namespace std;

// Function to check Palindrome
bool checkPalindrome(int n)
{
	int ans = 0;
	int temp = n;
	int rem;
	while (temp != 0)
	{
		rem = temp % 10;
		ans = (ans * 10) + rem;
		temp = temp / 10;
	}

	return (ans == n);
}

int main()
{
	int n = 12321;

	if (checkPalindrome(n) == 1)
	{
		cout << "Yes\n";
	}
	else
	{
		cout << "No\n";
	}

	return 0;
}

// C++ program for checking
// if it is Palindrome or not
// #include <iostream>
// using namespace std;

// string isPalindrome(string S)
// {
// 	for (int i = 0; i < S.length() / 2; i++)
// 	{
// 		if (S[i] != S[S.length() - i - 1])
// 		{
// 			return "No";
// 		}
// 	}

// 	return "Yes";
// }

// int main()
// {
// 	string S = "GeekeeG";

// 	cout << isPalindrome(S);

// 	return 0;
	// }
