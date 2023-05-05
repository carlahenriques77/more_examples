import React, { useState } from 'react'
// Hey, it's... Different this time? The "useState" Import just gone up here, somehow

// import / style
import './MyForm.module.css'
// Odd... He didn't make an CSS Module

const MyForm = ({mfProp}) => {
    // 6 - controlled Inputs
    // 3 - Managing Data
    const [dataName, dataSetName] = useState(mfProp ? mfProp.mfName : "")
    const [dataMail, dataSetMail] = useState(mfProp ? mfProp.mfMail : "")

    const [textAreaBio, textAreaSetBio] = useState(mfProp ? mfProp.mfBio : "")

    const [selectRole, selectSetRole] = useState(mfProp ? mfProp.mfRole : "")

    const cHandleName = (hnE) => {
        dataSetName(hnE.target.value)
        // console.log(hnE.target.value)
    }

    console.log(dataName)
    // As it is, it Updates it whenever something is Written, showing letter by letter on the Console
    console.log(dataMail)

    const cHandleSubmit = (hsEvent) => {
        hsEvent.preventDefault()
        // Will prevent it from reloading
        // Though, we already know that...
        // But, it's still Important to mention because it's on React, a 'Single Page Application'. Reloads are not cool here
        console.log("Form Submitted")
        console.log(dataName, dataMail, textAreaBio, selectRole)
        // Will show the whole Name and Mail in the Console...
        // I already thought of it before, but... We should use the Console more often, to try to understand better what is going on in the Code(?)

        // 7 - Cleaning the Form
        dataSetName("")
        dataSetMail("")
        textAreaSetBio("")
        // Oh, so when the Submit is done, the "placeholder" will be deleted, thus making it an Empty Input Text again
    }

  return (
    <div>
        {/* 5 - submit Form */}
        {/* 1 - Creating a Form */}
        <form onSubmit={cHandleSubmit}>
            {/* "Most of the Functions that Execute a Event from React are usually called 'handleSomething'" */}
            <div>
                <label htmlFor="nameForm">
                    Some Name:
                </label>
                <input 
                type="text" 
                name='nameForm' 
                placeholder='llll' 
                onChange={cHandleName}
                
                value={dataName}
                // It's necessary for the Value to have the State(?) on it. At least, in this case...
                />
            </div>

            {/* 2 - "Label wrapping the Input" */}
            <label>
                <span>
                    Mail:
                </span>
                {/* 4 - State Manipulation Simplificated */}
                <input 
                type="email" 
                name="mailForm"
                // I wrote "Value" here accidentalu(?) lol 
                placeholder='xxx'
                onChange={(mailE) => dataSetMail(mailE.target.value)}
                // A simple version of the const "cHandleName"

                value={dataMail}
                />
            </label>
            {/* 8 - textarea */}
            <label>
                <span>Bio:</span>
                <textarea 
                name="joeBiden" 
                placeholder='desc' 
                onChange={(octaE) => textAreaSetBio(octaE.target.value)} 
                value={textAreaBio}
                ></textarea>
            </label>

            {/* 9 - Select */}
            <label>
                <span>
                    Function on the System(?)
                </span>
                <select 
                name="roleName" 
                onChange={(ocThing) => selectSetRole(ocThing.target.value)}
                value={selectRole
                }>
                {/* The Value was needed to show it like a Placeholder of sorts and all that */}
                    <option value="optUser">User</option>
                    <option value="optEditor">Editor</option>
                    <option value="optAdmin">Admin</option>
                </select>
            </label>

            {/* How to wrap an Input on a Label, I guess */}
            <input type="submit" value="send" />
        </form>
    </div>
  )
}

export default MyForm