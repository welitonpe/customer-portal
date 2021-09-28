import { Button } from "@clayui/core";

const PrimaryButton = ({ onClick, text, disabled = true }) => {
  return (
    <Button
      className="rounded-lg"
      disabled={disabled}
      displayType="primary"
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default PrimaryButton;
