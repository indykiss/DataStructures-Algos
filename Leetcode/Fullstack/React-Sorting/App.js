import React from 'react';
import './App.css';
import 'h8k-components';

import Articles from './components/Articles';
import './App.css'

const title = "Sorting Articles";

// Ya idk, I don't know what I did here
// NEED to watch some react vids before hackerrank

function App({articles}) {

    const [sortedBy, setSortedBy] = React.useState(0);

    function orderedArticles() {
      if(sortedBy === 0) {
        let sorted = articles.sort((a,b) => (b.upvotes > a.upvotes) ? 1 : ((a.upvotes > b.upvotes) ? -1 : 0));
        return sorted;
      } else {
        let sorted = articles.sort((a,b) => (new Date(b.date) > new Date(a.date)) ? 1 : ((new Date(a.date) > new Date(b.date)) ? -1 : 0));
        return sorted;
      }
    }

    articles = orderedArticles();

    return (
        <div className="App">
            <h8k-navbar header={title}></h8k-navbar>
            <div className="layout-row align-items-center justify-content-center my-20 navigation">
                <label className="form-hint mb-0 text-uppercase font-weight-light">Sort By</label>
                <button onClick={()=>setSortedBy(0)} data-testid="most-upvoted-link" className="small">Most Upvoted</button>
                <button onClick={()=>setSortedBy(1)} data-testid="most-recent-link" className="small">Most Recent</button>
            </div>
            <Articles articles={articles}/>
        </div>
    );

}

export default App;
