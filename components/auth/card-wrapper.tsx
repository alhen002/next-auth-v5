"use client"


import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card";

interface CardWrapperProps {
    children: React.ReactNode;
    headerLabel: string;
    backButtonLabel: string;
    backButtonHref: string,
    showSocial?: boolean
}

import React from 'react';
import Header from "@/components/auth/header";
import Social from "@/components/auth/social";
import BackButton from "@/components/auth/back-button";

export const CardWrapper = ({backButtonHref, backButtonLabel, headerLabel, showSocial, children}:CardWrapperProps) => {
    return (
        <Card className="w-[500px] shadow-md">
            <CardHeader><Header label={headerLabel} /></CardHeader>
            <CardContent>{children}</CardContent>
            <CardFooter><Social /></CardFooter>
            <CardFooter>
                <BackButton label={backButtonLabel} href={backButtonHref} />
            </CardFooter>
        </Card>
    );
};

