"use client";

import { useEffect } from "react";
import Clarity from "@microsoft/clarity";

export default function MicrosoftClarity() {
  useEffect(() => {
    Clarity.init("w17vqw398h");
  }, []);

  return null;
}
