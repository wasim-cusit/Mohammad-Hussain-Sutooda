// Author: Mohammad Hussain Sutooda
// Package Express - shipping quote calculator (C# console application)

using System;

namespace PackageExpress
{
    class Program
    {
        static void Main(string[] args)
        {
            // First line of program output (required by assignment)
            Console.WriteLine("Welcome to Package Express. Please follow the instructions below.");

            // Ask the user for the package weight
            Console.WriteLine("Please enter the package weight:");
            double weight = Convert.ToDouble(Console.ReadLine());

            // Stop the program if weight is greater than 50
            if (weight > 50)
            {
                Console.WriteLine("Package too heavy to be shipped via Package Express. Have a good day.");
                return;
            }

            // Ask the user for the package width
            Console.WriteLine("Please enter the package width:");
            double width = Convert.ToDouble(Console.ReadLine());

            // Ask the user for the package height
            Console.WriteLine("Please enter the package height:");
            double height = Convert.ToDouble(Console.ReadLine());

            // Ask the user for the package length
            Console.WriteLine("Please enter the package length:");
            double length = Convert.ToDouble(Console.ReadLine());

            // Add width, height, and length together
            double dimensionTotal = width + height + length;

            // Stop the program if the total of the dimensions is greater than 50
            if (dimensionTotal > 50)
            {
                Console.WriteLine("Package too big to be shipped via Package Express.");
                return;
            }

            // Multiply height, width, and length, then multiply by weight, then divide by 100
            double quote = (height * width * length * weight) / 100;

            // Display the shipping quote as a dollar amount with two decimal places
            Console.WriteLine($"Your estimated total for shipping this package is: ${quote:F2}");
            Console.WriteLine("Thank you!");
        }
    }
}
