"use client"
import { useRouter } from "next/navigation"
import cse from "../cse.module.css"
import Image from "next/image"

const page = () => {

  const router = useRouter()
const handleBackButton = () => {
  router.back()
}

  return (
    <div>
        <h1 className={cse.branch}>Java is simple but strong programming language</h1>
        <button onClick={handleBackButton}>Go Back</button><br />
        <img src="/img1.jpg" alt="nature image" width={250} height={250}/><br />  
        <Image src="https://media.istockphoto.com/id/1419410282/photo/silent-forest-in-spring-with-beautiful-bright-sun-rays.webp?b=1&s=612x612&w=0&k=20&c=C318sxgBBIO66E7vi_0Eu3lXHm9uRDauKvRgeyxY2O4=" width={400} height={400} alt="nature image" />
    </div>
  )
}

export default page