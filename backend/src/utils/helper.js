module.exports.responseBodyFormater = ({ status, data, message }) => {
  return {
    status,
    [status === "success" ? "data" : "message"]: data || message,
  };
};
