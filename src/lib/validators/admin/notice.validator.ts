import { z } from "zod";
import { checkFileType } from "@/lib/utils";

const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB
const ACCEPTED_FILE_TYPES = ["application/pdf"];


export const addNoticeValidator = z.object({
    title: z.string().min(8, {
        message: "Title must be at least 8 characters.",
    }),
    file: z
        .instanceof(File, { message: "Please select a file" })
        .refine((file) => checkFileType(file, ACCEPTED_FILE_TYPES), "Only .pdf format is supported.")
        .refine((file) => file.size < MAX_FILE_SIZE, {
            message: "File must be less than 2MB.",
        })

});