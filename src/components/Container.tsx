import '../styles/Container.scss';

export const Container = ({ children, className, id = "" }: any) => {
  return (
    <div className={`container ${className}`} id={id}>
      {children}
    </div>
  );
};
