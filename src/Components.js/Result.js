import React from "react";
//https://codesandbox.io/s/spinning-prize-wheel-react-fyu57?file=/src/index.js:2367-2381
function Result() {
  function copyHandler(e) {
    e.preventDefault();
    let copiedText = document.getElementById("code");
    copiedText.select();
    copiedText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copiedText.value);
    alert("Copied the text: " + copiedText.value);
  }
  return (
    <div
      className="d-flex flex-column m-2 p-2 container"
      style={{ maxWidth: "300px" }}
    >
      <div className="row">
        <h5>Congrats! You Won:</h5>
        <h3>20% off coupon on Best Sellers</h3>
      </div>
      <div className="row">
        <form>
          <div className="mb-3">
            <input
              type="text"
              value="XAXPDF20"
              id="code"
              className="form-control"
            />
            <button onClick={copyHandler} className="btn btn-primary mt-2">
              Close Panel & Copy
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Result;
