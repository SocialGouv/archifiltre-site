import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import cookie from "js-cookie";
import React, { useCallback, useEffect, useState } from "react";

const CookieConsent = () => {
  const [isCookieConsentHidden, setIsCookieConsentHidden] = useState(false);

  useEffect(() => {
    setIsCookieConsentHidden(cookie.get("cookieConsent"));
  }, [setIsCookieConsentHidden]);
  const onClose = useCallback(() => {
    setIsCookieConsentHidden(true);
    cookie.set("cookieConsent", true, { expires: 365 });
  }, [setIsCookieConsentHidden]);

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
