import IntroMain from "../components/Intro/IntroMain";

const IntroPage: React.FC = () => {
  //   const [activeTab, setActiveTab] = useState('intro');

  return (
    <div className="w-full h-[75vh] flex-grow flex flex-col items-center justify-center gap-15">
      <IntroMain />
    </div>
  );
};

export default IntroPage;
