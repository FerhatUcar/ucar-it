import { MotionWrapper } from "@/components/motion-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import HeaderTitle from "@/components/custom/header";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const ProjectsPage = () => (
  <MotionWrapper>
    <HeaderTitle text="Projects" bottomSpace />
    <Card className="bg-stone-950/50 w-full">
      <CardHeader className="pb-2">
        <CardTitle className="flex flex-col justify-start md:flex-row md:items-center gap-4 text-white">
          <Image
            src="/kusadasi.png"
            alt="snack-kusadasi"
            width="130"
            height="100"
          />
          <span>Snack Kusadasi Lede</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="progress text-gray-400">
        <div className="mb-6 space-y-4">
          <div>
            As a developer for Snack Kusadasi, I worked on creating a webshop
            tailored for fast food delivery in Lede, Belgium. The project, named
            Snack Kusadasi, was designed to offer a convenient solution for
            locals seeking quick and tasty bites from the comfort of their
            homes. Utilizing a tech stack comprising Next.js, React, and
            Node.js, I focused on building and integrating various features,
            including menu browsing, order placement, and user account
            management.
          </div>
          <div>
            I also worked on optimizing the performance of the webshop and
            maintaining high standards of security to safeguard user data.
            Drawing inspiration from the vibrant snack bar culture, the project
            aimed to provide a diverse range of options for customers, catering
            to different tastes and preferences.
          </div>
          <div>
            By leveraging the latest web technologies and adhering to best
            practices in software development, we aimed to deliver a polished
            and reliable platform that met the needs and expectations of Snack
            Kusadasi&apos;s clientele.
          </div>
        </div>
        <div>
          <Link
            href="https://www.snack-kusadasi.com"
            className="pb-1 last:pb-0"
            target="_blank"
          >
            <Button className="w-full md:w-[200px] flex flex-row gap-2 items-center bg-rose-600 hover:bg-rose-800 text-white">
              <span>Visit website</span>
              <ArrowUpRight size={18} />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  </MotionWrapper>
);

export default ProjectsPage;
