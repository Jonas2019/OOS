import React from "react";

// Define an interface for the component props
interface InfoCardProps {
  title: string;
  content: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, content }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden hover:shadow-lg shadow-lg transition-shadow duration-300 bg-gradient-to-r from-teal-400 to-emerald-600 p-4">
      <div className="font-bold text-xl mb-2 text-gray-700">{title}</div>
      <p className="text-gray-200 text-base">{content}</p>
    </div>
  );
};

export default InfoCard;
