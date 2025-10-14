import { Header } from '@/shared/header';
import { TopCard } from '@/components/dashboard/top-card';

export const DashboardPage = () => {
  return (
    <>
      <Header pageName="Dashboard" />
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 md:gap-6 md:py-6">
            <TopCard />
          </div>
        </div>
      </div>
    </>
  );
};
