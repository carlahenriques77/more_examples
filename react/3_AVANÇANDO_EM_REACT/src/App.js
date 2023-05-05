// Imports / Components

import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import CarDetailsExample02 from './components/CarDetailsExample02';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/UserDetails';

// Imports / Hooks(?)

import { useState } from 'react';
// { Fragment, useState }
// "Fragment" for some reason got sent here

// Styles

import './App.css';

// Imgs

import imgCity from "./assets/city.jpg"

function App() {

  const c2Balls = "Another Name"
  // He Commented the Cpnst above because of an Error was happening(?)
  // Apparently, it was because he wasn't using it anywhere
  const [cCoolUserName] = useState("coolName")

  const cCars = [
    {prNid: 1, prSbrand: "A Car Brand01", prScolor: "Yellow01", prBnewCar: true, prNkm: 1},
    {prNid: 2, prSbrand: "A Car Brand02", prScolor: "Yellow02", prBnewCar: false, prNkm: 2},
    {prNid: 3, prSbrand: "A Car Brand03", prScolor: "Yellow03", prBnewCar: true, prNkm: 3},
    {prNid: 4, prSbrand: "A Car Brand04", prScolor: "Yellow04", prBnewCar: true, prNkm: 4},
];
// "Legacy Octal" Error
// Looks like you can't have a Number that Starts with Zero Ex: 01, 02, 03
  

  function fShowMessage() {
    console.log('Event from the "Father Component"')
  }

  const [cMessage, setMessage] = useState("")

  const cHandleMessage = (handleMessageThing) => {
     setMessage(handleMessageThing);
  }
  // We didn't put the ">" on the "=>", that's why it was doing a Error totally not related to it not having an ">"

  const cUsersUsers = [
    { idIDid: 1, nameName: "A Random Name01", joooob: "01", iceAge: 33  },
    { idIDid: 2, nameName: "A Random Name02", joooob: "02", iceAge: 66  },
    { idIDid: 3, nameName: "A Random Name03", joooob: "03", iceAge: 99  },
    { idIDid: 4, nameName: "A Random Name04", joooob: "04", iceAge: 13  }
  ]

  return (
    <div className="App">
      <h1>React</h1>
      {/* Public Folder Image */}
      <div>
        <img src="/img1.jpg" alt="TheImageLol" />
        {/* Did it Work? By what he said, it would take it from the "Public" Folder... Which is weird, as it isn't mentioned here in the Code */}
        {/* He also said that "it is possible because the React already does the Link for him", and it seems to be True(?) */}
      </div>
      {/* Assets Folder Image */}
      <div>
        <img src={imgCity} alt="CityImage" />
      </div>

      <ManageData />

      <ListRender />

      <ConditionalRender />

      <ShowUserName ball="8 Ball Poll" />
      {/* Odd that you can make an property(?) like that out of nowhere... */}
      {/* He said that now the "JSXshowUserName" has access to this prop called "8 Ball" */}
      <ShowUserName ball={c2Balls} />
      <ShowUserName ball={cCoolUserName} />
      {/* Soo... Depending on what is here in the "ball", it will Change the result, independently of how many times we spam it */}

      <CarDetails ballsBrand="VW" ballsKM={100000} ballsColor="Blue" />
      {/* Another way to do it */}
      
      <CarDetailsExample02 exBrand="lmaokai" exKm={2} exColor="some exColor"/>
      {/* destructuring Version */}

      {/* Recycling(?) Components */}
      <CarDetailsExample02 exBrand="lmaolphite" exKm={283} exColor="Rock" exNewCar={false}/>
      <CarDetailsExample02 exBrand="lorem" exKm={999} exColor="Pink" exNewCar={true}/>
      <CarDetailsExample02 exBrand="84883" exKm={182388} exColor="5483" exNewCar={false}/>
      {/* Soo... That was what he meant by Recycling it? */}

      {/* Loop on a Array of Objects */}
      {cCars.map((pcar) => (
        <CarDetailsExample02

        key={pcar.prNid} 
        // We forgot the Key lmao
        
        exBrand={pcar.prSbrand} 
        exColor={pcar.prScolor} 
        exKm={pcar.prNkm}
        exNewCar={pcar.prBnewCar}/>
      ))}
      {/* The "H2" is coming from the  <CarDetailsExample02 /> thing  */}

      {/* fragment */}
      <Fragment pApropFragment="Testing" />

      {/* children */}
      <Container someValue="Cool Testing">
        <p>Content that didn't appear Yet - Update: Now it did - no it didn't??? - Update: Now it did, and it was because the Name HAS to be "children"</p>
      </Container>
      <Container someValue="some Value">
        <h5>Porno Gay</h5>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi illo error quas reprehenderit autem consequatur vel id assumenda neque ducimus magnam sequi quisquam mollitia, aliquid asperiores quos necessitatibus, magni minus.</p>
      </Container>
      {/* Oh, we can make them this way, too */}
      {/* Not just the </Container /> type of thing */}
      {/* Not sure if this way Imports it Automatically... We will have to test it[It doesn't] */}

      {/* execute function */}
      <ExecuteFunction propMyFunction={fShowMessage}/>

      {/* state lift */}
      <Message handleMessageThing={cMessage} />

      <ChangeMessageState cHandleHandleTheHandleMessage={cHandleMessage}/>
      {/* We changed it to make it look more Unique, to be sure that every name is allowed */}

      {/* challenge */}
      {cUsersUsers.map((usersThing) => (
        <UserDetails 

        key={usersThing.idIDid}

        coolName={usersThing.nameName}
        someJob={usersThing.joooob}
        theMovieIceAge={usersThing.iceAge}
         />
      ))}
    </div>
  );
}

export default App;
