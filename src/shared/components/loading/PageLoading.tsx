import { LogoFull } from '~/assets';

const PageLoading: React.FC = () => {
  return (
    <div className="w-[100vw] h-[100dvh] flex items-center justify-center dark:bg-zinc-800 bg-white">
      <img
        className="w-3/5 sm:w-1/2 md:w-2/5 lg:w-1/3 animate-c-pulse"
        src={LogoFull}
        alt="Logo website"
        draggable={false}
      />
    </div>
  );
};

export default PageLoading;
