import React, { useEffect } from "react";
import ThankYouMessage from "../components/ThankYouMessage";
import { Helmet } from "react-helmet-async";
import { useLocation, useNavigate } from "react-router-dom";

export default function ThankYou() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const isDirectAccess = !location.state?.fromFormSubmission;

    if (isDirectAccess) {
      navigate("/");
    }
  }, [navigate, location.state]);

  return (
    <div>
      <Helmet>
        <title>Thank You Page - InvHub</title>
        <meta
          name="description"
          content="Thank you for getting in touch with InvHub. We appreciate your message and will respond shortly."
        />
      </Helmet>
      <ThankYouMessage />
    </div>
  );
}
