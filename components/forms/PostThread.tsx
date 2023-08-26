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
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from "zod"
import { updateThread } from "@/lib/actions/user.actions";
import { usePathname, useRouter } from "next/navigation";

import { ThreadValidation } from '@/lib/validations/thread';
import { createThread } from '@/lib/actions/threads.actions';
import Thread from '@/lib/models/thread.model';

interface Props {
    user: {
        id: string;
        objectId: string;
        username: string;
        name: string;
        bio: string;
        image: string;
    };
    btnTitle: string;
}

function PostThread({ userId    }: {userId: string} ){
    const router = useRouter();
    const pathname  = usePathname();
     
    const form = useForm({
      resolver: zodResolver(ThreadValidation),
      defaultValues: {
        thread: '',
        accountId: userId,
      }
    });

    const onSubmit = async (values: z.infer<typeof ThreadValidation>) => {
        await createThread({ 
            text: values.thread,
            author: userId,
            communityId: null,
            path: pathname
        });

        router.push("/")
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 flex flex-col justify-start gap-10">
            <FormField
            control={form.control}
            name="thread"
            render={({ field }) => (
                <FormItem>
                <FormLabel className="text-base-semibold text-light-2 gap-3 w-full">Content</FormLabel>
                <FormControl>
                    <Textarea
                    rows={5}
                    className="no-focus border border-dark-4 bg-dark-3 text-light-1" 
                    placeholder="If you were lebron james, you'd probably talk about all your professional NBA accomplishments and also all our your personal pursuits." 
                    {...field} 
                    />
                </FormControl>
                <FormDescription>
                    Tell everyone how amazing you are!
                </FormDescription>
                <FormMessage />
            </FormItem>
            )}
            />           
            <Button type="submit" className="bg-primary-500">Submit</Button>
            </form>
        </Form>
    )
}

export default PostThread;