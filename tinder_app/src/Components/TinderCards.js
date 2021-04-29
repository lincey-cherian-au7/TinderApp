/* eslint-disable no-undef */
import React, { useState,useEffect } from 'react';
import axios from '../api'
import TinderCard from 'react-tinder-card';
import './tindercards.css'

const TinderCards=() =>{
    const [people,setPeople] = useState([])
    
    useEffect(()=>{
        async function fetchData(){
            const req= await axios.get('/tindercards')
            setPeople(req.data)
        }
        fetchData();
    },[])
    
    const swiped =(direction,nameToDelete)=>{
        console.log("removing: "+nameToDelete)
       // setLastDirection(direction)
        
    }
    const outOfFrame=(name)=>{
        console.log(name+ 'left of the screen')
    }
    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
                {people.map((person)=>(
                   
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={['up','down']}
                        onSwipe={(dir)=>swiped(dir,person.name)}
                        onCardLeftScreen={()=>outOfFrame(person.name)}
                    >
                        <div className="card"
                            style={{backgroundImage:`url(${person.imgUrl})`}}>
                            <h3>{person.name}</h3>
                        </div>

                    </TinderCard>

                ))}
            </div>
           
            
        </div>
    )
}

export default TinderCards
