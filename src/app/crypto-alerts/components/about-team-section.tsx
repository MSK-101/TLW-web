"use client";

import Markdown from "@/components/ui/markdown";
import Image from "next/image";

export default function AboutTeamSection({
  aboutTeamSectionData,
}: {
  aboutTeamSectionData: any;
}) {
  const { team_members } = aboutTeamSectionData;

  if (!aboutTeamSectionData) {
    return null;
  }

  return (
    <div>
      {team_members.map((member: any, index: number) => (
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 my-8 lg:my-12"
          key={member.id}
        >
          <div
            className="rounded-2xl overflow-hidden max-h-[500px]"
            style={{
              order: index % 2 === 0 ? 1 : 2,
            }}
          >
            <Image
              src={member.member_image.url}
              width={400}
              height={500}
              alt="Tineke Zwart"
              className="w-full h-full object-cover object-top"
              style={{
                objectPosition: `0% ${member.vertical_offset}%`,
              }}
            />
          </div>
          <div
            className="flex flex-col justify-center"
            style={{
              order: index % 2 === 0 ? 2 : 1,
            }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-[#282828] mb-6">
              {member.heading}
            </h2>
            <div className="space-y-4 text-[#282828] leading-relaxed">
              <Markdown>{member.description}</Markdown>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
