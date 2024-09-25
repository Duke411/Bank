import { useState, useContext, useEffect } from "react";
import AuthCxt from "../../store/auth-context";
import { Link } from "react-router-dom";

const MoneyTransfer = () => {
  const { user } = useContext(AuthCxt); // Get user from context

  // Initialize balance from user context or set default as null
  const [accountBalance, setAccountBalance] = useState(null);

  useEffect(() => {
    // console.log("User from context:", user.accountbalance); // Add this to debug
    if (user && user.accountbalance !== undefined) {
      setAccountBalance(user.accountbalance);
    }
  }, [user]);

  //   useEffect(() => {
  //     if (user && user.accountBalance !== undefined) {
  //       // Ensure balance is set only when user data is available
  //       setAccountBalance(user.accountBalance);
  //     }
  //   }, [user]);

  // Form data state
  const [formData, setFormData] = useState({
    accountName: "",
    accountNumber: "",
    bankName: "",
    amount: "",
  });

  // State to manage the current step
  const [step, setStep] = useState(1);

  // State for progress bar percentage
  const [progress, setProgress] = useState(0);

  // State for input PIN
  const [pinInput, setPinInput] = useState("");

  // Handler for initial form input changes
  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handler for initial form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setStep(2);
    setProgress(25);
  };

  // Handler for PIN input changes
  const handlePinChange = (e) => {
    setPinInput(e.target.value);
  };

  // Handler for PIN submissions
  const handlePinSubmit = (e) => {
    e.preventDefault();
    if (step === 2 && pinInput === "6459") {
      setStep(3);
      setProgress(50);
      setPinInput("");
    } else if (step === 3 && pinInput === "3475") {
      setStep(4);
      setProgress(75);
      setPinInput("");
    } else if (step === 4 && pinInput === "9756") {
      setProgress(100);
      // Deduct the amount from account balance
      setAccountBalance(
        (prevBalance) => prevBalance - parseFloat(formData.amount)
      );
      setStep(5);
    } else {
      alert("Incorrect PIN. Please try again.");
      setPinInput("");
    }
  };

  return (
    <section className="bg-gray-500 h-screen w-screen p-10 fixed top-0 left-0">
      <div className="max-w-md mx-auto mt-10 p-4 border rounded shadow bg-white">
        <h1 className="text-2xl font-bold mb-4">Transfer Money</h1>
        <p>
          Account Balance: $
          {accountBalance !== null ? accountBalance.toFixed(2) : "Loading..."}
        </p>
        <div className="w-full bg-gray-200 h-4 my-4">
          <div
            className="bg-yellow-500 h-4"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        {step === 1 && (
          <form onSubmit={handleFormSubmit}>
            <div className="mb-2">
              <label className="block font-medium">Account Name</label>
              <input
                type="text"
                name="accountName"
                value={formData.accountName}
                onChange={handleFormChange}
                required
                className="w-full border p-2 rounded"
              />
            </div>
            <div className="mb-2">
              <label className="block font-medium">Account Number</label>
              <input
                type="text"
                name="accountNumber"
                value={formData.accountNumber}
                onChange={handleFormChange}
                required
                className="w-full border p-2 rounded"
              />
            </div>
            <div className="mb-2">
              <label className="block font-medium">Bank Name</label>
              <input
                type="text"
                name="bankName"
                value={formData.bankName}
                onChange={handleFormChange}
                required
                className="w-full border p-2 rounded"
              />
            </div>
            <div className="mb-2">
              <label className="block font-medium">Amount</label>
              <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleFormChange}
                required
                className="w-full border p-2 rounded"
                min="0.01"
                step="0.01"
              />
            </div>
            <button
              type="submit"
              className="bg-yellow-500 text-white px-4 py-2 rounded mt-2"
            >
              Submit
            </button>
          </form>
        )}
        {step >= 2 && step <= 4 && (
          <form onSubmit={handlePinSubmit}>
            <div className="mb-2">
              <label className="block font-medium">
                {step === 2 && "Enter Transfer PIN"}
                {step === 3 && "Enter World Bank PIN"}
                {step === 4 && "Enter IMF PIN"}
              </label>
              <input
                type="password"
                value={pinInput}
                onChange={handlePinChange}
                required
                className="w-full border p-2 rounded"
              />
            </div>
            <button
              type="submit"
              className="bg-yellow-500 text-white px-4 py-2 rounded mt-2"
            >
              Submit
            </button>
          </form>
        )}
        {step === 5 && (
          <div className="text-center">
            <h2 className="text-xl font-bold text-yellow-600 mt-4">
              Transfer Complete!
            </h2>
            <p>Your new account balance is: ${accountBalance.toFixed(2)}</p>
          </div>
        )}
        <div className="mt-20">
          <Link to="/bankdashboard">
            <button className="bg-yellow-500 text-white px-4 py-2 rounded mt-2">
              Back to Dashboard
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MoneyTransfer;
