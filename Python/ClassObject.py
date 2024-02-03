class Dog:
    # Member variables
    name = ""
    age = 0
    # Member method
    def bark(self):
        print(f"{self.name} says Woof!")

# Create an object of the Dog class
my_dog = Dog()
# Set values for the object's members
my_dog.name = "Buddy"
my_dog.age = 3
# Call a method on the object
my_dog.bark()
# Access and print member variables
print(f"{my_dog.name} is {my_dog.age} years old.")
