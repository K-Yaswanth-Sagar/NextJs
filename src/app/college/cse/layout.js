import CseSubjects from "./CseSubjects"

export const metadata = {
    title : "CSE branch"
}

export default function cseLayout({children}){
    return(
        <div>

{children}
<CseSubjects />

        </div>
    )
}