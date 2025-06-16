type TButton = {
  iconSrc: string;
  label: string;
  iconWidth?: number;
  iconHeight?: number;
  onClick?: () => void;
};

const ButtonBox2 = ({
  iconSrc,
  label,
  iconWidth = 30,
  iconHeight = 30,
  onClick,
}: TButton) => {
  return (
    <button
      className="w-[80px] h-[80px] rounded-2xl bg-[#CFD1CC] flex items-center flex-col gap-2 font-Pretendard hover:border-2 border-[#002F6C] shadow-inner"
      onClick={onClick}
    >
      <img
        src={iconSrc}
        alt={label}
        style={{ width: iconWidth, height: iconHeight }}
        className="mt-3"
      />
      {label}
    </button>
  );
};

export default ButtonBox2;
