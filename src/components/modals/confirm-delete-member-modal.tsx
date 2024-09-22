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
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
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
            <AlertDialogTrigger asChild>
                <Button variant="outline">Delete Member</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        Are you absolutely sure?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently
                        delete your account and remove your data from our
                        servers.
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
