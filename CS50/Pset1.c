#include <stdio.h>
#include <cs50.h>
#include <math.h>



// Key points:
// Greedy algo: make change and understand nested for loops




// Make change, greedy algo
int main(void)
{
    float change = get_float("How much do I owe you? \n");

    // Check valid amount
    while (change <= 0)
    {
        printf("Please input a positive number. \n");
        change = get_float("How much do I owe you? \n");
    }

    // Convert to cents, count coins
    int cents = round(change * 100);
    int numOfCoins = 0;

    // Quarters
    while (cents >= 25)
    {
        cents = cents - 25;
        numOfCoins = numOfCoins + 1;
    }

    // Dimes
    while (cents >= 10)
    {
        cents = cents - 10;
        numOfCoins = numOfCoins + 1;
    }

    // Nickels
    while (cents >= 5)
    {
        cents = cents - 5;
        numOfCoins = numOfCoins + 1;
    }

    // Pennies
    while (cents >= 1)
    {
        cents = cents - 1;
        numOfCoins = numOfCoins + 1;
    }

    printf("Coins owed: %d\n", numOfCoins);

}





#include <stdio.h>
#include <cs50.h>

// Mario make pyramid
// Ask height and responds
int main(void)
{
    int height = get_int("How tall should our pyramid be? \n");

    // Check valid input height
    while (height < 1 || height > 8)
    {
        printf("Please input a height between one and eight. \n");
        height = get_int("How tall should our pyramid be? \n");
    }

    // Create rows aligned left
    for (int i = 0; i < height; i++)
    {
        // Align left with spaces
        for (int j = height - 1; j > i; j--)
        {
            printf(" ");
        }

        // Add the hash tags
        for (int j = 0; j <= i; j++)
        {
            printf("#");
        }

        // New line
        printf("\n");
    }
}




