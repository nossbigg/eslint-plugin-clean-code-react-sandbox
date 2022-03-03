/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {
  Component,
  PureComponent,
  FunctionComponent,
  FC,
  StatelessComponent,
  SFC,
  VoidFunctionComponent,
  VFC,
  useEffect,
  useState,
} from "react";

// inspired by: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md

const classComponents = () => {
  // class: React.Component
  class MyReactComponent extends React.Component {
    render() {
      return <div />;
    }
  }

  class MyComponent extends Component {
    render() {
      return <div />;
    }
  }

  // class: React.PureComponent
  class MyReactPureComponent extends React.PureComponent {
    render() {
      return <div />;
    }
  }

  class MyPureComponent extends PureComponent {
    render() {
      return <div />;
    }
  }
};

const arrowFunctionComponent = () => {
  // arrow function: React.FunctionComponent
  const MyReactFunctionComponent: React.FunctionComponent = () => {
    return <div />;
  };

  const MyFunctionComponent: FunctionComponent = () => {
    useState();
    return <div />;
  };

  const MyReactFC: React.FC = () => {
    return <div />;
  };

  const MyFC: FC = () => {
    return <div />;
  };

  // arrow function: React.StatelessComponent
  const MyReactStatelessComponent: React.StatelessComponent = () => {
    return <div />;
  };

  const MyStatelessComponent: StatelessComponent = () => {
    return <div />;
  };

  // arrow function: React.SFC
  const MyReactSFC: React.SFC = () => {
    return <div />;
  };

  const MySFC: SFC = () => {
    return <div />;
  };

  // arrow function: React.VoidFunctionComponent
  const MyReactVoidFunctionComponent: React.VoidFunctionComponent = () => {
    return <div />;
  };

  const MyVoidFunctionComponent: VoidFunctionComponent = () => {
    return <div />;
  };

  const MyReactVFC: React.VFC = () => {
    return <div />;
  };

  const MyVFC: VFC = () => {
    return <div />;
  };
};

const othersFunctionComponent = () => {
  // let / var
  // eslint-disable-next-line no-var
  var VarReactFC: React.FC = () => {
    return <div />;
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // eslint-disable-next-line prefer-const
  let LetReactFC: React.FC = () => {
    return <div />;
  };

  // normal function: unnamed
  // eslint-disable-next-line prefer-const
  let UnnamedFnComponent: React.FC = function () {
    return <div />;
  };

  // normal function: named
  // eslint-disable-next-line prefer-const
  let NamedFnComponent: React.FC = function SomeName() {
    return <div />;
  };
};
