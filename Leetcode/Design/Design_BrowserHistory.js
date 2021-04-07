


/*
Design Browser History

You have a browser of one tab where you start on the homepage and you 
can visit another url, get back in the history number of steps or move 
forward in the history number of steps.

Implement the BrowserHistory class:

BrowserHistory(string homepage) Initializes the object with the homepage of the browser.
void visit(string url) Visits url from the current page. It clears up all the forward history.
string back(int steps) Move steps back in history. If you can only return 
x steps in the history and steps > x, you will return only x steps. Return 
the current url after moving back in history at most steps.
string forward(int steps) Move steps forward in history. If you can only forward 
x steps in the history and steps > x, you will forward only x steps. Return the 
current url after forwarding in history at most steps.
*/



// Close thinking but off in implementation 
// Half pass maybe at best 
class BrowserHistory{
    
    constructor(homepage) {
        this.backwards = [homepage];
        this.forwards = [];
    }
    
    visit(url) { // correct
        this.backwards.push(url);
        this.forwards = [];
    }
    
    back(steps) {
        // As we go back, add urls to forward
        while(steps && this.backwards.length > 1) {
            let url = this.backwards.pop();
            this.forwards.push(url);
            steps--; 
        }        
        // we've moved steps # of urls from backwards to forward
        // so return the next thing on the backwards arr 
        return this.backwards[this.backwards.length - 1]
    }
    
    forward(steps) {
        // As we go forward, add eles to backwards
        while(steps && this.forwards.length > 0) {
            let url = this.forwards.pop();
            this.backwards.push(url);
            steps--
        }
        return this.backwards[this.backwards.length - 1];
    }

}



class BrowserHistory {
    constructor(homepage) {
        this.forwardArr = [];
        this.backArr = [homepage];
    }
    visit(url) {
        // We're at a page, so forward = empty & curr page add to back 
        this.forwardArr = [];
        this.backArr.push(url);
    }
    back(steps) {
        // Go backwards X num of steps if we have X num of back urls
        while(steps && this.backArr.length > 1) {
            // Add this url into our going through stack
            let url = this.backArr.pop();
            this.forwardArr.push(url);
            steps--;
        }
        // return the url that is at the end of the stack
        return this.backArr[this.backArr.length - 1]
    }
    forward(steps) {
        // Go forward X num of steps if we have X num of forward urls 
        while(steps && this.forwardArr.length) {
            let url = this.forwardArr.pop();
            this.backArr.push(url);
            steps--;
        }
        // Access the last ele in the stack
        return this.backArr[this.backArr.length - 1];
    }
}



