import { Button } from "@clayui/core";

const PrimaryButton = ({ children, onClick, disabled }) => {
  return (
    <Button
      className="rounded-lg"
      disabled={disabled}
      displayType="primary"
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;