import '../styles/Container.scss';

export const Container = ({ children, className = "" }: any) => {
  return (
    <div className={`container ${className}`}>
      {children}
    </div>
  );
};
