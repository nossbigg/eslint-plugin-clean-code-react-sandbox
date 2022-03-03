import React from "react";

type SomeProps = { name: string };
type SomeProps2<T> = { name: T };

export const MyFnComponent1: React.FC<SomeProps> = () => <div></div>;
export const MyFnComponent2: React.FC<{}> = () => <div></div>;

export class MyClassComponent1 extends React.Component<SomeProps> {}
export class MyClassComponent2 extends React.Component<{}> {}

export class MyClassPureComponent1 extends React.PureComponent<SomeProps> {}
export class MyClassPureComponent2 extends React.PureComponent<{}> {}

export class MyClassPureComponent3 extends React.PureComponent<
  SomeProps2<{ firstname: string }>
> {}
