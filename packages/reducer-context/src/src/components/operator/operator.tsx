interface Props {
  operator: Operator;
  size?: "sm" | "xl";
}

export const Operator: React.FC<Props> = ({ operator, size = "sm" }) => (
  <div>
    <img
      src={operator.logo_url}
      height={size === "xl" ? 120 : 20}
      alt={operator.display_name}
    />
  </div>
);
