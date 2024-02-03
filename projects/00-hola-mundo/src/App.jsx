import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    {
        userName: 'goku',
        name: 'Son goku',
        isFollowing: true
    },
    {
        userName: 'Mutenroi',
        name: 'Maestro Mutenroi',
        isFollowing: false
    },
    {
        userName: 'dragonball',
        name: 'Principe Vegeta',
        isFollowing: true
    },
    {
        userName: 'piccolo',
        name: 'Piccolo',
        isFollowing: false
    },
    {
        userName: 'sonGohan',
        name: 'Son Gohan',
        isFollowing: true
    },
]


export function App() {

    return (
        <section className="App">
            {
                users.map(({userName, name, isFollowing}) =>{
                    
                    return (
                        <TwitterFollowCard
                            key={userName}
                            userName={userName}
                            initialIsFollowing={isFollowing}>
                            {name}
                        </TwitterFollowCard>
                    )
                })
            }
  
        </section>
    )
}