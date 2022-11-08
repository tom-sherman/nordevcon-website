import AcademicCapIcon from "@heroicons/react/24/outline/AcademicCapIcon";
import BeakerIcon from "@heroicons/react/24/outline/BeakerIcon";
import RocketLaunchIcon from "@heroicons/react/24/outline/RocketLaunchIcon";
import CodeBracketIcon from "@heroicons/react/24/outline/CodeBracketIcon";
import ChatBubbleLeftRightIcon from "@heroicons/react/24/outline/ChatBubbleLeftRightIcon";
import ChartBarSquareIcon from "@heroicons/react/24/outline/ChartBarSquareIcon";
import CircleStackIcon from "@heroicons/react/24/outline/CircleStackIcon";
import CommandLineIcon from "@heroicons/react/24/outline/CommandLineIcon";
import City from "./svg/City";
import Logo from "./svg/Logo";

const Count = 15;
const Icons = [
  AcademicCapIcon,
  BeakerIcon,
  RocketLaunchIcon,
  CodeBracketIcon,
  ChatBubbleLeftRightIcon,
  ChartBarSquareIcon,
  CircleStackIcon,
  CommandLineIcon,
];

function random(max, min = 0) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function Icon() {
  let size = random(5, 2);
  let hue = random(360);
  let time = random(5000, 2000);
  let delay = random(720, 30);

  let start = [random(100), random(60, 40)];
  let end = [
    random(start[0] + 5, start[0] - 5),
    random(start[1] - 40, start[1] - 20),
  ];

  let IconComponent = Icons[random(Icons.length - 1, 0)];

  return (
    <div
      className="rise"
      style={{
        "--size": `${size}vh`,
        "--x-start": `${start[0]}vw`,
        "--y-start": `${start[1]}vh`,
        "--x-end": `${end[0]}vw`,
        "--y-end": `${end[1]}vh`,
        "--time": `${time}ms`,
        "--delay": `-${delay}s`,
        "--color": `hsl(${hue}deg 65% 70% / 70%)`,
        "--shadow": `hsl(${hue}deg 65% 50% / 50%)`,
      }}
    >
      <IconComponent />
    </div>
  );
}

export default function Hero() {
  return (
    <div className="relative flex flex-col justify-between overflow-hidden lg:min-h-screen bg-slate-900 ">
      <div className="absolute inset-0 text-white">
        {Array.from({ length: Count }, (_, i) => (
          <Icon key={`icon_${i}`} />
        ))}
      </div>
      <div className="z-10 flex flex-col gap-8 p-4 py-16 md:p-16 md:pt-32 md:mb-16 ">
        <div className="max-w-sm text-white md:max-w-lg">
          <Logo />
        </div>

        <div>
          <p className="inline text-5xl font-extrabold leading-normal tracking-tight text-transparent bg-gradient-to-r from-wave-purple via-wave-pink to-wave-orange bg-clip-text font-display bg-move">
            East Anglia&apos;s biggest tech conference
          </p>
        </div>

        <div>
          <p className="text-4xl font-extrabold tracking-tight text-white">
            23rd &amp; 24th February 2023
          </p>
        </div>
      </div>
      <div className="z-30 -ml-24 text-white -mr-96 lg:mx-0">
        <City />
      </div>
    </div>
  );
}
