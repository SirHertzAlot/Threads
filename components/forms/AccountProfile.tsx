"use client"

import useForm from "react-hook-form";
import { Form } from "@/components/ui/form";
import { z } from "zod";

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

const AccountProfile = ({ user, btnTitle }: Props) => {
  
  const form = useForm({
    resolver: z(),
  });

  return (
    <Form>

    </Form>
  )
}

export default AccountProfile