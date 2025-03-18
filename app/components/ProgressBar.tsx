import prettyMilliseconds from 'pretty-ms';

type ProgressBarProps = {
  duration_ms: number;
  resume_position_ms?: number;
  className?: string;
  fully_played?: boolean;
};

export default function ProgressBar({
  duration_ms,
  resume_position_ms,
  fully_played = false,
  className,
}: ProgressBarProps) {
  const timeFormatOptions = {
    colonNotation: true,
    secondsDecimalDigits: 0,
  };

  const resumePositionPercentage = resume_position_ms
    ? Math.floor((resume_position_ms / duration_ms) * 100)
    : 40;

  return (
    <div className={`w-full flex items-center gap-2 ${className}`}>
      <span className="text-gray-400 text-sm">
        {prettyMilliseconds(
          resume_position_ms ? resume_position_ms : 0.4 * duration_ms,
          timeFormatOptions
        )}
      </span>
      <div className="bg-neutral-700 flex-grow rounded-3xl">
        <div
          className={`h-[8px] ${fully_played ? 'bg-green-600' : 'bg-neutral-500'} rounded-l-3xl rounded-r-3xl`}
          style={{ width: `${resumePositionPercentage}%` }}
        ></div>
      </div>
      <span className="text-gray-400 text-sm">
        {prettyMilliseconds(duration_ms, timeFormatOptions)}
      </span>
    </div>
  );
}
