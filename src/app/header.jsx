import Link from "next/link"

const Header = () => {
    return (

        <div style = {{display: 'flex', color: 'white', background:'black', gap: '20px', padding: '10px'}}>
            <Link href='/monday' style = { {color:'white'} }>
            <div>Monday</div>
            </Link>
            <Link href='/college/cse/Java' style = { {color:'white'} }>
            <div>Java</div>
            </Link>
            <Link href='/college/cse/Python' style = { {color:'white'} }>
            <div>Python</div>
                </Link>
        </div>
    )
}

export default Header