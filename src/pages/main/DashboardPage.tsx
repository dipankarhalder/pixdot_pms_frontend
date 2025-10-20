import { Header } from '@/shared/header';
import { TopCard } from '@/components/dashboard/top-card';

export const DashboardPage = () => {
  const formatDate = (date: Date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(
      2,
      '0'
    );
    const year = date.getFullYear();
    const time = date.toLocaleTimeString([], {
      hour: 'numeric',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    });

    return `${day}-${month}-${year}, ${time}`;
  };

  return (
    <>
      <Header
        pageName={`Last Login: ${formatDate(new Date())} `}
      />
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
