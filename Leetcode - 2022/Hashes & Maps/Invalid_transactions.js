

/*
Invalid Transactions

A transaction is possibly invalid if:

the amount exceeds $1000, or;
if it occurs within (and including) 60 minutes of another 
transaction with the same name in a different city.

Each transaction string transactions[i] consists of comma separated 
values representing the name, time (in minutes), amount, 
and city of the transaction.

Given a list of transactions, return a list of transactions
that are possibly invalid.  You may return the answer in any order.

 
Input: transactions = ["alice,20,800,mtv","alice,50,100,beijing"]
Output: ["alice,20,800,mtv","alice,50,100,beijing"]
Explanation: The first transaction is invalid because the second 
transaction occurs within a difference of 60 minutes, have the same 
name and is in a different city. Similarly the second one is invalid too.

transactions = ["alice,20,800,mtv","alice,50,1200,mtv"]
Output: ["alice,50,1200,mtv"]
*/


// ["alice,20,800,mtv","alice,50,1200,mtv"]
// [0: name, 1: mins, 2: $$$, 3: city, 4: name, 5: mins, 6: $$$, 7: city]



// Copied and pasted. Didnt get close. Redo this one 
var invalidTransactions = function(transactions) {
	const invalid = new Set();
	const info = [];

	// create info arr: each element contains an obj with name, time, price, city, & raw string of input
	for (let trans of transactions) {
		let [name, time, price, city] = trans.split(",");
		info.push({name, time, price, city, raw: trans});
	}
    
	// sort ascending times
	info.sort((a, b) => Number(a.time) - Number(b.time));

	// add to invalid if price > 1000
	for (let infoEl of info) {
		if (infoEl.price > 1000) {
			invalid.add(infoEl.raw);
		}
	}
	// add elements to invalid if (within 60 time of eachother, diff city, same name)
	for (let i = 0; i < info.length-1; i++) {
		let curr = info[i];
		let nextI = i+1;

		while (nextI < info.length && (info[nextI].time - curr.time <= 60)) {
			if (curr.name === info[nextI].name && curr.city !== info[nextI].city) {
				invalid.add(curr.raw);
				invalid.add(info[nextI].raw)
			}
			nextI++;
		}
	}
	return Array.from(invalid);
};





