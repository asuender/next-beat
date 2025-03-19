import { Session } from 'next-auth';
import Image from 'next/image';
type MainHeaderProps = {
  title: string;
  session: Session;
  className?: string;
};

export default async function MainHeader({
  title,
  session,
  className,
}: MainHeaderProps) {
  return (
    <div
      className={`flex justify-between items-center mt-16 mb-8 ${className}`}
    >
      <h2 className="text-4xl font-bold">{title}</h2>
      <Image
        src={session.user?.image || ''}
        alt="User logo"
        className="w-10 h-10 rounded-full"
        width={40}
        height={40}
      />
    </div>
  );
}
