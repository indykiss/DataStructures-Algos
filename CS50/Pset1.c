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

/* Algoexpert: ways to make change using coin denominations. Adding here so all in 1 file

Given an array of possible denominations and a target amount of money needed
to make change for, how many ways can we make chng?
*/

function numberOfWaysToMakeChange(n, denoms) {
  const waysToMakeChange = Array(n+1).fill(0);
	waysToMakeChange[0] = 1;  // only 1 way to make change of $0
	
	for(let denom of denoms) {
		// build up, based on prev 
		// check for each denomination, how many ways 
		// we can make chnge at every 0 - n point
		for(let amount = 1; amount < n +1; amount++) {
			// as we continue building, lets say oh hey
			// is the $$$ we need less than the denomination?
			if(denom <= amount) {
				// if so, cool, lets update this arr
				// by adding from prev
				waysToMakeChange[amount] += waysToMakeChange[amount - denom];
			}
		}
	}
	return waysToMakeChange[n]
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




