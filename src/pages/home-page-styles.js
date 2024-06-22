import { css } from "lit-element";

export default css`
  :host {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #f8f9fa;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
  }

  .modal {
      display: none;
      position: fixed;
      z-index: 1;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      overflow: auto;
      background-color: rgba(0, 0, 0, 0.4);
    }

    .modal-content {
      background-color: #fefefe;
      margin: 15% auto;
      padding: 20px;
      border: 1px solid #888;
      width: 80%;
      max-width: 500px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    }
    .close {
      color: #aaa;
      float: right;
      font-size: 28px;
      font-weight: bold;
    }
    .close:hover,
    .close:focus {
      color: black;
      text-decoration: none;
      cursor: pointer;
    }
    .modal[open] {
      display: block;
    }

  .header {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }

  .card-container {
    display: flex;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    gap: 20px; /* Espacio entre cards */
    padding: 20px;
  }

`