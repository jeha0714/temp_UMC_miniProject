// import React, { useState } from 'react';
import InfoMain from "../components/Info/InfoMain";

const InfoPage: React.FC = () => {
  //   const [activeTab, setActiveTab] = useState('intro');

  return (
    <div className="w-full h-[75vh] flex-grow flex flex-col items-center justify-center">
      <InfoMain />
    </div>
  );
};

export default InfoPage;
