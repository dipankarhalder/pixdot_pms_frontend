import { TrendingUp, TrendingDown } from 'lucide-react';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export const TopCard = () => {
  return (
    <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-3 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-6">
      <Card className="@container/card border-violet-400 bg-violet-100">
        <CardHeader>
          <CardDescription className="font-medium text-black">
            Total Revenue
          </CardDescription>
          <CardTitle className="text-2xl font-bold text-violet-700 tabular-nums @[250px]/card:text-2xl">
            $1,250.00
            <div className="text-xs font-medium text-gray-700">
              Month:{' '}
              <span className="font-bold text-violet-700">
                July 2025
              </span>
            </div>
          </CardTitle>
        </CardHeader>
        <CardFooter className="flex-col items-start text-sm">
          <div className="line-clamp-1 flex gap-2 text-[13px] font-semibold">
            Current month update
            <TrendingUp className="size-4" />
          </div>
        </CardFooter>
      </Card>
      <Card className="@container/card border-orange-700 bg-orange-100">
        <CardHeader>
          <CardDescription className="font-medium text-black">
            Overall Projects
          </CardDescription>
          <CardTitle className="text-2xl font-bold text-orange-700 tabular-nums @[250px]/card:text-2xl">
            1,257
            <div className="text-xs font-medium text-gray-700">
              Active:{' '}
              <span className="font-bold text-orange-700">
                1,154
              </span>
            </div>
          </CardTitle>
        </CardHeader>
        <CardFooter className="flex-col items-start text-sm">
          <div className="line-clamp-1 flex gap-2 text-[13px] font-semibold">
            Current month update
            <TrendingDown className="size-4" />
          </div>
        </CardFooter>
      </Card>
      <Card className="@container/card border-red-600 bg-red-100">
        <CardHeader>
          <CardDescription className="font-medium text-black">
            Total Customers
          </CardDescription>
          <CardTitle className="text-2xl font-bold text-red-700 tabular-nums @[250px]/card:text-2xl">
            1,234
            <div className="text-xs font-medium text-gray-700">
              Active:{' '}
              <span className="font-bold text-red-700">
                1,150
              </span>
            </div>
          </CardTitle>
        </CardHeader>
        <CardFooter className="flex-col items-start text-sm">
          <div className="line-clamp-1 flex gap-2 text-[13px] font-semibold">
            Current month update
            <TrendingDown className="size-4" />
          </div>
        </CardFooter>
      </Card>
      <Card className="@container/card border-sky-600 bg-sky-100">
        <CardHeader>
          <CardDescription className="font-medium text-black">
            All Members
          </CardDescription>
          <CardTitle className="text-2xl font-bold text-sky-600 tabular-nums @[250px]/card:text-2xl">
            4,678
            <div className="text-xs font-medium text-gray-700">
              Active:{' '}
              <span className="mr-3 font-semibold text-sky-600">
                4,118
              </span>
              Intern:{' '}
              <span className="font-semibold text-sky-500">
                560
              </span>
            </div>
          </CardTitle>
        </CardHeader>
        <CardFooter className="flex-col items-start text-sm">
          <div className="line-clamp-1 flex gap-2 text-[13px] font-semibold">
            Current month update
            <TrendingUp className="size-4" />
          </div>
        </CardFooter>
      </Card>
      <Card className="@container/card border-emerald-600 bg-emerald-100">
        <CardHeader>
          <CardDescription className="font-medium text-black">
            Growth Rate
          </CardDescription>
          <CardTitle className="text-2xl font-bold text-emerald-700 tabular-nums @[250px]/card:text-2xl">
            4.5%
            <div className="text-xs font-medium text-gray-700">
              July 2025
            </div>
          </CardTitle>
        </CardHeader>
        <CardFooter className="flex-col items-start text-sm">
          <div className="line-clamp-1 flex gap-2 text-[13px] font-semibold">
            Current month update
            <TrendingUp className="size-4" />
          </div>
        </CardFooter>
      </Card>
      <Card className="@container/card border-blue-600 bg-blue-100">
        <CardHeader>
          <CardDescription className="font-medium text-black">
            Growth Rate
          </CardDescription>
          <CardTitle className="text-2xl font-bold text-blue-700 tabular-nums @[250px]/card:text-2xl">
            4.5%
            <div className="text-xs font-medium text-gray-700">
              July 2025
            </div>
          </CardTitle>
        </CardHeader>
        <CardFooter className="flex-col items-start text-sm">
          <div className="line-clamp-1 flex gap-2 text-[13px] font-semibold">
            Current month update
            <TrendingUp className="size-4" />
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};
