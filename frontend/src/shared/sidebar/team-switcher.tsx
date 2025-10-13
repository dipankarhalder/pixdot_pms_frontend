export const TeamSwitcher = ({
  teams,
}: {
  teams: {
    name: string;
    logo: React.ElementType;
    plan: string;
  }[];
}) => {
  console.log(teams);
  return <div>team-switcher</div>;
};
