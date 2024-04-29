interface SuccessProps {
  success: string | null;
}

const Success = ({ success }: SuccessProps) => {
  if (!success) return null;
  return <p style={{ color: "#0a0", margin: "1rem 0" }}>{success}</p>;
};

export default Success;
