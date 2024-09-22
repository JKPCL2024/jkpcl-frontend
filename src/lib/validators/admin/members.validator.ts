import { z } from "zod";
import { checkFileType } from "@/lib/utils";

const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB
const ACCEPTED_FILE_TYPES = ["image/jpg", "image/jpeg", "image/png", "image/webp"];


const commonFields = z.object({
    firstName: z.string().min(2, {
        message: "First name must be at least 2 characters.",
    }),
    lastName: z.string().min(2, {
        message: "First name must be at least 2 characters.",
    }),
    designation: z.string().min(2, {
        message: "Designation must be at least 2 characters.",
    }),
    email: z.string().email({ message: "Please enter a valid email" }),
    mobile: z.string().regex(/^\d{10}$/, { message: "Please enter a valid 10 digit mobile number" }),
});

export const addMemberValidator = commonFields.extend({
    photo: z
        .instanceof(File, { message: "Please select a file" })
        .refine((file) => checkFileType(file, ACCEPTED_FILE_TYPES), "Only .jpg, .jpeg, .png and .webp formats are supported.")
        .refine((file) => file.size < MAX_FILE_SIZE, {
            message: "Image must be less than 2MB.",
        })
});

export const editMemberValidator = commonFields.extend({
    photo: z.instanceof(File)
        .refine((file) => checkFileType(file, ACCEPTED_FILE_TYPES), "Only .jpg, .jpeg, .png and .webp formats are supported.")
        .refine((file) => file.size < MAX_FILE_SIZE, {
            message: "Image must be less than 2MB.",
        }).optional()
});


// export const addMemberValidator = z.object({
//     firstName: z.string().min(2, {
//         message: "First name must be at least 2 characters.",
//     }),
//     lastName: z.string().min(2, {
//         message: "First name must be at least 2 characters.",
//     }),
//     designation: z.string().min(2, {
//         message: "Designation must be at least 2 characters.",
//     }),
//     email: z.string().email({ message: "Please enter a valid email" }),
//     mobile: z.string().regex(/^\d{10}$/, { message: "Please enter a valid 10 digit mobile number" }),
//     photo: z
//         .instanceof(File, { message: "Please select a file" })
//         .refine((file) => checkFileType(file, ACCEPTED_FILE_TYPES), "Only .jpg, .jpeg, .png and .webp formats are supported.")
//         .refine((file) => file.size < MAX_FILE_SIZE, {
//             message: "Image must be less than 2MB.",
//         })

// });
// export const editMemberValidator = z.object({
//     firstName: z.string().min(2, {
//         message: "First name must be at least 2 characters.",
//     }),
//     lastName: z.string().min(2, {
//         message: "First name must be at least 2 characters.",
//     }),
//     designation: z.string().min(2, {
//         message: "Designation must be at least 2 characters.",
//     }),
//     email: z.string().email({ message: "Please enter a valid email" }),
//     mobile: z.string().regex(/^\d{10}$/, { message: "Please enter a valid 10 digit mobile number" }),
//     photo: z
//         .instanceof(File, { message: "Please select a file" })
//         .refine((file) => checkFileType(file, ACCEPTED_FILE_TYPES), "Only .jpg, .jpeg, .png and .webp formats are supported.")
//         .refine((file) => file.size < MAX_FILE_SIZE, {
//             message: "Image must be less than 2MB.",
//         }).optional()

// });