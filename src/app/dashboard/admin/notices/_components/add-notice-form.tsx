"use client";

import { useState } from "react";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

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

import { toast } from "sonner";
import { Loader2 } from "lucide-react";

import { addNoticeValidator } from "@/lib/validators/admin/notice.validator";

export const AddNoticeForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const form = useForm<z.infer<typeof addNoticeValidator>>({
        resolver: zodResolver(addNoticeValidator),
        defaultValues: {
            title: "",
        },
    });

    async function onSubmit(values: z.infer<typeof addNoticeValidator>) {
        const formData = new FormData();
        formData.append("title", values.title);
        formData.append("file", values.file);
        setIsSubmitting(true);
        const res = await fetch("/api/admin/notices/add", {
            method: "POST",
            body: formData,
        });

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
                New Notice
            </h1>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8"
                >
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Title</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Enter notice title"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="file"
                        render={({
                            field: { value, onChange, ...fieldProps },
                        }) => (
                            <FormItem>
                                <FormLabel>File</FormLabel>
                                <FormControl>
                                    <Input
                                        type="file"
                                        accept="application/pdf"
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
                    <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full"
                    >
                        <Loader2
                            className={cn(
                                "hidden size-4",
                                isSubmitting && "mr-1 block animate-spin"
                            )}
                        />
                        Publish Notice
                    </Button>
                </form>
            </Form>
        </main>
    );
};
