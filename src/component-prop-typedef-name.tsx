import React from "react";

type MyFnComponent1Prop = { name: string };
export const MyFnComponent1: React.FC<MyFnComponent1Prop> = () => <div></div>;

type MyFnComponent2Props = { name: string };
export const MyFnComponent2: React.FC<MyFnComponent2Props> = () => <div></div>;

type MyClassComponent1Prop = { name: string };
export class MyClassComponent1 extends React.Component<MyClassComponent1Prop> {}

type MyClassComponent2Props = { name: string };
export class MyClassComponent2 extends React.Component<MyClassComponent2Props> {}
