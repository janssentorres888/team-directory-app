function ErrorMessage({ message }) {
  return (
    <p className="text-center text-red-500 font-semibold py-6">
      {message}
    </p>
  );
}

export default ErrorMessage;
