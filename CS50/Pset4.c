
#include "helpers.h"
#include <string.h>
#include <math.h>

// Instructions: https://cs50.harvard.edu/x/2020/psets/4/filter/less/#:~:text=submit50%20cs50/problems/2020/x/filter/less


// Key points:
// Manipulate vars & nested for loops & else if/else ifs




// Convert image to grayscale
void grayscale(int height, int width, RGBTRIPLE image[height][width])
{
    for (int i = 0; i < height; i++)
    {
        for (int j = 0; j < width; j++)
        {
            int average = round((round(image[i][j].rgbtBlue) + round(image[i][j].rgbtGreen) + round(image[i][j].rgbtRed)) / 3);
            image[i][j].rgbtBlue = average;
            image[i][j].rgbtGreen = average;
            image[i][j].rgbtRed = average;
        }
    }
    return;
}

// Convert image to sepia
void sepia(int height, int width, RGBTRIPLE image[height][width])
{
    for (int i = 0; i < height; i++)
    {
        for (int j = 0; j < width; j++)
        {
            int sepiaRed = round(.393 * round(image[i][j].rgbtRed) + .769 * round(image[i][j].rgbtGreen) + .189 * round(image[i][j].rgbtBlue));
            int sepiaGreen = round(.349 * round(image[i][j].rgbtRed) + .686 * round(image[i][j].rgbtGreen) + .168 * round(image[i][j].rgbtBlue));
            int sepiaBlue = round(.272 * round(image[i][j].rgbtRed) + .534 * round(image[i][j].rgbtGreen) + .131 * round(image[i][j].rgbtBlue));

            image[i][j].rgbtRed = sepiaRed;
            image[i][j].rgbtGreen = sepiaGreen;
            image[i][j].rgbtBlue = sepiaBlue;
        }
    }
    return;
}

// Reflect image horizontally
void reflect(int height, int width, RGBTRIPLE image[height][width])
{
    for (int i = 0; i < height; i++)
    {
        int midPt = round((float)width / 2);
        for (int j = 0; j < width; j++)
        {
            while (j < midPt)
            {
                RGBTRIPLE temp = image[i][j];
                image[i][j] = image[i][width - j - 1];
                image[i][width - j - 1] = temp;
                break;
            }
        }
    }
    return;
}



void blur(int height, int width, RGBTRIPLE image[height][width])
{
    RGBTRIPLE copy[height][width];

    for (int i = 0; i < height; i++)
    {
        for (int j = 0; j < width; j++)
        {
            copy[i][j] = image[i][j];
        }
    }

    for (int i = 0; i < height; i++)
    {
        for (int j = 0; j < width; j++)
        {
            int red = 0;
            int blue = 0;
            int green = 0;
            int count = 0;

            // Look up, down, left, right, and
            // diagonal up, left, down, right if exists
            if (i >= 0 && j >= 0)
            {
                red += copy[i][j].rgbtRed;
                green += copy[i][j].rgbtGreen;
                blue += copy[i][j].rgbtBlue;
                count++;
            }

            if (j-1 > -1)
            {
                red += copy[i][j-1].rgbtRed;
                green += copy[i][j-1].rgbtGreen;
                blue += copy[i][j-1].rgbtBlue;
                count++;
            }
            if (j+1 < width)
            {
                red += copy[i][j+1].rgbtRed;
                blue += copy[i][j+1].rgbtBlue;
                green += copy[i][j+1].rgbtGreen;
                count++;
            }
            if (i-1 > -1)
            {
                red += copy[i-1][j].rgbtRed;
                blue += copy[i-1][j].rgbtBlue;
                green += copy[i-1][j].rgbtGreen;
                count++;
            }
            if (i+1 < height)
            {
                red += copy[i+1][j].rgbtRed;
                blue += copy[i+1][j].rgbtBlue;
                green += copy[i+1][j].rgbtGreen;
                count++;
            }

            if (i-1 > -1 && j-1 > -1)
            {
                red += copy[i-1][j-1].rgbtRed;
                blue += copy[i-1][j-1].rgbtBlue;
                green += copy[i-1][j-1].rgbtGreen;
                count++;
            }
            if (i-1 > -1 && j+1 < width)
            {
                red += copy[i-1][j+1].rgbtRed;
                blue += copy[i-1][j+1].rgbtBlue;
                green += copy[i-1][j+1].rgbtGreen;
                count++;
            }
            if (i+1 < height && j-1 > -1)
            {
                red += copy[i+1][j-1].rgbtRed;
                blue += copy[i+1][j-1].rgbtBlue;
                green += copy[i+1][j-1].rgbtGreen;
                count++;
            }
            if (i+1 < height && j+1 < width)
            {
                red += copy[i+1][j+1].rgbtRed;
                blue += copy[i+1][j+1].rgbtBlue;
                green += copy[i+1][j+1].rgbtGreen;
                count++;
            }

            image[i][j].rgbtRed = round(red/count);
            image[i][j].rgbtBlue = round(blue/count);
            image[i][j].rgbtGreen = round(green/count);
        }
    }
    return;
}


// Blur image
// void blurIncorrect(int height, int width, RGBTRIPLE image[height][width])
// {

//     // Make copy of original matrix
//     RGBTRIPLE copy[height][width];
//     for (int i = 0; i < height; i++)
//     {
//         for (int j = 0; j < width; j++)
//         {
//             copy[i][j] = image[i][j];
//         }
//     }

//     for (int i = 0; i < height; i++)
//     {
//         for (int j = 0; j < width; j++)
//         {
//             int red = 0;
//             int blue = 0;
//             int green = 0;
//             int count = 0;

//             // Look up, down, left, right, and
//             // diagonal up, left, down, right if exists
//             for (int row = -1; row < 2; row++)
//             {
//                 for (int col = -1; col < 2; col++)
//                 {
//                     if (i + row < 0 || j + col < 0 || i + row >= height || j + col >= width)
//                     {
//                         break;
//                     }
//                     else
//                     {
//                         red += copy[i + row][j + col].rgbtRed;
//                         green += copy[i + row][j + col].rgbtGreen;
//                         blue += copy[i + row][j + col].rgbtBlue;
//                         count++;
//                     }
//                 }
//             }
//             image[i][j].rgbtRed = round(red/count);
//             image[i][j].rgbtBlue = round(blue/count);
//             image[i][j].rgbtGreen = round(green/count);
//         }
//     }
//     return;
// }

