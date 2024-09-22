"use client";

import Image from "next/image";
import Link from "next/link";
import { Member } from "@prisma/client";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Edit, Mail, MoreVertical, Phone, Trash2 } from "lucide-react";
import { copyToClipboard } from "@/lib/utils";
import { Tooltip } from "@/components/shared/tooltip";
import { useDeleteMember } from "@/lib/hooks/use-delete-member";

export const MemberCard = ({
    member,
    editable = false,
}: {
    member: Member;
    editable?: boolean;
}) => {
    const { setMemberId, openModal } = useDeleteMember();
    const { id, firstName, lastName, email, designation, mobile, photoUrl } =
        member;
    const handleDelete = () => {
        openModal();
        setMemberId(id);
    };
    return (
        <Card className="relative flex w-72 flex-col items-center border bg-card/80 py-6 shadow-md">
            <CardHeader className="flex flex-col items-center">
                <div className="rounded-full p-[0.1rem] ring-4 ring-primary">
                    <Image
                        src={photoUrl}
                        width={100}
                        height={100}
                        alt={firstName + " " + lastName}
                        className="h-28 w-28 rounded-full object-cover"
                    />
                </div>
                <CardTitle className="text-xl font-bold">{`${firstName} ${lastName}`}</CardTitle>
                <CardDescription>{designation}</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-between gap-2">
                <Tooltip
                    trigger={
                        <Button
                            variant={"outline"}
                            className="w-28 cursor-copy"
                            onClick={() =>
                                copyToClipboard({
                                    text: mobile,
                                    title: "Phone number",
                                })
                            }
                        >
                            <Phone className="mr-2 size-4" /> Phone
                        </Button>
                    }
                    content={<span>Copy Phone number</span>}
                />

                <Tooltip
                    trigger={
                        <Button
                            variant={"outline"}
                            className="w-28 cursor-copy"
                            onClick={() =>
                                copyToClipboard({
                                    text: email,
                                    title: "Email id",
                                })
                            }
                        >
                            <Mail className="mr-2 size-5" />
                            Email
                        </Button>
                    }
                    content={<span>Copy Email</span>}
                />
            </CardContent>
            {editable && (
                <div className="absolute right-2 top-2">
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <Tooltip
                                trigger={
                                    <Button size={"icon"} variant={"ghost"}>
                                        <MoreVertical className="size-5" />
                                    </Button>
                                }
                                content={<span>More</span>}
                            />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>More Options</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem asChild>
                                <Link
                                    href={`/dashboard/admin/members/edit/${id}`}
                                >
                                    <Edit className="mr-2 size-4" />
                                    Edit
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={handleDelete}>
                                <Trash2 className="mr-2 size-4" /> Delete
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            )}
        </Card>
    );
};
