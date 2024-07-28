import React from "react";
import { Laptop  } from "lucide-react";
import {experience} from '../constants'

export default function Experience() {
  return (
    <div className="mt-20">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center tracking-wide">
          My{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            Experience
          </span>
        </h2>
        <div className="flex flex-wrap justify-center mt-10">
            <div className="p-4 w-full lg:w-1/2">
                {experience.map((checklist, index) =>(
                <div key={index}className="ml-20 flex">
                    <div className="mx-6 p-2 justify-center items-center text-green-400">
                        <Laptop/>
                    </div>
                    <div>
                        <h4 className="mt-1 mb-2 text-xl pb-4">{checklist.title}</h4>
                        <div>
                        <h3 className="text-md pb-2 text-neutral-400">{checklist.description}</h3>
                        <div className="text-sm text-neutral-500">{checklist.duration}</div>
                        </div>
                    </div>
                    </div>
                ))}
            </div>
      </div>
    </div>
  );
}
