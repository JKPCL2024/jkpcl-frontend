"use client";

import axios from "axios";
import { useDeleteMember } from "@/lib/hooks/use-delete-member";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { toast } from "sonner";

export function ConfirmDeleteMemberModal() {
    const { isOpen, memberId, closeModal } = useDeleteMember();
    const onConfirm = async () => {
        closeModal();
        toast.promise(axios.delete(`/api/admin/members/delete/${memberId}`), {
            loading: "Deleting member...",
            success: "Member deleted successfully",
            error: "Error deleting member",
        });
    };
    return (
        <AlertDialog open={isOpen} onOpenChange={() => closeModal()}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        Are you absolutely sure?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently
                        delete this member.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={onConfirm}>
                        Continue
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
