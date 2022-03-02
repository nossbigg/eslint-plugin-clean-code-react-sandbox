const MyComponent = () => {
  const otherModifiers = {};

  return (
    <div>
      <AnotherComponent
        firstName={firstName}
        lastName={lastName}
        user={user}
        isAdmin
        isShowOnly
        isDynamic
      >
        Text
      </AnotherComponent>
    </div>
  );
};

const AnotherComponent: React.FC<any> = () => null;
