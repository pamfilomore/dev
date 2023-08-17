"use client";
import React from "react";
import { FacebookProvider, CustomChat } from "react-facebook";

const FacebookMsg = () => {
  return (
    <FacebookProvider appId="309366638275390" chatSupport>
      <CustomChat pageId="101544438331939" minimized={true} />
    </FacebookProvider>
  );
};

export default FacebookMsg;
