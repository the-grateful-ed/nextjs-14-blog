export default function MainContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-3xl font-rubik'>{children}</div>
    </div>
  );
}
