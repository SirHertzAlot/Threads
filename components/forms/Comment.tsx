"use client"

import { useForm } from 'react-hook-form';
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from "zod"
import { updateThread } from "@/lib/actions/user.actions";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { CommentValidation } from '@/lib/validations/thread';
import { addCommentToThread, createThread } from '@/lib/actions/threads.actions';
import Thread from '@/lib/models/thread.model';

interface Props{
    threadId: string;
    currentUserImg: string;
    currentUserId: string;
}

const Comment = ({ threadId, currentUserImg, currentUserId }: Props) => {
    const router = useRouter();
    const pathname  = usePathname();
     
    const form = useForm({
      resolver: zodResolver(CommentValidation),
      defaultValues: {
        thread: '',
      }
    });

    const onSubmit = async (values: z.infer<typeof CommentValidation>) => {
        await addCommentToThread(threadId, values.thread, JSON.parse(currentUserId), pathname);

        form.reset();
    }
    
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="comment-form space-y-8 flex flex-col justify-start gap-10">
            <FormField
            control={form.control}
            name="thread"
            render={({ field }) => (
                <FormItem className="flex w-full items-center gap-3">
                <FormLabel>
                    <Image src={currentUserImg} alt="Current User" width={48} height={48} rounded-full object-cover />
                </FormLabel>
                <FormControl className="border-none bg-transparent">
                    <Input
                    type="text"
                    placeholder="Comment..."
                    className="no-focus text-light-1 outline-none" 
                    {...field} 
                    />
                </FormControl>
                <FormDescription>
                    Tell everyone how amazing you are!
                </FormDescription>
            </FormItem>
            )}
            />           
            <Button type="submit" className="comment-form_btn">Reply</Button>
            </form>
        </Form>
    )
}

export default Comment