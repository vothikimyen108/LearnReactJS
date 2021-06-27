import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";

//dùng Portal cho phép chúng ta render một phần HTML đôc lập với commponent tree
//tách hàm render
const BackDrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm}></div>;
};
const ModelOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </Card>
  );
};
const ErrorModal = (props) => {
  return (
    <div>
      {/* dùng protal để render ra thành phần, để ở thẻ div có id là.. */}
      {ReactDOM.createPortal(
        <BackDrop onConfirm={props.onConfirm}></BackDrop>,
        document.getElementById("backdrop-root"),
      )}
      {ReactDOM.createPortal(
        <ModelOverlay
          onConfirm={props.onConfirm}
          onClick={props.onConfirm}
          title={props.title}
          message={props.message}
        ></ModelOverlay>,
        document.getElementById("overlay-root"),
      )}
    </div>
  );
};

export default ErrorModal;
