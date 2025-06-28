

export interface TeamMember {
  id: number;
  name: string;
  position: string;
  image?: string;
  linkedinUrl?: string;
  backgroundColor: string;
  textColor: string;
}

interface TeamCardProps {
  member: TeamMember;
  className?: string;
}



const LinkedInIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

export default function TeamCard({ member, className = '' }: TeamCardProps) {
  // Function to get gradient background based on color theme

  return (
    <div
      className={`
        rounded-3xl h-[320px] w-[240px] sm:h-[300px] sm:w-[220px] lg:h-[280px] lg:w-[200px]
        relative shadow-lg overflow-hidden
        transition-all duration-300 flex-shrink-0
        ${className}
      `}
      style={{
        background: `url(${member.image || '/no_image.png'}) center/cover no-repeat`
      }}
    >
      {/* Dark overlay for text readability when image is background */}
      {member.image && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
      )}

      {/* Avatar when no image - clean professional design */}
      {!member.image && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-24 h-24 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
            <span className="text-3xl font-bold text-white">
              {member.name
                .split(' ')
                .map(word => word.charAt(0))
                .join('')
                .toUpperCase()
                .slice(0, 2)}
            </span>
          </div>
        </div>
      )}

      {/* Member Info and LinkedIn - Bottom layout */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        {/* Light purple gradient background behind text - doesn't overwrite content */}
        <div className="absolute inset-0 bg-gradient-to-t from-purple-700/40 via-purple-600/30 to-transparent rounded-b-3xl"></div>

        <div className="relative flex items-end justify-between">
          {/* Left side - Name and Position */}
          <div className="text-white flex-1 pr-4">
            <h3 className="text-sm mb-1 whitespace-nowrap">{member.name}</h3>
            <p className="text-sm opacity-90 line-clamp-1">{member.position}</p>
          </div>

          {/* Right side - LinkedIn Icon */}
          <div className="flex-shrink-0">
            <a
              href={member.linkedinUrl || '#'}
              target={member.linkedinUrl ? '_blank' : '_self'}
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white transition-all duration-200 hover:scale-105 border border-white/10"
              aria-label={`${member.name}'s LinkedIn profile`}
              onClick={!member.linkedinUrl ? (e) => e.preventDefault() : undefined}
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
