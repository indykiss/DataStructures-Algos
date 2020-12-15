
#include <stdio.h>
#include <cs50.h>
#include <math.h>
#include <string.h>
#include <ctype.h>
#include <stdlib.h>


// Caesar
int main(int argc, string argv[])
{

    if (argc != 2)
    {
        printf("Usage: ./caesar key \n");
        return 1;
    }

    // Get text to encipher
    string text = get_string("What are encrypting?\n");

    // Make input string a int so we can user ascii
    int key = atoi(argv[1]);
    key = key % 26;

    // encrypt the text
    for (int i = 0; i < strlen(text); i++)
    {
        int num = text[i];

        if (num > 122 || num < 65 || (num > 90 && num < 97))
        {
            int a = 0;
        }
        else if (num + key > 122)
        {
            text[i] = text[i] + key - 26;
        }
        else if (num + key > 90 && num + key < 97)
        {
            text[i] = text[i] + key - 26;
        }
        else
        {
            text[i] = text[i] + key;
        }
    }

    // print ciphertext
    printf("ciphertext: %s\n", text);

    // Not passing "handles non numeric key" :(
    // Come back to this later
}




// Readability

#include <stdio.h>
#include <cs50.h>
#include <math.h>
#include <string.h>
#include <ctype.h>

// Prototypes to let us move our helper fns to bottom
int count_letters(string text);
int count_words(string text);
int count_sentences(string text);


// What reading level is this text?
int main(void)
{
    string text = get_string("Please input text. \n");

    float chars = count_letters(text);
    float words = count_words(text);
    float sentences = count_sentences(text);

    // Avg number of letters per 100 words
    float L = chars / words * 100;
    // Avg number of sentences per 100 words
    float S = sentences / words * 100;

    // Calculate the grade using index formula and round
    float index = 0.0588 * L - 0.296 * S - 15.8;
    int grade = round(index);

    // Communicate the grade to user
    if (index < 1)
    {
        printf("Before Grade 1\n");
    }
    else if (index > 16)
    {
        printf("Grade 16+\n");
    }
    else
    {
        printf("Grade %d\n", grade);
    }
}


// Helper function that count characters, words, and sentences
int count_letters(string text)
{
    int counter = 0;
    for (int i = 0; text[i] != '\0'; i++)
    {
        if (isalpha(text[i]))
        {
            counter++;
        }
    }
    return counter;
}


int count_words(string text)
{
    int counter = 1;
    for (int i = 1; text[i] != '\0'; i++)
    {
        if (text[i] == ' ')
        {
            counter++;
        }
    }
    return counter;
}


int count_sentences(string text)
{
    int counter = 0;
    for (int i = 0; text[i] != '\0'; i++)
    {
        if (text[i] == '.' || text[i] == '!' || text[i] == '?')
        {
            counter++;
        }
    }
    return counter;
}