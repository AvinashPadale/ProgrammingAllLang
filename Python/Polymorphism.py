# Polymorphism using function overloading
def add(a, b):
    return a + b

def add_three(a, b, c):
    return a + b + c

# Polymorphism using class and method overloading
class Calculator:
    def add(self, a, b):
        return a + b

    def add_three(self, a, b, c):
        return a + b + c

# Using polymorphism
result1 = add(2, 3)
result2 = add_three(2, 3, 4)

calculator = Calculator()
result3 = calculator.add(2, 3)
result4 = calculator.add_three(2, 3, 4)

print(f"Function Overloading: {result1}, {result2}")
print(f"Method Overloading: {result3}, {result4}")
