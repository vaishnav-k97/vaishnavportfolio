import React from "react";
import { Computer  } from "lucide-react";
import project1 from "../assets/project1.jpg";
import {projects, projects2} from '../constants'

export default function Workflow() {
  return (
    <div className="mt-20">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center tracking-wide">
          Projects{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            I have done
          </span>
        </h2>
        <div className="flex flex-wrap justify-center mt-10">
            <div className="p-4 w-full lg:w-1/2">
                <img src={project1} alt="img"></img>
            </div>
            <div className="p-4 w-full lg:w-1/2">
                {projects.map((checklist, index) =>(
                <div key={index}className="mb-12 flex">
                    <div className="mx-6 p-2 justify-center items-center text-green-400">
                        <Computer />
                    </div>
                    <div>
                        <h4 className="mt-1 mb-2 text-xl">{checklist.title}</h4>
                        <h3 className="text-md text-neutral-400">{checklist.description}</h3>
                    </div>
                    </div>
                ))}
            </div>
      </div>
      <div className="flex flex-wrap justify-center mt-10">
            <div className="p-4 w-full lg:w-1/2">
                {projects2.map((checklist, index) =>(
                <div key={index}className="ml-12 flex pb-10">
                    <div className="mx-6 p-2 justify-center items-center text-green-400">
                        <Computer/>
                    </div>
                    <div>
                        <h4 className="text-xl pb-2 ">{checklist.title}</h4>
                        <div>
                        <h3 className="mt-1 mb-2 text-md text-neutral-400 ">{checklist.description}</h3>
                        </div>
                    </div>
                    </div>
                ))}
            </div>
      </div>
    </div>
  );
}
