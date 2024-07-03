'use client';

import { Button } from "./ui/button";
import { Input } from "./ui/input"; 
import { Textarea } from "./ui/textarea";
import { User, MailIcon, ArrowRightIcon, MessageSquare } from "lucide-react";

const FunctionalComponent = () => {
  return (
    <form className="flex flex-col gap-x-4">
        {/* inputs */}
        <div className="relative flex items-center mb-2">
            <Input type='name' id='name' placeholder='Your Name' />
            <User className="absolute right-6" size={20} />
        </div>
        {/* inputs */}
        <div className="relative flex items-center mb-2">
            <Input type='mail' id='email' placeholder='Your Email' />
            <MailIcon className="absolute right-6" size={20} />
        </div>
        {/* textarea */}
        <div className="relative flex items-center mb-4">
            <Textarea type='name' id='name' placeholder='Type Your Message Here.' />
            <MessageSquare className="absolute top-4 right-6" size={20} />
        </div>
        <Button className='flex items-center gap-x-1 max-w-[166px]'>Let's Talk
            <ArrowRightIcon size={20} />
        </Button>
    </form>
  );
}
export default FunctionalComponent;
