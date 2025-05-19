import { NextResponse } from "next/server";

export async function GET(){
    return NextResponse.json({firstName: "Yaswanth",
        lastName: "Kummari",
        middleName: "Sagar"
    })
}