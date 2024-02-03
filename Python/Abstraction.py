from abc import ABC, abstractmethod

# Define an abstract class (interface)
class Animal(ABC):
    @abstractmethod
    def make_sound(self):
        pass

# Concrete classes implementing the abstract class
class Dog(Animal):
    def make_sound(self):
        print("Woof!")

class Cat(Animal):
    def make_sound(self):
        print("Meow!")

# Instantiate objects and call the abstract method
dog = Dog()
cat = Cat()

dog.make_sound()
cat.make_sound()
