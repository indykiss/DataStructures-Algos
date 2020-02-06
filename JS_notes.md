


#### Closures

A closure is a function that accesses a variable outside itself.

    const bloop = "BLOOP"

    function sayBloop() {
      alert(bloop);
    }


One thing that's nice about closures is the ability to create an instance variable. 

Which makes nextGeneratedId private to the outside world. Good for preventing accidental changes.

      const generateID = (() => {
        let nextGeneratedId = 0;
        return element => {
        if (!element.id) {
          element.id = `generated-uid-${nextGeneratedId}`;
          nextGeneratedId++;
        }
        return element.id;
      })
      
