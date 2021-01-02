
# Thank God we are now in Python 

# Do the things we did before but now in python
# because python is much easier 


# Hello
from cs50 import get_string

def main():
    answer = get_string("What is your name? ")
    print(f"Hello, {answer}.")

main()


# Mario 
from cs50 import get_int

def main():
    while True:
        height = get_int("What is the height of the pyramid? ")
        if height >= 1 and height <= 8:
            createPyramid(height)
            break


def createPyramid(h):

    for i in range(h):
        for j in range(h-i-1):
            print(" ", end="")

        for k in range(i+1):
            print("#", end="")
        print("")

main()


# Cash 

from cs50 import get_float

def main():
    while True:
        change = get_float("How much do I owe you? ")
        if change >= 0 and change <= 10000: # Can't be negative & no change larger than $100
            calculateChange(change)
            break

def calculateChange(c):

    # Convert to cents, count coins
    cents = round(c * 100)
    numOfCoins = 0

    while cents >= 25:
        cents -= 25
        numOfCoins += 1

    while cents >= 10:
        cents -= 10
        numOfCoins += 1

    while cents >= 5:
        cents -= 5
        numOfCoins += 1

    while cents >= 1:
        cents -= 1
        numOfCoins += 1

    print(f"Coins owed: {numOfCoins}")

main()


# Readability 

from cs50 import get_string

def main():
    text = get_string("Please input text. ")

    chars = count_letters(text)
    words = count_words(text)
    sentences = count_sentences(text)

    # Avg number of letters per 100 words
    L = chars / words * 100
    # Avg number of sentences per 100 words
    S = sentences / words * 100

    # Calculate the grade using index formula and round
    index = 0.0588 * L - 0.296 * S - 15.8
    grade = round(index)

    # Communicate the grade to user
    if index < 1:
        print("Before Grade 1")
    elif index > 16:
        print("Grade 16+")
    else:
        print(f"Grade {grade}")


# Helper function that count characters, words, and sentences
def count_letters(text):
    counter = 0
    i = 0

    while i < len(text):
        if text[i].isalpha():
            counter += 1
        i += 1

    return counter


def count_words(text):
    counter = 1
    i = 1

    while i < len(text):
        if text[i] == ' ':
            counter += 1
        i += 1

    return counter


def count_sentences(text):
    counter = 0
    i = 0

    while i < len(text):
        if text[i] == '.' or text[i] == '!' or text[i] == '?':
            counter += 1
        i += 1

    return counter

main()