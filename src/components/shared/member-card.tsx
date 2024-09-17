"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { memberProps } from "@/types";
import Image from "next/image";
import { Button } from "../ui/button";
import { Mail, Phone } from "lucide-react";
import { copyToClipboard } from "@/lib/utils";

export const MemberCard = ({ member }: { member: memberProps }) => {
  const { _id, name, email, designation, mobile, photoUrl } = member;
  return (
    <Card className="w-68 flex flex-col items-center py-6">
      <CardHeader className="z-10 flex flex-col items-center">
        <div className="rounded-full p-[0.1rem] ring-4 ring-primary">
          <Image
            src={photoUrl}
            width={100}
            height={100}
            alt={name}
            className="h-28 w-28 rounded-full object-cover"
          />
        </div>
        <CardTitle className="text-xl font-bold">{name}</CardTitle>
        <CardDescription>{designation}</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-between gap-2">
        <Button
          variant={"outline"}
          className="w-28"
          onClick={() =>
            copyToClipboard({ text: mobile, title: "Phone number" })
          }
        >
          <Phone className="mr-2 size-4" /> Phone
        </Button>
        <Button
          variant={"outline"}
          className="w-28"
          onClick={() => copyToClipboard({ text: mobile, title: "Email id" })}
        >
          <Mail className="mr-2 size-5" />
          Email
        </Button>
      </CardContent>
    </Card>
  );
};
