import Image from "next/image";
import { Button } from "@/components/ui/button";
import ProfilePicture from "@/public/eve.jpeg";
import { Instagram, Linkedin } from "lucide-react";

export default function Home() {
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between mb-12">
        <div className="md:w-2/3 mb-8 md:mb-0">
          <h1 className="text-primary hover:text-secondary text-4xl font-bold mb-2">
            {"Hi! I'm Eve 🙋🏻‍♂️"}
          </h1>

          <p className="text-neutral mb-6 max-w-xl">
            As an innovative pharmacist, I bring diverse experience across
            various pharmaceutical fields. My research background includes a
            Co-Authorship on a Master thesis exploring in silico methods. I am
            passionate about digital tools to advance computational
            pharmaceutical research and leveraging digital health solutions.
          </p>
          <p className="text-neutral mb-6 max-w-xl">
            My experience also extends to pharmaceutical innovation and AI
            applications, having participated in numerous congresses related to
            pharmacy education and research across Europe and Latin America.
          </p>
          <p className="text-neutral mb-6 max-w-xl">
            I’m committed to advancing pharmaceutical sciences by embracing
            emerging trends and opportunities.
          </p>
          <Button className="btn btn-primary hover:bg-secondary hover:cursor-pointer">
            <a
              href="https://drive.google.com/file/d/1CcQhcVXGTN0PCFmOTvJhFTBKTg0aanXm/view?usp=drive_link"
              target="_blank"
            >
              See Resume
            </a>
          </Button>
        </div>
        <div className="mb-6 md:w-1/3 flex justify-center">
          <Image
            src={ProfilePicture}
            alt="Ana's profile picture"
            width={300}
            height={300}
            className="rounded-full object-cover"
          />
        </div>
      </div>

      <div className="flex justify-center gap-10 p-8 md:p-12 ">
        <a
          href="https://www.instagram.com/eve_thechief/"
          target="_blank"
          className="text-neutral hover:text-primary"
        >
          <Instagram size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/evelyn-hafele-446406261/"
          target="_blank"
          className="text-neutral hover:text-primary"
        >
          <Linkedin size={24} />
        </a>
      </div>
    </>
  );
}
