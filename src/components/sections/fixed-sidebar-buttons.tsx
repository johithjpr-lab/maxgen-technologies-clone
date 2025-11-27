import { FileText, Briefcase } from 'lucide-react';

const FixedSidebarButtons = () => {
  return (
    <>
      {/* Get Quote Now Button - positioned lower, higher z-index */}
      <div className="fixed right-[-67px] top-[72%] -rotate-90 z-[39] md:right-[-75px] md:top-[68%] bg-secondary text-secondary-foreground px-4 py-2 rounded-lg shadow-lg font-sans">
        <a href="/quote" className="flex items-center space-x-2 whitespace-nowrap">
          <FileText className="h-4 w-4" />
          <span>Get Quote Now</span>
        </a>
      </div>

      {/* Looking for Internship Button - positioned higher, lower z-index */}
      <div className="fixed right-[-105px] top-[42%] -rotate-90 z-[38] md:right-[-115px] md:top-[40%] bg-primary text-primary-foreground px-4 py-2 rounded-lg shadow-lg font-sans">
        <a href="/internship" className="flex items-center space-x-2 whitespace-nowrap">
          <Briefcase className="h-4 w-4" />
          <span>Looking for Internship ?</span>
        </a>
      </div>
    </>
  );
};

export default FixedSidebarButtons;