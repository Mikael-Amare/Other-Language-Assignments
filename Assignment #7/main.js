/*
    Copyright (c) 2024. All rights reserved.
    created by: Mikael Amare
    created on: June 2024
    This program merges and sorts 2 lists
*/

function listMerge(numbersArray1, numbersArray2) {
    let sortedList = []
    let counter = 0
    let loopCounter = 0

    // Loop until one of the lists is exhausted
    while (counter < numbersArray1.length && loopCounter < numbersArray2.length) {
        if (numbersArray1[counter] < numbersArray2[loopCounter]) {
            sortedList.push(numbersArray1[counter])
            counter++
        } else {
            sortedList.push(numbersArray2[loopCounter])
            loopCounter++
        }
    }

    // Append remaining elements of numbersArray1 if any
    while (counter < numbersArray1.length) {
        sortedList.push(numbersArray1[counter])
        counter++
    }

    // Append remaining elements of numbersArray2 if any
    while (loopCounter < numbersArray2.length) {
        sortedList.push(numbersArray2[loopCounter])
        loopCounter++
    }

    // Insertion sort on the merged list
    for (counter = 1; counter < sortedList.length; counter++) {
        let key = sortedList[counter]
        loopCounter = counter - 1
        while (loopCounter >= 0 && key < sortedList[loopCounter]) {
            sortedList[loopCounter + 1] = sortedList[loopCounter]
            loopCounter--
        }
        sortedList[loopCounter + 1] = key
    }

    return sortedList
}

function main() {
    // Create two lists
    const numbersArray1 = []
    const numbersArray2 = []
    const arraySize = 15
    const maxRandomNumber = 50

  // Create a random number generator and populate the arrays
    console.log("Array number 1:")
    for (let counter = 0; counter < arraySize; counter++) {
      const randomNumber = Math.floor(Math.random() * maxRandomNumber) + 1
    if (counter > 0 && counter % 5 === 0) {
        console.log("")
    }
    process.stdout.write(randomNumber + " ")
    numbersArray1.push(randomNumber)
    }
    console.log("\n")

    console.log("Array number 2:")
    for (let counter = 0; counter < arraySize; counter++) {
      const randomNumber = Math.floor(Math.random() * maxRandomNumber) + 1
        if (counter > 0 && counter % 5 === 0) {
        console.log("")
        }
    process.stdout.write(randomNumber + " ")
    numbersArray2.push(randomNumber)
    }
    console.log("\n")

    const sortedArray = listMerge(numbersArray1, numbersArray2)

    console.log("Sorted list:")
    for (let counter = 0; counter < sortedArray.length; counter++) {
        if (counter > 0 && counter % 5 === 0) {
            console.log("")
        }
    process.stdout.write(sortedArray[counter] + " ")
    }
    console.log("")
}

// Run the main function
main()
