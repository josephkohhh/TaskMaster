export const Footer = ({ totalTask, completedTask }) => {
  return (
    <div>
      <h3>Total Task: {totalTask}</h3>
      <h3>Completed Task: {completedTask}</h3>
    </div>
  );
};
