import { Header } from '@/shared/header';
import { TopCard } from '@/components/dashboard/top-card';
import { Revenue } from '@/components/dashboard/revenue';
import { Earning } from '@/components/dashboard/earning';

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
            <div className="mb-3 w-full px-4 lg:px-6">
              <h1 className="text-[20px] font-semibold text-gray-600">
                Welcome back,{' '}
                <span className="font-bold text-blue-800">
                  Himadri Chakraborty
                </span>
              </h1>
              <p className="text-[15px] font-medium text-gray-500">
                We hope you're having a great day.
              </p>
            </div>
            <TopCard />
            <div className="flex flex-row gap-3 px-4 lg:px-6">
              <div className="flex-1">
                <Revenue />
              </div>
              <div className="flex-1">
                <Earning />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
