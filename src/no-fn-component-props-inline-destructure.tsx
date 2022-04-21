type MyFnComponent1Props = { name: string };
export const MyFnComponent1: React.FC<MyFnComponent1Props> = (props, ctx) => (
  <div />
);

export const MyFnComponent2: React.FC<MyFnComponent1Props> = (
  { children },
  ctx
) => <div />;
