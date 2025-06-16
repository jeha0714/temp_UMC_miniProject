// import React, { useState } from 'react';
import InfoMain from "../components/Info/InfoMain";

const InfoPage: React.FC = () => {
  //   const [activeTab, setActiveTab] = useState('intro');

  return (
    <div className="w-full h-[75vh] flex flex-col items-center justify-start">
      <InfoMain />
    </div>
  );
};

export default InfoPage;
