"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

const Hello = () => {
const [user, setUser] = useState(false);
const router = useRouter();

const handleButton = () => {
    if(user) router.push('/monday')
    else router.push('/college/cse/Java')
}

    return(
    <div>
        <h1>First next js file</h1>

        <button onClick={handleButton}>click me to navigate to other page</button>
    </div>
    )
}

export default Hello