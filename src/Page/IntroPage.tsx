import IntroMain from "../components/Intro/IntroMain";

const IntroPage: React.FC = () => {
  //   const [activeTab, setActiveTab] = useState('intro');

  return (
    <div className="w-full h-[75vh] flex flex-col items-center justify-start gap-15">
      <IntroMain />
    </div>
  );
};

export default IntroPage;
