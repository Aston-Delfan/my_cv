import { GanttChartSquare, Blocks, Gem } from "lucide-react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

import {Html5Plain, Css3Plain,JavascriptPlain, PhpPlain, JavaPlain, TailwindcssOriginal, MysqlPlainWordmark, BootstrapOriginal}  from 'devicons-react';

const serviceData = [
    {
        icon: <Html5Plain size={72} strokeWidth={0.8} />,
        title: "HTML",
        description: "Advance",
    },
    {
        icon: <Css3Plain size={72} strokeWidth={0.8} />,
        title: "CSS",
        description: "",
    },
    {
        icon: <JavascriptPlain size={72} strokeWidth={0.8} />,
        title: "Java Script",
        description: "",
    },
    {
        icon: <PhpPlain size={72} strokeWidth={0.8} />,
        title: "PHP",
        description: "",
    },
    {
        icon: <JavaPlain size={72} strokeWidth={0.8} />,
        title: "Java",
        description: "",
    },
    {
        icon: <TailwindcssOriginal size={72} strokeWidth={0.8} />,
        title: "Tailwind CSS",
        description: "",
    },
    {
        icon: <BootstrapOriginal size={72} strokeWidth={0.8} />,
        title: "Bootstrap",
        description: "",
    },
    {
        icon: <MysqlPlainWordmark size={72} strokeWidth={0.8} />,
        title: "MySQL",
        description: "",
    },
];

const Service = () => {
  return (
    <div className="container mx-auto mb-20">
        <h2 className="section-title mb-20 xl:mb-24 text-center mx-auto">
            My Skills
        </h2>
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 xl:ml-16 justify-center gap-y-12 xl:gap-y-24">
            {serviceData.map(({ icon, title, description }, index) => (
                <Card key={index} className="w-full max-w-[240px] h-[180px] flex flex-col pt-16 pb-10 justify-center items-center relative">
                    <CardHeader className="text-primary absolute -top-[60px]">
                        <div className="w-[140px] h-[80px] rounded-full bg-white dark:bg-background flex items-center justify-center">
                            {icon}
                        </div>
                    </CardHeader>
                    <CardContent className="p-6 flex flex-col justify-center items-center">
                        <CardTitle className="h3 font-bold">{title}</CardTitle>
                        <CardDescription className="hidden hover:flex mt-4 text-sm">{description}</CardDescription>
                    </CardContent>
                </Card>
            ))}
        </div>
    </div>
  );
}

export default Service;
