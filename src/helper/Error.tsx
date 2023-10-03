interface ErrorProps {
  error: string | null;
}


const Error = ({ error }: ErrorProps) => {
  if (!error) return null;
  return <p style={{ color: "#F31", margin: "1rem 0" }}>{error}</p>;
};

export default Error;
