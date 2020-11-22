



# Design a library management system 


1. Build out system requirements:
- Library member can search book by name and ID. 
- Book will have name, ID, location. 
- Can have 2+ books of same name but unique ID. 
- Library members can check out a book if available, OR if book not available, be notified when available. 
- Library needs to know who checked out which books. 
- Limits: Library member can only have 3 books, for a week for each book. 
- If late for return, collect fines from person. Calculate how much is due. $1 / day for lateness. 

Actors:
- Library system 
- Members 
- Books as objects 

Actions: 
- Add/ remove/ edit book 
- Add/ remove member
- Search functionality 
- Action of checking out book
- Action of returning book 


2. Use case diagram:
Meh

3. Classes:

Library:
- Name
- Address

Book:
- Name
- ID
- isCheckedOut: boolean

Member:
- Name 
- ID
- checkedOutBooks

Fine:
- Calculates fines

4. Activity Diagram:
Meh



5. Basic code 

class Library {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }

    isClosed() {
        
    }
}

Class Book {

    constructor(name, ID) {
        this.name = name;
        this.ID = ID; 
        this.isCheckedOut = false;
    }

    checksOutBook() {

    }

    returnsBook() {
    }
}

Class LibraryMember {

    constructor(name, ID) {
        this.name = name;
        this.ID = ID; 
        this.checkedOutBooks = [];
        this.owedFines = 0; 
    }

    hasNewBook() {

    }

    returnsABook() {

    }
}

Class Fine {

    
}