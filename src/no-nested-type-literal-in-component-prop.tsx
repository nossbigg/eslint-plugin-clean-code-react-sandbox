type MyComponentProps = {
  name: string;
  onFocus: () => void;
};

type MyComponentProps = {
  user: { firstName: string; lastName: string };
};
type MyComponentProps = {
  user: {
    country: { name: "Singapore"; code: "SGP" };
  };
};

type MyComponentProps = {
  onClick: (args: { name: string }) => void;
};
type MyComponentProps = {
  onClick(args: { name: string }): void;
};

type SomeOtherType = {
  user: { firstName: string; lastName: string };
};
