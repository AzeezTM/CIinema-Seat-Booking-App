import React from "react";
import Paystackpop from "@paystack/inline-js";
import { useState } from "react";

function Paystack() {
  const [email, setEmail] = useState();
  const [amount, setAmount] = useState();
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();

  const paywithpaystack = (e) => {
    e.preventDefault();
    const paystack = new Paystackpop();
    paystack.newTransaction({
      key: "pk_test_6d158952b7cf3aec91860810293e018fd059514d",
      amount: amount * 100,
      email,
      firstname,
      lastname,
      onSuccess(transaction) {
        let message = `Payment Successful! Reference ${transaction.reference}`;
        alert(message);
        setEmail("");
        setAmount("");
        setFirstname("");
        setLastname("");
      },
      onCancel() {
        alert("Transaction Cancelled");
      },
    });
  };

  return (
    <div className="">
      <div>
        <div>
          <h3 className="text-center bg-info ss">Make Payment</h3>
        </div>
        <div className="me">
          <div className="form-container">
            <form id="paymentForm" className=" bg-light w">
              <div className="form-group">
                <label htmlFor="email" className="text-dark text-center">
                  Email Adress
                </label>
                <br />
                <input
                  type="email"
                  className=" form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="amount" className="text-dark text-center">
                  Amount
                </label>
                <br />
                <input
                  type="tel"
                  className=" form-control"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="first-name" className="text-dark text-center">
                  First Name
                </label>
                <br />
                <input
                  type="text"
                  className=" form-control"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="last-name" className="text-dark text-center ">
                  Last Name
                </label>
                <br />
                <input
                  type="text"
                  className=" form-control"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                />
              </div>
              <br />

              <div className="form-submit d-flex justify-content-center">
                <button
                  type="submit"
                  className="btn btp btn-info"
                  onClick={paywithpaystack}
                >
                  {" "}
                  Pay
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Paystack;
