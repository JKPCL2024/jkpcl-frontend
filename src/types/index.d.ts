import React from "react"

declare type LayoutProps = {
    children: React.ReactNode,
}

declare type PageProps = {
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