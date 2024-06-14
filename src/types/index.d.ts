import React from "react"

export type layoutProps = {
    children: React.ReactNode,
}

export type pageProps = {
    children: React.ReactNode,
    className?: string
}


// Members
export type memberProps = {
    _id: string;
    name: string;
    designation: string;
    mobile: string;
    email: string;
    photoUrl: string;
}