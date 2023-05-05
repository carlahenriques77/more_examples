// Import / Hooks

import { useState } from "react"

// Import / Something

const ListRender = () => {

    const [cList] = useState(["Name01", "Name02", "Name03"])

    const [cUsers, setStateUsers] = useState([
      { prNid: 1, prSname: "Name04", prNage: 31 },
      { prNid: 2, prSname: "Name05", prNage: 28 },
      { prNid: 3, prSname: "Name06", prNage: 44 },
    ]);
    // setStateUsers added

    const cDeleteRandom = () => {
      const cRandomNumber = Math.floor(Math.random() * 4); // () added on random
      // It's * 4 because it's the Number on the List(?), from 1 - 3? I'm not good at Math lmao

      setStateUsers((pAprevUsers) => {
        console.log(pAprevUsers)
        return pAprevUsers.filter((pAuser) => cRandomNumber !== pAuser.prNid)
      });
      // If it "matches" it will be Deleted(?)
      // It needs to be "pAuser.prNid" because of the Number from before
      // It can't do the "Math.random() * 4" with a Number Bigger or a String, as it won't Match, thus not deleting
    };

  return (
    <div>
        <ul>
            {cList.map((pStItem, pNuIndexOfAll) => (
                <li key={pNuIndexOfAll}>
                  {pStItem}
                </li>         
              ))} 
                {/* Placed all of the Names on 'cList' on a "li" */}
                {/* The Key thing Helps to remove an Error and Render all of the Items of the List with a Key(?) */}
                {/* The "pNuIndexOfAll" means that the Second Attribute(?) refers to the Items in Specific, while the First means them all */}
        </ul>
        <ul>
          {cUsers.map((pUser) => (
            <li key={pUser.prNid}>
              {pUser.prSname} - {pUser.prNage} 
            </li>
          ))}
            {/* He said that it's an Easier way Compared to the last one for these things */}
            {/* React also doesn't give an Error this time */}
            {/* Did the Key use the Id as an way to find them? If not, then what happened to it?? Not quite. Apparently, it just works as a way to link it, independently of what is in there. It can even be repeated to show that info, too */}
            {/* Doesn't seems like you can use an outside Key, either */}
        </ul>
        <button onClick={cDeleteRandom}>Delete Something</button>
    </div>
  )
}

export default ListRender