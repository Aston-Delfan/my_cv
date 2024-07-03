import Form from "@/components/Form";
import { MailIcon, HomeIcon, PhoneCall } from "lucide-react";

const Contact = () => {
  return (
    <section>
      <div className="container mx-auto">
        {/* text & illustration */}
        <div>
          {/* text */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              Say Hello 👋
            </div>
            <h1 className="h1 max-w-lg mb-8">Let's Work Together</h1>
          </div>
        </div>
        {/* info text & form */}
        <div className="grid xl:grid-cols-2 mb-24 xl:mb-32">
          {/* info text */}
          <div className="flex flex-col gap-y-4 xl:col-y-14 mb-12 xl:mb-24 text-base xl:text-lg">
            {/* mail */}
            <div className="flex items-center gap-x-8 mb-6">
              <MailIcon size={18} className="text-primary"/>
              <div>astondelfan@gmail.com</div>
            </div>            
            {/* phone */}
            <div className="flex items-center gap-x-8 mb-6">
              <PhoneCall size={18} className="text-primary"/>
              <div>+6281 3380 88787</div>
            </div>            
            {/* addres */}
            <div className="flex items-center gap-x-8 ">
              <HomeIcon size={18} className="text-primary"/>
              <div>Jln. Poh Gading, No. 03, Dawas, Kuta Utara, Badung, Bali</div>
            </div>            
          </div>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contact;
