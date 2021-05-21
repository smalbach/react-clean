import React, { useReducer } from "react";
import alertReducer from "./alertReducer";
import alertContext from "./alertContext";

import { ALERT_SHOW, ALERT_HIDE } from "../types";

const Alertstate = (props) => {
  const initialState = {
    alert: false,
  };

  const [state, dispatch] = useReducer(alertReducer, initialState);

  // Funciones
  const showAlert = (message, category) => {
    dispatch({
      type: ALERT_SHOW,
      payload: { message, category },
    });

    // Después de 5 segundos limpiar la alert
    setTimeout(() => {
      dispatch({
        type: ALERT_HIDE,
      });
    }, 3000);
  };

  return (
    <alertContext.Provider
      value={{
        alert: state.alert,
        showAlert,
      }}
    >
      {props.children}
    </alertContext.Provider>
  );
};

export default Alertstate;
