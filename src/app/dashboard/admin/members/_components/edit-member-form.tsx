"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { editMemberValidator } from "@/lib/validators/admin/members.validator";
import { toast } from "sonner";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Member } from "@prisma/client";

export const EditMemberForm = ({ member }: { member: Member }) => {
    const { id, firstName, lastName, designation, email, mobile } = member;

    const [isSubmitting, setIsSubmitting] = useState(false);
    const form = useForm<z.infer<typeof editMemberValidator>>({
        resolver: zodResolver(editMemberValidator),
        defaultValues: {
            firstName: firstName,
            lastName,
            designation,
            email,
            mobile,
        },
    });

    async function onSubmit(values: z.infer<typeof editMemberValidator>) {
        const formData = new FormData();
        formData.append("firstName", values.firstName);
        formData.append("lastName", values.lastName);
        formData.append("designation", values.designation);
        formData.append("email", values.email);
        formData.append("mobile", values.mobile);
        if (values.photo) {
            formData.append("photo", values.photo);
        }

        setIsSubmitting(true);
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_HOST_URL}/api/admin/members/edit/${id}`,
            {
                method: "PATCH",
                body: formData,
            }
        );

        setIsSubmitting(false);
        const data = await res.json();

        if (data.success) {
            toast.success(data.message);
            form.reset();
        } else {
            toast.error(data.message);
            form.reset();
        }
    }
    return (
        <main className="m-auto min-h-full max-w-lg">
            <h1 className="mb-6 mt-4 text-center text-4xl font-bold text-primary">
                Edit Member
            </h1>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8"
                >
                    <div className="flex w-full gap-5">
                        <FormField
                            control={form.control}
                            name="firstName"
                            render={({ field }) => (
                                <FormItem className="w-1/2">
                                    <FormLabel>First Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="John" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="lastName"
                            render={({ field }) => (
                                <FormItem className="w-1/2">
                                    <FormLabel>Last Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Doe" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <FormField
                        control={form.control}
                        name="designation"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Designation</FormLabel>
                                <FormControl>
                                    <Input placeholder="Manager" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="example@gmail.com"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="mobile"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Mobile No</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="97xxxxxxxx"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="photo"
                        render={({
                            field: { value, onChange, ...fieldProps },
                        }) => (
                            <FormItem>
                                <FormLabel>Photo</FormLabel>
                                <FormControl>
                                    <Input
                                        type="file"
                                        accept="image/png, image/jpeg, image/jpg"
                                        {...fieldProps}
                                        onChange={(event) =>
                                            onChange(
                                                event.target.files &&
                                                    event.target.files[0]
                                            )
                                        }
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" disabled={isSubmitting}>
                        <Loader2
                            className={cn(
                                "hidden size-4",
                                isSubmitting && "mr-1 block animate-spin"
                            )}
                        />
                        Submit
                    </Button>
                </form>
            </Form>
        </main>
    );
};
