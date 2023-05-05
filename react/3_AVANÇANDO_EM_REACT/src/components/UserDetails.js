import React from 'react'

const UserDetails = ({ coolName, someJob, theMovieIceAge}) => {
  return (
    <div>
        <h2>{coolName}</h2>
        <p>iceAge part 'why Did I make that': {theMovieIceAge}</p>
        <p>The Job some Job: {someJob}</p>
        {theMovieIceAge >= 48 ? (
            <p>Big iceAge Number, cool 48</p>
        ) : (
            <p>Small Number</p>
        )}
    </div>
  )
}

export default UserDetails