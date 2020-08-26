import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import cookie from "js-cookie";
import React, { useCallback, useEffect, useState } from "react";

const CookieConsent = () => {
  const [isCookieConsentHidden, setCookieConsentHidden] = useState(false);
  useEffect(() => {
    setCookieConsentHidden(cookie.get("cookieConsent"));
  }, []);
  const onClose = useCallback(() => {
    setCookieConsentHidden(true);
    cookie.set("cookieConsent", true, { expires: 365 });
  }, []);

  return (
    <Snackbar open={!isCookieConsentHidden}>
      <Alert onClose={onClose} severity="info">
        Nous utilisons des cookies pour établir des mesures anonymisées de
        fréquentation et d’utilisation du site.
      </Alert>
    </Snackbar>
  );
};

export default CookieConsent;
